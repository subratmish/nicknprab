import Link from "next/link";
import {
  Bath,
  BedDouble,
  Car,
  Heart,
  Home,
  MapPin,
  Maximize,
  Search,
  TrendingUp,
} from "lucide-react";
import { BedroomFilter } from "../components/BedroomFilter";
import { MotionFadeUp } from "../components/MotionFadeUp";
import { PropertyGallery } from "../components/PropertyGallery";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { properties } from "../data/properties";

const stats = [
  { number: "15", label: "Avg Days to Sale" },
  { number: "$2.4B", label: "Sales in 2023" },
  { number: "98%", label: "Auction Clearance" },
  { number: "34+", label: "Local Experts" },
];

const tagVariants = [
  { text: "New Listing", bgClass: "bg-brand-yellow", textClass: "text-ink" },
  { text: "Auction Sat", bgClass: "bg-ink", textClass: "text-white" },
  { text: "Under Offer", bgClass: "bg-red-600", textClass: "text-white" },
  { text: "Price Reduced", bgClass: "bg-green-600", textClass: "text-white" },
  { text: "Open Sat 2PM", bgClass: "bg-brand-olive", textClass: "text-white" },
];

export default function ForSalePage() {
  return (
    <>
      <SiteHeader active="buy" />

      <main>
        {/* Hero / Search Header */}
        <section className="bg-surface-container-low pt-24 pb-12 md:pt-28 md:pb-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
            <MotionFadeUp>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink">
                Properties for Sale
              </h1>
              <p className="text-lg text-secondary max-w-2xl mt-4">
                Discover exceptional residences curated for the discerning buyer.
                Local mastery meets global standards in every listing.
              </p>
            </MotionFadeUp>

            <MotionFadeUp delay={0.1}>
              <div className="bg-white p-6 border border-brand-border shadow-sm grid grid-cols-1 md:grid-cols-4 gap-6 items-end mt-8">
                {/* Search Area */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-ink font-medium">
                    Search Area
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary" />
                    <input
                      type="text"
                      placeholder="Suburb or Postcode"
                      className="w-full border border-brand-border pl-10 pr-4 py-3 text-sm text-ink outline-none focus:border-ink bg-white"
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-ink font-medium">
                    Price Range
                  </label>
                  <select className="w-full border border-brand-border px-4 py-3 text-sm text-ink outline-none focus:border-ink bg-white appearance-none">
                    <option>Any Price</option>
                    <option>$500k - $1M</option>
                    <option>$1M - $2M</option>
                    <option>$2M - $3M</option>
                    <option>$3M+</option>
                  </select>
                </div>

                {/* Bedrooms */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-ink font-medium">
                    Bedrooms
                  </label>
                  <BedroomFilter />
                </div>

                {/* Search Button */}
                <button className="w-full bg-ink text-white font-bold px-6 py-3 text-sm transition-all duration-300 hover:bg-ink/90">
                  Search Listings
                </button>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* Results Grid */}
        <section className="bg-surface-bright py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
            {/* Toolbar */}
            <MotionFadeUp>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    142 Properties Found
                  </h2>
                  <div className="h-1 w-12 bg-brand-yellow mt-3" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-secondary">Sort by:</span>
                  <select className="border border-brand-border px-3 py-2 text-sm text-ink outline-none focus:border-ink bg-white appearance-none">
                    <option>Newest First</option>
                    <option>Price: High to Low</option>
                    <option>Price: Low to High</option>
                  </select>
                </div>
              </div>
            </MotionFadeUp>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property, index) => {
                const variant = tagVariants[index % tagVariants.length];
                return (
                  <MotionFadeUp key={property.slug} delay={index * 0.06}>
                    <article className="bg-white border border-brand-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                      {/* Image area */}
                      <div className="relative overflow-hidden">
                        <PropertyGallery
                          images={property.images}
                          title={property.address}
                        />
                        {/* Tag */}
                        <span
                          className={`absolute top-4 left-4 ${variant.bgClass} ${variant.textClass} text-xs font-bold px-3 py-1`}
                        >
                          {variant.text}
                        </span>
                        {/* Heart button */}
                        <button className="absolute top-4 right-4 h-8 w-8 bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white">
                          <Heart className="h-4 w-4 text-ink" />
                        </button>
                      </div>

                      {/* Body */}
                      <div className="p-8">
                        <p className="text-2xl font-bold text-ink">
                          {property.price}
                        </p>
                        <p className="text-secondary mt-1 flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 shrink-0" />
                          {property.address}
                        </p>

                        {/* Specs row */}
                        <div className="flex items-center gap-6 py-6 mt-4 border-y border-brand-border text-secondary">
                          <div className="flex items-center gap-1.5">
                            <BedDouble className="h-4 w-4" />
                            <span className="text-sm">{property.specs[0]}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Bath className="h-4 w-4" />
                            <span className="text-sm">{property.specs[1]}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Car className="h-4 w-4" />
                            <span className="text-sm">{property.specs[2]}</span>
                          </div>
                          {property.specs[3] && (
                            <div className="flex items-center gap-1.5">
                              <Maximize className="h-4 w-4" />
                              <span className="text-sm">{property.specs[3]}</span>
                            </div>
                          )}
                        </div>

                        <Link
                          href={`/for-sale/${property.slug}`}
                          className="mt-6 block w-full text-center border border-ink text-ink font-bold py-3 text-sm transition-all duration-300 hover:bg-ink hover:text-white"
                        >
                          View Details
                        </Link>
                      </div>
                    </article>
                  </MotionFadeUp>
                );
              })}

              {/* CTA Card */}
              <MotionFadeUp delay={properties.length * 0.06}>
                <div className="bg-ink text-white p-12 flex flex-col justify-center relative overflow-hidden h-full min-h-[400px]">
                  <h3 className="font-display text-2xl text-brand-yellow mb-4 relative z-10">
                    Thinking of selling?
                  </h3>
                  <p className="text-white/80 mb-8 max-w-xs relative z-10">
                    Get an expert market appraisal from our lead advisors today.
                  </p>
                  <Link
                    href="/request-appraisal"
                    className="inline-flex items-center justify-center gap-2 bg-white text-ink font-bold px-6 py-3 text-sm transition-all duration-300 hover:bg-brand-yellow relative z-10 w-fit"
                  >
                    <TrendingUp className="h-4 w-4" />
                    Request Appraisal
                  </Link>
                  <Home className="absolute -bottom-4 -right-4 h-40 w-40 text-white/10" />
                </div>
              </MotionFadeUp>
            </div>

            {/* Pagination */}
            <MotionFadeUp>
              <div className="flex items-center justify-center gap-2 mt-16">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`h-12 w-12 flex items-center justify-center text-sm font-bold border border-brand-border transition-all ${
                      page === 1
                        ? "bg-ink text-white border-ink"
                        : "bg-white text-ink hover:border-ink"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <span className="h-12 flex items-center justify-center px-2 text-secondary">
                  ...
                </span>
                <button className="h-12 w-12 flex items-center justify-center text-sm font-bold border border-brand-border bg-white text-ink transition-all hover:border-ink">
                  12
                </button>
              </div>
            </MotionFadeUp>
          </div>
        </section>

        {/* Newsletter / Trust Section */}
        <section className="bg-surface-container-low border-y border-brand-border py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left */}
              <MotionFadeUp>
                <div>
                  <h2 className="font-display text-4xl font-bold text-ink">
                    Market Insights Delivered Weekly.
                  </h2>
                  <p className="text-secondary mt-4 max-w-md">
                    Join over 12,000 property owners receiving our exclusive
                    monthly market reports and off-market opportunities.
                  </p>
                  <form className="flex mt-8 gap-0">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 border border-brand-border px-4 py-3 text-sm text-ink outline-none focus:border-ink bg-white"
                    />
                    <button className="bg-ink text-white font-bold px-6 py-3 text-sm transition-all duration-300 hover:bg-ink/90">
                      Subscribe
                    </button>
                  </form>
                </div>
              </MotionFadeUp>

              {/* Right - Stats Grid */}
              <MotionFadeUp delay={0.1}>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white p-8 border border-brand-border text-center flex flex-col items-center justify-center"
                    >
                      <span className="text-4xl text-brand-olive">
                        {stat.number}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-secondary mt-2">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </MotionFadeUp>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
