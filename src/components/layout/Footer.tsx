import Link from 'next/link'
import { divisions } from '@/lib/divisions'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-nv-navy border-t border-nv-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display font-extrabold text-2xl mb-4 block">
              NEVO<span className="text-nv-accent">JO</span>
            </Link>
            <p className="text-nv-muted text-sm leading-relaxed max-w-xs">
              A multidisciplinary tech company building the future through software,
              AI, design, and innovation — for a global audience.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-xs tracking-widest uppercase text-nv-muted mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-nv-muted">
              {[
                { href:'/',          label:'Home' },
                { href:'/about',     label:'About Us' },
                { href:'/divisions', label:'Our Divisions' },
                { href:'/services',  label:'Services' },
                { href:'/blog',      label:'Insights' },
                { href:'/contact',   label:'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-nv-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="font-display font-bold text-xs tracking-widest uppercase text-nv-muted mb-5">Divisions</h4>
            <ul className="space-y-3 text-sm">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/divisions/${d.slug}`}
                    className="flex items-center gap-2 text-nv-muted hover:text-nv-accent transition-colors group"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform group-hover:scale-125"
                      style={{ background: d.accentColor }}
                    />
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar — clean, no personal details */}
        <div className="pt-8 border-t border-nv-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-nv-muted">
            © {year} Nevojo Technologies LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-nv-muted">
            <Link href="/privacy" className="hover:text-nv-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-nv-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
