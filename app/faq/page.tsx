"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Home, LineChart, Tag } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { MotionFadeUp, StaggerContainer, StaggerItem } from "../components/MotionFadeUp";

const sections = [
  {
    id: "selling",
    icon: Tag,
    title: "Selling Your Property",
    questions: [
      {
        q: "How do I determine the best listing price?",
        a: "Determining the right price starts with a comparative market analysis. We review recently sold homes, competing listings, buyer demand, property condition, and timing so your home is positioned to attract maximum interest without leaving money on the table.",
      },
      {
        q: "What costs are involved in selling a home?",
        a: "The main costs are agency commission, marketing, photography, floorplans, legal preparation, and any presentation work you approve. We provide a clear cost plan before launch so there are no settlement surprises.",
      },
      {
        q: "How should I prepare my home for viewings?",
        a: "First impressions matter. We usually recommend decluttering, deep cleaning, minor repairs, garden presentation, and selective styling. Our team gives room-by-room advice based on the expected buyer profile.",
      },
    ],
  },
  {
    id: "buying",
    icon: Home,
    title: "Buying Your Next Home",
    questions: [
      {
        q: "Should I get pre-approved before searching?",
        a: "Yes. Pre-approval gives you a reliable budget and shows sellers you can act with confidence. In a competitive campaign, finance readiness can materially improve your negotiation position.",
      },
      {
        q: "What is the difference between an Auction and Private Treaty?",
        a: "An auction is a public sale where buyers bid competitively under auction conditions. Private treaty is negotiated through the agent using offers and counteroffers. The right strategy depends on demand, timing, and seller expectations.",
      },
    ],
  },
];

function Accordion({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden border border-brand-border bg-white transition-all hover:shadow-sm">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-xl font-medium text-ink">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-ink transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-relaxed text-secondary">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [openSections, setOpenSections] = useState<Record<string, string | null>>({
    selling: null,
    buying: null,
    market: null,
  });

  const toggle = (sectionId: string, question: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId] === question ? null : question,
    }));
  };

  return (
    <>
      <SiteHeader active="about" />

      <main className="bg-surface-bright">
        <section className="container-shell pt-40 pb-12">
          <MotionFadeUp>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight text-ink md:text-6xl">
              Client Help Center
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-secondary">
              Find clear, professional answers to your real estate questions.
              Our expertise ensures your high-stakes decisions are backed by
              data and local mastery.
            </p>
          </MotionFadeUp>
        </section>

        <section className="container-shell pb-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Sidebar */}
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-32">
                <span className="eyebrow">Categories</span>
                <nav className="mt-6 flex flex-col gap-1 border-l border-brand-border-variant">
                  {[
                    ["selling", "Selling"],
                    ["buying", "Buying"],
                    ["market", "Market Insights"],
                  ].map(([id, label]) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="border-l-4 border-transparent py-2 pl-4 text-secondary transition-all hover:border-brand-olive hover:text-brand-olive"
                    >
                      {label}
                    </a>
                  ))}
                </nav>

                <div className="mt-12 bg-ink p-6 text-white">
                  <h3 className="font-display text-2xl">Still have questions?</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    Speak directly with our expert advisors for a personalized
                    strategy.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-yellow mt-6 w-full"
                  >
                    Contact Agent
                  </Link>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-9 space-y-16">
              {sections.map((section) => (
                <section id={section.id} key={section.id} className="scroll-mt-32">
                  <MotionFadeUp>
                    <div className="mb-8 flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded bg-brand-yellow text-ink">
                        <section.icon className="h-6 w-6" />
                      </span>
                      <h2 className="font-display text-3xl font-bold text-ink">
                        {section.title}
                      </h2>
                    </div>
                  </MotionFadeUp>

                  <StaggerContainer className="space-y-4" stagger={0.08}>
                    {section.questions.map((item) => (
                      <StaggerItem key={item.q}>
                        <Accordion
                          question={item.q}
                          answer={item.a}
                          open={openSections[section.id] === item.q}
                          onToggle={() => toggle(section.id, item.q)}
                        />
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </section>
              ))}

              {/* Market Insights */}
              <section id="market" className="scroll-mt-32">
                <MotionFadeUp>
                  <div className="mb-8 flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded bg-brand-yellow text-ink">
                      <LineChart className="h-6 w-6" />
                    </span>
                    <h2 className="font-display text-3xl font-bold text-ink">
                      Market Insights
                    </h2>
                  </div>
                </MotionFadeUp>

                <MotionFadeUp>
                  <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="bg-ink p-8 text-white">
                      <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-brand-yellow">
                        Regional Trend
                      </span>
                      <h4 className="text-3xl font-bold">15 Days</h4>
                      <p className="mt-2 text-white/70">
                        Average time on market in our local precinct, currently
                        12% faster than last quarter.
                      </p>
                    </div>
                    <div className="bg-brand-yellow p-8 text-ink">
                      <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-brand-olive">
                        Investor Alert
                      </span>
                      <h4 className="text-3xl font-bold">4.2%</h4>
                      <p className="mt-2 text-ink/80">
                        Average rental yield for three-bedroom residences in the
                        coastal corridor.
                      </p>
                    </div>
                  </div>
                </MotionFadeUp>

                <Accordion
                  question="How do interest rate changes affect my property value?"
                  answer="Interest rates influence buyer borrowing capacity. While higher rates can cool demand, local factors such as infrastructure developments, school zones, and limited supply often act as a buffer for property values in premium pockets."
                  open={openSections.market === "interest"}
                  onToggle={() => toggle("market", "interest")}
                />
              </section>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
