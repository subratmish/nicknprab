import Image from "next/image";
import Link from "next/link";
import { Verified, TrendingUp, Mail, Phone } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { MotionFadeUp } from "../components/MotionFadeUp";

const principles = [
  {
    title: "Local Mastery",
    body: "Deep-rooted knowledge of every street and suburb we serve, providing surgical precision in valuations.",
  },
  {
    title: "Modern Edge",
    body: "High-end editorial marketing and cinematic property tours crafted to capture the premium market.",
  },
  {
    title: "Client Trust",
    body: "A commitment to being premium advisors, not just facilitators, building lifelong relationships.",
  },
];

const partners = [
  {
    name: "Nick",
    image: "/images/about-nick.jpg",
    title: "Lead Partner & Strategist",
    credential: "12+ Years Experience",
    bio: "Nick is known for his analytical approach to real estate. With a background in property development and high-level negotiation, he views every listing as a strategic asset. His ability to navigate complex market shifts and provide candid, data-driven advice has earned him a reputation as the advisor of choice for serious sellers.",
  },
  {
    name: "Prab",
    image: "/images/about-prab.jpg",
    title: "Partner & Marketing Specialist",
    credential: "Master of Presentation",
    bio: "Prab brings a fresh, dynamic energy to the team. A specialist in modern digital marketing and buyer psychology, he ensures that every property he touches is presented to perfection. His focus on emotional resonance, cinematic storytelling, and impeccable staging consistently drives premium results.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="about" />

      <main>
        {/* Hero */}
        <section className="relative h-[614px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/about-hero.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/60" />
          <MotionFadeUp className="relative z-10 text-center px-5">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              Defining Excellence in Real Estate
            </h1>
            <p className="text-white/80 max-w-2xl text-lg mx-auto">
              Meet Nick and Prab, the duo transforming the local property market
              through transparency, surgical precision, and high-stakes
              reliability.
            </p>
          </MotionFadeUp>
        </section>

        {/* Partnership */}
        <section className="bg-surface-container-low py-24">
          <MotionFadeUp className="container-shell">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-olive font-bold">
                  The Partnership
                </span>
                <h2 className="font-display text-3xl font-bold text-ink mt-3">
                  Backed by the Heritage of Ray White
                </h2>
                <p className="text-secondary leading-relaxed mt-4">
                  Nick and Prab operate within the powerful ecosystem of Ray
                  White, Australasia's largest real estate group. This partnership
                  combines local specialist knowledge with global reach and
                  industry-leading technology, ensuring our clients receive an
                  unfair advantage in every transaction.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Verified className="h-5 w-5 text-brand-olive" />
                    <span className="text-secondary">Global Reach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Verified className="h-5 w-5 text-brand-olive" />
                    <span className="text-secondary">Data-Driven Insights</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 border border-brand-border shadow-sm text-center">
                <p className="text-4xl">
                  Ray<span className="text-brand-olive">White</span>
                </p>
                <p className="mt-4 uppercase tracking-widest text-xs text-secondary">
                  Established Partnership 2024
                </p>
              </div>
            </div>
          </MotionFadeUp>
        </section>

        {/* Mission / Bento */}
        <section className="bg-surface-bright py-24">
          <div className="container-shell">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <MotionFadeUp className="md:col-span-8 bg-ink text-white p-12">
                <span className="text-white/60 uppercase text-xs tracking-widest font-bold block mb-4">
                  Our Mission
                </span>
                <p className="text-4xl md:text-[42px] leading-tight">
                  To provide a premium real estate experience rooted in{" "}
                  <span className="text-brand-yellow">radical transparency</span>{" "}
                  and relentless pursuit of results.
                </p>
              </MotionFadeUp>

              <MotionFadeUp
                className="md:col-span-4 bg-brand-yellow p-12 flex flex-col justify-between"
                delay={0.1}
              >
                <TrendingUp className="text-4xl text-ink" />
                <div className="mt-8">
                  <span className="text-5xl font-bold text-ink block">
                    15 Days
                  </span>
                  <span className="uppercase tracking-widest text-[10px] text-ink/80 block mt-2">
                    AVG. SALE TIME ACROSS OUR PORTFOLIO
                  </span>
                </div>
              </MotionFadeUp>

              {principles.map((item, index) => (
                <MotionFadeUp
                  key={item.title}
                  className="md:col-span-4 bg-white border border-brand-border p-8"
                  delay={0.15 + index * 0.05}
                >
                  <h3 className="font-display text-xl text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary">{item.body}</p>
                </MotionFadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Team Bios */}
        <section className="bg-surface-container-lowest py-24">
          <div className="container-shell">
            <MotionFadeUp className="text-center">
              <h2 className="font-display text-3xl font-bold text-ink">
                The Partners
              </h2>
              <div className="h-1.5 w-24 bg-brand-yellow mx-auto mt-6" />
            </MotionFadeUp>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-16">
              {partners.map((partner) => (
                <MotionFadeUp key={partner.name}>
                  <article className="group">
                    <div className="relative overflow-hidden mb-8 border border-brand-border aspect-[4/5]">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-0 left-0 bg-ink text-brand-yellow px-6 py-2 text-lg">
                        {partner.name}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-ink">
                      {partner.title}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-secondary mt-1">
                      {partner.credential}
                    </p>
                    <p className="text-secondary leading-relaxed mt-3">
                      {partner.bio}
                    </p>
                    <div className="mt-5 flex gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 border border-brand-border px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary hover:text-ink transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 border border-brand-border px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary hover:text-ink transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        Call
                      </Link>
                    </div>
                  </article>
                </MotionFadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink text-white py-24">
          <div className="container-shell max-w-4xl text-center">
            <MotionFadeUp>
              <h2 className="font-display text-3xl md:text-4xl">
                Ready to experience a different kind of real estate?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mt-4">
                Let Nick and Prab provide you with a comprehensive market report
                and strategy for your property.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-brand-yellow text-ink font-bold inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  Request a Strategy Session
                </Link>
                <Link
                  href="/"
                  className="border-2 border-white text-white font-bold inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
                >
                  View Recent Sales
                </Link>
              </div>
            </MotionFadeUp>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
