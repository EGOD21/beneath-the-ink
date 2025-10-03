export const metadata = {
  title: 'Privacy Policy - Beneath The Ink',
  description: 'Learn how Beneath The Ink collects, uses, and protects information shared through this website.',
}

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container-max space-y-6">
        <h1 className="text-3xl font-semibold text-godwin-blue sm:text-4xl">Privacy Policy</h1>
        <p className="text-sm text-slate-600">
          We respect your privacy and are committed to safeguarding any personal information shared with our team.
        </p>
        <div className="space-y-4 text-sm leading-relaxed text-slate-600">
          <p>
            Information submitted through forms or direct contact is used solely to deliver quotes, schedule consultations, and fulfill requested services. We do not sell or rent personal data to third parties. Service providers engaged for production or shipping receive only the details required to complete your project.
          </p>
          <p>
            Website analytics are aggregated and anonymized to help us understand engagement trends. You may request, update, or delete your information at any time by emailing{' '}
            <a className="text-godwin-blue underline" href="mailto:Jeremy@GodwinSolutions.cc">
              Jeremy@GodwinSolutions.cc
            </a>
            .
          </p>
          <p>
            This policy will evolve as our services expand. Significant changes will be communicated on this page with an updated effective date.
          </p>
        </div>
      </div>
    </div>
  )
}
