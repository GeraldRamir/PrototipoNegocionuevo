type Token = "forest" | "sage" | "cream";

const fills: Record<Token, string> = {
  forest: "fill-forest",
  sage: "fill-sage",
  cream: "fill-cream",
};

/**
 * Soft wave that sits on the top (or bottom) edge of a section and overlaps
 * its neighbour, painted in the section's own colour.
 */
export function WaveDivider({
  color,
  position = "top",
  flip = false,
  className = "",
}: {
  color: Token;
  position?: "top" | "bottom";
  flip?: boolean;
  className?: string;
}) {
  const placement = position === "top" ? "bottom-[calc(100%-1px)]" : "top-[calc(100%-1px)] rotate-180";
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-x-0 z-10 h-[34px] md:h-[52px] ${placement} ${className}`}>
      <svg
        viewBox="0 0 1440 52"
        preserveAspectRatio="none"
        className={`h-full w-full ${flip ? "-scale-x-100" : ""}`}
      >
        <path
          className={fills[color]}
          d="M0 30C120 12 240 6 380 16S640 44 800 40S1080 8 1220 10S1380 24 1440 30V52H0Z"
        />
      </svg>
    </div>
  );
}
