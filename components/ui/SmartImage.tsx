"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useHasImage } from "@/components/providers/ImagesProvider";

type SmartImageProps = {
  /** File name inside /public/images */
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Rendered instead of the sage placeholder while the file is missing */
  fallback?: ReactNode;
  /** Fill the parent (parent must be positioned) instead of intrinsic sizing */
  fill?: boolean;
};

export function SmartImage({ src, alt, width, height, sizes, className = "", priority, fallback, fill }: SmartImageProps) {
  const exists = useHasImage(src);

  if (exists) {
    return fill ? (
      <Image src={`/images/${src}`} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />
    ) : (
      <Image src={`/images/${src}`} alt={alt} width={width} height={height} sizes={sizes} priority={priority} className={className} />
    );
  }

  if (fallback) {
    return (
      <div role="img" aria-label={alt} className={className}>
        {fallback}
      </div>
    );
  }

  return <ImagePlaceholder name={src} alt={alt} width={width} height={height} className={className} fill={fill} />;
}

export function ImagePlaceholder({
  name,
  alt,
  width,
  height,
  className = "",
  fill,
}: {
  name: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fill?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex flex-col items-center justify-center gap-2 bg-sage text-forest/50 ${fill ? "absolute inset-0" : ""} ${className}`}
      style={fill ? undefined : { aspectRatio: `${width} / ${height}` }}
    >
      <ImageIcon className="h-7 w-7" strokeWidth={1.5} aria-hidden />
      <span className="px-2 text-center text-[11px] font-semibold tracking-wide">{name}</span>
    </div>
  );
}
