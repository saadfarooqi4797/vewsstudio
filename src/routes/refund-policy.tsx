import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicyPage,
  head: () => ({
    meta: [
      { title: "Refund Policy — Vews Studio" },
      { name: "description", content: "Refund and cancellation policy for Vews Studio creative services." },
    ],
  }),
});

const EFFECTIVE_DATE = `Jan 1st, ${new Date().getFullYear()}`;

const SECTIONS = [
  {
    title: "Overview",
    body: `This Refund Policy governs all creative service engagements with Vews Studio ("Company," "we," or "us"). By engaging our services, you acknowledge and agree to the terms set forth in this policy. Creative work involves the investment of time, skill, and resources that cannot be recovered once expended, and our refund terms reflect this reality while remaining fair to all parties.`,
  },
  {
    title: "Deposit & Payment Structure",
    body: `Most projects require a fifty percent (50%) deposit before work begins. This deposit covers the studio's time for research, initial concept development, internal reviews, and the reservation of capacity for your project. The remaining balance is due upon delivery of final files, unless otherwise specified in the project proposal. For ongoing retainers, invoices are issued at the start of each billing period and are due within fourteen (14) days.`,
  },
  {
    title: "Cancellation by the Client",
    subsections: [
      {
        label: "Before Work Begins",
        body: `If a project is cancelled before any work has commenced, the client is entitled to a full refund of the deposit paid. Refunds in this case will be processed within seven (7) business days.`,
      },
      {
        label: "After Work Has Begun",
        body: `If a project is cancelled after work has commenced, the client is liable for all work completed up to the date of cancellation, calculated on a pro-rated basis against the total project fee. If the value of completed work is less than the deposit paid, the difference will be refunded. If the value of completed work exceeds the deposit, the outstanding balance will be invoiced and is due within fourteen (14) days.`,
      },
      {
        label: "At or Past the Halfway Point",
        body: `If a project is cancelled at or past the halfway point of the agreed scope, no refund will be issued. At this stage, a substantial portion of creative thinking, production time, and revision effort has been invested. Any outstanding balance owed beyond the deposit will be invoiced accordingly.`,
      },
    ],
  },
  {
    title: "Cancellation by Vews Studio",
    body: `In the event that Vews Studio initiates the cancellation of a project — due to capacity constraints, a conflict of interest, or other internal reasons — the client will receive a full refund of all amounts paid. Such refunds will be processed within seven (7) business days of the cancellation notice.`,
  },
  {
    title: "Dissatisfaction with Delivered Work",
    body: `If a client is dissatisfied with a delivered project, they must notify us in writing within seven (7) days of delivery, specifying the nature of the dissatisfaction and how the work fails to meet the agreed brief. Vews Studio will make reasonable efforts to address the concerns using remaining revision rounds or, by mutual agreement, additional ones at no charge. Refunds for delivered work will only be considered after good-faith efforts to resolve the matter have been exhausted and where the work demonstrably fails to meet the agreed scope. Any such refunds will be partial and proportional to the nature of the shortfall.`,
  },
  {
    title: "Non-Refundable Items",
    body: `The following are non-refundable under all circumstances: third-party costs incurred on behalf of the client (such as stock assets, fonts, software licenses, or printing); fees for completed revision rounds; and retainer fees for billing periods already commenced.`,
  },
  {
    title: "How to Request a Refund",
    body: `To request a refund, send a written request to creative@vewsstudio.com including your project name, the date of your original payment, and the reason for the request. We will acknowledge your request within three (3) business days and work through it with you directly. Refunds, where applicable, are processed within seven (7) business days of agreement and returned via the original payment method where possible.`,
  },
  {
    title: "Changes to This Policy",
    body: `We reserve the right to update this Refund Policy at any time. The latest version will always be available on our website with the effective date. Projects in progress at the time of any update remain governed by the policy in place at project commencement, unless both parties agree in writing to the revised terms.`,
  },
];

function RefundPolicyPage() {
  return (
    <PageLayout>

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <header className="pt-36 md:pt-48 pb-12 px-6 md:px-10 border-b-[3px] border-ink">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.5deg)" }}>
            Vews Studio
          </p>
          <h1 className="font-display font-black text-6xl md:text-9xl leading-[0.9] mb-6">
            Refund<br />Policy
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
                For any questions regarding this Refund Policy, please contact us at:
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
                By engaging our services, you acknowledge that you have read, understood, and agreed to this Refund Policy.
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
