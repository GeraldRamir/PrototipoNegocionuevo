import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "outline-light" | "light" | "white";
type ButtonSize = "sm" | "md";

const base =
  "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-pill font-sans font-semibold leading-none transition-[transform,box-shadow,background-color,color] duration-200 ease-out disabled:pointer-events-none disabled:opacity-60";

const pressable =
  "hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none";

const variants: Record<ButtonVariant, string> = {
  primary: `bg-forest text-cream-text shadow-offset hover:shadow-offset-lg ${pressable}`,
  light: `bg-sage-light text-forest shadow-offset hover:shadow-offset-lg ${pressable}`,
  white: `bg-paper text-forest shadow-[4px_5px_0_var(--color-forest)] hover:shadow-[6px_7px_0_var(--color-forest)] ${pressable}`,
  outline: "border-[1.5px] border-forest bg-transparent text-forest hover:bg-forest hover:text-cream-text",
  "outline-light":
    "border-[1.5px] border-cream-text/70 bg-transparent text-cream-text hover:border-cream-text hover:bg-cream-text hover:text-forest",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-11 px-5 text-[14px]",
  md: "h-[52px] px-7 text-[16px]",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type AsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type AsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md", className = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = buttonClasses(variant, size, className);

  if (typeof props.href === "string") {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
