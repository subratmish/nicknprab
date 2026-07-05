"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type SiteHeaderProps = {
  active?: "buy" | "sell" | "recent" | "about" | "contact";
};

const navItems = [
  { key: "buy", label: "Buy", href: "/for-sale" },
  { key: "sell", label: "Sell", href: "/request-appraisal" },
  { key: "recent", label: "Recent Success", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;

export function SiteHeader({ active }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 h-20 w-full border-b border-brand-border-variant bg-white">
      <nav
        className="container-shell flex h-full items-center justify-between"
        aria-label="Primary navigation"
      >
        <Link href="/" aria-label="Nick & Prab home" className="shrink-0">
          <span className="font-display text-xl font-bold tracking-tight text-ink">
            Nick <span className="font-light italic">&amp;</span> Prab
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-9 text-xs font-bold uppercase tracking-[0.12em] md:flex">
          {navItems.map((item) => {
            const isActive = active === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`border-b-2 pb-1.5 transition-colors duration-300 ${
                  isActive
                    ? "border-brand-yellow-deep text-ink"
                    : "border-transparent text-secondary hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/request-appraisal"
          className="hidden shrink-0 btn-yellow md:inline-flex"
        >
          Request Appraisal
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-ink"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="absolute left-0 top-20 z-40 w-full border-b border-brand-border-variant bg-white px-5 py-6 shadow-elevated md:hidden">
          <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-[0.12em]">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`py-2 ${
                  active === item.key ? "text-brand-olive" : "text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/request-appraisal"
              className="btn-yellow mt-2 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Request Appraisal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
