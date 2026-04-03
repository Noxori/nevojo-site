'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const COOKIE_KEY = 'nevojo_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Small delay so it doesn't flash on first render
    const timer = setTimeout(() => {
      const consent = localStorage.getItem(COOKIE_KEY)
      if (!consent) setVisible(true)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2.5rem)] max-w-2xl"
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
        >
          <div className="relative rounded-2xl border border-nv-border bg-nv-navy/95 backdrop-blur-md shadow-2xl shadow-black/60 p-5 sm:p-6">
            {/* Accent line */}
            <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl bg-nv-accent/60" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              {/* Icon + text */}
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-nv-accent/10 border border-nv-accent/25 flex items-center justify-center mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="7" stroke="#06D6C7" strokeWidth="1.2"/>
                    <circle cx="5.5" cy="6.5" r="1" fill="#06D6C7"/>
                    <circle cx="10" cy="5" r="0.8" fill="#06D6C7"/>
                    <circle cx="10.5" cy="9.5" r="1.2" fill="#06D6C7"/>
                    <circle cx="6" cy="10.5" r="0.7" fill="#06D6C7"/>
                    <circle cx="8" cy="8" r="0.8" fill="#06D6C7"/>
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-nv-txt mb-1">
                    We use cookies
                  </p>
                  <p className="text-xs text-nv-muted leading-relaxed">
                    Nevojo Technologies uses cookies to improve your experience and analyze site traffic.
                    By clicking &quot;Accept,&quot; you consent to our use of cookies.{' '}
                    <Link href="/privacy" className="text-nv-accent hover:underline font-medium">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 flex-shrink-0 sm:flex-col sm:gap-2">
                <button
                  onClick={accept}
                  className="flex-1 sm:flex-none btn-primary text-xs px-5 py-2.5 whitespace-nowrap"
                >
                  Accept All
                </button>
                <button
                  onClick={decline}
                  className="flex-1 sm:flex-none btn-ghost text-xs px-5 py-2.5 whitespace-nowrap"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
