# Deployment Guide for Kaşifler Diyarı

## Pre-Deployment Checklist

- [ ] All dependencies installed: `npm install`
- [ ] Development build tested: `npm run dev` ✓ Works locally
- [ ] Production build succeeds: `npm run build`
- [ ] Contact form tested locally with Netlify CLI
- [ ] All images load correctly in gallery
- [ ] Video plays in hero section
- [ ] Language toggle (TR/EN) works
- [ ] Mobile responsiveness tested (375px, 768px, 1920px viewports)
- [ ] Accessibility tested (keyboard navigation, screen readers)
- [ ] SEO meta tags verified in page source
- [ ] Privacy and Terms pages display correctly

## Netlify Deployment Steps

### Step 1: Prepare Repository
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Kaşifler Diyarı website"

# Push to GitHub (or your Git provider)
git remote add origin https://github.com/YOUR_USERNAME/kaşifler-website.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify
1. Visit https://netlify.com
2. Click "Add new site" > "Import an existing project"
3. Connect GitHub account
4. Select your repository
5. Build settings should auto-detect Next.js
   - Build command: `npm run build`
   - Publish directory: `.next` (or use Netlify plugin)
6. Click "Deploy site"

### Step 3: Configure Forms
1. Go to Netlify dashboard > Site settings > Forms
2. Verify contact form is detected (name="contact")
3. Set notifications to email: info@kasiflerdiyari.com
4. Enable spam filtering if desired

### Step 4: Setup Custom Domain
1. Netlify dashboard > Domain settings
2. Add custom domain: kasiflerdiyari.com
3. Follow DNS setup instructions
4. Enable HTTPS (automatic with Netlify)

### Step 5: Environment Variables
1. Site settings > Build & deploy > Environment
2. Add any needed environment variables (copy from .env.example)

### Step 6: Configure Redirects
Netlify automatically handles Next.js redirects via netlify.toml

## Testing After Deployment

### Critical Tests
✅ Homepage loads without errors
✅ Video plays in hero section
✅ Gallery images display
✅ Contact form submits successfully
✅ Form email received at info@kasiflerdiyari.com
✅ Language toggle works (TR/EN)
✅ Mobile responsive on multiple devices
✅ No 404 errors in console
✅ Lighthouse score >90 in all categories

### Performance Metrics
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.8s

### Browser/Device Testing
- Chrome (desktop & mobile)
- Firefox (desktop & mobile)
- Safari (desktop & iOS)
- Edge (desktop)
- iPhone 12/13 (iOS)
- Android devices (Samsung, etc.)
- Tablet (iPad)

## Post-Deployment Tasks

### Optional: Add Google Analytics
1. Create GA4 account at https://analytics.google.com
2. Get Measurement ID
3. Add to .env.local: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
4. Update app/layout.tsx to include GA script

### Optional: Add reCAPTCHA v3
1. Setup reCAPTCHA at https://www.google.com/recaptcha/admin
2. Add keys to .env.local
3. Update components/ContactForm.tsx to verify token

### Optional: Setup Form Notifications
1. Netlify dashboard > Forms > Kaşifler Diyarı
2. Add notification webhook (Slack, email, etc.)

### Optional: Enable CDN Caching
1. Site settings > Build & deploy > Cache settings
2. Adjust cache TTL for different assets:
   - HTML: 1 hour (no-cache + ETag)
   - CSS/JS: 1 month
   - Images: 1 year

## Monitoring

### Ongoing Maintenance
- Check contact form submissions weekly
- Monitor Netlify Analytics for traffic
- Test form functionality monthly
- Verify backup emails received
- Monitor Lighthouse scores quarterly
- Check for any broken links monthly

### Troubleshooting

**Forms not receiving emails?**
- Verify email in Netlify dashboard
- Check spam folder
- Test form locally: `netlify dev`
- Request new test in Netlify Forms interface

**Video not playing?**
- Check video file is in `public/assets/hero/video.mp4`
- Verify MP4 codec (H.264)
- Check console for CORS errors

**Images not loading?**
- Verify image paths are correct
- Check file extensions (.jpg, .JPG)
- Ensure files are in `public/assets/gallery/`
- Check Netlify cache (purge if needed)

**Slow performance?**
- Run Lighthouse audit
- Check image sizes (should be <200KB each)
- Verify video is compressed
- Check bundle size: `npm run build` output

## Production Checklist

- [ ] Domain configured and pointing to Netlify
- [ ] HTTPS enabled (automatic)
- [ ] DNS propagated (24-48 hours)
- [ ] Contact form receiving emails
- [ ] Analytics tracking working
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Security headers set
- [ ] Cache headers optimized
- [ ] Backups automated (Netlify)
- [ ] Team access configured
- [ ] Monitoring alerts setup

## Support & Maintenance

**Regular Updates:**
- Update dependencies: `npm update --save`
- Check Node.js version: `node --version`
- Update Next.js when new versions available
- Security patches immediately

**Performance Optimization:**
- Monitor Lighthouse scores
- Optimize images if added
- Review bundle size
- Check Core Web Vitals

**Backup Strategy:**
- Git repository is your backup
- Netlify has automatic backups
- Consider database backups if added later

---

**Estimated time to deployment:** 15-30 minutes
**Deployment difficulty:** Easy
**Rollback time:** < 1 minute (via Netlify)

For more help: https://docs.netlify.com
