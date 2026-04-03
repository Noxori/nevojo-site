import type { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Nevojo Technologies LLC — how we collect, use, and protect your information.',
}

const sections = [
  {
    title: 'Information We Collect',
    body: `We collect information you provide directly to us, such as when you fill out our contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, and the content of your messages. We also collect certain information automatically when you visit our website, including your IP address, browser type, pages visited, and referring URLs through standard server logs and analytics tools.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use the information we collect to respond to your inquiries and provide our services, send you updates and marketing communications (with your consent), improve and optimize our website, comply with legal obligations, and protect against fraud and abuse. We do not sell your personal information to third parties.`,
  },
  {
    title: 'Information Sharing',
    body: `We may share your information with service providers who assist us in operating our website and conducting our business (such as email service providers), when required by law or to protect our rights, and in connection with a business transaction such as a merger or acquisition. All service providers are bound by confidentiality obligations.`,
  },
  {
    title: 'Data Retention',
    body: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Contact form submissions are retained for up to 2 years. You may request deletion of your data at any time by contacting us.`,
  },
  {
    title: 'Your Rights',
    body: `Depending on your location, you may have rights regarding your personal information including the right to access, correct, or delete your data; the right to restrict or object to processing; the right to data portability; and the right to withdraw consent. To exercise these rights, please contact us at hello@nevojo.com.`,
  },
  {
    title: 'Cookies',
    body: `Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. You can control cookie settings through your browser. Disabling cookies may affect certain features of our website.`,
  },
  {
    title: 'Third-Party Links',
    body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any personal information.`,
  },
  {
    title: 'Security',
    body: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.`,
  },
  {
    title: 'Contact Us',
    body: `If you have any questions about this Privacy Policy or our data practices, please contact us at: hello@nevojo.com — Nevojo Technologies LLC, Wyoming, USA.`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-nv-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-tl pointer-events-none" />
        <div className="section-container relative z-10 max-w-4xl">
          <FadeIn>
            <p className="section-tag">Legal</p>
            <h1 className="section-title mb-4">Privacy Policy</h1>
            <p className="text-sm text-nv-muted">Last updated: April 2, 2026 · Nevojo Technologies LLC</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-nv-navy">
        <div className="section-container max-w-4xl">
          <FadeIn>
            <p className="text-sm text-nv-muted leading-relaxed mb-10 p-5 rounded-xl border border-nv-accent/20 bg-nv-accent/5">
              This Privacy Policy describes how Nevojo Technologies LLC (&quot;Nevojo,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              collects, uses, and shares information about you when you use our website (nevojo.com) and services.
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>

            <div className="space-y-8">
              {sections.map((s, i) => (
                <div key={s.title} className="pb-8 border-b border-nv-border last:border-0">
                  <h2 className="font-display font-bold text-lg text-nv-txt mb-3">
                    {i + 1}. {s.title}
                  </h2>
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
