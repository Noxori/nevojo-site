import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts, getPost, categoryColors } from '@/lib/posts'
import { divisions } from '@/lib/divisions'
import FadeIn from '@/components/ui/FadeIn'
import CTASection from '@/components/ui/CTASection'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

// Placeholder content per post — replace with MDX or CMS later
const placeholderContent = `
  <p>This is a placeholder article. When you integrate a CMS (like Contentful, Sanity, or Notion) 
  or add MDX support, your full article content will render here.</p>
  
  <p>For now, this page demonstrates the full article layout — breadcrumb navigation, 
  metadata display, division attribution, and the CTA section below — all ready to 
  receive real content.</p>

  <h2>Getting Real Content In</h2>
  <p>The fastest path to real blog content on this site is to either:</p>
  <ul>
    <li>Add MDX files to <code>src/content/blog/</code> and use <code>next-mdx-remote</code></li>
    <li>Connect a headless CMS like Sanity or Contentful via API</li>
    <li>Write content directly in this file per slug</li>
  </ul>

  <p>The data layer in <code>src/lib/posts.ts</code> is already structured to accept 
  any content source — just add a <code>content</code> field to the Post type.</p>
`

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const catColor      = categoryColors[post.category] ?? '#00F0B5'
  const division      = post.division ? divisions.find((d) => d.slug === post.division) : null
  const relatedPosts  = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  return (
    <>
      {/* Article hero */}
      <section className="pt-32 pb-16 bg-nv-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-tl pointer-events-none" />
        <div className="section-container relative z-10 max-w-4xl">
          <FadeIn>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-nv-muted mb-8 font-display flex-wrap">
              <Link href="/"    className="hover:text-nv-accent transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-nv-accent transition-colors">Insights</Link>
              <span>/</span>
              <span className="text-nv-txt truncate">{post.title}</span>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full border"
                style={{ color:catColor, borderColor:`${catColor}40`, background:`${catColor}10` }}>
                {post.category}
              </span>
              {division && (
                <span className="text-xs font-bold px-2.5 py-1 rounded-full border"
                  style={{ color:division.accentColor, borderColor:`${division.accentColor}40`, background:`${division.accentColor}10` }}>
                  {division.name}
                </span>
              )}
              <span className="text-xs text-nv-muted">{post.date}</span>
              <span className="text-xs text-nv-muted">·</span>
              <span className="text-xs text-nv-muted">{post.readTime}</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl lg:text-5xl text-nv-txt leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-nv-muted text-lg leading-relaxed">{post.excerpt}</p>
          </FadeIn>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-nv-navy">
        <div className="section-container max-w-3xl">
          <FadeIn>
            <div
              className="prose prose-invert prose-sm max-w-none
                prose-headings:font-display prose-headings:font-bold prose-headings:text-nv-txt
                prose-p:text-nv-muted prose-p:leading-relaxed
                prose-a:text-nv-accent prose-a:no-underline hover:prose-a:underline
                prose-code:text-nv-accent prose-code:bg-nv-dark prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-li:text-nv-muted prose-li:leading-relaxed
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4"
              dangerouslySetInnerHTML={{ __html: placeholderContent }}
            />
          </FadeIn>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-nv-dark border-t border-nv-border">
          <div className="section-container">
            <FadeIn>
              <h2 className="section-tag mb-6">More from Nevojo Insights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {relatedPosts.map((p, i) => {
                  const cc = categoryColors[p.category] ?? '#00F0B5'
                  return (
                    <FadeIn key={p.slug} delay={i * 0.1}>
                      <Link href={`/blog/${p.slug}`} className="group block card-base card-hover h-full relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-xl" style={{ background:cc }} />
                        <span className="text-xs font-bold mb-3 block" style={{ color:cc }}>{p.category}</span>
                        <h3 className="font-display font-bold text-sm text-nv-txt group-hover:text-white transition-colors mb-2 leading-snug">
                          {p.title}
                        </h3>
                        <p className="text-xs text-nv-muted">{p.readTime}</p>
                      </Link>
                    </FadeIn>
                  )
                })}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
