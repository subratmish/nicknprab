import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-brand-footer text-white">
      <div className="container-shell grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1.35fr_1.3fr]">
        <div>
          <h2 className="font-display text-xl font-bold tracking-tight">
            Nick &amp; Prab
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Leading the local market with transparency, integrity, and
            unparalleled results since 2010.
          </p>
          <div className="mt-7 flex gap-3" aria-label="Social links">
            {["IG", "LI", "FB"].map((item) => (
              <Link
                key={item}
                href="/contact"
                className="grid h-9 w-9 place-items-center border border-white/20 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-yellow hover:text-brand-yellow"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid content-start gap-3">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">
            Quick Links
          </h3>
          {[
            ["Privacy Policy", "/privacy"],
            ["Terms of Service", "/terms"],
            ["Office Locations", "/contact"],
            ["Meet the Team", "/about"],
            ["Client Reviews", "/client-reviews"],
            ["FAQ", "/faq"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-white/70 transition-all duration-200 hover:text-white hover:translate-x-1"
            >
              {label}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">
            Offices
          </h3>
          <p className="text-sm leading-relaxed text-white/70">
            <strong className="font-medium text-white">Brighton Office</strong>
            <br />
            122 Church Street, Brighton VIC 3186
          </p>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            <strong className="font-medium text-white">City Office</strong>
            <br />
            Level 15, 450 Collins St, Melbourne VIC 3000
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">
            Newsletter
          </h3>
          <p className="text-sm leading-relaxed text-white/70">
            Get the latest market insights delivered to your inbox.
          </p>
          <form className="mt-6 flex">
            <input
              aria-label="Email address"
              placeholder="Email address"
              className="min-w-0 flex-1 border border-white/10 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-brand-yellow"
            />
            <button className="bg-brand-yellow px-5 text-sm font-bold text-ink transition-all duration-300 hover:bg-brand-yellow-deep">
              Join
            </button>
          </form>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-7 text-center text-xs text-white/45">
        © 2024 Nick and Prab Real Estate. All rights reserved. Powered by Ray
        White.
      </p>
    </footer>
  );
}
