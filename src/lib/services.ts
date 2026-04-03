export type Service = {
  id:          string
  title:       string
  description: string
  features:    string[]
  priceFrom:   string
  division:    string
  accentColor: string
  popular?:    boolean
}

export const services: Service[] = [
  {
    id:          'ai-software',
    title:       'AI Software Development',
    description: 'Custom AI-powered web and mobile applications built on modern stacks. From multi-agent platforms to intelligent automation tools.',
    features:    ['Multi-agent AI systems','Next.js / React frontends','Express / Node backends','Supabase database & auth','Stripe payment integration','Vercel + Railway deployment'],
    priceFrom:   '$2,500',
    division:    'Guavamatic',
    accentColor: '#00F0B5',
    popular:     true,
  },
  {
    id:          'ai-integration-sprint',
    title:       'DFY AI Business Integration Sprint',
    description: 'Done-for-you AI integration for your existing business. We audit your workflows, identify automation opportunities, and implement AI tools in a focused sprint.',
    features:    ['Business workflow audit','AI tool selection & setup','Custom automation pipelines','Team onboarding & training','30-day post-sprint support','Full documentation'],
    priceFrom:   '$500',
    division:    'Guavamatic',
    accentColor: '#00F0B5',
  },
  {
    id:          'branded-ai-embed',
    title:       'Branded AI Chat Embed',
    description: 'A custom-branded AI chat widget powered by OpenClaw — your own AI assistant embedded directly into your website or app.',
    features:    ['Custom branding & colors','Powered by OpenClaw gateway','Trained on your content','Embed code ready in 48hrs','Analytics dashboard','Ongoing model updates'],
    priceFrom:   '$499',
    division:    'Guavamatic',
    accentColor: '#00F0B5',
  },
  {
    id:          'ui-ux-design',
    title:       'UI/UX Design & Branding',
    description: 'Full visual identity and interface design for digital products. From logo and brand guide to complete UI design systems ready for development.',
    features:    ['Brand identity & logo','Color + typography system','UI component library','Figma design files','Mobile-first responsive','Handoff-ready specs'],
    priceFrom:   '$800',
    division:    'Guavamatic',
    accentColor: '#00F0B5',
  },
  {
    id:          'ai-intelligence-tools',
    title:       'AI Intelligence Products',
    description: 'Bespoke AI research tools, intelligence APIs, and data processing pipelines built by Oryniq — the AI intelligence division of Nevojo.',
    features:    ['Custom ML model integration','Intelligence API development','Data pipeline architecture','Research tool development','AI product strategy','Performance monitoring'],
    priceFrom:   '$3,000',
    division:    'Oryniq',
    accentColor: '#1A6EFF',
  },
  {
    id:          'custom-pc-builds',
    title:       'Custom PC & Hardware Builds',
    description: 'Precision-engineered custom computers and keyboards designed by Kazuriq. Built for performance, longevity, and aesthetics that reflect your brand.',
    features:    ['Full custom PC builds','Signature keyboard design','Component sourcing & vetting','Thermal & performance tuning','Aesthetic customization','White-glove delivery'],
    priceFrom:   '$1,200',
    division:    'Kazuriq',
    accentColor: '#F59E0B',
  },
  {
    id:          'premium-intelligence',
    title:       'Premium Intelligence Consulting',
    description: 'Elite-tier consulting and bespoke solutions from Noxori. For clients who require the highest caliber of technology strategy, AI systems, and investment intelligence.',
    features:    ['Executive tech strategy','Proprietary intelligence tools','Strategic tech investment guidance','Confidential & NDA-protected','Dedicated account management','Priority access to Nevojo R&D'],
    priceFrom:   'By inquiry',
    division:    'Noxori',
    accentColor: '#7C3AED',
  },
]
