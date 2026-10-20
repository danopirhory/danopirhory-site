"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

/**
 * Global fixed-position cutout headshot (Headshotmobile.png) anchored to the
 * viewport's bottom-right.
 *
 * Rendered on every page EXCEPT the homepage. The homepage hero already
 * presents the full headshot at large size, so a duplicate floating cutout
 * there is redundant.
 */
export function FixedCutout() {
  const pathname = usePathname();

  // Not on the main page, only other pages.
  if (pathname === "/") return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-0 right-0 z-20 w-[42%] max-w-[200px] lg:w-[18%] lg:max-w-[240px]"
    >
      <Image
        src="/images/Headshotmobile.png"
        alt=""
        width={480}
        height={640}
        priority
        sizes="(min-width: 1024px) 18vw, 42vw"
        className="h-auto w-full"
      />
    </div>
  );
}
