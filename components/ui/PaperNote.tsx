import type { ReactNode } from "react";

/** Small rotated paper card with handwritten text. */
export function PaperNote({
  children,
  className = "",
  rotate = -4,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <div
      className={`script rounded-[6px] bg-paper px-4 py-2.5 text-[19px] leading-[1.05] text-forest shadow-[0_10px_24px_-10px_rgb(0_0_0/0.35)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}

/** Hand-drawn curved arrow. */
export function HandArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 60" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 3C10 14 8 30 16 50" />
      <path d="M8 43l8 8 6-10" />
    </svg>
  );
}
