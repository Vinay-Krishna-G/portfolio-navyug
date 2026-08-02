"use client";

import React from "react";
import { motion } from "framer-motion";
import NavYugLogo from "@/components/branding/NavYugLogo";

export default function CTAConversation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="flex items-end gap-3 my-6 pt-4"
    >
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-white border border-black/5 shadow-xs select-none">
        <NavYugLogo variant="mark" size={18} />
      </div>

      {/* CTA Message Box */}
      <div className="p-6 sm:p-7 rounded-2xl rounded-bl-xs bg-[#F8FFF1] border border-[rgba(185,255,102,0.3)] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-full sm:max-w-[85%]">
        <div className="flex flex-col gap-1">
          <span className="text-base font-bold text-neutral-900 leading-snug">
            That&apos;s the overview. Every project is different.
          </span>
          <p className="text-sm text-neutral-600">
            Let&apos;s talk about yours and build something memorable together.
          </p>
        </div>

        <a
          href="#contact"
          className="btn-primary text-sm font-semibold px-6 py-3 shrink-0 self-start sm:self-auto rounded-full cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
        >
          Schedule a Call →
        </a>
      </div>
    </motion.div>
  );
}
