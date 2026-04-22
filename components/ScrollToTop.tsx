"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();
  const prev = useRef<string | null>(null);

  useEffect(() => {
    if (prev.current !== null && prev.current !== pathname) {
      // Double rAF garante execução após o Next.js processar scroll restoration
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scroll(0, 0);
        });
      });
    }
    prev.current = pathname;
  }, [pathname]);

  return null;
}
