# Beneath The Ink - Next.js

Premium print and brand studio site built with Next.js 14 and Tailwind CSS. The refreshed experience introduces a decision-focused landing page, dedicated business/personal and non-profit funnels, and pricing that automatically applies audience-specific markups.

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Run the development server
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000` to explore the landing page, `http://localhost:3000/business` for the business & personal experience, and `http://localhost:3000/non-profit` for the non-profit view.

## Environment Configuration

Forms submit to Formspree endpoints so inquiries land in the client inbox without relying on `mailto` links. Add these to a `.env.local` file and restart the dev server:

```env
NEXT_PUBLIC_FORMSPREE_BUSINESS_ENDPOINT=https://formspree.io/f/your-business-form-id
NEXT_PUBLIC_FORMSPREE_NONPROFIT_ENDPOINT=https://formspree.io/f/your-nonprofit-form-id
```

Leave the values blank during local previews to show a helpful configuration hint on the form cards.

## Site Map & Pricing Logic

- `/` - Landing page with brand story, services overview, and clear CTAs for business/personal vs. non-profit journeys.
- `/business` - Mirrors the Printograph-inspired layout with updated storytelling for high-velocity marketing teams. Pricing applies a **50% markup** to the shared product catalog defined in `data/catalog.ts`.
- `/non-profit` - Mission-driven variant with impact messaging, stewardship emphasis, and a **20% markup** on the same base pricing.

The markup is controlled in each page (`app/business/page.tsx` and `app/non-profit/page.tsx`) so changes to the shared product catalog automatically flow through both experiences.

## Design System Highlights

- **Typography**: Inter (sans) paired with Playfair Display (serif accents) via Next Font APIs.
- **Palette**: Deep navy (`godwin-blue`), warm gold (`godwin-gold`), slate neutrals, and emerald accents for non-profit CTAs.
- **Components**: Sticky global header, split CTA hero cards, card-hover treatments, and curated section spacing via `.section-padding`.

## Suggested Next Enhancements

1. Layer in CMS support (Sanity, Contentful, or Notion sync) to empower the client to manage catalog items, testimonials, and FAQs without code changes.
2. Expand legal/utility pages (`/privacy`, `/terms`) and surface location-specific SEO blocks for regional targeting.
3. Connect form submissions to a CRM or email marketing workflow (HubSpot, Mailchimp) for automated follow-up sequences.
4. Implement automated visual regression tests (Chromatic, Playwright) to maintain polish as the design evolves.
5. Produce audience-specific landing variants or case study detail pages to continue refining conversion paths.
