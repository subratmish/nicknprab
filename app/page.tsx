import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, Car, Heart, Search } from "lucide-react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { AnimatedNumber } from "./components/AnimatedNumber";
import { SectionHeading } from "./components/SectionHeading";
import { StarRating } from "./components/StarRating";
import {
  MotionFadeUp,
  StaggerContainer,
  StaggerItem,
} from "./components/MotionFadeUp";

const metrics = [
  {
    value: 142,
    prefix: "$",
    suffix: "M+",
    label: "Total Sales 2023",
    featured: true,
  },
  {
    value: 14,
    suffix: " Days",
    label: "Avg. Days on Market",
    featured: false,
  },
  {
    value: 98.5,
    suffix: "%",
    decimals: 1,
    label: "Auction Clearance",
    featured: false,
  },
];

const properties = [
  {
    image: "/images/property-azure.jpg",
    address: "22 Azure Court, Brighton",
    price: "$4,250,000",
    beds: 5,
    baths: 3,
    cars: 2,
    extraTag: "Record Price",
    rightLabel: "Days on Market",
    rightValue: "11 Days",
  },
  {
    image: "/images/property-heritage.jpg",
    address: "104 Heritage Way, Malvern",
    price: "Undisclosed",
    beds: 4,
    baths: 2,
    cars: 1,
    extraTag: null,
    rightLabel: "Method",
    rightValue: "Auction",
  },
  {
    image: "/images/property-skyline.jpg",
    address: "901/50 Skyline Dr, Southbank",
    price: "$2,890,000",
    beds: 3,
    baths: 3,
    cars: 2,
    extraTag: "Off Market",
    rightLabel: "Days on Market",
    rightValue: "4 Days",
  },
  {
    image: "/images/property-elms.jpg",
    address: "The Elms, Flinders Range",
    price: "$8,500,000",
    beds: 6,
    baths: 5,
    cars: 4,
    extraTag: null,
    rightLabel: "Method",
    rightValue: "Private Sale",
  },
  {
    image: "/images/property-cliffside.jpg",
    address: "58 Cliffside, Sorrento",
    price: "Undisclosed",
    beds: 4,
    baths: 3,
    cars: 2,
    extraTag: null,
    rightLabel: "Days on Market",
    rightValue: "18 Days",
  },
  {
    image: "/images/property-loft.jpg",
    address: "The Loft, Collingwood",
    price: "$1,560,000",
    beds: 2,
    baths: 2,
    cars: 1,
    extraTag: null,
    rightLabel: "Method",
    rightValue: "Auction",
  },
];

const testimonials = [
  {
    quote:
      "The level of detail Nick and Prab put into the marketing campaign was unprecedented. We saw 45 groups through the first weekend and had a signed contract by Wednesday. Truly exceptional service.",
    name: "James Thompson",
    suburb: "Sold in Kew",
    avatar: "/images/avatar-james.jpg",
    featured: false,
  },
  {
    quote:
      "After being on the market with another agent for 3 months with no result, NP Real Estate took over and sold it within 14 days for a price that set a new block record. I would not trust anyone else.",
    name: "Elena Rodriguez",
    suburb: "Sold in St Kilda",
    avatar: "/images/avatar-elena.jpg",
    featured: true,
  },
  {
    quote:
      "Transparency was our biggest concern, but Prab kept us updated daily. The final auction result was $120k above our reserve. They made a stressful process feel incredibly smooth and controlled.",
    name: "The Harrison Family",
    suburb: "Sold in Camberwell",
    avatar: "/images/avatar-harrison.jpg",
    featured: false,
  },
  {
    quote:
      "Their campaign made our home feel premium without ever feeling overdone. The photography, buyer follow-up and negotiation strategy were all handled with absolute precision.",
    name: "Priya & Daniel Shah",
    suburb: "Sold in Hawthorn",
    avatar: "/images/avatar-sarah.jpg",
    featured: false,
  },
  {
    quote:
      "Nick and Prab gave us clear advice before every decision and backed it with real market evidence. We felt informed, calm and in control from appraisal to settlement.",
    name: "Michelle Carter",
    suburb: "Sold in Toorak",
    avatar: "/images/avatar-james.jpg",
    featured: false,
  },
  {
    quote:
      "The buyer management was exceptional. Every open home was followed by honest feedback, and the final negotiation delivered a result beyond what we thought was possible.",
    name: "Amit Patel",
    suburb: "Sold in Richmond",
    avatar: "/images/avatar-harrison.jpg",
    featured: false,
  },
  {
    quote:
      "We needed a team who could move quickly without sacrificing quality. NP Real Estate launched the campaign beautifully and secured a fantastic offer in the first week.",
    name: "Grace Morgan",
    suburb: "Sold in Brighton",
    avatar: "/images/avatar-elena.jpg",
    featured: false,
  },
];

