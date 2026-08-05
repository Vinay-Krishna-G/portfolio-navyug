"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import FloatingWorkOrbit from "./FloatingWorkOrbit";

const SERVICE_PILLS = [
  "Web Design",
  "AI Automation",
  "Web Apps",
  "Brand Identity",
  "Custom Software",
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen pt-32 pb-28 sm:pb-32 select-none"
      style={{ background: "var(--ny-bg)" }}
      aria-label="Hero"
    >
      {/* Floating Real Work Showcase Orbit Cards */}
      <FloatingWorkOrbit />

      {/* Subtle top ambient glow */}
      <div
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(185,255,102,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10 flex flex-col items-center justify-center text-center max-w-[800px] mx-auto px-4">
        
        {/* Main Content Entrance Animation */}
        <motion.div
          className="flex flex-col items-center text-center w-full"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Headline */}
          <h1 className="font-display font-extrabold text-[#0F0F0F] tracking-tight leading-[1.08] text-[clamp(2.75rem,5.5vw,5rem)] max-w-[780px] mb-0">
            We build digital products that grow businesses.
          </h1>

          {/* Supporting Copy (24px below headline) */}
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed max-w-[620px] mt-6 mb-0">
            Premium websites, AI automation, and software engineered to help ambitious businesses grow.
          </p>

          {/* CTA Buttons (48px below subheading) */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12 mb-0">
            <a
              href="#contact"
              className="btn-primary text-sm font-bold px-7 py-3.5 rounded-full shadow-md transition-all duration-250 hover:shadow-lg hover:brightness-105 hover:-translate-y-0.5 cursor-pointer"
              style={{ background: "#B9FF66", color: "#0F0F0F" }}
            >
              Start Your Project →
            </a>
            <a
              href="#work"
              className="text-sm font-semibold px-7 py-3.5 rounded-full bg-white/80 border border-black/10 text-neutral-900 shadow-xs hover:bg-white hover:border-black/20 transition-all duration-250 cursor-pointer"
            >
              View Our Work
            </a>
          </div>

          {/* Service Pills (36px below CTA buttons) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-9 mb-0">
            {SERVICE_PILLS.map((pill) => (
              <span
                key={pill}
                className="text-xs font-medium px-4 py-2 rounded-full transition-all duration-180 ease-out hover:border-black/15 hover:bg-white/90"
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

        </motion.div>
      </div>
    </section>
  );
}
