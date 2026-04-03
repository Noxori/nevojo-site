import Link from 'next/link'
import { divisions } from '@/lib/divisions'
import DivisionCard from '@/components/ui/DivisionCard'
import FadeIn from '@/components/ui/FadeIn'

export default function DivisionsSection() {
  return (
    <section className="py-24 bg-nv-dark relative">
      <div className="absolute inset-0 bg-glow-center pointer-events-none" />
      <div className="section-container relative z-10">
        <FadeIn>
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <p className="section-tag">Our Divisions</p>
              <h2 className="section-title">One Company.<br /><span className="text-nv-accent">Four Brands.</span></h2>
            </div>
            <Link href="/divisions" className="btn-ghost text-sm flex-shrink-0">View All Divisions →</Link>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FadeIn delay={0.1} className="md:col-span-2"><DivisionCard division={divisions[0]} featured /></FadeIn>
          <FadeIn delay={0.2}><DivisionCard division={divisions[1]} /></FadeIn>
          <FadeIn delay={0.3}><DivisionCard division={divisions[2]} /></FadeIn>
          <FadeIn delay={0.4} className="md:col-span-2"><DivisionCard division={divisions[3]} featured /></FadeIn>
        </div>
      </div>
    </section>
  )
}
