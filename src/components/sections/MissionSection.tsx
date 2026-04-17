import FadeIn from '@/components/ui/FadeIn'
import { copy } from '@/lib/copy'

const { mission } = copy.home

export default function MissionSection() {
  return (
    <section className="py-24 bg-nv-dark border-t border-b border-nv-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="section-tag">{mission.tag}</p>
            <blockquote className="font-display font-bold text-2xl lg:text-3xl leading-snug text-nv-txt">
              {mission.quote.split('accessible, innovative, and culturally resonant technology').map((part, i, arr) =>
                i < arr.length - 1
                  ? <span key={i}>{part}<em className="not-italic text-nv-accent">accessible, innovative, and culturally resonant technology</em></span>
                  : <span key={i}>{part}</span>
              )}
            </blockquote>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col gap-5">
              {mission.pillars.map((p) => (
                <div key={p.title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-nv-accent/10 border border-nv-accent/30 flex items-center justify-center mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-nv-accent block" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-nv-txt mb-1">{p.title}</h3>
                    <p className="text-sm text-nv-muted leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
