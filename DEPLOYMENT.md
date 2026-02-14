# Deploy to Vercel

Follow these steps to deploy your 12Net Solution website to Vercel and connect your custom domain.

## Step 1: Push to GitHub

1. Go to [GitHub](https://github.com) and create a new repository
2. Download all project files from this workspace
3. Push the code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. Go to [Vercel](https://vercel.com) and sign up/login (use your GitHub account)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add your environment variables in the Vercel dashboard:
   - `VITE_SUPABASE_URL` = (your Supabase project URL)
   - `VITE_SUPABASE_ANON_KEY` = (your Supabase anon key)
6. Click "Deploy"

## Step 3: Connect Your Custom Domain

1. After deployment, go to your project settings in Vercel
2. Click on "Domains"
3. Add your domain: `www.12netsolution.com`
4. Vercel will provide DNS records
5. Go to your domain registrar (where you bought 12netsolution.com)
6. Update your DNS settings with the records Vercel provides
7. Wait for DNS propagation (can take up to 24-48 hours, usually much faster)

## Done!

Your booking form will work perfectly on www.12netsolution.com once DNS propagates. All bookings will be saved to your Supabase database.

## Important Notes

- Your Supabase credentials are already configured in this project
- The booking form is fully functional and tested
- Row Level Security is properly configured
- Admin panel is accessible at `/admin` (requires login)
