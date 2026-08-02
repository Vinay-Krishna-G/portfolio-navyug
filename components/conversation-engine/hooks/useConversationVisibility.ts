"use client";

import { useState, useEffect, RefObject } from "react";

export function useConversationVisibility(targetRef: RefObject<HTMLElement | null>): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [targetRef]);

  return isVisible;
}
