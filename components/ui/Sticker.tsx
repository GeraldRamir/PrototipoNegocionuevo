"use client";

import { useId } from "react";
import { BeanIcon } from "./BeanIcon";

type StickerTone = "mustard" | "sage";

const tones: Record<StickerTone, { bg: string; fg: string }> = {
  mustard: { bg: "fill-mustard", fg: "text-forest" },
  sage: { bg: "fill-sage-light", fg: "text-forest" },
};

/** Circular badge with text running around a path and a bean in the middle; the ring rotates slowly. */
export function Sticker({
  text,
  tone = "mustard",
  className = "",
  ring = false,
}: {
  text: string;
  tone?: StickerTone;
  className?: string;
  /** Adds a thin forest outline ring (used on the storefront sticker) */
  ring?: boolean;
}) {
  const id = useId().replace(/:/g, "");
  const { bg, fg } = tones[tone];
  const radius = 37;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className={`relative ${fg} ${className}`} aria-hidden>
      <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-[0_6px_10px_rgb(0_0_0/0.12)]">
        <circle cx="50" cy="50" r="49" className={bg} />
        {ring ? <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" /> : null}
        <defs>
          <path id={`sticker-${id}`} d={`M50 50m-${radius} 0a${radius} ${radius} 0 1 1 ${radius * 2} 0a${radius} ${radius} 0 1 1 -${radius * 2} 0`} />
        </defs>
        <g className="origin-center animate-spin-slow [transform-box:view-box]">
          <text
            fill="currentColor"
            fontSize="9.5"
            fontWeight="700"
            letterSpacing="1.2"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <textPath href={`#sticker-${id}`} textLength={circumference - 2} lengthAdjust="spacing">
              {text}
            </textPath>
          </text>
        </g>
      </svg>
      <BeanIcon className="absolute left-1/2 top-1/2 h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2" rotate={25} />
    </div>
  );
}
