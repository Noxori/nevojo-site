import Link from 'next/link'
import { Division } from '@/lib/divisions'
import clsx from 'clsx'

const statusLabel: Record<Division['status'], string> = {
  live:'Live', active:'Active', launching:'Launching', 'coming-soon':'Coming Soon',
}

export default function DivisionCard({ division, featured=false }: { division:Division; featured?:boolean }) {
  return (
    <Link
      href={`/divisions/${division.slug}`}
      className={clsx(
        'group relative block rounded-xl border border-nv-border bg-nv-navy p-6',
        'transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50',
        featured && 'md:col-span-2'
      )}
    >
      {/* Accent top line */}
      <div
        className="absolute top-0 inset-x-0 h-[2px] rounded-t-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: division.accentColor }}
      />
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${division.accentColor}06 0%, transparent 60%)` }}
      />

      <div className={clsx('relative flex gap-5', featured ? 'flex-row items-start' : 'flex-col')}>
        {/* Icon */}
        <div
          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border font-display font-extrabold text-sm"
          style={{ background:`${division.accentColor}15`, borderColor:`${division.accentColor}40`, color:division.accentColor }}
        >
          {division.name[0]}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className="text-[10px] font-bold tracking-[2px] uppercase font-display" style={{ color:division.accentColor }}>
              {division.tagline}
            </span>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full border font-bold"
              style={{ color:division.accentColor, borderColor:`${division.accentColor}40`, background:`${division.accentColor}10` }}
            >
              {statusLabel[division.status]}
            </span>
          </div>

          <h3 className="font-display font-extrabold text-xl text-nv-txt mb-2 group-hover:text-white transition-colors">
            {division.name}
          </h3>
          <p className="text-sm text-nv-muted leading-relaxed mb-4">{division.description}</p>

          <div className="flex flex-wrap gap-2">
            {division.tags.slice(0, featured ? 6 : 4).map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>

          {featured && (
            <p className="mt-4 text-sm font-bold font-display flex items-center gap-1 group-hover:gap-2 transition-all duration-200" style={{ color:division.accentColor }}>
              Explore {division.name} →
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
