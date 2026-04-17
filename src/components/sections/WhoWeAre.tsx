import FadeIn from '@/components/ui/FadeIn'
import { copy } from '@/lib/copy'

const { who } = copy.home

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-nv-navy relative">
      <div className="section-container">
        <FadeIn>
          <p className="section-tag">{who.tag}</p>
          <h2 className="section-title mb-4">
            {who.headline.split('\n').map((line, i) => (
              <span key={i}>{i === 0 ? line : <><br /><span className="text-nv-accent">{line}</span></>}</span>
            ))}
          </h2>
          <p className="section-sub mb-12">{who.sub}</p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {who.cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.1}>
              <div className={`card-base h-full ${i === 0 ? 'border-nv-accent/25 bg-nv-accent/5' : 'card-hover'}`}>
                <h3 className="font-display font-bold text-sm text-nv-txt mb-3">{c.title}</h3>
                <p className="text-sm text-nv-muted leading-relaxed">{c.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
