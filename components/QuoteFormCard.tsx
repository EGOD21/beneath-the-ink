'use client'

import { FormEvent, useState } from 'react'

type QuoteFormCardProps = {
  endpoint?: string
  headline: string
  description: string
  primaryFieldLabel: string
  primaryFieldName: string
  submitLabel: string
  successMessage: string
  errorMessage: string
  helperText?: string
  envHint?: string
}

export function QuoteFormCard({
  endpoint,
  headline,
  description,
  primaryFieldLabel,
  primaryFieldName,
  submitLabel,
  successMessage,
  errorMessage,
  helperText,
  envHint,
}: QuoteFormCardProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!endpoint) {
      setStatus('error')
      setMessage('Form endpoint is not configured yet.')
      return
    }

    setStatus('loading')
    setMessage('')

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setStatus('success')
        setMessage(successMessage)
        event.currentTarget.reset()
      } else {
        const data = await response.json().catch(() => ({}))
        setStatus('error')
        setMessage(data?.message ?? errorMessage)
      }
    } catch (error) {
      console.error('Quote form submission failed', error)
      setStatus('error')
      setMessage(errorMessage)
    }
  }

  return (
    <div className="rounded-3xl bg-white/10 p-8 shadow-xl backdrop-blur">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-white">{headline}</h3>
          <p className="text-sm text-blue-100">{description}</p>
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-blue-100">
            {primaryFieldLabel}
            <input
              className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-100 focus:border-godwin-gold focus:outline-none"
              name={primaryFieldName}
              type="text"
              required
            />
          </label>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm font-semibold text-blue-100">
              Email
              <input
                className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-100 focus:border-godwin-gold focus:outline-none"
                name="email"
                type="email"
                required
              />
            </label>
            <label className="block text-sm font-semibold text-blue-100">
              Phone
              <input
                className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-100 focus:border-godwin-gold focus:outline-none"
                name="phone"
                type="tel"
              />
            </label>
          </div>
          <label className="block text-sm font-semibold text-blue-100">
            Project Details
            <textarea
              className="mt-1 h-32 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-100 focus:border-godwin-gold focus:outline-none"
              name="details"
              placeholder="Quantities, target dates, inspiration links"
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || !endpoint}
          className="inline-flex w-full items-center justify-center rounded-full bg-godwin-gold px-6 py-3 text-sm font-semibold text-slate-900 transition-transform hover:-translate-y-0.5 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? 'Sending...' : submitLabel}
        </button>
        {helperText && (
          <p className="text-xs text-blue-100">{helperText}</p>
        )}
        {status === 'success' && (
          <p className="text-xs font-semibold text-emerald-200">{message}</p>
        )}
        {status === 'error' && (
          <p className="text-xs font-semibold text-rose-200">{message}</p>
        )}
        {!endpoint && (
          <p className="text-xs text-blue-200">
            {envHint ?? 'Add a NEXT_PUBLIC_FORMSPREE_* environment variable to enable live submissions.'}
          </p>
        )}
      </form>
    </div>
  )
}
