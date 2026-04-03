import type { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Nevojo Technologies LLC.',
}

const sections = [
  { title:'Acceptance of Terms', body:`By accessing or using the Nevojo Technologies website or any of our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to update these terms at any time, and your continued use constitutes acceptance of any changes.` },
  { title:'Services', body:`Nevojo Technologies LLC provides software development, AI integration, design, hardware, and consulting services through its divisions — Guavamatic, Oryniq, Kazuriq, and Noxori. Specific terms for individual services will be outlined in separate service agreements or statements of work where applicable.` },
  { title:'Intellectual Property', body:`All content on the Nevojo Technologies website, including text, graphics, logos, and software, is the property of Nevojo Technologies LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.` },
  { title:'User Conduct', body:`You agree not to use our website or services for any unlawful purpose, to transmit any harmful or malicious content, to impersonate any person or entity, to interfere with the proper functioning of our services, or to attempt unauthorized access to our systems or data.` },
  { title:'AI-Powered Services', body:`Some Nevojo services incorporate artificial intelligence technologies. AI-generated outputs are provided as-is and may not always be accurate or complete. You are responsible for reviewing and validating any AI-generated content before use. We do not guarantee the accuracy, completeness, or fitness for purpose of AI outputs.` },
  { title:'Payment Terms', body:`Payment terms for Nevojo services are outlined in individual service agreements. Unless otherwise stated, invoices are due within 30 days of issuance. Late payments may be subject to a 1.5% monthly service charge. All fees are non-refundable unless otherwise specified in writing.` },
  { title:'Limitation of Liability', body:`To the maximum extent permitted by applicable law, Nevojo Technologies LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim in the 3 months preceding the event.` },
  { title:'Confidentiality', body:`Both parties agree to keep confidential any proprietary information shared in the course of our business relationship. This obligation survives termination of any service agreement. Noxori division engagements may be subject to additional confidentiality terms specified in separate NDAs.` },
  { title:'Governing Law', body:`These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, USA, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Wyoming.` },
  { title:'Contact', body:`For questions about these Terms of Service, contact us at: hello@nevojo.com — Nevojo Technologies LLC, Wyoming, USA.` },
]

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-nv-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-tl pointer-events-none" />
        <div className="section-container relative z-10 max-w-4xl">
          <FadeIn>
            <p className="section-tag">Legal</p>
            <h1 className="section-title mb-4">Terms of Service</h1>
            <p className="text-sm text-nv-muted">Last updated: April 2, 2026 · Nevojo Technologies LLC</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-nv-navy">
        <div className="section-container max-w-4xl">
          <FadeIn>
            <div className="space-y-8">
              {sections.map((s, i) => (
                <div key={s.title} className="pb-8 border-b border-nv-border last:border-0">
                  <h2 className="font-display font-bold text-lg text-nv-txt mb-3">{i + 1}. {s.title}</h2>
                  <p className="text-sm text-nv-muted leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
