import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/pay")({
  component: PayPage,
  validateSearch: (search: Record<string, unknown>) => ({
    project: (search["project"] as string | undefined) ?? "",
    link: (search["link"] as string | undefined) ?? "",
  }),
  head: () => ({
    meta: [
      { title: "Secure Payment — VEWS Studio" },
      { name: "description", content: "Complete your payment securely via Stripe." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function isValidStripeLink(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.hostname === "buy.stripe.com" || parsed.hostname === "checkout.stripe.com";
  } catch {
    return false;
  }
}

function PayPage() {
  const { project, link } = Route.useSearch();
  const valid = isValidStripeLink(link);

  return (
    <PageLayout>

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <header className="pt-36 md:pt-48 pb-12 px-6 md:px-10 border-b-[3px] border-ink">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.5deg)" }}>
            almost there
          </p>
          <h1 className="font-display font-black text-6xl md:text-9xl leading-[0.9]">
            Secure<br />Payment
          </h1>
        </div>
      </header>

      {/* ── Payment card ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto flex justify-center">

          {valid ? (
            <div className="w-full max-w-xl border-[3px] border-ink shadow-hard p-8 md:p-12 bg-white">

              {/* What you're paying for */}
              <div className="mb-8 pb-8 border-b border-ink/10">
                <p className="text-xs uppercase tracking-widest text-ink/30 mb-2">Project</p>
                <p className="font-display font-black text-2xl md:text-3xl leading-snug">
                  {project || "VEWS Studio — Creative Project"}
                </p>
              </div>

              {/* Stripe note */}
              <div className="mb-8 space-y-3 text-sm leading-relaxed text-ink/55">
                <p>
                  You're about to be taken to our secure Stripe checkout page.
                  Your payment details are processed by Stripe — VEWS Studio never
                  sees or stores your card information.
                </p>
                <div className="flex items-center gap-2 text-ink/40 text-xs">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <span>256-bit SSL encryption · Powered by Stripe</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={link}
                rel="noopener noreferrer"
                className="block w-full text-center bg-ink text-cream px-8 py-4 font-bold text-base ink-border shadow-hard-sm hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                Proceed to Payment →
              </a>

              <p className="mt-5 text-center text-xs text-ink/30">
                Questions?{" "}
                <a href="mailto:creative@vewsstudio.com" className="underline underline-offset-2 hover:text-ink/60 transition-colors">
                  creative@vewsstudio.com
                </a>
              </p>
            </div>

          ) : (

            /* Invalid or missing link state */
            <div className="w-full max-w-xl text-center border-[3px] border-ink shadow-hard p-8 md:p-12 bg-white">
              <p className="font-hand text-2xl text-blush mb-4" style={{ transform: "rotate(-0.5deg)" }}>
                hmm, that link looks off
              </p>
              <p className="text-base text-ink/60 leading-relaxed mb-8">
                This payment page needs a valid link from us to work.
                If you were expecting a payment link, check your email or get in touch.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-ink text-cream px-7 py-3 font-bold ink-border shadow-hard-sm hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                Contact us →
              </Link>
            </div>

          )}
        </div>
      </section>

    </PageLayout>
  );
}
