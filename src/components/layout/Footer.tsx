import Link from 'next/link'
import { divisions } from '@/lib/divisions'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-nv-navy border-t border-nv-border" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site footer</h2>
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Nevojo Technologies — home" className="font-display font-extrabold text-2xl mb-4 block">
              NEVO<span className="text-nv-accent">JO</span>
            </Link>
            <p className="text-nv-muted text-sm leading-relaxed max-w-xs">
              A multidisciplinary tech company building the future through software,
              AI, design, and innovation — for a global audience.
            </p>
          </div>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="font-display font-bold text-xs tracking-widest uppercase text-nv-muted mb-5">Company</h3>
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
          </nav>

          {/* Divisions */}
          <nav aria-label="Divisions">
            <h3 className="font-display font-bold text-xs tracking-widest uppercase text-nv-muted mb-5">Divisions</h3>
            <ul className="space-y-3 text-sm">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/divisions/${d.slug}`}
                    className="flex items-center gap-2 text-nv-muted hover:text-nv-accent transition-colors group"
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform group-hover:scale-125"
                      style={{ background: d.accentColor }}
                    />
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar — clean, no personal details */}
        <div className="pt-8 border-t border-nv-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-nv-muted">
            © {year} Nevojo Technologies LLC. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex items-center gap-5 text-xs text-nv-muted">
            <Link href="/privacy"       className="hover:text-nv-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms"         className="hover:text-nv-accent transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-nv-accent transition-colors">Accessibility</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
