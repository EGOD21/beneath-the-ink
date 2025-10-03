export type Product = {
  name: string
  basePrice: number
  description: string
  image: string
  turnaround: string
}

export type Service = {
  name: string
  description: string
}

export type Testimonial = {
  quote: string
  author: string
  role: string
}

export const productCatalog: Product[] = [
  {
    name: 'Business Cards',
    basePrice: 22,
    description: 'Offset + digital runs with soft-touch, foil, or raised spot UV available.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
    turnaround: '2-4 business days',
  },
  {
    name: 'Presentation Folders',
    basePrice: 180,
    description: 'Custom pockets, business card slits, and short-run personalization for meetings that matter.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    turnaround: '4-6 business days',
  },
  {
    name: 'Direct Mailers',
    basePrice: 410,
    description: 'Postal-optimized formats with variable data printing and list management.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    turnaround: '3-5 business days',
  },
  {
    name: 'Large Format Banners',
    basePrice: 145,
    description: 'Indoor/outdoor banner solutions with grommets, pole pockets, or SEG frames.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
    turnaround: '2-3 business days',
  },
  {
    name: 'Packaging Sleeves',
    basePrice: 280,
    description: 'Short-run packaging systems with specialty inks, embossing, and windowing.',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80',
    turnaround: '6-8 business days',
  },
  {
    name: 'Event Signage Kits',
    basePrice: 365,
    description: 'Coordinated welcome walls, wayfinding, and branded moments for conferences and galas.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
    turnaround: '3-5 business days',
  },
]

export const servicePackages: Service[] = [
  {
    name: 'Creative & Prepress Support',
    description: 'On-demand design, dieline creation, and production consultations to translate ideas into production-ready art.',
  },
  {
    name: 'Kitting & Fulfillment',
    description: 'Assembly, pack out, and drop shipping for multi-location rollouts or development campaigns.',
  },
  {
    name: 'Inventory Management',
    description: 'Just-in-time production plans, warehousing, and reorder automation for core collateral.',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Beneath The Ink handled every detail of our summit rollout - the signage, sponsor suites, even speaker gifts. Attendees noticed the upgrade immediately.',
    author: 'Jennifer Cole',
    role: 'Director of Experiential Marketing, Charlotte Innovation Summit',
  },
  {
    quote:
      'Our capital campaign materials elevated the entire conversation with donors. The team translated our mission into pieces people want to keep.',
    author: 'Marcus Lee',
    role: 'Executive Director, Riverlight Foundation',
  },
  {
    quote:
      'The brand kit they produced for our hotels brought warmth and cohesion to every guest touchpoint. Turnaround times were lightning fast.',
    author: 'Priya Desai',
    role: 'VP of Brand Experience, Eastover Hospitality Group',
  },
]

export const processSteps = [
  {
    title: 'Discovery',
    summary: 'Align on campaign goals, quantities, budgets, and critical dates to set the production roadmap.',
  },
  {
    title: 'Proof & Prototype',
    summary: 'Sampling, color targets, and structural engineering that derisk the big day before we go to press.',
  },
  {
    title: 'Produce & Deliver',
    summary: 'Meticulous press checks, finishing oversight, and fulfillment logistics to meet every milestone.',
  },
]

export const faqs = [
  {
    question: 'What files do you need to get started?',
    answer:
      'Press-ready PDFs with 0.125" bleed are ideal. Our prepress team can assist with native files from Adobe CC if needed.',
  },
  {
    question: 'Do you offer rush production?',
    answer:
      'Yes. Depending on scope we can turn certain projects in as little as 12 hours. Share your target date and we will map the options.',
  },
  {
    question: 'Can you coordinate installation?',
    answer:
      'We partner with a vetted installer network across the Southeast for environmental graphics, fleet wraps, and signage programs.',
  },
]
