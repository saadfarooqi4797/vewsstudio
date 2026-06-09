import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service — Vews Studio" },
      { name: "description", content: "Terms of Service for Vews Studio" },
    ],
  }),
});

const EFFECTIVE_DATE = `Jan 1st, ${new Date().getFullYear()}`;

const SECTIONS = [
  {
    title: "SMS Messaging Terms & Compliance",
    subsections: [
      {
        label: "Program Description",
        body: `This messaging program sends appointment confirmation and reminder messages to customers who have booked an appointment with Vews Studio through our website at https://vewsstudio.com/, or via our scheduling forms, and have explicitly opted in to receive SMS notifications. Opt-in is collected via web forms with a dedicated checkbox for SMS consent. Messages include scheduling confirmations, appointment reminders, rescheduling updates, and customer support communications.`,
      },
      {
        label: "Cancellation Instructions",
        body: `You can cancel the SMS service at any time. Simply text "STOP" to the same number that sent you messages. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.`,
      },
      {
        label: "Support Information",
        body: `If you experience issues with the messaging program, reply with the keyword "HELP" for more assistance, or reach out directly to creative@vewsstudio.com during business hours.`,
      },
      {
        label: "Carrier Liability",
        body: `Carriers are not liable for delayed or undelivered messages.`,
      },
      {
        label: "Message & Data Rates",
        body: `Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule. For questions about your text plan or data plan, contact your wireless provider.`,
      },
      {
        label: "Supported Carriers",
        body: `Our SMS program works with all major U.S. wireless carriers, including AT&T, T-Mobile, Verizon, Sprint, and most regional carriers.`,
      },
      {
        label: "Age Restriction",
        body: `You must be 18 years or older to participate in our SMS program.`,
      },
      {
        label: "Privacy Policy",
        body: `For privacy-related inquiries, please refer to our Privacy Policy.`,
      },
    ],
  },
  {
    title: "General Terms",
    body: `This website (the "Site") is owned and operated by Vews Studio ("COMPANY," "we" or "us"). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from Vews Studio\n\nAccessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.\n\nWe reserve the right to change these Terms of Service or to impose new conditions on the use of the Site from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.`,
  },
  {
    title: "Intellectual Property Rights",
    subsections: [
      {
        label: "Our Limited License to You",
        body: `This Site and all the materials available on the Site are the property of Vews Studio and/or our affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use.\n\nYou may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us.\n\nUnless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from the Site. However, you may download and/or print one copy of individual pages for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices.`,
      },
      {
        label: "Your License to Us",
        body: `By posting or submitting any material (including comments, blog entries, social media posts, photos, and videos) to us via the Site, internet groups, or other digital venues, you represent that you own the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and publicly perform or display such material.`,
      },
    ],
  },
  {
    title: "Disclaimers",
    body: `Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites or the information, products, or services offered on or through the sites.\n\nThe information, products, and services offered on or through the Site are provided "as is" and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.\n\nYou agree at all times to indemnify and hold harmless Vews Studio, its affiliates, and their respective officers, directors, agents, and employees from any claims, causes of action, damages, liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty, or representation under these Terms of Service.`,
  },
  {
    title: "Online Commerce",
    body: `Certain sections of the Site may allow you to purchase products and services from third-party vendors. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these products and services. If you make a purchase from a third party linked through the Site, the information obtained during your visit, including payment information, may be collected by both the merchant and us.\n\nYour participation in any dealings with third-party vendors is solely between you and the vendor.`,
  },
  {
    title: "Registration & Passwords",
    body: `To access certain features of the Site, you may be required to register and create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.\n\nIf you suspect unauthorized use of your account, notify us immediately at creative@vewsstudio.com. We are not liable for any loss or damage arising from your failure to comply with this obligation.`,
  },
  {
    title: "Termination",
    body: `We reserve the right to terminate or suspend your access to the Site, without notice, if we determine that you have violated these Terms of Service or engaged in conduct that we deem inappropriate or unlawful. Upon termination, you must cease all use of the Site and any content obtained from it.`,
  },
  {
    title: "Governing Law",
    body: `These Terms of Service shall be governed by and construed in accordance with the laws of the state in which Vews Studio operates. Any dispute arising under these Terms shall be resolved exclusively through binding arbitration in that jurisdiction.`,
  },
  {
    title: "Changes to Terms of Service",
    body: `We may update these Terms of Service from time to time. The latest version will always be available on our website with the effective date.`,
  },
];

function TermsPage() {
  return (
    <PageLayout>

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <header className="pt-36 md:pt-48 pb-12 px-6 md:px-10 border-b-[3px] border-ink">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.5deg)" }}>
            Vews Studio
          </p>
          <h1 className="font-display font-black text-6xl md:text-9xl leading-[0.9] mb-6">
            Terms of<br />Service
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
                        <p className="text-base leading-relaxed text-ink/65 whitespace-pre-line">{sub.body}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  "body" in s && <p className="text-base leading-relaxed text-ink/65 whitespace-pre-line">{s.body}</p>
                )}
              </div>
            ))}

            {/* Contact block */}
            <div className="border-t border-ink/10 pt-10">
              <h2 className="font-display font-black text-xl md:text-2xl mb-4">Contact</h2>
              <p className="text-base leading-relaxed text-ink/65 mb-4">
                For any questions regarding these Terms of Service, please contact us at:
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
                By using our website and services, you consent to these Terms of Service.
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
              If anything in these terms is unclear, reach out before signing.
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
