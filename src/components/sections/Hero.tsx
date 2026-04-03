'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { copy } from '@/lib/copy'

const { hero, stats } = copy.home

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-nv-dark">
      <div className="absolute inset-0 bg-glow-tl pointer-events-none" />
      <div className="absolute inset-0 bg-glow-br pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {[
        { style:{ top:'22%', right:'18%', width:500, height:500 }, color:'rgba(6,214,199,0.05)',  delay:0, dur:7 },
        { style:{ bottom:'28%', left:'8%',  width:380, height:380 }, color:'rgba(8,145,178,0.04)',  delay:2, dur:9 },
        { style:{ top:'58%', right:'42%',  width:300, height:300 }, color:'rgba(42,45,110,0.06)',  delay:4, dur:11 },
      ].map((orb, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ ...orb.style, background:`radial-gradient(circle, ${orb.color} 0%, transparent 70%)` }}
          animate={{ scale:[1,1.12,1], opacity:[0.5,0.9,0.5] }}
          transition={{ duration:orb.dur, repeat:Infinity, ease:'easeInOut', delay:orb.delay }}
        />
      ))}

      <div className="section-container relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity:0, y:32 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.9, ease:[0.22,1,0.36,1] }}
        >
          {/* Headline — no eyebrow, no badge, lands clean */}
          <motion.h1
            className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] leading-[1.04] tracking-tight mb-6 max-w-4xl"
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.2, duration:0.8 }}
          >
            {hero.headline[0]}{' '}
            <span className="text-nv-accent relative">
              {hero.headline[1]}
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-nv-accent/40 rounded-full"
                initial={{ scaleX:0 }}
                animate={{ scaleX:1 }}
                transition={{ delay:0.8, duration:0.6, ease:[0.22,1,0.36,1] }}
                style={{ originX:0 }}
              />
            </span>
            <br />{hero.headline[2]}
          </motion.h1>

          <motion.p
            className="text-nv-muted text-lg leading-relaxed max-w-xl mb-10"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.4, duration:0.7 }}
          >
            {hero.sub}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-16"
            initial={{ opacity:0, y:12 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.5, duration:0.6 }}
          >
            <Link href="/divisions" className="btn-primary">{hero.cta1} ↗</Link>
            <Link href="/about"     className="btn-ghost">{hero.cta2}</Link>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-10 pt-10 border-t border-nv-border"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.7, duration:0.6 }}
          >
            {stats.map((s, i) => (
              <motion.div key={s.lbl}
                initial={{ opacity:0, y:10 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay:0.8 + i * 0.1, duration:0.5 }}
              >
                <div className="font-display font-extrabold text-2xl text-nv-txt">{s.val}</div>
                <div className="text-xs text-nv-muted mt-1">{s.lbl}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
