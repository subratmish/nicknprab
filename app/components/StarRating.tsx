export function StarRating({ className }: { className?: string }) {
  return (
    <div className={`flex gap-1 ${className ?? ""}`} aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 fill-brand-olive text-brand-olive"
          viewBox="0 0 20 20"
        >
          <path d="M10 1.5l2.58 5.23 5.77.84-4.18 4.07.99 5.75L10 14.67l-5.16 2.72.99-5.75L1.65 7.57l5.77-.84L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
