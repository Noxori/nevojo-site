import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import WhoWeAre from '@/components/sections/WhoWeAre'
import MissionSection from '@/components/sections/MissionSection'
import DivisionsSection from '@/components/sections/DivisionsSection'
import WhyNevojo from '@/components/sections/WhyNevojo'
import AudienceSection from '@/components/sections/AudienceSection'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Nevojo Technologies — Tech for a Connected World',
  description: 'A multidisciplinary tech company building the future through software, AI, design, and innovation.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <MissionSection />
      <DivisionsSection />
      <WhyNevojo />
      <AudienceSection />
      <CTASection />
    </>
  )
}
