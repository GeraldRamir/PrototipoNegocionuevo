"use client";

import { useRef, type KeyboardEvent, type ReactNode } from "react";

type PillTone = "light" | "dark";

export type PillOption<T extends string> = { value: T; label: string };

const pillBase =
  "inline-flex items-center gap-2 rounded-pill border-[1.5px] font-semibold leading-none transition-colors duration-200";

const tones: Record<PillTone, { active: string; idle: string }> = {
  light: {
    active: "border-forest bg-forest text-cream-text",
    idle: "border-forest bg-paper/80 text-forest hover:bg-sage-light",
  },
  dark: {
    active: "border-cream-text bg-cream-text text-forest",
    idle: "border-cream-text/50 bg-transparent text-cream-text hover:border-cream-text",
  },
};

export function pillClasses(active: boolean, tone: PillTone = "light", className = "") {
  return `${pillBase} ${active ? tones[tone].active : tones[tone].idle} ${className}`;
}

/** Single-select pill row with radiogroup semantics and arrow-key navigation. */
export function PillGroup<T extends string>({
  options,
  value,
  onChange,
  label,
  icon,
  tone = "light",
  className = "",
  pillClassName = "h-10 px-4 text-[14px]",
}: {
  options: readonly PillOption<T>[];
  value: T;
  onChange: (value: T) => void;
  label: string;
  icon?: ReactNode;
  tone?: PillTone;
  className?: string;
  pillClassName?: string;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const delta = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + options.length) % options.length;
    const option = options[next];
    if (!option) return;
    onChange(option.value);
    refs.current[next]?.focus();
  };

  return (
    <div role="radiogroup" aria-label={label} className={`flex flex-wrap gap-2.5 ${className}`}>
      {options.map((option, index) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            ref={(el) => {
              refs.current[index] = el;
            }}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(option.value)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={pillClasses(active, tone, pillClassName)}
          >
            {icon ? <span className={active ? "text-mustard" : "text-forest"}>{icon}</span> : null}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
