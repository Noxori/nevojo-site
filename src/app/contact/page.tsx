'use client'
import { useState } from 'react'
import Link from 'next/link'
import { divisions } from '@/lib/divisions'
import FadeIn from '@/components/ui/FadeIn'
import { copy } from '@/lib/copy'

type FormState = 'idle'|'sending'|'success'|'error'

const { hero, info, form: f } = copy.contact

export default function ContactPage() {
  const [state,  setState]  = useState<FormState>('idle')
  const [errMsg, setErrMsg] = useState('')
  const [form,   setForm]   = useState({ firstName:'', lastName:'', email:'', division:'', subject:'', message:'' })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('sending')
    setErrMsg('')
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) })
      if (res.ok) { setState('success'); setForm({ firstName:'', lastName:'', email:'', division:'', subject:'', message:'' }) }
      else { const d = await res.json(); setErrMsg(d.error ?? 'Something went wrong.'); setState('error') }
    } catch { setErrMsg('Network error — please try again.'); setState('error') }
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-nv-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-tl pointer-events-none" />
        <div className="section-container relative z-10">
          <FadeIn>
            <p className="section-tag">{hero.tag}</p>
            <h1 className="section-title mb-6">
              {hero.headline.split('\n').map((line, i) => (
                <span key={i}>{i === 0 ? line : <><br /><span className="text-nv-accent">{line}</span></>}</span>
              ))}
            </h1>
            <p className="section-sub text-lg">{hero.sub}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-nv-navy">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <FadeIn direction="left" className="lg:col-span-3">
              <div className="card-base">
                <h2 className="font-display font-bold text-xl text-nv-txt mb-6">{f.title}</h2>
                {state === 'success' ? (
                  <div className="text-center py-12" role="status" aria-live="polite">
                    <div aria-hidden="true" className="w-16 h-16 rounded-full bg-nv-accent/10 border border-nv-accent/30 flex items-center justify-center mx-auto mb-6">
                      <span className="text-nv-accent text-2xl font-bold">✓</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-nv-txt mb-3">{f.success.title}</h3>
                    <p className="text-sm text-nv-muted mb-6">{f.success.body}</p>
                    <button onClick={() => setState('idle')} className="btn-ghost text-sm">{f.success.reset}</button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5" noValidate aria-label="Contact form">
                    <p className="text-xs text-nv-muted"><span aria-hidden="true">*</span> Required fields</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="firstName" className="block text-xs font-semibold text-nv-muted mb-2 uppercase tracking-wider font-display">{f.fields.firstName} <span aria-hidden="true">*</span></label>
                        <input id="firstName" name="firstName" type="text" required aria-required="true" autoComplete="given-name" value={form.firstName} onChange={set('firstName')} placeholder={f.placeholders.firstName} className="input-base" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-xs font-semibold text-nv-muted mb-2 uppercase tracking-wider font-display">{f.fields.lastName} <span aria-hidden="true">*</span></label>
                        <input id="lastName" name="lastName" type="text" required aria-required="true" autoComplete="family-name" value={form.lastName} onChange={set('lastName')} placeholder={f.placeholders.lastName} className="input-base" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-nv-muted mb-2 uppercase tracking-wider font-display">{f.fields.email} <span aria-hidden="true">*</span></label>
                      <input id="email" name="email" type="email" required aria-required="true" autoComplete="email" value={form.email} onChange={set('email')} placeholder={f.placeholders.email} className="input-base" />
                    </div>
                    <div>
                      <label htmlFor="division" className="block text-xs font-semibold text-nv-muted mb-2 uppercase tracking-wider font-display">{f.fields.division}</label>
                      <select id="division" name="division" value={form.division} onChange={set('division')} className="input-base appearance-none">
                        <option value="">{f.placeholders.division}</option>
                        {divisions.map((d) => <option key={d.slug} value={d.name}>{d.name} — {d.tagline}</option>)}
                        <option value="General">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold text-nv-muted mb-2 uppercase tracking-wider font-display">{f.fields.subject} <span aria-hidden="true">*</span></label>
                      <input id="subject" name="subject" type="text" required aria-required="true" value={form.subject} onChange={set('subject')} placeholder={f.placeholders.subject} className="input-base" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-nv-muted mb-2 uppercase tracking-wider font-display">{f.fields.message} <span aria-hidden="true">*</span></label>
                      <textarea id="message" name="message" required aria-required="true" rows={5} value={form.message} onChange={set('message')} placeholder={f.placeholders.message} className="input-base resize-none" />
                    </div>
                    {state === 'error' && <p role="alert" className="text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">{errMsg}</p>}
                    <button type="submit" disabled={state === 'sending'} aria-busy={state === 'sending'} className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                      {state === 'sending' ? 'Sending...' : <>{f.submit} <span aria-hidden="true">↗</span></>}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="lg:col-span-2">
              <div className="space-y-5">
                <div className="card-base">
                  <h3 className="font-display font-bold text-sm text-nv-txt mb-4">Contact Information</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-xs text-nv-muted uppercase tracking-wider mb-1 font-display">Email</p>
                      <a href={`mailto:${info.email}`} className="text-nv-accent hover:underline">{info.email}</a>
                    </div>
                    <div>
                      <p className="text-xs text-nv-muted uppercase tracking-wider mb-1 font-display">Company</p>
                      <p className="text-nv-txt">{info.company}</p>
                    </div>
                    <div>
                      <p className="text-xs text-nv-muted uppercase tracking-wider mb-1 font-display">GitHub</p>
                      <a href={`https://${info.github}`} target="_blank" rel="noopener noreferrer" className="text-nv-accent hover:underline">{info.github} ↗</a>
                    </div>
                  </div>
                </div>

                <div className="card-base">
                  <h3 className="font-display font-bold text-sm text-nv-txt mb-4">Our Divisions</h3>
                  <div className="space-y-3">
                    {divisions.map((d) => (
                      <Link key={d.slug} href={`/divisions/${d.slug}`} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 rounded-full flex-shrink-0 transition-transform group-hover:scale-125" style={{ background:d.accentColor }} />
                        <div>
                          <span className="text-sm font-semibold text-nv-txt group-hover:text-white transition-colors">{d.name}</span>
                          <span className="text-xs text-nv-muted ml-2">{d.tagline}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="card-base border-nv-accent/20 bg-nv-accent/5">
                  <h3 className="font-display font-bold text-sm text-nv-accent mb-2">Response Time</h3>
                  <p className="text-xs text-nv-muted leading-relaxed">{info.response}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
