"use client";

import React from "react";
import { motion } from "framer-motion";
import NavYugLogo from "@/components/branding/NavYugLogo";

export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-3 my-4">
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-white border border-black/5 shadow-xs">
        <NavYugLogo variant="mark" size={18} />
      </div>

      {/* Typing Bubble */}
      <div className="px-4 py-3 rounded-2xl rounded-bl-xs bg-[#F8FFF1] border border-[rgba(185,255,102,0.25)] flex items-center gap-1.5 shadow-xs">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#86D227]"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
