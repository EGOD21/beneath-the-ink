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

const markup = 1.5
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

const industries = [
  'Creative Agencies & Studios',
  'Professional Services',
  'Real Estate & Development',
  'Hospitality & Restaurants',
  'Higher Education',
  'Retail & E-commerce',
]

export const metadata = {
  title: 'Beneath The Ink for Business & Personal Brands',
  description:
    'Premium print production, packaging, and signage solutions for marketing teams, agencies, and entrepreneurs - delivered with white-glove service.',
}

export default function BusinessPage() {
  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_BUSINESS_ENDPOINT

  return (
    <div className="space-y-24 lg:space-y-32">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
            alt="Business professional reviewing premium print samples"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>
        <div className="relative container-max grid gap-12 px-4 py-32 sm:py-36 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div className="space-y-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-godwin-gold">
              Business &amp; Personal
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Your production partner for launches, events, and everyday brand moments.
            </h1>
            <p className="text-lg text-slate-200">
              We support marketing teams, agencies, and entrepreneurs with color-faithful, on-brand deliverables - from press kits and packaging to signage and experiential environments.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-full bg-godwin-gold px-6 py-3 text-sm font-semibold text-slate-900 transition-transform hover:-translate-y-0.5 hover:bg-amber-400"
              >
                Start a project
              </a>
              <Link
                href="/non-profit"
                className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10"
              >
                Serving a non-profit?
              </Link>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/10 p-8 text-white backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-200">Average turnaround</p>
              <p className="mt-1 text-3xl font-semibold text-godwin-gold">3.4 days</p>
            </div>
            <div className="border-t border-white/10 pt-4 text-sm text-slate-200">
              <p>Dedicated production manager</p>
              <p>Color management &amp; proofing</p>
              <p>Nationwide fulfillment available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" id="pricing">
        <div className="container-max space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-blue/60">Signature deliverables</p>
            <h2 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">
              High-touch print and packaging engineered to drive response.
            </h2>
            <p className="text-lg text-slate-600">
              Transparent pricing includes strategic oversight, press checks, and finishing management. Rush options available upon request.
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
                  <span className="rounded-full bg-godwin-blue/10 px-3 py-1 text-xs font-semibold text-godwin-blue">
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
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-blue/60">How we work</p>
            <h2 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">
              Built to ship premium work on compressed timelines.
            </h2>
            <p className="text-lg text-slate-600">
              Every engagement includes a dedicated production manager, proactive communication, and milestone tracking so you always know what is on press.
            </p>
            <div className="rounded-3xl border border-godwin-blue/10 bg-white/70 p-8 shadow-2xl shadow-godwin-blue/10">
              <h3 className="text-xl font-semibold text-godwin-blue">Included with every project</h3>
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
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-blue/60">Industries we support</p>
            <h2 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">
              Specialized knowledge for complex rollouts and brand activations.
            </h2>
            <p className="text-lg text-slate-600">
              We understand stakeholder approvals, compliance requirements, and the need to keep every detail on-brand - even at scale.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry) => (
              <div key={industry} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-godwin-blue shadow-sm">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50" id="testimonials">
        <div className="container-max space-y-10">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-blue/60">Client feedback</p>
            <h2 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">Trusted partners for fast-moving teams.</h2>
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
            <h2 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">Answers to common production questions.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
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
            <p className="text-sm uppercase tracking-[0.3em] text-godwin-gold">Let&apos;s build together</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Share your specs and we&apos;ll reply within one business day.</h2>
            <p className="text-lg text-blue-100">
              Provide quantities, target dates, and any inspiration. We&apos;ll send production options, proofs, and scheduling in record time.
            </p>
          </div>
          <QuoteFormCard
            endpoint={formEndpoint}
            headline="Let's craft what's next."
            description="Share your timeline, quantities, and inspiration - our production team responds within one business day."
            primaryFieldLabel="Company or project name"
            primaryFieldName="company"
            submitLabel="Send project details"
            successMessage="Thank you! We'll be in touch within one business day."
            errorMessage="Something went wrong. Please try again or email Jeremy@GodwinSolutions.cc."
            helperText="Prefer to talk it through? Call 980.332.1463 and reference your project name."
            envHint="Set NEXT_PUBLIC_FORMSPREE_BUSINESS_ENDPOINT to your Formspree endpoint to activate this form."
          />
        </div>
      </section>
    </div>
  )
}
