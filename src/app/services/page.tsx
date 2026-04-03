import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/services'
import FadeIn from '@/components/ui/FadeIn'
import CTASection from '@/components/ui/CTASection'
import { copy } from '@/lib/copy'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Nevojo Technologies services — AI software development, AI integrations, branded chat embeds, UI/UX design, intelligence tools, custom hardware builds, and premium consulting.',
}

const { hero, process } = copy.services

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-nv-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-tl pointer-events-none" />
        <div className="absolute inset-0 bg-glow-br pointer-events-none" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <FadeIn key={svc.id} delay={i * 0.08}>
                <div className={`relative rounded-xl border bg-nv-dark p-7 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 group ${svc.popular ? 'border-nv-accent/40' : 'border-nv-border hover:border-nv-muted/50'}`}>
                  {svc.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-nv-accent text-nv-dark text-[10px] font-bold px-3 py-1 rounded-full font-display tracking-wide">Most Popular</span>
                    </div>
                  )}
                  <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-xl opacity-50 group-hover:opacity-100 transition-opacity" style={{ background: svc.accentColor }} />
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-[2px] uppercase font-display px-2.5 py-1 rounded-full border"
                      style={{ color:svc.accentColor, borderColor:`${svc.accentColor}40`, background:`${svc.accentColor}10` }}>
                      {svc.division}
                    </span>
                    <span className="font-display font-extrabold text-xl" style={{ color: svc.accentColor }}>
                      {svc.priceFrom === 'By inquiry' ? 'By Inquiry' : `From ${svc.priceFrom}`}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-nv-txt mb-3 group-hover:text-white transition-colors">{svc.title}</h3>
                  <p className="text-sm text-nv-muted leading-relaxed mb-5">{svc.description}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-xs text-nv-muted">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: svc.accentColor }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact"
                    className="btn-outline-accent text-sm w-full justify-center mt-auto"
                    style={{ borderColor:`${svc.accentColor}50`, color:svc.accentColor }}>
                    Get Started →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-nv-dark border-t border-nv-border">
        <div className="section-container">
          <FadeIn>
            <p className="section-tag">{process.tag}</p>
            <h2 className="section-title mb-12">{process.headline}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.steps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div className="card-base card-hover h-full">
                  <div className="font-display font-extrabold text-3xl text-nv-border mb-4">{s.step}</div>
                  <h4 className="font-display font-bold text-sm text-nv-accent mb-2">{s.title}</h4>
                  <p className="text-sm text-nv-muted leading-relaxed">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Get Started?"
        sub="Tell us what you need and we will match you with the right Nevojo division and service for your goals."
        cta1="Start a Project"
        cta2="Our Divisions"
        cta2Href="/divisions"
      />
    </>
  )
}
