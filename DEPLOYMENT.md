# GitHub Pages Deployment Fix

This repository has been fixed to work properly with GitHub Pages deployment.

## What was wrong?

1. **Missing Dependency**: `react-router-dom` was imported in `App.jsx` but not listed in `package.json` dependencies
2. **Incorrect Base Path**: Vite was building with default base path `/` which doesn't work on GitHub Pages URLs like `https://username.github.io/repo-name/`
3. **No Deployment Workflow**: There was no GitHub Actions workflow to automatically build and deploy the app

## What was fixed?

1. **Added missing dependency**: Installed `react-router-dom` 
2. **Configured base path**: Updated `vite.config.js` to set `base: '/jerin/'` for proper GitHub Pages URLs
3. **Added deployment workflow**: Created `.github/workflows/deploy.yml` for automatic deployment

## How to deploy?

1. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"
   
2. Push your changes to the `main` branch - the workflow will automatically build and deploy

3. Your site will be available at: `https://mehjabin-rashid.github.io/jerin/`

## Local Development

- `npm run dev` - Start development server (runs on http://localhost:5173/jerin/)
- `npm run build` - Build for production 
- `npm run preview` - Preview production build locally (runs on http://localhost:4173/jerin/)
- `npm run lint` - Run ESLint

## Technical Details

- Uses HashRouter for client-side routing compatibility with GitHub Pages
- Includes 404.html for proper SPA routing support
- Tailwind CSS for styling
- Vite for fast development and optimized production builds