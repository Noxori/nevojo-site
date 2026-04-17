import type { Metadata } from 'next'
import Link from 'next/link'
import { posts, categoryColors } from '@/lib/posts'
import { divisions } from '@/lib/divisions'
import FadeIn from '@/components/ui/FadeIn'
import { copy } from '@/lib/copy'

export const metadata: Metadata = {
  title: 'Nevojo Insights',
  description: 'Thinking from the Nevojo team on AI, software, hardware, investment, and what it takes to build technology companies that last.',
}

const { hero } = copy.blog

export default function BlogPage() {
  const featured = posts.filter((p) => p.featured)
  const rest     = posts.filter((p) => !p.featured)

  return (
    <>
      <section className="pt-32 pb-20 bg-nv-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-tl pointer-events-none" />
        <div className="section-container relative z-10">
          <FadeIn>
            <p className="section-tag">{hero.tag}</p>
            <h1 className="section-title mb-6">
              {hero.headline.split('\n').map((line, i) => (
                <span key={i}>{i === 0 ? line : <><br /><span className="text-nv-accent">{line}</span></>}</span>
              ))}
            </h1>
            <p className="section-sub text-lg">{hero.sub}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-nv-navy">
        <div className="section-container">
          <FadeIn><h2 className="section-tag mb-8">Featured</h2></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {featured.map((post, i) => {
              const divisionAccent = post.division ? divisions.find((d) => d.slug === post.division)?.accentColor : undefined
              const catColor = categoryColors[post.category] ?? '#06D6C7'
              return (
                <FadeIn key={post.slug} delay={i * 0.1}>
                  <Link href={`/blog/${post.slug}`} className="group block card-base card-hover h-full relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-xl" style={{ background: divisionAccent ?? catColor }} />
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full border"
                        style={{ color:catColor, borderColor:`${catColor}40`, background:`${catColor}10` }}>
                        {post.category}
                      </span>
                      {post.division && (
                        <span className="text-xs text-nv-muted font-display font-semibold uppercase tracking-wider">
                          {divisions.find((d) => d.slug === post.division)?.name}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-nv-txt mb-3 group-hover:text-white transition-colors leading-snug">{post.title}</h3>
                    <p className="text-sm text-nv-muted leading-relaxed mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-nv-muted mt-auto">
                      <span>{post.date}</span><span>{post.readTime}</span>
                    </div>
                  </Link>
                </FadeIn>
              )
            })}
          </div>

          <FadeIn><h2 className="section-tag mb-6">All Posts</h2></FadeIn>
          <div className="flex flex-col gap-4">
            {rest.map((post, i) => {
              const catColor = categoryColors[post.category] ?? '#06D6C7'
              return (
                <FadeIn key={post.slug} delay={i * 0.06}>
                  <Link href={`/blog/${post.slug}`} className="group flex items-start gap-5 card-base card-hover">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full border"
                          style={{ color:catColor, borderColor:`${catColor}40`, background:`${catColor}10` }}>
                          {post.category}
                        </span>
                        <span className="text-xs text-nv-muted">{post.date} · {post.readTime}</span>
                      </div>
                      <h3 className="font-display font-bold text-base text-nv-txt group-hover:text-white transition-colors mb-1">{post.title}</h3>
                      <p className="text-sm text-nv-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
                    </div>
                    <span className="text-nv-muted group-hover:text-nv-accent transition-colors font-display font-bold text-sm flex-shrink-0 mt-1">→</span>
                  </Link>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
