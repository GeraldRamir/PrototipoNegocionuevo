"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

const ImagesContext = createContext<Set<string>>(new Set());

export function ImagesProvider({ images, children }: { images: string[]; children: ReactNode }) {
  const value = useMemo(() => new Set(images), [images]);
  return <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>;
}

export function useHasImage(name: string) {
  return useContext(ImagesContext).has(name);
}
