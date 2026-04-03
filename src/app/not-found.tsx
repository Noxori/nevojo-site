import Link from 'next/link'
import { copy } from '@/lib/copy'

const { notFound } = copy

export default function NotFound() {
  return (
    <div className="min-h-screen bg-nv-dark flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-display font-extrabold text-[120px] leading-none text-nv-border mb-4 select-none">404</div>
        <div className="w-16 h-0.5 bg-nv-accent mx-auto mb-6" />
        <h1 className="font-display font-extrabold text-3xl text-nv-txt mb-4">{notFound.headline}</h1>
        <p className="text-nv-muted text-base mb-8 max-w-sm mx-auto leading-relaxed">{notFound.body}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/"          className="btn-primary">{notFound.cta1}</Link>
          <Link href="/divisions" className="btn-ghost">{notFound.cta2}</Link>
        </div>
      </div>
    </div>
  )
}
