import type { ReactNode } from "react";

type Tone = "forest" | "mustard";

/** Handwritten eyebrow ("fresh off the bar") with an optional mustard swoosh underneath. */
export function SectionEyebrow({
  children,
  tone = "forest",
  underline = true,
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  underline?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`script relative inline-block -rotate-2 text-[24px] md:text-[28px] ${
        tone === "mustard" ? "text-mustard" : "text-forest"
      } ${className}`}
    >
      {children}
      {underline ? (
        <svg
          aria-hidden
          viewBox="0 0 200 12"
          preserveAspectRatio="none"
          className="absolute -bottom-2 left-0 h-[10px] w-[105%] text-mustard"
        >
          <path d="M2 8C50 3 120 2 198 6" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      ) : null}
    </p>
  );
}
