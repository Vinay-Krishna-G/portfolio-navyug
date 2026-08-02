"use client";

import Image from "next/image";
import { BRAND } from "@/lib/brand";

interface NavYugLogoProps {
  variant?: "full" | "mark" | "white" | "gold";
  size?: number;
  className?: string;
  priority?: boolean;
}

export default function NavYugLogo({
  variant = "mark",
  size,
  className = "",
  priority = false,
}: NavYugLogoProps) {
  // Determine dimensions and source image path based on variant
  let src: string = BRAND.assets.logoMark;
  let width = size || 36;
  let height = size || 36;
  let alt = `${BRAND.name} logo mark`;

  switch (variant) {
    case "full":
      src = BRAND.assets.fullLogo;
      width = size || 180;
      height = size ? Math.round(size * 0.45) : 48;
      alt = `${BRAND.name} — ${BRAND.tagline}`;
      break;
    case "white":
      src = BRAND.assets.logoWhite;
      width = size || 180;
      height = size ? Math.round(size * 0.45) : 48;
      alt = `${BRAND.name} logo`;
      break;
    case "gold":
      src = BRAND.assets.logoGold;
      width = size || 180;
      height = size ? Math.round(size * 0.45) : 48;
      alt = `${BRAND.name} logo`;
      break;
    case "mark":
    default:
      src = BRAND.assets.logoMark;
      width = size || 36;
      height = size || 36;
      alt = `${BRAND.name} icon`;
      break;
  }

  return (
    <div className={`inline-flex items-center shrink-0 select-none ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-auto h-full object-contain"
        style={{
          maxHeight: `${height}px`,
        }}
      />
    </div>
  );
}
