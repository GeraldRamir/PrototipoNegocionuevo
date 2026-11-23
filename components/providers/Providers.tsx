"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { ImagesProvider } from "./ImagesProvider";

export function Providers({ images, children }: { images: string[]; children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ImagesProvider images={images}>{children}</ImagesProvider>
    </MotionConfig>
  );
}
