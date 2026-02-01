# Site Erectus Plus

A Next.js application with Vercel Speed Insights integration for real-time performance monitoring.

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/devpeu83/siteerectusplus)

**Click the button above to deploy instantly to Vercel!**

## ✨ Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Vercel Speed Insights** for performance monitoring
- Core Web Vitals tracking
- Real-time analytics dashboard
- Production-ready configuration
- Security headers pre-configured
- SEO optimized

## 📋 What's Included

- ✅ Optimized production build
- ✅ Vercel deployment configuration
- ✅ Security headers (CSP, XSS Protection, etc.)
- ✅ SEO metadata and Open Graph tags
- ✅ Speed Insights integration
- ✅ TypeScript support
- ✅ ESLint configuration

## 🌐 Deploy with Custom Domain

See detailed instructions:
- 🇺🇸 [English Deployment Guide](./DEPLOYMENT.md)
- 🇧🇷 [Guia de Deploy em Português](./DEPLOY-PT-BR.md)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/devpeu83/siteerectusplus.git
cd siteerectusplus
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
npm run start
```

## Vercel Speed Insights

This project includes Vercel Speed Insights for monitoring real user performance metrics.

### What's Tracked

- `@vercel/speed-insights` package integrated in the root layout
- Automatic tracking of Core Web Vitals:
  - **LCP** (Largest Contentful Paint)
  - **FID** (First Input Delay) 
  - **CLS** (Cumulative Layout Shift)
  - **FCP** (First Contentful Paint)
  - **TTFB** (Time to First Byte)
  - **INP** (Interaction to Next Paint)
- Real-time performance data collection
- Geographic and device breakdowns

### Viewing Analytics

Once deployed to Vercel:

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to the **Speed Insights** tab
4. View real-time performance metrics and Core Web Vitals

### How It Works

The `<SpeedInsights />` component is included in the root layout (`app/layout.tsx`) and automatically:
- Loads the tracking script (`/_vercel/speed-insights/script.js`)
- Collects Web Vitals from real user visits
- Sends data to Vercel's analytics platform
- Displays metrics in your dashboard

**Note:** Speed Insights is automatically enabled for all Vercel deployments. No additional configuration needed!

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js app is with Vercel:

1. **One-Click Deploy:**
   - Click the "Deploy with Vercel" button at the top of this README
   - Or go to https://vercel.com/new and import this repository

2. **Automatic Setup:**
   - Vercel auto-detects Next.js configuration
   - Build and deployment happens automatically
   - SSL certificate is automatically provisioned
   - Speed Insights is automatically enabled

3. **Add Custom Domain:**
   - Go to Project Settings → Domains
   - Add your domain and configure DNS
   - Vercel handles SSL and routing automatically

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Environment Variables

For custom configuration, set these in Vercel Dashboard (Settings → Environment Variables):

- `NEXT_PUBLIC_SITE_URL` - Your production domain URL (optional)

## 📚 Documentation

- **Deployment Guides:**
  - 🇺🇸 [Complete Deployment Guide (English)](./DEPLOYMENT.md)
  - 🇧🇷 [Guia Completo de Deploy (Português)](./DEPLOY-PT-BR.md)
  
- **Example Environment:** [.env.example](./.env.example)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Core Web Vitals](https://web.dev/vitals/)

## License

MIT
