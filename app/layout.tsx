import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Beneath The Ink - Print & Brand Studio',
  description:
    'Bespoke print, signage, and packaging for ambitious brands, businesses, and non-profits. Serving the Carolinas and beyond.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} bg-godwin-light text-godwin-gray`}>
        <SiteHeader />
        <main className="min-h-[calc(100vh-420px)] bg-white text-slate-900">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
