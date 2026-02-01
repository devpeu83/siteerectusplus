import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Site Erectus Plus',
  description: 'A Next.js application with Vercel Speed Insights for real-time performance monitoring',
  metadataBase: new URL(siteUrl),
  keywords: ['Next.js', 'Vercel', 'Speed Insights', 'Performance Monitoring', 'Web Vitals'],
  authors: [{ name: 'Site Erectus Plus' }],
  openGraph: {
    title: 'Site Erectus Plus',
    description: 'A Next.js application with Vercel Speed Insights for real-time performance monitoring',
    url: siteUrl,
    siteName: 'Site Erectus Plus',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Site Erectus Plus',
    description: 'A Next.js application with Vercel Speed Insights for real-time performance monitoring',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
