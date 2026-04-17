#!/bin/bash
# Deployment script for Kasifler Diyari (Next.js + PM2)
# Update PROJECT_DIR and APP_NAME before first use.

set -euo pipefail

PROJECT_DIR="/www/wwwroot/kasiflerdiyari.com"
APP_NAME="kasifler-website"
BRANCH="main"
UPLOAD_DIR="public/images"
BACKUP_DIR="/tmp/${APP_NAME}_image_backup"

log() {
  echo "[deploy] $1"
}

fail() {
  echo "[deploy][error] $1"
  exit 1
}

log "Deploy started"

log "Step 1: Go to project directory"
cd "$PROJECT_DIR" || fail "Cannot cd to $PROJECT_DIR"

log "Step 2: Backup uploaded images if present"
rm -rf "$BACKUP_DIR"
mkdir -p "$BACKUP_DIR"
if [ -d "$UPLOAD_DIR" ] && [ "$(ls -A "$UPLOAD_DIR" 2>/dev/null)" ]; then
  cp -r "$UPLOAD_DIR"/* "$BACKUP_DIR"/
  log "Image backup complete"
else
  log "No uploaded images found, continuing"
fi

log "Step 3: Pull latest code"
if ! git pull origin "$BRANCH"; then
  fail "git pull failed. Resolve conflicts or local changes, then retry."
fi

log "Step 3.1: Pull Git LFS assets (if configured)"
if git lfs version > /dev/null 2>&1; then
  git lfs pull
  log "Git LFS assets pulled"
else
  log "git-lfs not installed; skipping LFS pull"
fi

log "Step 4: Install dependencies"
rm -rf .next
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

log "Step 5: Build application"
npm run build

if [ -d "public/assets/gallery" ]; then
  GALLERY_COUNT=$(find public/assets/gallery -maxdepth 1 -type f | wc -l | tr -d ' ')
  log "Gallery file count: $GALLERY_COUNT"
fi

log "Step 6: Restore uploaded images"
mkdir -p "$UPLOAD_DIR"
if [ -d "$BACKUP_DIR" ] && [ "$(ls -A "$BACKUP_DIR" 2>/dev/null)" ]; then
  cp -r "$BACKUP_DIR"/* "$UPLOAD_DIR"/
  log "Images restored"
else
  log "No images to restore"
fi
rm -rf "$BACKUP_DIR"

log "Step 7: Start or restart PM2"
PM2_PATH="$(command -v pm2 || true)"
if [ -z "$PM2_PATH" ]; then
  fail "pm2 not found in PATH"
fi

if "$PM2_PATH" describe "$APP_NAME" > /dev/null 2>&1; then
  "$PM2_PATH" restart "$APP_NAME" --update-env
  log "PM2 app restarted: $APP_NAME"
else
  "$PM2_PATH" start npm --name "$APP_NAME" -- start
  log "PM2 app started: $APP_NAME"
fi

log "Step 8: Save PM2 process list"
"$PM2_PATH" save

log "Deployment complete"
