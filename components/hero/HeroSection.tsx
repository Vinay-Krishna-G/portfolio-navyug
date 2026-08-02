"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SERVICE_PILLS = [
  "Web Design",
  "AI Automation",
  "Web Apps",
  "Brand Identity",
  "Custom Software",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen pt-28 pb-20 select-none"
      style={{ background: "var(--ny-bg)" }}
      aria-label="Hero"
    >
      {/* Subtle ambient glow top center */}
      <div
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(185,255,102,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10 flex flex-col items-center justify-center text-center max-w-[760px] mx-auto px-4">
        
        {/* Main Content Entrance Animation */}
        <motion.div
          className="flex flex-col items-center text-center w-full"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Headline */}
          <h1 className="font-display font-extrabold text-[#0F0F0F] tracking-tight leading-[1.08] text-[clamp(2.75rem,5.5vw,5rem)] max-w-[680px] mb-6">
            We build digital products that grow businesses.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed max-w-[580px] mb-10">
            Premium websites, AI automation, and software engineered to help ambitious businesses grow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-9">
            <a
              href="#contact"
              className="btn-primary text-sm font-bold px-7 py-3.5 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105 cursor-pointer"
              style={{ background: "#B9FF66", color: "#0F0F0F" }}
            >
              Start Your Project →
            </a>
            <a
              href="#work"
              className="text-sm font-semibold px-7 py-3.5 rounded-full bg-white/80 border border-black/10 text-neutral-900 shadow-xs hover:bg-white transition-all duration-300 cursor-pointer"
            >
              View Our Work
            </a>
          </div>

          {/* Service Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {SERVICE_PILLS.map((pill) => (
              <span
                key={pill}
                className="text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 hover:border-black/20"
                style={{
                  background: "rgba(255, 255, 255, 0.72)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(255, 255, 255, 0.85)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
                  color: "#262626",
                }}
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Real-Project Browser Showcase Frame */}
          <motion.div
            className="w-full max-w-[760px] h-[160px] sm:h-[200px] rounded-[24px] bg-white border border-black/[0.06] shadow-[0_18px_60px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col relative"
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Safari/Chrome Real Browser Header */}
            <div className="w-full h-9 bg-neutral-50/90 border-b border-black/[0.06] px-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-80" />
              </div>

              {/* URL Address Bar */}
              <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white border border-black/5 text-[11px] font-mono text-neutral-400">
                <svg
                  className="w-3 h-3 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>navyug.in</span>
              </div>

              <div className="w-10" aria-hidden="true" />
            </div>

            {/* Real NavYug Showcase Image Container */}
            <div className="relative w-full flex-1 overflow-hidden bg-neutral-100">
              <Image
                src="/portfolio/restaurant/screenshots/01-home.webp"
                alt="NavYug Real Project Preview"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 760px"
                className="object-cover object-top"
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
