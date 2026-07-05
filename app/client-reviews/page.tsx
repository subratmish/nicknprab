import Image from "next/image";
import { Check } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { MotionFadeUp, StaggerContainer, StaggerItem } from "../components/MotionFadeUp";

const stats = [
  { value: "450+", label: "Properties Sold" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "14", label: "Avg. Days on Market" },
  { value: "$1.2B", label: "Sales Volume" },
];

const reviews = [
  {
    name: "The Henderson Family",
    property: "Sold: 42 Oakmont Terrace, Remuera",
    quote:
      "Nick and Prab are true professionals. They did not just sell our house; they curated an experience that led to a record-breaking price in just 10 days. Their communication was surgical and transparent throughout the entire auction process.",
    avatar: "/images/avatar-harrison.jpg",
    featured: false,
  },
  {
    name: "Sarah Mitchell",
    property: "Sold: 15B Highpoint Circuit",
    quote:
      "As a first-time seller, I was anxious. Prab took the time to explain every detail, from the marketing strategy to the final negotiation. They managed to get us 15% over our reserve. I would not trust anyone else with my real estate needs.",
    avatar: "/images/avatar-sarah.jpg",
    featured: false,
  },
  {
    name: "Dr. & Mrs. Aris",
    property: "Sold: 88 Victoria Ave",
    quote:
      "Their local mastery is unmatched. We had interviewed three other agencies, but NP Real Estate came with a data-driven approach that others lacked. They knew exactly who our buyer was and how to reach them.",
    avatar: "/images/avatar-james.jpg",
    featured: true,
  },
  {
    name: "James & Lily Chen",
    property: "Bought & Sold: Ponsonby",
    quote:
      "Transparent, honest, and high-energy. Prab handled the purchase of our new home and the sale of our old one simultaneously. The coordination was perfect. We moved in 30 days. Remarkable!",
    avatar: "/images/avatar-james.jpg",
    featured: false,
  },
  {
    name: "Marcus Thorne",
    property: "Sold: 201/5 Quay Street",
    quote:
      "The level of property data and surgical precision NP real estate provides is superior to any other agency in the area. They do not just guess values; they prove them.",
    avatar: "/images/avatar-harrison.jpg",
    featured: false,
  },
  {
    name: "Elena Rodriguez",
    property: "Sold: 12 Gardenia Lane",
    quote:
      "Absolutely outstanding service. The appraisal was accurate, the staging advice was spot on, and the final sale price exceeded our expectations. They really are the premium choice for our neighborhood.",
    avatar: "/images/avatar-elena.jpg",
    featured: false,
  },
];

const benefits = [
  "No Obligation",
  "Real-Time Market Data",
  "Elite Local Expertise",
];

function StarRow({ featured }: { featured?: boolean }) {
  return (
    <div className="mb-6 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${
            featured ? "fill-brand-yellow text-brand-yellow" : "fill-brand-olive text-brand-olive"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M10 1.5l2.58 5.23 5.77.84-4.18 4.07.99 5.75L10 14.67l-5.16 2.72.99-5.75L1.65 7.57l5.77-.84L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function ClientReviewsPage() {
  return (
    <>
      <SiteHeader active="recent" />

      <main className="bg-surface-bright">
        {/* Hero */}
        <section className="container-shell pt-40 pb-20 text-center">
          <MotionFadeUp>
            <span className="inline-block bg-ink px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-yellow">
              Testimonials
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">
              Local Mastery. Transparent Results. Proven Success.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary">
              Discover why hundreds of families trust Nick and Prab to navigate
              their most significant financial transitions.
            </p>
          </MotionFadeUp>
        </section>

        {/* Stats */}
        <section className="bg-ink py-16">
          <div className="container-shell grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {stats.map((s) => (
              <MotionFadeUp key={s.label}>
                <div className="text-5xl font-bold text-brand-yellow">
                  {s.value}
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-white/70">
                  {s.label}
                </div>
              </MotionFadeUp>
            ))}
          </div>
        </section>

        {/* Masonry Reviews */}
        <section className="container-shell py-24">
          <StaggerContainer
            className="columns-1 gap-6 md:columns-2 lg:columns-3"
            stagger={0.1}
          >
            {reviews.map((review) => (
              <StaggerItem key={review.name}>
                <article
                  className={`mb-6 break-inside-avoid p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated ${
                    review.featured
                      ? "bg-ink text-white shadow-card"
                      : "border border-brand-border bg-white shadow-card"
                  }`}
                >
                  <StarRow featured={review.featured} />
                  <p
                    className={`leading-relaxed ${
                      review.featured
                        ? "text-xl font-light"
                        : "text-lg italic text-secondary"
                    }`}
                  >
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div
                    className={`mt-8 flex items-center gap-4 border-t pt-6 ${
                      review.featured ? "border-white/10" : "border-brand-border"
                    }`}
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <strong
                        className={`block text-lg ${
                          review.featured ? "text-white" : "text-ink"
                        }`}
                      >
                        {review.name}
                      </strong>
                      <span
                        className={`block text-xs font-bold uppercase tracking-wider ${
                          review.featured ? "text-brand-yellow" : "text-secondary"
                        }`}
                      >
                        {review.property}
                      </span>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Lead Form */}
        <section className="bg-surface-container-low py-24">
          <div className="container-shell">
            <MotionFadeUp>
              <div className="grid grid-cols-1 gap-12 border border-brand-border bg-white p-10 shadow-elevated lg:grid-cols-2 lg:p-16">
                <div>
                  <h2 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
                    Ready to be our next success story?
                  </h2>
                  <p className="mt-6 text-lg text-secondary">
                    Join over 400 families who achieved their property dreams
                    with our signature advisory approach. Get a data-backed
                    appraisal today.
                  </p>
                  <ul className="mt-8 space-y-5">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-center gap-4">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-brand-yellow">
                          <Check className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-bold uppercase tracking-widest text-ink">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <form className="border border-brand-border bg-surface-bright p-8">
                  <div className="space-y-6">
                    <div>
                      <label className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-secondary">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alexander Hamilton"
                        className="w-full border border-brand-border bg-white p-4 text-sm text-ink outline-none transition-all focus:border-ink"
                      />
                    </div>
                    <div>
                      <label className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-secondary">
                        Property Address
                      </label>
                      <input
                        type="text"
                        placeholder="Where is your home located?"
                        className="w-full border border-brand-border bg-white p-4 text-sm text-ink outline-none transition-all focus:border-ink"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-secondary">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          className="w-full border border-brand-border bg-white p-4 text-sm text-ink outline-none transition-all focus:border-ink"
                        />
                      </div>
                      <div>
                        <label className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-secondary">
                          Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="+64 000 000"
                          className="w-full border border-brand-border bg-white p-4 text-sm text-ink outline-none transition-all focus:border-ink"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-ink py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-brand-olive"
                    >
                      Get My Free Appraisal
                    </button>
                  </div>
                </form>
              </div>
            </MotionFadeUp>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
