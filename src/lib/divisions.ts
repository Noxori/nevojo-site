export type Division = {
  slug:            string
  name:            string
  tagline:         string
  description:     string
  longDescription: string
  accentColor:     string
  textColor:       string
  focus:           string
  tags:            string[]
  features:        { title: string; desc: string }[]
  status:          'live' | 'active' | 'launching' | 'coming-soon'
}

export const divisions: Division[] = [
  {
    slug:    'guavamatic',
    name:    'Guavamatic',
    tagline: 'Tech & Software Division',
    description:
      'The flagship software arm of Nevojo. AI-powered platforms, web & mobile apps, and advanced graphics solutions built for businesses that need serious technology with a creative edge.',
    longDescription:
      'Guavamatic is where Nevojo\'s technical firepower meets creative design. We build multi-agent AI platforms, custom web and mobile applications, and visually stunning software products that perform as well as they look. From the Guavamatic multi-agent AI platform to bespoke client builds, this is where ideas become products.',
    accentColor: '#00F0B5',
    textColor:   '#050810',
    focus:       'AI · Software · Web & Mobile Apps · Advanced Graphics',
    tags:        ['AI Platforms','Web Apps','Mobile Dev','SaaS','UI/UX','Advanced Graphics'],
    features: [
      { title: 'Multi-Agent AI',   desc: 'Specialized AI agents for conversation, research, code, images, and video.' },
      { title: 'Web & Mobile',     desc: 'Custom Next.js, React, and React Native applications built to scale.' },
      { title: 'Advanced Graphics',desc: 'Motion graphics, brand identity, and digital design at a premium level.' },
      { title: 'SaaS Tools',       desc: 'Subscription-based software products for businesses and creators.' },
    ],
    status: 'live',
  },
  {
    slug:    'oryniq',
    name:    'Oryniq',
    tagline: 'AI Intelligence Division',
    description:
      'The AI research and intelligence arm of Nevojo. Oryniq develops next-generation intelligence tools, AI-powered products, and research systems — where light meets IQ.',
    longDescription:
      'Oryniq sits at the frontier of artificial intelligence. Named to evoke "oryn" (light, horizon) combined with IQ, this division focuses on building AI systems that illuminate — making intelligence accessible, transparent, and purposeful. From intelligence APIs to research tools, Oryniq pushes the boundary of what AI can do.',
    accentColor: '#60A5FA',
    textColor:   '#050810',
    focus:       'AI Research · Intelligence Tools · AI-Powered Products',
    tags:        ['AI Research','Intelligence APIs','ML Tools','AI Products','Data Intelligence'],
    features: [
      { title: 'Intelligence Research', desc: 'Cutting-edge AI research focused on practical, real-world applications.' },
      { title: 'AI-Powered Products',   desc: 'Consumer and enterprise products built on proprietary intelligence layers.' },
      { title: 'Intelligence APIs',     desc: 'Accessible APIs for developers building AI-native applications.' },
      { title: 'Data Systems',          desc: 'Smart data processing and analytical intelligence pipelines.' },
    ],
    status: 'active',
  },
  {
    slug:    'kazuriq',
    name:    'Kazuriq',
    tagline: 'Physical Tech Division',
    description:
      'Nevojo\'s hardware and physical tech division. Custom-built computers, precision keyboards, and Nevojo chip design — where digital meets physical.',
    longDescription:
      'Kazuriq brings Nevojo into the physical world. This division designs and builds premium customized computers, signature keyboards, and hardware products that carry the Nevojo standard of quality. Every Kazuriq product is engineered to perform — built to last, built to impress.',
    accentColor: '#F59E0B',
    textColor:   '#050810',
    focus:       'Custom PCs · Keyboards · Chip Design · Hardware',
    tags:        ['Custom PCs','Keyboards','Hardware','Chip Design'],
    features: [
      { title: 'Custom Computers',  desc: 'Bespoke PC builds engineered for performance, aesthetics, and longevity.' },
      { title: 'Signature Keyboards',desc: 'Premium custom keyboards designed under the Kazuriq brand.' },
      { title: 'Nevojo Chip Design', desc: 'Proprietary chip design initiatives for future Nevojo hardware.' },
      { title: 'Hardware Products',  desc: 'Physical tech accessories and peripherals built to the Nevojo standard.' },
    ],
    status: 'launching',
  },
  {
    slug:    'noxori',
    name:    'Noxori',
    tagline: 'Premium Intelligence Division',
    description:
      'The dark intelligence tier of Nevojo. Noxori is the premium, high-stakes brand — exclusive tools, elite-grade intelligence products, strategic tech investment, and sophisticated solutions for those who demand the best.',
    longDescription:
      'Noxori operates at the highest tier of the Nevojo ecosystem. This is the brand for premium clients, exclusive products, sophisticated intelligence solutions, and strategic tech investment — where performance, discretion, and excellence are non-negotiable. Dark in aesthetic, uncompromising in quality.',
    accentColor: '#A78BFA',
    textColor:   '#050810',
    focus:       'Premium Intelligence · Exclusive Tools · Strategic Tech Investment',
    tags:        ['Premium','Elite','Exclusive','Dark Intelligence','Tech Investment','High-Stakes'],
    features: [
      { title: 'Premium Tier Products',    desc: 'Exclusive tools and platforms available to Noxori clients only.' },
      { title: 'Elite Intelligence',       desc: 'Highest-grade AI and intelligence products in the Nevojo portfolio.' },
      { title: 'Strategic Tech Investment',desc: 'High-stakes stock positioning and strategic investment in the global tech sector.' },
      { title: 'White-Glove Service',      desc: 'Bespoke, hands-on delivery for clients who require it.' },
    ],
    status: 'active',
  },
]

export const getDivision = (slug: string) => divisions.find((d) => d.slug === slug)
