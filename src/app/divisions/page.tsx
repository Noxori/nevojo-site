import type { Metadata } from 'next'
import { divisions } from '@/lib/divisions'
import DivisionCard from '@/components/ui/DivisionCard'
import FadeIn from '@/components/ui/FadeIn'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Our Divisions',
  description: 'Explore the four specialized divisions of Nevojo Technologies — Guavamatic, Oryniq, Kazuriq, and Noxori.',
}

export default function DivisionsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-nv-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-tl pointer-events-none" />
        <div className="section-container relative z-10">
          <FadeIn>
            <p className="section-tag">Our Divisions</p>
            <h1 className="section-title mb-6">
              One Company.<br /><span className="text-nv-accent">Four Specialized Brands.</span>
            </h1>
            <p className="section-sub text-lg">
              Each Nevojo division is purpose-built for a distinct market — with its own identity,
              audience, and product focus — all unified by shared values and infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-nv-navy">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {divisions.map((d, i) => (
              <FadeIn key={d.slug} delay={i * 0.1} className={i === 0 || i === 3 ? 'md:col-span-2' : ''}>
                <DivisionCard division={d} featured={i === 0 || i === 3} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio model explainer */}
      <section className="py-20 bg-nv-dark border-t border-nv-border">
        <div className="section-container">
          <FadeIn>
            <p className="section-tag">Portfolio Model</p>
            <h2 className="section-title mb-4">Why a Multi-Brand Architecture?</h2>
            <p className="section-sub mb-12">
              Instead of one generalist company trying to do everything, Nevojo runs focused brands
              that go deep in their lane — while sharing the parent company&apos;s infrastructure,
              expertise, and values.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title:'Focused Expertise',   body:"Each division is tooled specifically for its domain. No dilution, no generalist compromises." },
              { title:'Shared Infrastructure',body:"All brands leverage Nevojo's shared technology stack, design systems, and operational backbone." },
              { title:'Unified Values',       body:"Every division operates under the same mission: accessible, innovative, culturally resonant technology." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="card-base card-hover h-full">
                  <h4 className="font-display font-bold text-sm text-nv-accent mb-3">{item.title}</h4>
                  <p className="text-sm text-nv-muted leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
