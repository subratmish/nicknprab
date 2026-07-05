import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { MotionFadeUp } from "../../components/MotionFadeUp";
import { PropertyGallery } from "../../components/PropertyGallery";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { properties } from "../../data/properties";

type PropertyDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    notFound();
  }

  const [bedrooms, bathrooms, carSpaces, floorArea] = property.specs;
  const featureSummary = [
    ["Bedrooms", bedrooms],
    ["Bathrooms", bathrooms],
    ["Car Spaces", carSpaces],
    ["Floor Area", floorArea ?? "By request"],
  ];

  return (
    <>
      <SiteHeader active="buy" />

      <main className="bg-surface-bright">
        {/* Hero gallery */}
        <section className="relative w-full bg-ink">
          <div className="relative aspect-[16/7] min-h-[520px] w-full">
            <PropertyGallery
              images={property.images}
              sizes="100vw"
              title={property.address}
            />
          </div>
        </section>

        {/* Main content */}
        <section className="container-shell grid grid-cols-1 items-start gap-16 py-20 lg:grid-cols-[2fr_1fr]">
          <MotionFadeUp>
            <article>
              <span className="eyebrow">Auckland Premium Listing</span>
              <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">
                {property.address}
              </h1>
              <p className="mt-4 text-2xl font-bold text-ink">
                {property.price}
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-secondary">
                {property.description}
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {featureSummary.map(([label, value]) => (
                  <div
                    key={label}
                    className="border border-brand-border bg-white p-6 shadow-card"
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-olive">
                      {label}
                    </span>
                    <strong className="mt-2 block text-2xl font-bold text-ink">
                      {value}
                    </strong>
                  </div>
                ))}
              </div>

              <section className="mt-12 border-t border-brand-border py-10">
                <h2 className="font-display text-2xl font-bold text-ink">
                  Property Features
                </h2>
                <ul className="mt-6 grid gap-3 pl-5 text-secondary">
                  {property.features.map((feature) => (
                    <li
                      key={feature}
                      className="leading-relaxed"
                      style={{ listStyleType: "disc" }}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="border-t border-brand-border py-10">
                <h2 className="font-display text-2xl font-bold text-ink">
                  Location
                </h2>
                <p className="mt-4 max-w-3xl text-secondary">
                  Positioned for lifestyle convenience, this address places daily
                  essentials, green spaces, transport links, and premium local
                  amenities within easy reach.
                </p>
                <div className="mt-8 flex min-h-[360px] items-center justify-center border border-brand-border bg-surface-high">
                  <span className="inline-flex items-center gap-2 bg-brand-yellow px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink">
                    <MapPin className="h-4 w-4" />
                    {property.address}
                  </span>
                </div>
              </section>
            </article>
          </MotionFadeUp>

          <MotionFadeUp delay={0.1}>
            <aside className="sticky top-32 border border-brand-border bg-white p-8 shadow-elevated">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-olive">
                Private Inspection
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                Speak with Nick and Prab
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-secondary">
                Request a private viewing, price guidance, or a detailed
                information pack for this residence.
              </p>

              <form className="mt-8 space-y-4">
                <label className="block text-sm font-medium text-ink">
                  Name
                  <input
                    placeholder="Your name"
                    className="mt-2 w-full border border-brand-border bg-surface-bright p-3 text-sm outline-none transition-all focus:border-ink"
                  />
                </label>
                <label className="block text-sm font-medium text-ink">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full border border-brand-border bg-surface-bright p-3 text-sm outline-none transition-all focus:border-ink"
                  />
                </label>
                <label className="block text-sm font-medium text-ink">
                  Phone
                  <input
                    placeholder="Your phone number"
                    className="mt-2 w-full border border-brand-border bg-surface-bright p-3 text-sm outline-none transition-all focus:border-ink"
                  />
                </label>
                <label className="block text-sm font-medium text-ink">
                  Message
                  <textarea
                    defaultValue={`I would like to enquire about ${property.address}.`}
                    rows={4}
                    className="mt-2 w-full resize-y border border-brand-border bg-surface-bright p-3 text-sm outline-none transition-all focus:border-ink"
                  />
                </label>
                <button type="submit" className="btn-primary w-full">
                  Request Details
                </button>
              </form>
            </aside>
          </MotionFadeUp>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
