"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import NavYugLogo from "@/components/branding/NavYugLogo";

const SERVICE_CAPSULES = [
  "Websites",
  "AI Automation",
  "SaaS",
  "Branding",
  "Enterprise",
];

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Soft spring physics (Max 6px translation, Max 2° rotation)
  const springConfig = { stiffness: 120, damping: 20 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(query.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  // Light-sliding cursor interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isReducedMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = ((e.clientX - centerX) / (rect.width / 2)) * 6; // max 6px
    const offsetY = ((e.clientY - centerY) / (rect.height / 2)) * 6; // max 6px

    const rotY = ((e.clientX - centerX) / (rect.width / 2)) * 2; // max 2deg
    const rotX = -((e.clientY - centerY) / (rect.height / 2)) * 2; // max 2deg

    mouseX.set(offsetX);
    mouseY.set(offsetY);
    rotateY.set(rotY);
    rotateX.set(rotX);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col justify-center overflow-hidden min-h-[90svh] lg:min-h-screen pt-32 pb-20 select-none"
      style={{ background: "var(--ny-bg)" }}
      aria-label="Hero"
    >
      {/* Subtle ambient glow top right */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(185,255,102,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── Left Column (42% width / 6 cols on lg) ── */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Headline */}
            <h1 className="font-display font-bold text-[#0F0F0F] tracking-tight leading-[1.05] text-[clamp(2.75rem,5.5vw,5.25rem)] mb-6 max-w-[580px]">
              We build <span className="text-[#0F0F0F]">digital products</span> that grow businesses.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed mb-8 max-w-[520px]">
              Premium websites, AI automation, and scalable software engineered for ambitious businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
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

            {/* Liquid Glass Service Capsules */}
            <div className="flex flex-wrap items-center gap-2.5">
              {SERVICE_CAPSULES.map((capsule) => (
                <span
                  key={capsule}
                  className="text-xs font-medium px-4 py-2 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.72)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(255, 255, 255, 0.85)",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.04)",
                    color: "#262626",
                  }}
                >
                  {capsule}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column (58% width / 6 cols on lg) ── */}
          <motion.div
            className="lg:col-span-6 flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
          >
            {/* Single Architectural Liquid Glass Focal Object */}
            <motion.div
              className="w-full max-w-[540px] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between relative transition-shadow duration-500"
              style={{
                x: mouseX,
                y: mouseY,
                rotateX: rotateX,
                rotateY: rotateY,
                background: "rgba(255, 255, 255, 0.70)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.92)",
                boxShadow: isHovered
                  ? "0 24px 72px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(185, 255, 102, 0.25)"
                  : "0 20px 60px rgba(0, 0, 0, 0.06)",
              }}
            >
              {/* Top Glass Header Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-black/5">
                <div className="flex items-center gap-3">
                  <NavYugLogo variant="mark" size={24} />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-neutral-900 font-display">
                      NavYug Digital Engine
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono">
                      v2026.4 • Architecture Overview
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#F8FFF1] border border-[rgba(185,255,102,0.3)] text-[#4F7A17]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#86D227] animate-pulse" />
                  Active Build
                </span>
              </div>

              {/* Middle Architectural Content Preview Surface */}
              <div className="my-6 p-6 rounded-2xl bg-white/80 border border-black/5 shadow-xs flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-600 font-medium">
                    System Architecture
                  </span>
                  <span className="text-[10px] font-mono text-[#5F8E1E] font-semibold">
                    100% Bespoke Code
                  </span>
                </div>

                {/* Minimalist Interface Representation Rules */}
                <div className="space-y-2.5">
                  <div className="h-2 w-3/4 rounded-full bg-neutral-200/80" />
                  <div className="h-2 w-1/2 rounded-full bg-neutral-100" />
                  <div className="h-2 w-5/6 rounded-full bg-neutral-100" />
                </div>

                {/* Architecture Metric Pills */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-black/5 text-center">
                  <div className="p-2 rounded-xl bg-neutral-50 border border-black/5">
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase">Performance</span>
                    <span className="text-xs font-bold text-neutral-900 font-mono">99 / 100</span>
                  </div>
                  <div className="p-2 rounded-xl bg-neutral-50 border border-black/5">
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase">Delivery</span>
                    <span className="text-xs font-bold text-neutral-900 font-mono">3–5 Wks</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#F8FFF1] border border-[rgba(185,255,102,0.25)]">
                    <span className="block text-[10px] font-mono text-[#5F8E1E] uppercase">Security</span>
                    <span className="text-xs font-bold text-[#4F7A17] font-mono">Enterprise</span>
                  </div>
                </div>
              </div>

              {/* Bottom Architectural Summary Bar */}
              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 font-sans">
                  Built with Next.js, TypeScript &amp; Custom Motion
                </span>
                <span className="text-xs font-bold text-neutral-900 font-mono">
                  NavYug Studio
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
