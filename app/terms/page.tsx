export const metadata = {
  title: 'Terms of Service - Beneath The Ink',
  description: 'Review the engagement terms for Beneath The Ink print, signage, and creative services.',
}

export default function TermsPage() {
  return (
    <div className="section-padding">
      <div className="container-max space-y-6">
        <h1 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">Terms of Service</h1>
        <div className="space-y-4 text-sm leading-relaxed text-slate-600">
          <p>
            Project scopes, pricing, and timelines are confirmed via written proposals or statements of work. Approval of proofs constitutes authorization to proceed with production and confirms responsibility for final content accuracy.
          </p>
          <p>
            Rush orders may incur additional fees and require prepayment before production begins. Unless otherwise noted, invoices are due within 15 days of delivery. Materials remain the property of Beneath The Ink until payment is received in full.
          </p>
          <p>
            Color accuracy is maintained through industry-standard calibration; however, slight variance may occur between print runs due to substrate and press conditions. Any concerns must be submitted within five business days of delivery so we can review and remedy quickly.
          </p>
          <p>
            Questions about these terms can be directed to{' '}
            <a className="text-godwin-blue underline" href="mailto:Jeremy@GodwinSolutions.cc">
              Jeremy@GodwinSolutions.cc
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
