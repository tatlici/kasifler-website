@echo off
REM Kaşifler Diyarı Website - Quick Launch Script
REM Simply double-click this file to start development server

echo.
echo ======================================
echo Kaşifler Diyarı Website - Quick Start
echo ======================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

echo ✓ Node.js found
echo.
echo Installing dependencies (first time only)...
call npm install

if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ✓ Dependencies installed
echo.
echo Starting development server...
echo.
echo Open your browser and go to:
echo   → http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
