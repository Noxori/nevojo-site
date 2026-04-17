import FadeIn from '@/components/ui/FadeIn'
import { copy } from '@/lib/copy'

const { why } = copy.home

export default function WhyNevojo() {
  return (
    <section className="py-24 bg-nv-navy">
      <div className="section-container">
        <FadeIn>
          <p className="section-tag">{why.tag}</p>
          <h2 className="section-title mb-4">
            {why.headline.split('\n').map((line, i) => (
              <span key={i}>{i > 0 && <br />}{line}</span>
            ))}
          </h2>
          <p className="section-sub mb-12">{why.sub}</p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {why.items.map((d, i) => (
            <FadeIn key={d.num} delay={i * 0.08}>
              <div className="card-base card-hover h-full">
                <div className="font-display font-extrabold text-3xl text-nv-border mb-4">{d.num}</div>
                <h3 className="font-display font-bold text-sm text-nv-txt mb-2">{d.title}</h3>
                <p className="text-sm text-nv-muted leading-relaxed">{d.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
