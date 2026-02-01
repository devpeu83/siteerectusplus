# Deployment Guide for Site Erectus Plus

This guide will help you deploy the Site Erectus Plus application with a custom domain.

## Prerequisites

- A Vercel account (sign up at https://vercel.com)
- A domain name (can be purchased through Vercel or external registrar)
- Git repository connected to Vercel

## Deployment Steps

### 1. Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Click "Add New Project"
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
4. Select the `siteerectusplus` repository
5. Vercel will auto-detect Next.js configuration
6. Click "Deploy"

#### Option B: Deploy via CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy the project
vercel

# For production deployment
vercel --prod
```

### 2. Configure Custom Domain

#### In Vercel Dashboard:
1. Go to your project in Vercel Dashboard
2. Navigate to "Settings" → "Domains"
3. Click "Add Domain"
4. Enter your custom domain (e.g., `siteerectusplus.com`)
5. Follow the instructions to configure DNS:

#### For Vercel Nameservers (Recommended):
- Update your domain registrar to use Vercel's nameservers:
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`

#### For External DNS (A/CNAME Records):
- Add an A record pointing to Vercel's IP: `76.76.21.21`
- Or add a CNAME record pointing to: `cname.vercel-dns.com`

### 3. Configure Environment Variables

If you need environment variables:

1. Go to "Settings" → "Environment Variables" in Vercel Dashboard
2. Add any required variables:
   - `NEXT_PUBLIC_SITE_URL`: Your production domain URL (e.g., `https://siteerectusplus.com`)

### 4. Enable Speed Insights

Speed Insights is automatically enabled when deployed to Vercel:

1. Go to your project in Vercel Dashboard
2. Navigate to the "Speed Insights" tab
3. Enable Speed Insights if not already enabled
4. View real-time performance metrics

### 5. Configure SSL/TLS

Vercel automatically provisions SSL certificates for your domain:
- SSL certificates are automatically generated and renewed
- HTTPS is enforced by default
- No additional configuration needed

## Verify Deployment

After deployment, verify your site is working:

1. Visit your domain (e.g., `https://siteerectusplus.com`)
2. Check that the site loads correctly
3. Verify Speed Insights is collecting data (may take a few minutes)
4. Test the site on different devices and browsers

## Automatic Deployments

Once connected to Git:
- Every push to the main branch triggers a production deployment
- Pull requests create preview deployments
- You can configure deployment branches in Settings

## Monitoring

### Speed Insights Dashboard
- Real-time Core Web Vitals
- Performance scores
- Geographic data
- Device breakdowns

### Deployment Logs
- View build and deployment logs in the Vercel Dashboard
- Check for any errors or warnings

## Troubleshooting

### Domain Not Working
- Verify DNS records are correctly configured
- DNS propagation can take up to 48 hours
- Use tools like `dig` or `nslookup` to verify DNS

### Build Failures
- Check deployment logs in Vercel Dashboard
- Ensure all dependencies are in package.json
- Verify environment variables are set correctly

### Speed Insights Not Showing Data
- Wait 5-10 minutes for initial data
- Ensure the site has visitors
- Check that `@vercel/speed-insights` is properly installed

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Custom Domain Configuration](https://vercel.com/docs/concepts/projects/domains)
- [Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

## Support

For issues or questions:
- Vercel Support: https://vercel.com/support
- Next.js Discussions: https://github.com/vercel/next.js/discussions
- Project Repository: https://github.com/devpeu83/siteerectusplus
