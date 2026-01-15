# Vercel Deployment Guide - TypeScript Version

## 📋 Prerequisites

- Vercel account
- GitHub/GitLab/Bitbucket repository (optional but recommended)
- Project built and tested locally

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy to Vercel**
   ```bash
   vercel
   ```
   
4. **Deploy to production**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Import project in Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Import your repository

3. **Configure Build Settings**
   - Framework Preset: `Other`
   - Build Command: `npm run build`
   - Output Directory: Leave empty (Vercel will use the root)
   - Install Command: `npm install`

4. **Environment Variables** (if needed)
   - Add any environment variables from your `.env` file
   - Set `NODE_ENV=production`

5. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your app

## ⚙️ Configuration Files

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/app.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/app.js"
    }
  ]
}
```

**What this does:**
- Points Vercel to the compiled `dist/app.js` file
- Routes all requests to the Express app
- Vercel handles `app.listen()` automatically

### .vercelignore
The `.vercelignore` file is configured to:
- ✅ Include the compiled `dist/` folder
- ❌ Exclude TypeScript source files (`.ts`)
- ❌ Exclude development files (`nodemon.json`, etc.)
- ❌ Exclude documentation files

## 📁 What Gets Deployed

### Included:
- ✅ `dist/` - Compiled JavaScript
- ✅ `views/` - EJS templates
- ✅ `public/` - Static assets
- ✅ `node_modules/` - Dependencies (installed by Vercel)
- ✅ `package.json` - For dependency installation

### Excluded:
- ❌ TypeScript source files (`.ts`)
- ❌ `server.ts` - Not needed (Vercel manages server)
- ❌ Development configs (`nodemon.json`, `tsconfig.json`)
- ❌ Documentation files

## 🔑 Key Points for TypeScript + Vercel

1. **No server.listen() needed**
   - ✅ `app.ts` exports the Express app WITHOUT `.listen()`
   - ✅ `server.ts` is ONLY for local development
   - ✅ Vercel handles the server automatically

2. **Build before deploy**
   - Vercel runs `npm run build` which compiles TypeScript
   - The compiled `dist/` folder is what gets deployed
   - Make sure `dist/` is NOT in `.gitignore` if deploying from Git

3. **Routes and views**
   - Views and public folders must be accessible from `dist/`
   - Paths use `__dirname` which points to the `dist/` folder in production

## 🔧 Vercel Build Process

When you deploy, Vercel will:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run build script**
   ```bash
   npm run build
   ```
   This compiles TypeScript to JavaScript in `dist/`

3. **Start the serverless function**
   - Loads `dist/app.js`
   - Routes requests through Express
   - No `.listen()` needed (Vercel handles it)

## 🌍 Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

```env
NODE_ENV=production
PORT=3000  # Optional (Vercel sets this automatically)
# Add any other environment variables your app needs
```

## ✅ Deployment Checklist

Before deploying, ensure:

- [ ] `npm run build` works without errors
- [ ] `dist/` folder contains compiled JavaScript
- [ ] `vercel.json` points to `dist/app.js`
- [ ] `app.ts` exports app WITHOUT `.listen()`
- [ ] All dependencies are in `package.json` (not devDependencies needed at runtime)
- [ ] Environment variables are configured in Vercel
- [ ] Views and public folders are accessible

## 🧪 Test Locally First

Before deploying, test the production build locally:

```bash
# Build the project
npm run build

# Test the production build
node dist/app.js
# Note: This won't start a server, but you can test with server.js:
node dist/server.js
```

## 📊 Post-Deployment

After deployment:

1. **Check the deployment logs** in Vercel Dashboard
2. **Visit your deployed URL** (e.g., `your-app.vercel.app`)
3. **Test all endpoints** to ensure everything works
4. **Monitor performance** in Vercel Analytics

## 🐛 Troubleshooting

### Issue: "Cannot find module"
- **Solution**: Make sure the module is in `dependencies` (not `devDependencies`)
- Run `npm install --save <module-name>`

### Issue: "Views not found"
- **Solution**: Check that paths in `app.ts` use `__dirname`:
  ```typescript
  app.set('views', path.join(__dirname, 'views'));
  ```

### Issue: "Build failed"
- **Solution**: Run `npm run build` locally to see TypeScript errors
- Fix any type errors before deploying

### Issue: "404 errors"
- **Solution**: Check `vercel.json` routes configuration
- Ensure `dist/app.js` path is correct

### Issue: "Static files not loading"
- **Solution**: Verify static middleware in `app.ts`:
  ```typescript
  app.use(express.static(path.join(__dirname, 'public')));
  ```

## 🔄 Continuous Deployment

For automatic deployments:

1. **Connect Git repository** to Vercel
2. **Every push to main branch** triggers a deployment
3. **Pull requests** get preview deployments
4. **Rollback** easily from Vercel Dashboard

## 📝 Development vs Production

| Feature | Development (`npm run dev`) | Production (Vercel) |
|---------|---------------------------|---------------------|
| Entry Point | `server.ts` | `dist/app.js` |
| TypeScript | Direct execution via `ts-node` | Compiled to JavaScript |
| Server | `app.listen()` in `server.ts` | Managed by Vercel |
| Hot Reload | ✅ Yes (nodemon) | ❌ No |
| Build Step | ❌ No | ✅ Yes (`npm run build`) |

## 🎯 Quick Deploy Commands

```bash
# First time deployment
npm run build
vercel

# Production deployment
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

---

**Note**: The `server.ts` file with `app.listen()` is ONLY used for local development. Vercel automatically handles server management and routing, so it uses `app.ts` (compiled to `dist/app.js`) directly without calling `.listen()`.

**Your app is now ready for Vercel deployment!** 🚀
