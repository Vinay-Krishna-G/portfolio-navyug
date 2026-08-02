"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavYugLogo from "@/components/branding/NavYugLogo";
import { BRAND } from "@/lib/brand";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Total animation sequence: 1.5s
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAFAFA] select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(185,255,102,0.18) 0%, transparent 70%)",
            }}
          />

          {/* Logo Mark + Animation Sequence */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.96, 1.0, 1.0, 1.02],
            }}
            transition={{
              duration: 1.5,
              times: [0, 0.2, 0.8, 1.0],
              ease: "easeInOut",
            }}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            <NavYugLogo variant="mark" size={56} priority />

            <div className="flex flex-col items-center text-center">
              <span className="font-display text-xs font-extrabold tracking-[0.25em] text-neutral-900 uppercase">
                {BRAND.name}
              </span>
              <span className="text-[10px] font-medium tracking-[0.15em] text-neutral-500 uppercase mt-1">
                {BRAND.tagline}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
