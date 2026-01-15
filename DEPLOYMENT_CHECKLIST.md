# Vercel Deployment Checklist

Use this checklist to ensure smooth deployment to Vercel.

## Pre-Deployment Checklist

- [x] Docker files removed
- [x] `vercel.json` configuration created
- [x] `.vercelignore` file created
- [x] `app.js` exports Express app correctly
- [x] Application is responsive (mobile + desktop)
- [x] `.gitignore` updated for Vercel
- [x] Documentation created

## Deployment Steps

### Step 1: Test Locally
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Test at http://localhost:3000
- [ ] Verify all features work
- [ ] Test responsive design (resize browser)

### Step 2: Prepare Repository
- [ ] Commit all changes:
  ```bash
  git add .
  git commit -m "Configure for Vercel deployment"
  ```
- [ ] Push to your Git hosting (GitHub/GitLab/Bitbucket):
  ```bash
  git push origin main
  ```

### Step 3: Deploy to Vercel

#### Option A: Dashboard Deployment (Recommended)
- [ ] Go to https://vercel.com
- [ ] Click "Add New..." → "Project"
- [ ] Import your Git repository
- [ ] Vercel auto-detects configuration
- [ ] Add environment variables (if any)
- [ ] Click "Deploy"

#### Option B: CLI Deployment
- [ ] Install Vercel CLI: `npm install -g vercel`
- [ ] Login: `vercel login`
- [ ] Deploy: `vercel --prod`

### Step 4: Configure Environment Variables
- [ ] Go to Project Settings in Vercel Dashboard
- [ ] Navigate to "Environment Variables"
- [ ] Add variables from your `.env` file:
  - [ ] Add any custom variables
  - [ ] **Note**: `PORT` is set automatically by Vercel
- [ ] Save changes

### Step 5: Post-Deployment Testing
- [ ] Visit your Vercel URL
- [ ] Test on desktop browser
- [ ] Test on mobile browser (or use browser dev tools)
- [ ] Test the lot size calculator functionality
- [ ] Verify form submissions work
- [ ] Check responsive design on different screen sizes

### Step 6: Domain Configuration (Optional)
- [ ] Add custom domain in Vercel Dashboard
- [ ] Configure DNS settings
- [ ] Verify SSL certificate

## Troubleshooting

### If deployment fails:
- [ ] Check Vercel deployment logs
- [ ] Verify `vercel.json` syntax
- [ ] Ensure all dependencies are in `package.json`
- [ ] Check for console errors in browser

### If the app doesn't load:
- [ ] Verify environment variables are set
- [ ] Check Vercel function logs
- [ ] Ensure `app.js` exports the Express app
- [ ] Test locally first with `npm start`

### If responsive design issues:
- [ ] Check viewport meta tag is present
- [ ] Verify CSS media queries are correct
- [ ] Test with browser developer tools
- [ ] Clear browser cache

## Quick Commands

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Deploy to Vercel (CLI)
vercel --prod

# View logs (CLI)
vercel logs
```

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Express on Vercel Guide](https://vercel.com/guides/using-express-with-vercel)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

## Status Tracking

| Task | Status | Notes |
|------|--------|-------|
| Code prepared | ✅ | All files configured |
| Local testing | ⏳ | Run `npm run dev` to test |
| Git pushed | ⏳ | Push to your repository |
| Vercel deployed | ⏳ | Deploy via dashboard or CLI |
| Environment vars | ⏳ | Add in Vercel dashboard |
| Production testing | ⏳ | Test live URL |
| Domain configured | 📝 | Optional |

---

**Ready to deploy!** Follow the steps above and check off each item as you complete it.