const heroQuotes = [
  {
    quote: "Nick & Prab exceeded our price expectation by $50k in just two weeks.",
    name: "Sarah & Tom",
    role: "Vendors",
    avatar: "/images/avatar-sarah.jpg",
  },
  {
    quote: "The campaign felt sharp, calm and completely tailored to our property.",
    name: "Priya & Daniel",
    role: "Vendors",
    avatar: "/images/avatar-james.jpg",
  },
  {
    quote: "Every update was clear, timely and backed by real buyer feedback.",
    name: "Michelle Carter",
    role: "Vendor",
    avatar: "/images/avatar-elena.jpg",
  },
  {
    quote: "They negotiated with confidence and delivered a result we still talk about.",
    name: "Amit Patel",
    role: "Vendor",
    avatar: "/images/avatar-harrison.jpg",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader active="recent" />

      <main className="bg-surface-bright">
        {/* Hero */}
        <section className="pt-20">
          <div className="container-shell grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28 xl:py-32">
            <MotionFadeUp className="lg:col-span-7" x={-30} y={0} duration={0.8}>
              <h1 className="font-display text-[42px] font-medium leading-[1.02] text-ink md:text-6xl lg:text-[66px]">
                Proven Results.
                <span className="mt-2 block text-brand-olive">
                  Record Breaking Success.
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-secondary">
                Explore our recently sold portfolio. From designer townhomes to
                sprawling estates, our strategic approach consistently delivers
                premium outcomes for our clients across the region.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className={`flex min-w-[150px] flex-col px-6 py-4 transition-all duration-300 hover:-translate-y-1 ${
                      m.featured
                        ? "bg-ink text-brand-yellow shadow-card hover:shadow-card-hover"
                        : "bg-brand-surface-high text-ink hover:shadow-card"
                    }`}
                  >
                    <AnimatedNumber
                      value={m.value}
                      prefix={m.prefix}
                      suffix={m.suffix}
                      decimals={m.decimals}
                      className="text-2xl font-bold"
                    />
                    <span
                      className={`mt-1 text-[10px] font-bold uppercase tracking-wider ${
                        m.featured ? "text-brand-yellow/80" : "text-secondary"
                      }`}
                    >
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </MotionFadeUp>

            <MotionFadeUp
              className="lg:col-span-5"
              delay={0.2}
              scale={0.95}
              y={0}
              duration={0.8}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded shadow-2xl">
                <Image
                  src="/images/hero-agents.jpg"
                  alt="Nick and Prab"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="hero-quote-flip absolute bottom-6 left-6 right-6 z-10 text-white">
                  {heroQuotes.map((item, index) => (
                    <div
                      key={item.name}
                      className="hero-quote-face flex items-center gap-4"
                      style={{ animationDelay: `${index * 3.4}s` }}
                    >
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-brand-yellow">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm italic leading-snug">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                        <p className="mt-1 text-xs font-bold">
                          &mdash; {item.name}, {item.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* Search bar */}
        <section className="sticky top-20 z-40 border-y border-brand-border-variant bg-white">
          <div className="container-shell flex flex-col items-center gap-4 py-4 md:flex-row">
            <label className="relative w-full flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary" />
              <input
                type="text"
                placeholder="Search by suburb or property type..."
                className="h-14 w-full border border-brand-border bg-surface-bright pl-11 pr-4 text-sm text-ink outline-none transition-all duration-300 placeholder:text-secondary/60 focus:border-brand-olive"
              />
            </label>
            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
              <select className="h-14 border border-brand-border bg-surface-bright px-4 text-sm text-secondary outline-none focus:border-brand-olive">
                <option>Price Range</option>
                <option>$1M - $2M</option>
                <option>$2M - $5M</option>
                <option>$5M+</option>
              </select>
              <select className="h-14 border border-brand-border bg-surface-bright px-4 text-sm text-secondary outline-none focus:border-brand-olive">
                <option>Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Land</option>
              </select>
              <button className="btn-primary h-14 whitespace-nowrap">
                Filter Results
              </button>
            </div>
          </div>
        </section>

        {/* Recently Sold Portfolio */}
        <section className="section-padding bg-surface-bright">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Latest Transactions"
              title="Recently Sold Portfolio"
              aside={
                <span>
                  Showing <AnimatedNumber value={158} /> results
                </span>
              }
            />

            <StaggerContainer
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              stagger={0.1}
            >
              {properties.map((property) => (
                <StaggerItem key={property.address}>
                  <article className="group overflow-hidden rounded border border-brand-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={property.image}
                        alt={property.address}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 bg-ink px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                        Sold
                      </span>
                      {property.extraTag && (
                        <span
                          className={`absolute right-4 top-4 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm ${
                            property.extraTag === "Record Price"
                              ? "bg-brand-yellow text-ink"
                              : "bg-ink text-brand-yellow"
                          }`}
                        >
                          {property.extraTag}
                        </span>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-xl font-bold text-ink">
                          {property.address}
                        </h3>
                        <button
                          aria-label="Save property"
                          className="shrink-0 text-secondary transition-colors hover:text-brand-olive"
                        >
                          <Heart className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-5 text-xs text-secondary">
                        <span className="inline-flex items-center gap-1.5">
                          <BedDouble className="h-4 w-4 stroke-[1.5]" />
                          {property.beds} Beds
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Bath className="h-4 w-4 stroke-[1.5]" />
                          {property.baths} Baths
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Car className="h-4 w-4 stroke-[1.5]" />
                          {property.cars} Cars
                        </span>
                      </div>

                      <div className="mt-5 flex items-end justify-between border-t border-brand-border pt-4">
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-secondary">
                            Sale Price
                          </span>
                          <strong className="mt-1 block text-xl font-bold text-brand-olive">
                            {property.price}
                          </strong>
                        </div>
                        <div className="text-right">
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-secondary">
                            {property.rightLabel}
                          </span>
                          <strong className="mt-1 block text-sm font-bold text-ink">
                            {property.rightValue}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <MotionFadeUp className="mt-16 text-center">
              <button className="btn-primary min-w-[280px]">
                Load More Success Stories
              </button>
            </MotionFadeUp>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-surface-container-low">
          <div className="container-shell">
            <MotionFadeUp className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <span className="eyebrow">Social Proof</span>
                <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
                  What Our Vendors Say
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <StarRating />
                <span className="text-sm font-bold text-ink">
                  <AnimatedNumber value={4.9} decimals={1} />
                  /5 from <AnimatedNumber value={200} suffix="+" /> Reviews
                </span>
              </div>
            </MotionFadeUp>

            <StaggerContainer
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              stagger={0.12}
            >
              {testimonials.map((t) => (
                <StaggerItem key={t.name}>
                  <article
                    className={`relative flex min-h-[260px] flex-col justify-between overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${
                      t.featured
                        ? "bg-ink text-white"
                        : "border border-white/50 bg-white shadow-card"
                    }`}
                  >
                    {t.featured && (
                      <span className="absolute -bottom-4 -right-4 text-[140px] leading-none text-white/10">
                        &ldquo;
                      </span>
                    )}
                    <p
                      className={`relative z-10 text-[15px] leading-relaxed ${
                        t.featured
                          ? "text-xl font-light"
                          : "italic text-secondary"
                      }`}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="relative z-10 mt-8 flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <strong
                          className={`block text-sm font-bold ${
                            t.featured ? "text-brand-yellow" : "text-ink"
                          }`}
                        >
                          {t.name}
                        </strong>
                        <span
                          className={`block text-xs ${
                            t.featured ? "text-white/60" : "text-secondary"
                          }`}
                        >
                          {t.suburb}
                        </span>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-surface-bright">
          <div className="container-shell">
            <MotionFadeUp>
              <div className="relative overflow-hidden rounded bg-brand-yellow px-8 py-16 md:px-16 md:py-20">
                <div className="relative z-10 max-w-3xl">
                  <h2 className="font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
                    Your property could be our next success story.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
                    Contact Nick and Prab today for a confidential market
                    appraisal and discover how our premium marketing strategy
                    can maximize your final sale price.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link href="/request-appraisal" className="btn-primary">
                      Get Free Appraisal
                    </Link>
                    <Link href="/contact" className="btn-outline">
                      Speak to an Agent
                    </Link>
                  </div>
                </div>
                <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-olive/10 md:-right-20 md:-top-20" />
              </div>
            </MotionFadeUp>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
