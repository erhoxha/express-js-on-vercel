# Vercel Deployment Guide

This application is configured for deployment on Vercel.

## Prerequisites
- A Vercel account (sign up at https://vercel.com)
- Vercel CLI (optional, for command-line deployment)

## Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to https://vercel.com and log in
3. Click "Add New..." → "Project"
4. Import your Git repository
5. Vercel will automatically detect the configuration from `vercel.json`
6. Add environment variables if needed (see below)
7. Click "Deploy"

### Method 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from the project root:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Environment Variables

If your application uses environment variables (check `.env.example`), add them in the Vercel dashboard:

1. Go to your project in Vercel
2. Navigate to Settings → Environment Variables
3. Add your variables:
   - `PORT` is automatically set by Vercel (no need to add)
   - Add any other custom variables from your `.env` file

## Local Development

To run locally:

```bash
npm install
npm run dev
```

The application will run on http://localhost:3000

## File Structure

- `app.js` - Main Express application
- `vercel.json` - Vercel configuration
- `views/` - EJS templates
- `controllers/` - Route controllers
- `services/` - Business logic
- `public/` - Static assets

## Notes

- The application automatically exports the Express app for Vercel's serverless functions
- Static files in the `public/` folder are served automatically
- EJS templates are rendered server-side
- All routes are handled through the main `app.js` entry point

## Troubleshooting

If you encounter issues:

1. Check Vercel deployment logs in the dashboard
2. Ensure all dependencies are in `package.json`
3. Verify environment variables are set correctly
4. Check that `vercel.json` is in the root directory

## Support

For Vercel-specific issues, refer to:
- Vercel Documentation: https://vercel.com/docs
- Vercel Express Guide: https://vercel.com/guides/using-express-with-vercel
