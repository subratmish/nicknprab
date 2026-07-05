import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { MotionFadeUp } from "../components/MotionFadeUp";

const reportBenefits = [
  "Recent comparable sales around your address",
  "Buyer demand signals and suburb trend context",
  "A practical launch strategy from Nick and Prab",
];

export default function RequestAppraisalPage() {
  return (
    <>
      <SiteHeader active="sell" />

      <main className="bg-surface-bright">
        {/* Top form */}
        <section className="bg-surface-container-low pt-40 pb-20">
          <div className="container-shell">
            <MotionFadeUp>
              <span className="eyebrow">Free Property Report</span>
              <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-ink md:text-6xl">
                Know What Your Property Is Worth Today!
              </h1>
              <p className="mt-6 max-w-xl text-lg text-secondary">
                Share a few details and receive your FREE appraisal.
              </p>
            </MotionFadeUp>

            <MotionFadeUp delay={0.1}>
              <form className="mt-10 border border-brand-border bg-white p-8 shadow-card md:p-10">
                <div className="mb-8">
                  <strong className="block text-xs font-bold uppercase tracking-widest text-ink">
                    Step 1 of 3
                  </strong>
                  <div className="mt-3 h-2 w-full bg-surface-container-low">
                    <span className="block h-full w-1/3 bg-brand-yellow" />
                  </div>
                </div>

                <label className="block">
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Address <span className="text-brand-olive">(Required)</span>
                  </span>
                  <input
                    placeholder="Start typing a New Zealand address"
                    className="h-14 w-full border border-brand-border bg-surface-bright px-5 text-sm text-ink outline-none transition-all focus:border-ink"
                  />
                </label>

                {/* Decorative map */}
                <div className="relative mt-6 min-h-[420px] overflow-hidden border border-brand-border bg-surface-high">
                  <button
                    type="button"
                    className="absolute left-5 top-5 z-10 border border-ink bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-white"
                  >
                    Coverage Area
                  </button>

                  <div className="absolute left-8 top-16 text-lg font-medium text-secondary">
                    Australia
                  </div>
                  <div className="absolute left-[30%] top-[45%] text-sm font-bold text-brand-olive">
                    Tasman Sea
                  </div>

                  {/* Stylized NZ north island */}
                  <div className="absolute left-[55%] top-[22%] h-36 w-20 rotate-[-20deg] rounded-[48%_52%_42%_58%] border-2 border-ink/70" />
                  {/* South island */}
                  <div className="absolute left-[52%] top-[56%] h-32 w-16 rotate-[36deg] rounded-[50%_42%_56%_44%] border-2 border-ink/70" />

                  <div className="absolute left-[66%] top-[28%] text-center text-lg font-medium text-ink">
                    Auckland
                  </div>
                  <div className="absolute left-[62%] top-[54%] text-center text-xl font-bold text-ink">
                    New Zealand
                  </div>
                  <div className="absolute left-[74%] top-[50%] text-center text-base font-medium text-ink">
                    Wellington
                  </div>

                  <div className="absolute bottom-5 right-5 bg-ink px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
                    Auckland / Wellington / NZ
                  </div>
                </div>

                <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row">
                  <button type="submit" className="btn-primary min-w-[180px]">
                    Next
                  </button>
                  <p className="text-sm text-secondary">
                    We use this to prepare a suburb-specific report. No
                    obligation.
                  </p>
                </div>
              </form>
            </MotionFadeUp>
          </div>
        </section>

        {/* What you receive */}
        <section className="container-shell grid grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2">
          <MotionFadeUp>
            <div>
              <span className="eyebrow">What You Receive</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
                A sharper read on your market.
              </h2>
            </div>
          </MotionFadeUp>

          <MotionFadeUp delay={0.1}>
            <div className="grid gap-4">
              {reportBenefits.map((benefit) => (
                <article
                  key={benefit}
                  className="border border-brand-border bg-white p-6 text-secondary shadow-sm"
                >
                  {benefit}
                </article>
              ))}
            </div>
          </MotionFadeUp>
        </section>

        {/* Advisors CTA */}
        <section className="container-shell pb-24">
          <MotionFadeUp>
            <div className="grid grid-cols-1 items-center gap-10 bg-ink p-10 text-white lg:grid-cols-2 lg:p-14">
              <div>
                <h2 className="font-display text-3xl font-bold text-white">
                  Prefer to speak directly?
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-white/70">
                  Book a private appraisal conversation with Nick and Prab if
                  your sale timeline, property condition, or campaign goals need
                  a more tailored strategy.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <Link href="/contact" className="btn-yellow">
                  Request a Strategy Session
                </Link>
              </div>
            </div>
          </MotionFadeUp>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
