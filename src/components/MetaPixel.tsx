"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Meta (Facebook) Pixel — client-side route-change tracker.
 *
 * The pixel base code lives in `src/app/layout.tsx` as a plain inline
 * <script> so it renders in the server HTML and fires the initial
 * PageView. Next.js App Router client navigations don't reload the
 * page, so this component fires an additional PageView whenever the
 * pathname changes (skipping the very first render to avoid a double
 * count on initial load).
 *
 * Rendered only when NEXT_PUBLIC_META_PIXEL_ID is set.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function MetaPixel() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
