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
      setIsReadyToScroll(false);
      return;
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
      className="card-premium overflow-hidden relative cursor-pointer flex flex-col justify-between group rounded-[24px]"
      style={{
        boxShadow: isHovered
          ? "0 2px 8px rgba(0,0,0,.04), 0 12px 32px rgba(0,0,0,.06), 0 24px 64px rgba(0,0,0,.04)"
          : "0 2px 8px rgba(0,0,0,.04), 0 12px 32px rgba(0,0,0,.04)",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      {/* ── Top Preview Window Container ── */}
      <div className="relative h-[230px] sm:h-[250px] w-full overflow-hidden bg-neutral-900 mask-gradient-v">
        {/* Parallax & Auto-Scrolling Content */}
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="w-full"
          animate={
            shouldAnimate
              ? {
                y: ["0%", "-45%", "0%"],
              }
              : {}
          }
          transition={
            shouldAnimate
              ? {
                duration: 16,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }
              : { duration: 0.5 }
          }
        >
          <PreviewLayout project={project} />
        </motion.div>

        {/* ── Top Right: LIVE PREVIEW Badge ── */}
        <div className="absolute top-3 right-3 z-20 pointer-events-none transition-opacity duration-300">
          <span
            className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border transition-all duration-300 ${isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            style={{
              background: "rgba(15, 15, 15, 0.75)",
              color: "#B9FF66",
              borderColor: "rgba(185, 255, 102, 0.3)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B9FF66] animate-pulse" />
            LIVE PREVIEW
          </span>
        </div>

        {/* ── Hover Overlay & CTA Button ── */}
        <motion.div
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(15,15,15,0.4) 0%, rgba(15,15,15,0.7) 100%)",
            backdropFilter: "blur(3px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.span
            className="text-xs font-bold px-5 py-2.5 rounded-full shadow-lg border border-[#B9FF66]/40"
            style={{ background: "#B9FF66", color: "#0F0F0F" }}
            animate={{ y: isHovered ? 0 : 12, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Explore Experience →
          </motion.span>
        </motion.div>
      </div>

      {/* ── Bottom Project Footer Info ── */}
      <div className="p-5 bg-white dark:bg-neutral-900 border-t border-black/5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold leading-snug text-neutral-900 dark:text-neutral-100">
              {project.name}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
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
              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-black/5"
            >
              {feat}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
