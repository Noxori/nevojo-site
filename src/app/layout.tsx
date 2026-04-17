import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/ui/CookieBanner'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400','600','700','800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300','400','500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nevojo.com'),
  title: {
    default:  'Nevojo Technologies — Tech for a Connected World',
    template: '%s | Nevojo Technologies',
  },
  description:
    'Nevojo Technologies LLC is a multidisciplinary tech company specializing in software, AI intelligence, physical tech, and premium digital solutions for a global audience.',
  keywords: ['Nevojo Technologies','AI software','Guavamatic','Oryniq','Kazuriq','Noxori','tech company','software development','AI tools','minority-owned tech'],
  authors: [{ name: 'Nevojo Technologies LLC' }],
  openGraph: {
    type:     'website',
    locale:   'en_US',
    url:      'https://nevojo.com',
    siteName: 'Nevojo Technologies',
    title:    'Nevojo Technologies — Tech for a Connected World',
    description: 'Building the future through software, AI, design, and innovation — for a global, multicultural audience.',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Nevojo Technologies',
    description: 'Tech for a Connected World',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} dark`}>
      <body className="min-h-screen bg-nv-dark text-nv-txt font-body antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
