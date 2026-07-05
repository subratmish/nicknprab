import { MotionFadeUp } from "./MotionFadeUp";

export function SectionHeading({
  eyebrow,
  title,
  aside,
}: {
  eyebrow?: string;
  title: string;
  aside?: React.ReactNode;
}) {
  return (
    <MotionFadeUp className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
          {title}
        </h2>
      </div>
      {aside && <div className="text-sm text-secondary">{aside}</div>}
    </MotionFadeUp>
  );
}
