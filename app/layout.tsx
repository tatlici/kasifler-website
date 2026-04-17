import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: 'Kaşifler Diyarı - Çocuklar İçin Eğitici Oyun',
  description: 'Kaşifler Diyarı, çocuklara yaratıcılık, merak ve keşif ruhunu öğreten eğitici bir oyundur.',
  keywords: 'çocuk oyunu, eğitici oyun, Kaşifler Diyarı, yaratıcılık, problem çözme',
  openGraph: {
    title: 'Kaşifler Diyarı - Çocuklar İçin Eğitici Oyun',
    description: 'Kaşifler Diyarı, çocuklara yaratıcılık, merak ve keşif ruhunu öğreten eğitici bir oyundur.',
    url: 'https://kasiflerdiyari.com',
    type: 'website',
    images: [
      {
        url: '/assets/hero/poster.jpg',
        width: 1200,
        height: 630,
        alt: 'Kaşifler Diyarı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaşifler Diyarı - Çocuklar İçin Eğitici Oyun',
    description: 'Kaşifler Diyarı, çocuklara yaratıcılık, merak ve keşif ruhunu öğreten eğitici bir oyundur.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF6B45" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        {/* Font preload */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
