'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

const links = [
  { href:'/',          label:'Home' },
  { href:'/about',     label:'About' },
  { href:'/divisions', label:'Divisions' },
  { href:'/services',  label:'Services' },
  { href:'/blog',      label:'Insights' },
  { href:'/contact',   label:'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <header className={clsx(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-nv-dark/95 backdrop-blur-md border-b border-nv-border shadow-lg shadow-black/30'
          : 'bg-transparent'
      )}>
        <div className="section-container">
          <nav className="flex items-center justify-between h-16">
            {/* Logo — clean wordmark only, no subtext */}
            <Link href="/" className="font-display font-extrabold text-lg tracking-wide">
              <span className="text-nv-txt">NEVO</span><span className="text-nv-accent">JO</span>
            </Link>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-7">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={clsx(
                      'text-sm transition-colors duration-200 relative py-1',
                      pathname === l.href
                        ? 'text-nv-accent font-semibold'
                        : 'text-nv-muted hover:text-nv-txt'
                    )}
                  >
                    {l.label}
                    {pathname === l.href && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 right-0 h-px bg-nv-accent"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact" className="btn-primary text-xs px-4 py-2">
                Work With Us ↗
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex flex-col gap-[5px] p-2 rounded-md hover:bg-white/5 transition-colors"
              aria-label="Menu"
            >
              <span className={clsx('block w-5 h-0.5 bg-nv-txt transition-all duration-200 origin-center', open && 'rotate-45 translate-y-[7px]')} />
              <span className={clsx('block w-5 h-0.5 bg-nv-txt transition-all duration-200', open && 'opacity-0 scale-x-0')} />
              <span className={clsx('block w-5 h-0.5 bg-nv-txt transition-all duration-200 origin-center', open && '-rotate-45 -translate-y-[7px]')} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:-8 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-8 }}
            transition={{ duration:0.18 }}
            className="fixed top-16 inset-x-0 z-40 bg-nv-navy/98 backdrop-blur-lg border-b border-nv-border lg:hidden"
          >
            <div className="section-container py-6 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.div key={l.href} initial={{ opacity:0, x:-10 }} animate={{ opacity:1, x:0 }} transition={{ delay:i * 0.05 }}>
                  <Link
                    href={l.href}
                    className={clsx(
                      'block py-3 px-4 rounded-lg text-base font-semibold font-display transition-colors',
                      pathname === l.href ? 'text-nv-accent bg-nv-accent/10' : 'text-nv-txt hover:bg-white/5'
                    )}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 mt-2 border-t border-nv-border">
                <Link href="/contact" className="btn-primary w-full justify-center">Work With Us ↗</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
