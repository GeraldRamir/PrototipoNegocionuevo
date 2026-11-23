import type { ReactNode } from "react";

type BadgeVariant = "cream" | "outline" | "soft";

const variants: Record<BadgeVariant, string> = {
  cream: "bg-cream/90 border border-forest/15 text-forest shadow-[0_1px_0_rgb(0_0_0/0.04)]",
  outline: "border-[1.5px] border-forest/25 bg-sage-light/60 text-forest",
  soft: "bg-sage-light text-forest",
};

export function Badge({
  children,
  icon,
  variant = "cream",
  className = "",
}: {
  children: ReactNode;
  icon?: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-pill font-semibold leading-none ${variants[variant]} ${className}`}>
      {icon}
      {children}
    </span>
  );
}

/** Small status dot used in "Open now" style badges. */
export function StatusDot({ open = true }: { open?: boolean }) {
  return (
    <span
      aria-hidden
      className={`inline-block h-[7px] w-[7px] shrink-0 rounded-full ${open ? "bg-forest" : "bg-rust"}`}
    />
  );
}
