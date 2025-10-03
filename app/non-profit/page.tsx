import Image from 'next/image'
import Link from 'next/link'

import {
  faqs,
  processSteps,
  productCatalog,
  servicePackages,
  testimonials,
} from '@/data/catalog'

import { QuoteFormCard } from '@/components/QuoteFormCard'

const markup = 1.2
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

const supporterSegments = [
  'Development & Advancement Teams',
  'Alumni Relations',
  'Faith-Based Organizations',
  'Healthcare Foundations',
  'Arts & Cultural Institutions',
  'Community Outreach Programs',
]

const impactStats = [
  {
    metric: '40%',
    label: 'Average lift in campaign response when direct mail + event kits align',
  },
  {
    metric: '3.1 days',
    label: 'Median turnaround for fundraising collateral replenishment',
  },
  {
    metric: '24/7',
    label: 'Access to project dashboards + fulfillment status updates',
  },
]

export const metadata = {
  title: 'Beneath The Ink for Non-Profits',
  description:
    'Mission-aligned print, donor communications, and event experiences designed to deepen support and accelerate fundraising.',
}

export default function NonProfitPage() {
  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_NONPROFIT_ENDPOINT

  return (
    <div className="space-y-24 lg:space-y-32">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80"
            alt="Volunteers collaborating at a community event"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-godwin-blue/80" />
        </div>
        <div className="relative container-max grid gap-12 px-4 py-32 sm:py-36 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div className="space-y-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-godwin-gold">
              Non-Profit
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Fundraising and mission moments that inspire generosity.
            </h1>
            <p className="text-lg text-blue-100">
              We help development teams deliver cohesive storytelling across donor mailers, impact reports, volunteer kits, and event experiences - all with preferential pricing for the causes doing the heavy lifting.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-full bg-godwin-gold px-6 py-3 text-sm font-semibold text-slate-900 transition-transform hover:-translate-y-0.5 hover:bg-amber-400"
              >
                Plan your next campaign
              </a>
              <Link
                href="/business"
                className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10"
              >
                Explore business services
              </Link>
            </div>
          </div>
          <div className="grid gap-5 rounded-3xl border border-white/15 bg-white/10 p-8 text-white backdrop-blur">
            {impactStats.map((stat) => (
              <div key={stat.metric} className="space-y-1">
                <p className="text-3xl font-semibold text-godwin-gold">{stat.metric}</p>
                <p className="text-sm text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" id="pricing">
        <div className="container-max space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-blue/60">Impact-driven deliverables</p>
            <h2 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">
              Preferential pricing across the assets that mobilize supporters.
            </h2>
            <p className="text-lg text-slate-600">
              Pricing reflects a dedicated non-profit discount while maintaining the same hands-on production management, proofing, and fulfillment support.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {productCatalog.map((product) => (
              <div key={product.name} className="card-hover rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="relative mb-5 h-48 w-full overflow-hidden rounded-2xl">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-godwin-blue">{product.name}</h3>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
                    from {currency.format(product.basePrice * markup)}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{product.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">{product.turnaround}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50" id="process">
        <div className="container-max grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-blue/60">Partnership approach</p>
            <h2 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">
              Designed for board approvals, mission alignment, and shoestring timelines.
            </h2>
            <p className="text-lg text-slate-600">
              Dedicated account support ensures stakeholders stay informed, assets stay brand-consistent, and every touchpoint feels intentional.
            </p>
            <div className="rounded-3xl border border-emerald-500/20 bg-white/70 p-8 shadow-2xl shadow-emerald-500/10">
              <h3 className="text-xl font-semibold text-godwin-blue">What&apos;s included</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {servicePackages.map((service) => (
                  <li key={service.name}>
                    <span className="font-semibold text-godwin-blue">{service.name}.</span> {service.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-godwin-blue/60">Step {index + 1}</span>
                <h3 className="mt-4 text-lg font-semibold text-godwin-blue">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" id="industries">
        <div className="container-max grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-blue/60">Who we equip</p>
            <h2 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">
              Trusted by teams building community, raising funds, and mobilizing volunteers.
            </h2>
            <p className="text-lg text-slate-600">
              From annual appeals to capital campaigns, we make it simple to deliver the right piece at the right time to the right supporter.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {supporterSegments.map((segment) => (
              <div key={segment} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-godwin-blue shadow-sm">
                {segment}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50" id="testimonials">
        <div className="container-max space-y-10">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-blue/60">Impact stories</p>
            <h2 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">Cause-driven teams love partnering with us.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-lg italic text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-6 text-sm font-semibold text-godwin-blue">{testimonial.author}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" id="faq">
        <div className="container-max space-y-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-blue/60">FAQs</p>
            <h2 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">Support built around the realities of non-profit work.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-semibold text-godwin-blue">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-godwin-blue text-white" id="quote">
        <div className="container-max grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-gold">Let&apos;s accelerate your mission</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Share your goals and we&apos;ll help map the print strategy to match.</h2>
            <p className="text-lg text-blue-100">
              Include campaign purpose, target dates, and distribution needs. We&apos;ll circle back within one business day with recommendations and refined pricing.
            </p>
          </div>
          <QuoteFormCard
            endpoint={formEndpoint}
            headline="Let's accelerate your mission."
            description="Include campaign goals, donor segments, and key deadlines - we respond within one business day with next steps."
            primaryFieldLabel="Organization name"
            primaryFieldName="organization"
            submitLabel="Share campaign details"
            successMessage="Thank you! Our team will follow up within one business day with tailored recommendations."
            errorMessage="Submission failed. Please try again or email Jeremy@GodwinSolutions.cc."
            helperText="Prefer a conversation? Call 980.332.1463 and mention your campaign timeline."
            envHint="Set NEXT_PUBLIC_FORMSPREE_NONPROFIT_ENDPOINT to your Formspree endpoint to activate this form."
          />
        </div>
      </section>
    </div>
  )
}
