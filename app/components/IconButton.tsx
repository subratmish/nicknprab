import { LucideIcon } from "lucide-react";

export function IconButton({
  icon: Icon,
  label,
  href = "#",
  variant = "dark",
}: {
  icon: LucideIcon;
  label: string;
  href?: string;
  variant?: "dark" | "light";
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`grid h-12 w-12 place-items-center border transition-all duration-300 hover:-translate-y-0.5 ${
        variant === "dark"
          ? "border-brand-border text-ink hover:bg-ink hover:text-white"
          : "border-white/30 text-white hover:bg-white hover:text-ink"
      }`}
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}
