import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { MotionFadeUp } from "../components/MotionFadeUp";

const contactCards = [
  {
    label: "Phone",
    value: "+64 9 555 0123",
    detail: "Available Monday to Saturday",
  },
  {
    label: "Email",
    value: "hello@nprealestate.com.au",
    detail: "Replies within one business day",
  },
  {
    label: "Office",
    value: "122 Church Street, Brighton VIC 3186",
    detail: "Private appointments available",
  },
];

const nextSteps = [
  "We review your property goals and preferred timeline.",
  "Nick or Prab prepares a data-backed market position.",
  "You receive a clear strategy session with no obligation.",
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader active="contact" />

      <main className="bg-surface-bright">
        {/* Hero */}
        <section className="container-shell grid grid-cols-1 items-end gap-12 pt-40 pb-16 md:grid-cols-2">
          <MotionFadeUp>
            <span className="eyebrow">Contact</span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-ink md:text-6xl">
              Start with a clear property strategy.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary">
              Whether you are preparing to sell, assessing your next purchase,
              or simply need a precise view of the market, speak with Nick and
              Prab for calm, data-backed advice.
            </p>
          </MotionFadeUp>

          <MotionFadeUp delay={0.1}>
            <aside className="bg-brand-yellow p-10">
              <strong className="block text-5xl font-bold text-ink">
                24 hr
              </strong>
              <span className="mt-2 block text-sm text-ink/80">
                Typical response window for appraisal requests
              </span>
            </aside>
          </MotionFadeUp>
        </section>

        {/* Main form */}
        <section className="container-shell grid grid-cols-1 items-start gap-8 pb-24 lg:grid-cols-2">
          <MotionFadeUp>
            <form className="border border-brand-border bg-white p-8 shadow-card md:p-12">
              <div className="mb-8">
                <span className="eyebrow">Request Appraisal</span>
                <h2 className="mt-3 font-display text-3xl font-bold text-ink">
                  Tell us about your property.
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <label>
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Full Name
                  </span>
                  <input
                    placeholder="Your name"
                    className="w-full border border-brand-border bg-surface-bright p-4 text-sm text-ink outline-none transition-all focus:border-ink"
                  />
                </label>
                <label>
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Phone
                  </span>
                  <input
                    type="tel"
                    placeholder="+64 000 000"
                    className="w-full border border-brand-border bg-surface-bright p-4 text-sm text-ink outline-none transition-all focus:border-ink"
                  />
                </label>
                <label>
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Email
                  </span>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full border border-brand-border bg-surface-bright p-4 text-sm text-ink outline-none transition-all focus:border-ink"
                  />
                </label>
                <label>
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Preferred Service
                  </span>
                  <select
                    defaultValue="appraisal"
                    className="w-full border border-brand-border bg-surface-bright p-4 text-sm text-ink outline-none transition-all focus:border-ink"
                  >
                    <option value="appraisal">Property Appraisal</option>
                    <option>Buying Advice</option>
                    <option>Selling Strategy</option>
                    <option>Market Report</option>
                  </select>
                </label>
              </div>

              <label className="mt-6 block">
                <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-secondary">
                  Property Address
                </span>
                <input
                  placeholder="Street, suburb, postcode"
                  className="w-full border border-brand-border bg-surface-bright p-4 text-sm text-ink outline-none transition-all focus:border-ink"
                />
              </label>

              <label className="mt-6 block">
                <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-secondary">
                  Message
                </span>
                <textarea
                  placeholder="Share any context that will help us prepare."
                  rows={5}
                  className="w-full resize-y border border-brand-border bg-surface-bright p-4 text-sm text-ink outline-none transition-all focus:border-ink"
                />
              </label>

              <button
                type="submit"
                className="btn-primary mt-6 w-full"
              >
                Send Request
              </button>
            </form>
          </MotionFadeUp>

          <MotionFadeUp delay={0.1}>
            <aside className="border border-brand-border bg-white p-8 shadow-card">
              <div>
                <span className="eyebrow">Direct Details</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-ink">
                  Speak with the team.
                </h2>
              </div>

              <div className="mt-6 space-y-6">
                {contactCards.map((card) => (
                  <article
                    key={card.label}
                    className="border-t border-brand-border pt-6"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-olive">
                      {card.label}
                    </span>
                    <strong className="mt-1 block text-xl font-bold text-ink">
                      {card.value}
                    </strong>
                    <p className="mt-1 text-sm text-secondary">{card.detail}</p>
                  </article>
                ))}
              </div>
            </aside>
          </MotionFadeUp>
        </section>

        {/* Next steps */}
        <section className="bg-ink py-24 text-white">
          <div className="container-shell grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <MotionFadeUp>
              <div>
                <span className="eyebrow text-brand-yellow">What Happens Next</span>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">
                  A sharper first conversation.
                </h2>
              </div>
            </MotionFadeUp>

            <MotionFadeUp delay={0.1}>
              <ol className="space-y-4">
                {nextSteps.map((step, index) => (
                  <li
                    key={step}
                    className="relative border border-white/10 p-6 pl-20"
                  >
                    <span className="absolute left-6 top-6 text-2xl font-bold text-brand-yellow">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/80">{step}</span>
                  </li>
                ))}
              </ol>
            </MotionFadeUp>
          </div>
        </section>

        {/* Office */}
        <section className="container-shell grid grid-cols-1 items-stretch gap-8 py-24 lg:grid-cols-2">
          <MotionFadeUp>
            <div className="border border-brand-border bg-white p-10">
              <span className="eyebrow">Office Location</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink">
                Brighton Office
              </h2>
              <p className="mt-6 text-secondary leading-relaxed">
                122 Church Street, Brighton VIC 3186. Book ahead for private
                strategy sessions, campaign planning, and appraisal reviews.
              </p>
              <Link
                href="/faq"
                className="btn-outline mt-8"
              >
                View common questions
              </Link>
            </div>
          </MotionFadeUp>

          <MotionFadeUp delay={0.1}>
            <div className="flex min-h-[360px] items-end border border-brand-border bg-surface-high p-8">
              <span className="bg-brand-yellow px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink">
                Brighton VIC
              </span>
            </div>
          </MotionFadeUp>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
