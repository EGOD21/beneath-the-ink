import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Print Production',
    description:
      'Offset + digital runs, specialty substrates, and finishing that elevate your collateral, packaging, and direct mail.',
  },
  {
    title: 'Large Format & Signage',
    description:
      'Trade show environments, vehicle wraps, interior brand moments, and exterior signage that turn heads.',
  },
  {
    title: 'Brand Stewardship',
    description:
      'Template systems, fulfillment, and on-call design support so every touchpoint stays on brand and on time.',
  },
]

const highlights = [
  {
    metric: '12hr',
    label: 'rush capability',
  },
  {
    metric: '350+',
    label: 'SKUs produced last quarter',
  },
  {
    metric: '98%',
    label: 'jobs delivered on or before deadline',
  },
]

const portfolio = [
  {
    name: 'Charlotte Innovation Summit',
    sector: 'Technology Conference',
    summary:
      'Delivered a 28-piece signage kit, attendee collateral, and premium speaker gifts that helped push post-event NPS to 71.',
  },
  {
    name: 'Riverlight Foundation',
    sector: 'Non-Profit',
    summary:
      'Produced donor journeys for a capital campaign - including impact reports and gala touchpoints - that unlocked $1.4M in pledges.',
  },
  {
    name: 'Eastover Hospitality Group',
    sector: 'Hospitality & Retail',
    summary:
      'Unified guest experience across nine properties with refreshed packaging, in-room collateral, and experiential signage.',
  },
]

const audiences = [
  {
    title: 'Business & Personal',
    copy: 'Campaign rollouts, product launch kits, internal communications, and bespoke personal stationery.',
    action: {
      label: 'Explore Business Services',
      href: '/business',
    },
  },
  {
    title: 'Non-Profit',
    copy: 'Development mailers, fundraising events, volunteer kits, and mission-driven storytelling materials.',
    action: {
      label: 'Explore Non-Profit Services',
      href: '/non-profit',
    },
  },
]

export default function LandingPage() {
  return (
    <div className="space-y-24 lg:space-y-32">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=1600&q=80"
            alt="Close up of premium print materials"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
          <div className="absolute -right-40 top-0 h-[38rem] w-[38rem] rounded-full bg-godwin-blue/30 blur-3xl" />
        </div>
        <div className="relative container-max flex flex-col gap-12 px-4 py-32 sm:py-40 lg:flex-row lg:items-center lg:gap-20">
          <div className="max-w-xl space-y-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-godwin-gold">
              Full-service print partner
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Transform ideas into tangible brand experiences.
            </h1>
            <p className="text-lg text-slate-200">
              From high-touch collateral to large format environments, we help you launch campaigns, steward brands, and deliver memorable experiences on every sheet, sign, and surface.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/business"
                className="inline-flex items-center justify-center rounded-full bg-godwin-gold px-6 py-3 text-sm font-semibold text-slate-900 transition-transform hover:-translate-y-0.5 hover:bg-amber-400"
              >
                Business / Personal
              </Link>
              <Link
                href="/non-profit"
                className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10"
              >
                Non-Profit
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight.metric}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-lg backdrop-blur"
              >
                <p className="text-3xl font-semibold text-godwin-gold">{highlight.metric}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-300">{highlight.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-padding">
        <div className="container-max space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-blue/60">What we do</p>
            <h2 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">
              Purpose-built print, signage, and packaging for every stage of your brand journey.
            </h2>
            <p className="text-lg text-slate-600">
              We combine production expertise with creative stewardship to deliver consistent, color-accurate experiences that scale with your needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="card-hover rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-godwin-blue">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50" id="portfolio">
        <div className="container-max grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-blue/60">Who we serve</p>
            <h2 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">
              Tailored journeys for businesses and non-profits alike.
            </h2>
            <p className="text-lg text-slate-600">
              Whether you need to launch a national campaign or steward donor relationships, we build scalable, premium deliverables that make a measurable impact.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((audience) => (
                <div key={audience.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-godwin-blue">{audience.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{audience.copy}</p>
                  <Link
                    href={audience.action.href}
                    className="mt-4 inline-flex text-sm font-semibold text-godwin-blue hover:text-blue-900"
                  >
                    {audience.action.label} {'->'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-2 shadow-xl">
            <div className="rounded-[26px] bg-slate-900 p-8 text-white">
              <span className="text-sm uppercase tracking-[0.3em] text-godwin-gold">Featured work</span>
              <ul className="mt-6 space-y-6 divide-y divide-white/10">
                {portfolio.map((project) => (
                  <li key={project.name} className="pt-6 first:pt-0">
                    <p className="text-lg font-semibold text-godwin-gold">{project.name}</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-300">{project.sector}</p>
                    <p className="mt-3 text-sm text-slate-200">{project.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-8 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-blue/60">Our process</p>
            <h2 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">Collaborative, transparent, and built around your deadlines.</h2>
            <p className="text-lg text-slate-600">
              We operate as an extension of your team - from discovery through delivery - so you can launch with confidence and stay focused on the work that matters most.
            </p>
            <ol className="space-y-4 text-sm text-slate-600">
              <li><span className="font-semibold text-godwin-blue">1. Discover & scope.</span> We audit assets, timelines, and brand requirements.</li>
              <li><span className="font-semibold text-godwin-blue">2. Prototype & proof.</span> Rapid sampling, color checks, and stakeholder approvals.</li>
              <li><span className="font-semibold text-godwin-blue">3. Produce & fulfill.</span> Streamlined production with quality assurance and distribution support.</li>
            </ol>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-godwin-blue/10">
            <h3 className="text-2xl font-semibold text-godwin-blue">Let&apos;s craft what&apos;s next.</h3>
            <p className="mt-4 text-sm text-slate-600">
              Share your timeline, quantities, and any inspiration - our team will respond within one business day with next steps.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:Jeremy@GodwinSolutions.cc?subject=Let%27s build something remarkable"
                className="inline-flex items-center justify-center rounded-full bg-godwin-blue px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-blue-900"
              >
                Email the studio
              </a>
              <a
                href="https://cal.com/godwinsolutions/print-consult"
                className="inline-flex items-center justify-center rounded-full border border-godwin-blue px-6 py-3 text-sm font-semibold text-godwin-blue transition-transform hover:-translate-y-0.5 hover:bg-godwin-blue hover:text-white"
              >
                Schedule a consult
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-godwin-blue text-white">
        <div className="container-max flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-gold">Let&apos;s collaborate</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Ready for a print partner who sweats the details?</h2>
            <p className="text-lg text-blue-100">
              Share your brief and we&apos;ll pair you with a specialist to map timelines, budgets, and production pathways tailored to your goals.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="tel:980-332-1463"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-godwin-blue transition-transform hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Call 980.332.1463
            </a>
            <a
              href="mailto:Jeremy@GodwinSolutions.cc?subject=Project inquiry"
              className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10"
            >
              Jeremy@GodwinSolutions.cc
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
