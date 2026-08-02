"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { ProjectData } from "@/data/projects";
import PreviewLayout from "./PreviewLayout";

interface LivingPreviewProps {
  project: ProjectData;
  index: number;
}

export default function LivingPreview({ project, index }: LivingPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOrReducedMotion, setIsMobileOrReducedMotion] = useState(false);
  const [isReadyToScroll, setIsReadyToScroll] = useState(false);

  // Mouse tracking spring physics (6-10px Apple style tilt/shift)
  const springConfig = { stiffness: 220, damping: 22 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  // Check for reduced motion & mobile viewport
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    const checkState = () => {
      setIsMobileOrReducedMotion(reducedMotionQuery.matches || mobileQuery.matches);
    };

    checkState();
    reducedMotionQuery.addEventListener("change", checkState);
    mobileQuery.addEventListener("change", checkState);

    return () => {
      reducedMotionQuery.removeEventListener("change", checkState);
      mobileQuery.removeEventListener("change", checkState);
    };
  }, []);

  // IntersectionObserver to only animate when visible in viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Staggered start delay + 800ms initial entrance pause before auto-scrolling
  useEffect(() => {
    if (!isInView || isMobileOrReducedMotion) {
      const resetTimer = setTimeout(() => setIsReadyToScroll(false), 0);
      return () => clearTimeout(resetTimer);
    }

    const staggerMs = (index % 3) * 1500 + 800; // 0.8s, 2.3s, 3.8s stagger
    const timer = setTimeout(() => {
      setIsReadyToScroll(true);
    }, staggerMs);

    return () => clearTimeout(timer);
  }, [isInView, isMobileOrReducedMotion, index]);

  // Handle Mouse Move for 6-10px cursor tracking parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isMobileOrReducedMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = ((e.clientX - centerX) / (rect.width / 2)) * 8; // max 8px
    const offsetY = ((e.clientY - centerY) / (rect.height / 2)) * 8; // max 8px

    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const shouldAnimate = isInView && isReadyToScroll && !isHovered && !isMobileOrReducedMotion;

  return (
    <motion.article
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card-premium overflow-hidden relative cursor-pointer flex flex-col justify-between group rounded-[24px] bg-white transition-all duration-500"
      style={{
        borderColor: isHovered ? "rgba(185,255,102,0.4)" : "rgba(0,0,0,0.05)",
        boxShadow: isHovered
          ? "0 0 0 1px rgba(185,255,102,0.18), 0 16px 50px rgba(0,0,0,0.10)"
          : "0 8px 30px rgba(0,0,0,0.05)",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Top Preview Window Container ── */}
      <div className="relative h-[230px] sm:h-[250px] w-full overflow-hidden bg-white mask-gradient-v">
        {/* Parallax, Auto-Scrolling & Subtle Image Zoom Content */}
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="w-full"
          animate={{
            ...(shouldAnimate ? { y: ["0%", "-45%", "0%"] } : {}),
            scale: isHovered ? 1.015 : 1,
          }}
          transition={
            shouldAnimate
              ? {
                duration: 16,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }
              : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <PreviewLayout project={project} />
        </motion.div>

        {/* ── Top Right: LIVE PREVIEW Badge (dims to 55% on hover) ── */}
        <div className="absolute top-3 right-3 z-20 pointer-events-none transition-opacity duration-300">
          <span
            className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border transition-all duration-300 ${
              isHovered ? "opacity-55" : "opacity-100"
            } bg-white/90 text-neutral-900 border-black/10 shadow-xs`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: project.dotColor || "#86D227" }}
            />
            LIVE PREVIEW
          </span>
        </div>

        {/* ── Hover CTA Button (No Dark Dimming) ── */}
        <motion.div
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="text-xs font-bold px-5 py-2.5 rounded-full shadow-lg border border-[#B9FF66]/50"
            style={{ background: "#B9FF66", color: "#0F0F0F" }}
            animate={{ y: isHovered ? 0 : 8, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            Explore Experience →
          </motion.span>
        </motion.div>
      </div>

      {/* ── Bottom Project Footer Info ── */}
      <div className="p-5 bg-white border-t border-black/5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold leading-snug text-[#111111]">
              {project.name}
            </h3>
            <p className="text-xs text-[#6B7280] mt-0.5 font-medium">
              {project.industry}
            </p>
          </div>
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ background: project.dotColor }}
            aria-hidden="true"
          />
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.features.map((feat) => (
            <span
              key={feat}
              className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[#F5F5F5] text-[#444444] border border-black/5"
            >
              {feat}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
