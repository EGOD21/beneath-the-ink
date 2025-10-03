import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="section-padding pb-10">
        <div className="container-max grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-godwin-gold">Beneath The Ink</span>
              <h3 className="text-2xl font-semibold text-white">Print with purpose.</h3>
            </div>
            <p className="text-sm text-slate-400">
              We partner with businesses, brands, and non-profits to craft memorable print, signage, and packaging that moves people to act.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Capabilities</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Production Print & Finishing</li>
              <li>Large Format & Environmental Graphics</li>
              <li>Direct Mail & Fulfillment</li>
              <li>Creative & Brand Support</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link className="hover:text-white" href="/business#process">Our Process</Link></li>
              <li><Link className="hover:text-white" href="/business#industries">Industries</Link></li>
              <li><Link className="hover:text-white" href="/business#testimonials">Testimonials</Link></li>
              <li><Link className="hover:text-white" href="/business#quote">Request a Quote</Link></li>
            </ul>
          </div>
          <div className="space-y-3 text-sm">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Let&apos;s Collaborate</h4>
            <p>Jeremy Godwin</p>
            <a className="block text-godwin-gold hover:text-godwin-gold/80" href="mailto:Jeremy@GodwinSolutions.cc">
              Jeremy@GodwinSolutions.cc
            </a>
            <a className="block text-godwin-gold hover:text-godwin-gold/80" href="tel:980-332-1463">
              980.332.1463
            </a>
            <p className="text-xs text-slate-500">Charlotte Metro | Nationwide fulfillment available</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container-max flex flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Beneath The Ink. Crafted with care.</p>
          <div className="flex gap-4">
            <Link className="hover:text-white" href="/privacy">Privacy</Link>
            <Link className="hover:text-white" href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
