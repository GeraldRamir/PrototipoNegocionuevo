import type { ReactNode } from "react";

/** Outline tag such as "COCOA" or "CARAMEL"; colour inherits from the parent. */
export function Chip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex h-[26px] items-center rounded-pill border-[1.2px] border-current px-3 text-[10.5px] font-semibold uppercase leading-none tracking-[0.1em] ${className}`}
    >
      {children}
    </span>
  );
}
