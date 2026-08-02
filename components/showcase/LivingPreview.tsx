"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import Image from "next/image";
import { ProjectMetadata } from "@/data/projects";

interface LivingPreviewProps {
  project: ProjectMetadata;
  index: number;
}

export default function LivingPreview({ project, index }: LivingPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMobileOrReducedMotion, setIsMobileOrReducedMotion] = useState(false);

  const screenshots = project.screenshots || [];
  const hasMultipleSlides = screenshots.length > 1;

  // Spring physics for hover tilt/shift
  const springConfig = { stiffness: 220, damping: 22 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  // Reduced motion and mobile detection
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

  // IntersectionObserver
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

  // 2.8s slideshow loop with 800ms crossfade transition (staggered delay)
  useEffect(() => {
    if (!isInView || isHovered || isMobileOrReducedMotion || !hasMultipleSlides) {
      return;
    }

    const initialStagger = (index % 3) * 1200; // 0s, 1.2s, 2.4s stagger
    let interval: NodeJS.Timeout;

    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % screenshots.length);
      }, 2800);
    }, initialStagger);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [isInView, isHovered, isMobileOrReducedMotion, hasMultipleSlides, index, screenshots.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isMobileOrReducedMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = ((e.clientX - centerX) / (rect.width / 2)) * 6;
    const offsetY = ((e.clientY - centerY) / (rect.height / 2)) * 6;

    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleCardClick = () => {
    if (project.demoUrl) {
      window.location.href = project.demoUrl;
    }
  };

  const currentImage = screenshots[currentSlideIndex] || screenshots[0] || "/portfolio/restaurant/thumbnail.webp";

  return (
    <motion.article
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className="card-premium overflow-hidden relative cursor-pointer flex flex-col justify-between group rounded-[24px]"
      style={{
        boxShadow: isHovered
          ? "0 2px 6px rgba(0,0,0,.03), 0 12px 28px rgba(0,0,0,.05), 0 20px 48px rgba(0,0,0,.03)"
          : "0 2px 6px rgba(0,0,0,.02), 0 8px 20px rgba(0,0,0,.03)",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      {/* ── Top Preview Window Container (16:10 Aspect Ratio) ── */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 mask-gradient-v">
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="w-full h-full relative"
          animate={{ scale: isHovered ? 1.03 : 1.00 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Image
                src={currentImage}
                alt={`${project.name} preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top"
                priority={index < 3}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── Top Right: LIVE PREVIEW Badge ── */}
        <div className="absolute top-3 right-3 z-20 pointer-events-none transition-opacity duration-300">
          <span
            className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border transition-all duration-300 ${
              isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
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
            background: "linear-gradient(180deg, rgba(15,15,15,0.2) 0%, rgba(15,15,15,0.6) 100%)",
            backdropFilter: "blur(2px)",
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
            Open Demo →
          </motion.span>
        </motion.div>
      </div>

      {/* ── Bottom Project Footer Info (Seamless Light Continuation) ── */}
      <div className="p-5 bg-[#F8FFF1] border-t border-[rgba(185,255,102,0.18)] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold leading-snug text-[#1A1A1A]">
              {project.name}
            </h3>
            <p className="text-xs text-[#6B7280] mt-0.5 font-medium">
              {project.industry}
            </p>
          </div>
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs"
            style={{ background: "#86D227" }}
            aria-hidden="true"
          />
        </div>

        {/* Pastel Lime Feature Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.features.map((feat) => (
            <span
              key={feat}
              className="text-[10px] font-semibold px-2.5 py-1 rounded-full border"
              style={{
                background: "rgba(185, 255, 102, 0.14)",
                color: "#4F7A17",
                borderColor: "rgba(185, 255, 102, 0.25)",
              }}
            >
              {feat}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
