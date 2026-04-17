import type { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Accessibility Statement for Nevojo Technologies LLC — our commitment to WCAG 2.1 AA conformance and an inclusive web experience.',
}

const sections = [
  {
    title: 'Our Commitment',
    body: `Nevojo Technologies LLC is committed to ensuring digital accessibility for people of all abilities. We believe that the web should be open and usable for everyone, regardless of disability, device, or assistive technology. We are actively working to improve the accessibility and usability of our website and, in doing so, adhere to the available standards and guidelines.`,
  },
  {
    title: 'Conformance Status',
    body: `The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. Our website aims to conform to WCAG 2.1 Level AA. "Partially conforms" means that some parts of the content do not fully conform to the accessibility standard. We are continuously evaluating our site and addressing issues as they are identified.`,
  },
  {
    title: 'Accessibility Features',
    body: `Our site includes a "Skip to main content" link for keyboard users, semantic HTML landmarks (navigation, main, footer) for assistive technology, visible keyboard focus indicators on all interactive elements, labeled form controls with associated error and status messages, descriptive link text and alt attributes on meaningful images, color contrast that meets WCAG AA thresholds for body text, and respect for the "prefers-reduced-motion" system setting to limit animation.`,
  },
  {
    title: 'Compatibility',
    body: `Our website is designed to be compatible with recent versions of major browsers (Chrome, Firefox, Safari, Edge) and with common assistive technologies including screen readers (NVDA, JAWS, VoiceOver, TalkBack), keyboard-only navigation, and operating-system-level zoom and contrast settings. We do not rely on JavaScript-only interactions for critical content.`,
  },
  {
    title: 'Known Limitations',
    body: `Despite our efforts, some areas of our site may not yet be fully accessible. Third-party embedded content (such as external analytics or media) may not meet the same standards and is outside our direct control. Decorative motion and background effects are used in some sections; these are disabled automatically when a reduced-motion preference is detected. If you encounter a barrier, please let us know — your feedback helps us prioritize fixes.`,
  },
  {
    title: 'Assessment Approach',
    body: `Nevojo assesses the accessibility of its website through a combination of self-evaluation, automated testing tools (such as axe-core and Lighthouse), manual keyboard and screen-reader testing, and ongoing code review. Accessibility is treated as an engineering requirement — not an afterthought — in our design and development process.`,
  },
  {
    title: 'Feedback and Contact',
    body: `We welcome your feedback on the accessibility of the Nevojo Technologies website. If you encounter accessibility barriers or need content in an alternative format, please contact us at hello@nevojo.com with the subject line "Accessibility Feedback." We aim to respond to accessibility-related inquiries within 5 business days.`,
  },
  {
    title: 'Formal Complaints',
    body: `If you are not satisfied with our response, you may have the right to file a complaint with a relevant authority. In the United States, the Americans with Disabilities Act (ADA) and Section 508 of the Rehabilitation Act provide guidance on digital accessibility rights and remedies. Nothing in this statement limits or waives those rights.`,
  },
  {
    title: 'Ongoing Improvement',
    body: `This statement reflects our current understanding and practice. We review and update it as our site evolves, as standards change, and as we learn from users. Nevojo Technologies LLC — Wyoming, USA.`,
  },
]

export default function AccessibilityPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-nv-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-tl pointer-events-none" />
        <div className="section-container relative z-10 max-w-4xl">
          <FadeIn>
            <p className="section-tag">Legal</p>
            <h1 className="section-title mb-4">Accessibility Statement</h1>
            <p className="text-sm text-nv-muted">Last updated: April 16, 2026 · Nevojo Technologies LLC</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-nv-navy">
        <div className="section-container max-w-4xl">
          <FadeIn>
            <p className="text-sm text-nv-muted leading-relaxed mb-10 p-5 rounded-xl border border-nv-accent/20 bg-nv-accent/5">
              Nevojo Technologies LLC is committed to making our website accessible to the widest possible audience,
              including users with disabilities. We target conformance with the Web Content Accessibility Guidelines
              (WCAG) 2.1 Level AA and continue to improve based on user feedback and ongoing review.
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
