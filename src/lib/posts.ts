export type Post = {
  slug:        string
  title:       string
  excerpt:     string
  category:    string
  date:        string
  readTime:    string
  featured:    boolean
  division?:   string
}

export const posts: Post[] = [
  {
    slug:     'why-ai-first-companies-win',
    title:    'Why AI-First Companies Are Winning in 2026',
    excerpt:  'Building AI into your company\'s core from day one isn\'t a luxury anymore — it\'s the only architecture that scales. Here\'s what that actually means in practice.',
    category: 'AI & Tech',
    date:     'April 2, 2026',
    readTime: '5 min read',
    featured: true,
    division: 'oryniq',
  },
  {
    slug:     'multi-brand-portfolio-strategy',
    title:    'The Multi-Brand Portfolio: How Nevojo Is Built Differently',
    excerpt:  'Most tech companies try to be everything to everyone. Nevojo runs four specialized brands under one roof. Here\'s why that model wins.',
    category: 'Business',
    date:     'March 28, 2026',
    readTime: '4 min read',
    featured: true,
    division: undefined,
  },
  {
    slug:     'custom-pc-builds-2026',
    title:    'What Makes a Premium Custom PC Build in 2026',
    excerpt:  'Off-the-shelf hardware hit a ceiling. Kazuriq\'s approach to custom PC builds prioritizes longevity, thermal design, and aesthetic precision over spec-sheet bragging.',
    category: 'Hardware',
    date:     'March 20, 2026',
    readTime: '6 min read',
    featured: false,
    division: 'kazuriq',
  },
  {
    slug:     'minority-owned-tech-ecosystem',
    title:    'Building a Minority-Owned Tech Ecosystem From the Ground Up',
    excerpt:  'The challenges are real. The opportunity is bigger. A candid look at what it takes to build a multi-division tech company as a minority founder.',
    category: 'Founders',
    date:     'March 14, 2026',
    readTime: '7 min read',
    featured: false,
    division: undefined,
  },
  {
    slug:     'ai-saas-pricing-strategy',
    title:    'How to Price Your AI SaaS Product Without Leaving Money on the Table',
    excerpt:  'Freemium, tiered, usage-based — the wrong pricing model can sink a product before it finds its market. What Guavamatic learned building its own.',
    category: 'SaaS',
    date:     'March 8, 2026',
    readTime: '5 min read',
    featured: false,
    division: 'guavamatic',
  },
  {
    slug:     'tech-investment-strategy-noxori',
    title:    'Strategic Tech Investment: What Noxori Looks For in 2026',
    excerpt:  'Not every hot stock is a strategic asset. Noxori\'s investment thesis focuses on infrastructure plays, AI chip supply chains, and undervalued emerging market tech.',
    category: 'Investment',
    date:     'March 1, 2026',
    readTime: '6 min read',
    featured: false,
    division: 'noxori',
  },
]

export const getPost = (slug: string) => posts.find((p) => p.slug === slug)

export const categoryColors: Record<string, string> = {
  'AI & Tech':  '#60A5FA',
  'Business':   '#00F0B5',
  'Hardware':   '#F59E0B',
  'Founders':   '#A78BFA',
  'SaaS':       '#00F0B5',
  'Investment': '#A78BFA',
}
