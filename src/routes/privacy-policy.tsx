import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Vews Studio" },
      { name: "description", content: "Privacy Policy for Vews Studio." },
    ],
  }),
});

const EFFECTIVE_DATE = `Jan 1st, ${new Date().getFullYear()}`;

const SECTIONS = [
  {
    title: "Introduction",
    body: `This Privacy Policy describes how Vews Studio ("Company," "we," or "us") collects, uses, and shares information about you when you use our website at https://vewsstudio.com/ or engage us for creative services. By accessing or using our Site, you agree to the collection and use of information in accordance with this policy.`,
  },
  {
    title: "Information We Collect",
    subsections: [
      {
        label: "Information You Provide",
        body: `We collect information you provide directly to us, including your name, email address, company name, and project details when you fill out our contact form, send us an email, or engage us for a project.`,
      },
      {
        label: "Payment Information",
        body: `We do not collect or store payment information directly. All payments are processed through third-party providers (such as Stripe). Please refer to their respective privacy policies for information on how your payment data is handled.`,
      },
      {
        label: "Automatically Collected Information",
        body: `We may collect basic technical data through our website, such as browser type, device type, and page visits, through analytics tools. This information is used solely to understand how our site is used and to improve the user experience.`,
      },
    ],
  },
  {
    title: "How We Use Your Information",
    body: `We use the information we collect to respond to your enquiries and provide customer support, deliver and manage our creative services, send project-related communications and invoices, improve our website and services, and comply with applicable legal obligations. We do not use your information for unsolicited marketing. Any studio updates or newsletters will only be sent if you have opted in or have an existing client relationship with us, and you may opt out at any time.`,
  },
  {
    title: "How We Store Your Information",
    body: `Your information is stored securely using industry-standard tools including email, project management software, and cloud storage. We retain client information for as long as the business relationship is active and for a reasonable period afterward for legal and accounting purposes — typically no longer than five (5) years from the end of the most recent project. Enquiries that do not result in a project are deleted within twelve (12) months.`,
  },
  {
    title: "Sharing of Information",
    body: `We do not sell, rent, or trade your personal information to third parties. We may share limited project information with trusted subcontractors or collaborators who assist us in delivering services, always under confidentiality obligations. We may also disclose information if required to do so by law, regulation, or a valid legal process.`,
  },
  {
    title: "Cookies & Analytics",
    body: `Our website may use cookies or similar technologies to understand traffic patterns and improve the user experience. We use privacy-respecting analytics tools and do not use advertising cookies or retargeting trackers. You may disable cookies through your browser settings at any time without affecting your ability to access the Site.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to request access to the personal information we hold about you, request correction of any inaccurate information, request deletion of your data subject to applicable legal obligations, and opt out of any marketing communications at any time. To exercise any of these rights, contact us at creative@vewsstudio.com. We will respond within fourteen (14) business days.`,
  },
  {
    title: "Third-Party Links",
    body: `Our website may contain links to third-party websites or platforms, including social media profiles. This Privacy Policy applies only to Vews Studio's own website and services. We are not responsible for the privacy practices of external sites and encourage you to review their policies independently.`,
  },
  {
    title: "Children's Privacy",
    body: `Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us immediately and we will delete it promptly.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The latest version will always be available on our website with the updated effective date. Your continued use of our Site or services after any changes constitutes your acceptance of the revised policy.`,
  },
];

function PrivacyPolicyPage() {
  return (
    <PageLayout>

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <header className="pt-36 md:pt-48 pb-12 px-6 md:px-10 border-b-[3px] border-ink">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.5deg)" }}>
            Vews Studio
          </p>
          <h1 className="font-display font-black text-6xl md:text-9xl leading-[0.9] mb-6">
            Privacy<br />Policy
          </h1>
          <p className="text-sm text-ink/40">Effective Date: {EFFECTIVE_DATE}</p>
        </div>
      </header>

      {/* ── Sections ─────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl space-y-12">
            {SECTIONS.map((s) => (
              <div key={s.title} className="border-t border-ink/10 pt-10">
                <h2 className="font-display font-black text-xl md:text-2xl mb-6">{s.title}</h2>

                {"subsections" in s && s.subsections ? (
                  <div className="space-y-6">
                    {s.subsections.map((sub) => (
                      <div key={sub.label}>
                        <h3 className="font-bold text-base mb-2">{sub.label}</h3>
                        <p className="text-base leading-relaxed text-ink/65">{sub.body}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  "body" in s && <p className="text-base leading-relaxed text-ink/65">{s.body}</p>
                )}
              </div>
            ))}

            {/* Contact block */}
            <div className="border-t border-ink/10 pt-10">
              <h2 className="font-display font-black text-xl md:text-2xl mb-4">Contact</h2>
              <p className="text-base leading-relaxed text-ink/65 mb-4">
                For any questions, concerns, or requests related to this Privacy Policy, please contact us at:
              </p>
              <div className="space-y-1 text-base text-ink/65">
                <p className="font-bold text-ink">Vews Studio</p>
                <p>Email: <a href="mailto:creative@vewsstudio.com" className="underline underline-offset-2 hover:text-ink transition-colors">creative@vewsstudio.com</a></p>
                <p>Address: Islamabad, Pakistan</p>
                <p>Website: <a href="https://vewsstudio.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink transition-colors">vewsstudio.com</a></p>
              </div>
            </div>

            <div className="border-t border-ink/10 pt-10">
              <p className="text-base text-ink/65 leading-relaxed">
                By using our website and services, you consent to this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-14 border-t-[3px] border-ink bg-ink text-cream">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-hand text-xl text-blush mb-1" style={{ transform: "rotate(-0.4deg)" }}>
              questions?
            </p>
            <p className="text-cream/70 text-base">
              If anything in this policy is unclear, reach out before signing.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-cream text-ink px-6 py-3 font-bold ink-border shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all shrink-0"
          >
            Get in touch →
          </Link>
        </div>
      </section>

    </PageLayout>
  );
}
