"use client";

import { useState } from "react";

export function BedroomFilter() {
  const [beds, setBeds] = useState<number | null>(null);

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => setBeds(n === beds ? null : n)}
          className={`h-10 w-10 rounded-full border text-sm font-bold transition-colors ${
            beds === n
              ? "border-ink bg-ink text-white"
              : "border-brand-border bg-white text-ink hover:border-ink"
          }`}
        >
          {n}+
        </button>
      ))}
    </div>
  );
}
