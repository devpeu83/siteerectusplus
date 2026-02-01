# Site Erectus Plus

A Next.js application with Vercel Speed Insights integration for real-time performance monitoring.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Vercel Speed Insights** for performance monitoring
- Core Web Vitals tracking
- Real-time analytics dashboard

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

### What's Included

- `@vercel/speed-insights` package integrated in the root layout
- Automatic tracking of Core Web Vitals (LCP, FID, CLS, FCP, TTFB, INP)
- Real-time performance data collection

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

## Deployment

Deploy to Vercel with one click:

```bash
npx vercel
```

Or connect your Git repository to Vercel for automatic deployments on every push.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Core Web Vitals](https://web.dev/vitals/)

## License

MIT
