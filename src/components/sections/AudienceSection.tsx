import FadeIn from '@/components/ui/FadeIn'
import { copy } from '@/lib/copy'

const { audience } = copy.home

export default function AudienceSection() {
  return (
    <section className="py-24 bg-nv-dark">
      <div className="section-container">
        <FadeIn>
          <p className="section-tag">{audience.tag}</p>
          <h2 className="section-title mb-12">{audience.headline}</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audience.items.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.1}>
              <div className="card-base card-hover text-center h-full">
                <div className="w-8 h-8 rounded-lg bg-nv-accent/10 border border-nv-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-nv-accent text-sm font-bold">◈</span>
                </div>
                <h3 className="font-display font-bold text-sm text-nv-txt mb-2">{a.title}</h3>
                <p className="text-sm text-nv-muted leading-relaxed">{a.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
