"use client";

import { useId } from "react";

/** Glossy roasted coffee bean (fallback for bean-1…4.png). */
export function BeanArt({ className = "" }: { className?: string }) {
  const id = `bean-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 40 52" className={className} aria-hidden>
      <defs>
        <radialGradient id={id} cx="0.35" cy="0.3" r="0.85">
          <stop offset="0" className="[stop-color:var(--color-art-bean)]" stopOpacity="1" />
          <stop offset="1" className="[stop-color:var(--color-art-bean-dark)]" stopOpacity="1" />
        </radialGradient>
      </defs>
      <ellipse cx="20" cy="26" rx="17" ry="23" fill={`url(#${id})`} />
      <path d="M22 4C12 16 28 34 18 48" fill="none" className="stroke-art-bean-dark" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="13" cy="15" rx="4" ry="7" fill="#fff" opacity="0.16" transform="rotate(-15 13 15)" />
    </svg>
  );
}
