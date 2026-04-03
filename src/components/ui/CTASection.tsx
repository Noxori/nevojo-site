import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import { copy } from '@/lib/copy'

const defaultCopy = copy.home.cta

interface Props {
  tag?:      string
  heading?:  string
  sub?:      string
  cta1?:     string
  cta2?:     string
  cta1Href?: string
  cta2Href?: string
}

export default function CTASection({
  tag      = defaultCopy.tag,
  heading  = defaultCopy.headline,
  sub      = defaultCopy.sub,
  cta1     = defaultCopy.cta1,
  cta2     = defaultCopy.cta2,
  cta1Href = '/contact',
  cta2Href = '/services',
}: Props) {
  return (
    <section className="py-24 bg-nv-navy">
      <div className="section-container">
        <FadeIn>
          <div
            className="relative rounded-2xl border border-nv-accent/20 p-12 md:p-16 text-center overflow-hidden"
            style={{ background:'linear-gradient(135deg, rgba(6,214,199,0.04) 0%, rgba(8,145,178,0.03) 100%)' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-40 pointer-events-none"
              style={{ background:'radial-gradient(ellipse, rgba(6,214,199,0.07) 0%, transparent 70%)' }} />
            <p className="section-tag justify-center flex mb-4">{tag}</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-nv-txt mb-4 relative z-10">
              {heading.split('Extraordinary').map((part, i, arr) =>
                i < arr.length - 1
                  ? <span key={i}>{part}<span className="text-nv-accent">Extraordinary</span></span>
                  : <span key={i}>{part}</span>
              )}
            </h2>
            <p className="text-nv-muted text-base max-w-lg mx-auto mb-10 leading-relaxed relative z-10">{sub}</p>
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              <Link href={cta1Href} className="btn-primary">{cta1} ↗</Link>
              <Link href={cta2Href} className="btn-ghost">{cta2}</Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
