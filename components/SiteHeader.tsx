import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/business', label: 'Business & Personal' },
  { href: '/non-profit', label: 'Non-Profit' },
  { href: '/#services', label: 'Services' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50">
      <div className="bg-godwin-blue text-white text-xs sm:text-sm">
        <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-2">
          <p className="font-medium tracking-wide">Premium print, signage & brand experiences crafted in the Carolinas.</p>
          <div className="flex items-center gap-4">
            <a href="tel:980-332-1463" className="hover:text-godwin-gold transition-colors">
              980.332.1463
            </a>
            <a href="mailto:Jeremy@GodwinSolutions.cc" className="hover:text-godwin-gold transition-colors">
              Jeremy@GodwinSolutions.cc
            </a>
          </div>
        </div>
      </div>
      <div className="container-max px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-24">
              <Image src="/logo.png" alt="Beneath The Ink logo" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-500 transition-colors">
                Beneath The Ink
              </span>
              <span className="text-lg font-semibold text-slate-900 group-hover:text-godwin-blue transition-colors">
                Print & Brand Studio
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-godwin-blue transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/business#quote"
              className="hidden sm:inline-flex items-center justify-center rounded-full border border-godwin-blue px-5 py-2 text-sm font-semibold text-godwin-blue transition-colors hover:bg-godwin-blue hover:text-white"
            >
              Request a Quote
            </a>
            <a
              href="https://cal.com/godwinsolutions/print-consult"
              className="inline-flex items-center justify-center rounded-full bg-godwin-blue px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-godwin-blue/20 transition-transform hover:-translate-y-0.5 hover:bg-blue-900"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
