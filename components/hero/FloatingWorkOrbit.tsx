"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * FloatingWorkOrbit - Live Website Preview Orbiting Browser Cards
 * 
 * Features:
 * - Miniature live browser mockups cycling through 4 real project screens per card
 * - Varying transition styles: Vertical scroll, Horizontal slide, Crossfade
 * - Staggered, unsynchronized slideshow timings per card
 * - Hover pauses slideshow, scales to 1.04, tilts, and deepens shadow
 * - Screen label pill (e.g., Home -> Menu -> Gallery) shows current active page
 * - 60 FPS performance, preloaded WebP images, zero flicker
 */

interface FloatingCard {
  id: string;
  title: string;
  domain: string;
  category: string;
  transitionType: "vertical" | "horizontal" | "fade";
  screenshots: string[];
  screenLabels: string[];
  positionDesktop: string;
  depthOpacity: number;
  depthScale: number;
  floatConfig: {
    y: number[];
    rotate: number[];
    duration: number;
    delay: number;
  };
  slideshowDelay: number;
}

const FLOATING_PROJECTS: FloatingCard[] = [
  {
    id: "restaurant",
    title: "Maison Bistro",
    domain: "maisonbistro.com",
    category: "Web Design",
    transitionType: "vertical",
    screenshots: [
      "/portfolio/restaurant/screenshots/01-home.webp",
      "/portfolio/restaurant/screenshots/02-services.webp",
      "/portfolio/restaurant/screenshots/03-gallery.webp",
      "/portfolio/restaurant/screenshots/04-contact.webp",
    ],
    screenLabels: ["Home", "Menu", "Gallery", "Booking"],
    positionDesktop: "top-10 left-[0.5%] xl:left-[1.8%]",
    depthOpacity: 0.85,
    depthScale: 0.96,
    floatConfig: {
      y: [-5, 5, -5],
      rotate: [-1, 1, -1],
      duration: 11.5,
      delay: 0,
    },
    slideshowDelay: 0,
  },
  {
    id: "gift-shop",
    title: "Luxe Gift Studio",
    domain: "luxegifts.shop",
    category: "E-Commerce",
    transitionType: "horizontal",
    screenshots: [
      "/portfolio/gift-shop/screenshots/01-home.webp",
      "/portfolio/gift-shop/screenshots/02-services.webp",
      "/portfolio/gift-shop/screenshots/03-gallery.webp",
      "/portfolio/gift-shop/screenshots/04-contact.webp",
    ],
    screenLabels: ["Hero", "Products", "Checkout", "Contact"],
    positionDesktop: "top-8 right-[0.5%] xl:right-[1.8%]",
    depthOpacity: 0.85,
    depthScale: 0.96,
    floatConfig: {
      y: [4, -6, 4],
      rotate: [1.2, -1, 1.2],
      duration: 12.8,
      delay: 1.2,
    },
    slideshowDelay: 1.8,
  },
  {
    id: "boutique",
    title: "Velvet & Thread",
    domain: "velvetthread.co",
    category: "Brand Identity",
    transitionType: "vertical",
    screenshots: [
      "/portfolio/boutique/screenshots/01-home.webp",
      "/portfolio/boutique/screenshots/02-services.webp",
      "/portfolio/boutique/screenshots/03-gallery.webp",
      "/portfolio/boutique/screenshots/04-contact.webp",
    ],
    screenLabels: ["Collection", "Lookbook", "Shop", "Story"],
    positionDesktop: "top-64 left-[0.2%] xl:left-[1.2%]",
    depthOpacity: 1.0,
    depthScale: 1.0,
    floatConfig: {
      y: [-6, 6, -6],
      rotate: [1.2, -1.2, 1.2],
      duration: 9.8,
      delay: 0.5,
    },
    slideshowDelay: 0.7,
  },
  {
    id: "gym",
    title: "Pulse Fitness Hub",
    domain: "pulsefit.hub",
    category: "AI Web App",
    transitionType: "fade",
    screenshots: [
      "/portfolio/gym/screenshots/01-home.webp",
      "/portfolio/gym/screenshots/02-services.webp",
      "/portfolio/gym/screenshots/03-gallery.webp",
      "/portfolio/gym/screenshots/04-contact.webp",
    ],
    screenLabels: ["Dashboard", "Analytics", "Trainers", "Plans"],
    positionDesktop: "top-60 right-[0.2%] xl:right-[1.2%]",
    depthOpacity: 1.0,
    depthScale: 1.0,
    floatConfig: {
      y: [6, -6, 6],
      rotate: [-1.2, 1.2, -1.2],
      duration: 10.4,
      delay: 1.8,
    },
    slideshowDelay: 2.5,
  },
  {
    id: "hospital",
    title: "Apex Healthcare",
    domain: "apexhealth.org",
    category: "Custom Software",
    transitionType: "horizontal",
    screenshots: [
      "/portfolio/hospital/screenshots/01-home.webp",
      "/portfolio/hospital/screenshots/02-services.webp",
      "/portfolio/hospital/screenshots/03-gallery.webp",
      "/portfolio/hospital/screenshots/04-contact.webp",
    ],
    screenLabels: ["Overview", "Patients", "Doctors", "Portal"],
    positionDesktop: "bottom-16 left-[1.5%] xl:left-[2.8%]",
    depthOpacity: 0.80,
    depthScale: 0.95,
    floatConfig: {
      y: [-5, 5, -5],
      rotate: [1, -1, 1],
      duration: 13.2,
      delay: 0.8,
    },
    slideshowDelay: 1.2,
  },
  {
    id: "construction",
    title: "Apex Built Infra",
    domain: "apexbuilt.com",
    category: "Enterprise Site",
    transitionType: "vertical",
    screenshots: [
      "/portfolio/construction/screenshots/01-home.webp",
      "/portfolio/construction/screenshots/02-services.webp",
      "/portfolio/construction/screenshots/03-gallery.webp",
      "/portfolio/construction/screenshots/04-contact.webp",
    ],
    screenLabels: ["Projects", "Engineering", "Fleet", "Bids"],
    positionDesktop: "bottom-12 right-[1.5%] xl:right-[2.8%]",
    depthOpacity: 0.80,
    depthScale: 0.95,
    floatConfig: {
      y: [5, -5, 5],
      rotate: [-1.2, 1, -1.2],
      duration: 14.0,
      delay: 2.2,
    },
    slideshowDelay: 3.1,
  },
];

