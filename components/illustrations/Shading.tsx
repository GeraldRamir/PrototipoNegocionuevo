"use client";

import { useId } from "react";

/** Horizontal light → shadow gradient overlay used to give cylinders some volume. */
export function useShading() {
  const raw = useId().replace(/:/g, "");
  const id = `shade-${raw}`;
  const defs = (
    <defs>
      <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#000" stopOpacity="0.28" />
        <stop offset="0.22" stopColor="#fff" stopOpacity="0.14" />
        <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
        <stop offset="0.8" stopColor="#000" stopOpacity="0.12" />
        <stop offset="1" stopColor="#000" stopOpacity="0.32" />
      </linearGradient>
      <radialGradient id={`${id}-r`} cx="0.35" cy="0.3" r="0.8">
        <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
        <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
        <stop offset="1" stopColor="#000" stopOpacity="0.35" />
      </radialGradient>
    </defs>
  );
  return { defs, fill: `url(#${id})`, radial: `url(#${id}-r)` };
}
