import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { divisions, getDivision } from '@/lib/divisions'
import FadeIn from '@/components/ui/FadeIn'
import CTASection from '@/components/ui/CTASection'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = getDivision(params.slug)
  if (!d) return {}
  return { title:`${d.name} — ${d.tagline}`, description: d.description }
}

export default function DivisionPage({ params }: Props) {
  const division = getDivision(params.slug)
  if (!division) notFound()

  const others = divisions.filter((d) => d.slug !== division.slug)

  return (
    <>
      {/* Accent bar */}
      <div className="fixed top-0 inset-x-0 h-1 z-[60]" style={{ background: division.accentColor }} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-nv-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:`radial-gradient(ellipse at top left, ${division.accentColor}08 0%, transparent 60%)` }} />
        <div className="section-container relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-nv-muted mb-8 font-display">
            <Link href="/" className="hover:text-nv-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/divisions" className="hover:text-nv-accent transition-colors">Divisions</Link>
            <span>/</span>
            <span style={{ color: division.accentColor }}>{division.name}</span>
          </div>

          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border font-display font-extrabold text-lg"
                style={{ background:`${division.accentColor}15`, borderColor:`${division.accentColor}40`, color:division.accentColor }}>
                {division.name[0]}
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[2px] uppercase font-display" style={{ color:division.accentColor }}>
                  {division.tagline}
                </p>
                <span className="text-[10px] px-2 py-0.5 rounded-full border inline-flex mt-1 font-bold"
                  style={{ color:division.accentColor, borderColor:`${division.accentColor}40`, background:`${division.accentColor}10` }}>
                  {division.status === 'live' ? 'Live' : division.status === 'active' ? 'Active' : division.status === 'launching' ? 'Launching Soon' : 'Coming Soon'}
                </span>
              </div>
            </div>

            <h1 className="section-title mb-6">{division.name}</h1>
            <p className="section-sub text-lg mb-8">{division.description}</p>

            <div className="flex flex-wrap gap-2 mb-10">
              {division.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full border font-medium"
                  style={{ color:division.accentColor, borderColor:`${division.accentColor}30`, background:`${division.accentColor}08` }}>
                  {tag}
                </span>
              ))}
            </div>

            <Link href="/contact" className="btn-primary"
              style={{ background:division.accentColor, color:division.textColor }}>
              Work With {division.name} ↗
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* About + Features */}
      <section className="py-20 bg-nv-navy">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <p className="section-tag">About {division.name}</p>
              <h2 className="font-display font-extrabold text-3xl text-nv-txt mb-6 leading-tight">
                What {division.name} Does
              </h2>
              <p className="text-sm text-nv-muted leading-relaxed mb-6">{division.longDescription}</p>
              <p className="text-xs text-nv-muted font-semibold uppercase tracking-wider mb-2 font-display">Focus Areas</p>
              <p className="text-sm text-nv-txt">{division.focus}</p>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <p className="section-tag">Core Capabilities</p>
              <div className="grid grid-cols-1 gap-4">
                {division.features.map((f) => (
                  <div key={f.title} className="p-4 rounded-xl border bg-nv-dark"
                    style={{ borderColor:`${division.accentColor}20` }}>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background:division.accentColor }} />
                      <div>
                        <h4 className="font-display font-bold text-sm text-nv-txt mb-1">{f.title}</h4>
                        <p className="text-xs text-nv-muted leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Other Divisions */}
      <section className="py-20 bg-nv-dark border-t border-nv-border">
        <div className="section-container">
          <FadeIn>
            <p className="section-tag">Nevojo Portfolio</p>
            <h2 className="font-display font-extrabold text-2xl text-nv-txt mb-8">Other Divisions</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {others.map((d, i) => (
              <FadeIn key={d.slug} delay={i * 0.1}>
                <Link href={`/divisions/${d.slug}`}
                  className="block card-base card-hover group relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-0.5 opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ background:d.accentColor }} />
                  <p className="text-[10px] font-bold tracking-[2px] uppercase font-display mb-1" style={{ color:d.accentColor }}>
                    {d.tagline}
                  </p>
                  <h3 className="font-display font-extrabold text-lg text-nv-txt mb-2">{d.name}</h3>
                  <p className="text-xs text-nv-muted leading-relaxed line-clamp-2 mb-3">{d.description}</p>
                  <span className="text-xs font-bold font-display" style={{ color:d.accentColor }}>Explore →</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