// Single Live Browser Card Component
function LiveCard({ card }: { card: FloatingCard }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const startDelayTimer = setTimeout(() => {
      interval = setInterval(() => {
        if (!isHovered) {
          setIndex((prev) => (prev + 1) % card.screenshots.length);
        }
      }, 3400);
    }, card.slideshowDelay * 1000);

    return () => {
      clearTimeout(startDelayTimer);
      if (interval) clearInterval(interval);
    };
  }, [card.screenshots.length, card.slideshowDelay, isHovered]);

  const getVariants = () => {
    if (card.transitionType === "vertical") {
      return {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
      };
    }
    if (card.transitionType === "horizontal") {
      return {
        initial: { x: "100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "-100%", opacity: 0 },
      };
    }
    return {
      initial: { opacity: 0, scale: 1.04 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.96 },
    };
  };

  const variants = getVariants();

  return (
    <motion.div
      className={`absolute pointer-events-auto w-[185px] xl:w-[215px] ${card.positionDesktop}`}
      initial={{ opacity: 0, scale: card.depthScale * 0.9 }}
      animate={{
        opacity: isHovered ? 1.0 : card.depthOpacity,
        scale: isHovered ? 1.04 : card.depthScale,
        y: card.floatConfig.y,
        rotate: card.floatConfig.rotate,
      }}
      transition={{
        opacity: { duration: 0.8, delay: card.floatConfig.delay * 0.3 },
        scale: { duration: 0.8, delay: card.floatConfig.delay * 0.3 },
        y: {
          duration: card.floatConfig.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: card.floatConfig.delay,
        },
        rotate: {
          duration: card.floatConfig.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: card.floatConfig.delay,
        },
      }}
      whileHover={{
        scale: 1.04,
        y: -4,
        rotateX: 2,
        rotateY: -2,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group relative rounded-2xl bg-white/95 border border-black/10 shadow-layered p-1.5 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:border-black/20 cursor-pointer overflow-hidden">
        
        {/* Sleek Compact Browser Top Chrome (Shrunk by 18%) */}
        <div className="flex items-center justify-between px-1.5 pb-1 mb-1 border-b border-black/5">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400/85" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/85" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400/85" />
          </div>
          <span className="text-[8px] font-mono text-neutral-500 bg-neutral-100/90 px-1.5 py-0.2 rounded-full border border-black/5 truncate max-w-[95px]">
            {card.domain}
          </span>
        </div>

        {/* Live Website Preview Area (Expanded Frame) */}
        <div className="relative h-28 xl:h-32 w-full rounded-xl overflow-hidden bg-neutral-100">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={card.screenshots[index]}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={card.screenshots[index]}
                alt={`${card.title} - ${card.screenLabels[index]}`}
                fill
                sizes="215px"
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Active Screen Label Glass Pill */}
          <div className="absolute top-1.5 right-1.5 z-10">
            <span className="text-[8px] font-semibold text-neutral-800 bg-white/85 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-black/10 shadow-2xs">
              {card.screenLabels[index]}
            </span>
          </div>

          {/* Category Highlight Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 z-20">
            <span className="text-[9px] font-bold text-[#0F0F0F] bg-[#B9FF66] px-2 py-0.5 rounded-full shadow-xs">
              {card.category}
            </span>
          </div>
        </div>

        {/* Title & Category Footer */}
        <div className="mt-1.5 px-1 flex items-center justify-between">
          <span className="text-[11px] font-bold text-neutral-900 truncate">
            {card.title}
          </span>
          <span className="text-[8px] font-medium text-neutral-500 uppercase tracking-wider">
            {card.category}
          </span>
        </div>

      </div>
    </motion.div>
  );
}

export default function FloatingWorkOrbit() {
  return (
    <>
      {/* ─── Desktop Orbit Cards ─── */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {FLOATING_PROJECTS.map((card) => (
          <LiveCard key={card.id} card={card} />
        ))}
      </div>

      {/* ─── Mobile Horizontal Marquee Strip ─── */}
      <div className="lg:hidden w-full overflow-x-auto no-scrollbar py-6 mt-8 flex items-center gap-4 px-4 select-none">
        {FLOATING_PROJECTS.map((card) => (
          <div
            key={`mobile-${card.id}`}
            className="flex-none w-[175px] rounded-2xl bg-white/95 border border-black/10 shadow-md p-1.5 backdrop-blur-md"
          >
            <div className="flex items-center justify-between px-1 pb-1 mb-1 border-b border-black/5">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
              <span className="text-[8px] font-mono text-neutral-500 truncate max-w-[80px]">
                {card.domain}
              </span>
            </div>
            <div className="relative h-24 w-full rounded-lg overflow-hidden bg-neutral-100">
              <Image
                src={card.screenshots[0]}
                alt={card.title}
                fill
                sizes="175px"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-1 px-0.5 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-neutral-900 truncate">
                {card.title}
              </span>
              <span className="text-[8px] font-medium text-neutral-500">
                {card.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

