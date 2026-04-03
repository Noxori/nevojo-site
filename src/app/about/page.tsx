import type { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'
import CTASection from '@/components/ui/CTASection'
import { copy } from '@/lib/copy'

export const metadata: Metadata = {
  title: 'About Nevojo Technologies',
  description: 'The story, values, and vision behind Nevojo Technologies — a multidisciplinary tech company built as a portfolio of four specialized brands.',
}

const { hero, story, facts, values, identity } = copy.about

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-nv-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-tl pointer-events-none" />
        <div className="absolute inset-0 bg-glow-purple pointer-events-none" />
        <div className="section-container relative z-10">
          <FadeIn>
            <p className="section-tag">{hero.tag}</p>
            <h1 className="section-title mb-6 max-w-3xl">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <p className="section-tag">{story.tag}</p>
              <h2 className="font-display font-extrabold text-3xl text-nv-txt mb-6 leading-tight">{story.headline}</h2>
              <div className="space-y-4 text-sm text-nv-muted leading-relaxed">
                {story.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <p className="section-tag">Quick Facts</p>
              <div className="space-y-0 mb-10">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-center justify-between py-3.5 border-b border-nv-border">
                    <span className="text-xs text-nv-muted font-semibold uppercase tracking-wider font-display">{f.label}</span>
                    <span className="text-sm text-nv-txt font-medium">{f.value}</span>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-2 border-nv-accent pl-5">
                <p className="font-display font-bold text-base text-nv-txt leading-snug mb-2">
                  &ldquo;{copy.mission}&rdquo;
                </p>
                <cite className="text-xs text-nv-muted not-italic">— Nevojo Technologies</cite>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-nv-dark">
        <div className="section-container">
          <FadeIn>
            <p className="section-tag">{values.tag}</p>
            <h2 className="section-title mb-12">{values.headline}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.items.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="card-base card-hover h-full group">
                  <h4 className="font-display font-bold text-base text-nv-accent mb-3 group-hover:brightness-110 transition-all">{v.title}</h4>
                  <p className="text-sm text-nv-muted leading-relaxed">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-nv-navy border-t border-nv-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <p className="section-tag justify-center flex">{identity.tag}</p>
              <h2 className="section-title mb-6">
                {identity.headline.split('\n').map((line, i) => (
                  <span key={i}>{i > 0 && <br />}{line}</span>
                ))}
              </h2>
              <p className="text-nv-muted text-base leading-relaxed mb-10">{identity.body}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {identity.stats.map((s) => (
                  <div key={s.stat} className="card-base text-center">
                    <div className="font-display font-extrabold text-2xl text-nv-accent mb-1">{s.stat}</div>
                    <div className="text-xs text-nv-muted">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Work With Us?"
        sub="Tell us about your project. We will match you with the right Nevojo division and show you exactly what working together looks like."
        cta1="Start a Project"
        cta2="View Our Services"
        cta2Href="/services"
      />
    </>
  )
}
