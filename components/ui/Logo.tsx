import type { CSSProperties } from "react";

type LogoProps = {
  /** Any CSS colour, defaults to the forest token */
  color?: string;
  className?: string;
  title?: string;
};

/**
 * Approximation of the custom "RAVO KAFE" lettering. Swap the SVG body for the
 * real artwork when available; the props stay the same.
 */
export function Logo({ color = "var(--color-forest)", className, title = "Ravo Kafe" }: LogoProps) {
  const style: CSSProperties = { color };
  const textStyle: CSSProperties = { fontFamily: "var(--font-logo)" };

  return (
    <svg viewBox="0 0 124 100" className={className} style={style} role="img" aria-label={title}>
      <g fill="currentColor">
        <text x="1" y="44" fontSize="50" textLength="80" lengthAdjust="spacingAndGlyphs" style={textStyle} transform="rotate(-3 40 30)">
          RAV
        </text>
        <path
          transform="translate(83 1) rotate(22 18 22)"
          fillRule="evenodd"
          d="M4 22a14 21 0 1 0 28 0a14 21 0 1 0 -28 0Z M19.6 2.2C11 12.5 25 29 15.6 42L18.6 41.8C28 28.6 14.4 12.6 22.6 2.8Z"
        />
        <text x="3" y="86" fontSize="48" textLength="116" lengthAdjust="spacingAndGlyphs" style={textStyle} transform="rotate(-2 60 70)">
          KAFE
        </text>
      </g>
      <path d="M8 94C40 99 78 98 118 84" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
