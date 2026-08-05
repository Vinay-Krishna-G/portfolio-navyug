"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Animated SVG Micro-Illustrations for NavYug Service Cards
 * Apple / Linear / Vercel Grade Animated Vectors (88x88 viewBox)
 */

export function WebDesignAnim() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Browser Frame */}
      <rect x="6" y="14" width="76" height="60" rx="10" fill="#18181B" stroke="#27272A" strokeWidth="1.5" />
      {/* Chrome Traffic Dots */}
      <circle cx="16" cy="23" r="2" fill="#EF4444" opacity="0.8" />
      <circle cx="23" cy="23" r="2" fill="#F59E0B" opacity="0.8" />
      <circle cx="30" cy="23" r="2" fill="#10B981" opacity="0.8" />
      {/* URL Pill */}
      <rect x="38" y="20" width="36" height="6" rx="3" fill="#27272A" />

      {/* Hero Animated Wireframe Lines */}
      <motion.rect
        x="14"
        y="34"
        width="34"
        height="6"
        rx="3"
        fill="#B9FF66"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <rect x="14" y="44" width="46" height="4" rx="2" fill="#52525B" />
      <rect x="14" y="52" width="28" height="4" rx="2" fill="#3F3F46" />

      {/* Animated Hero Card */}
      <motion.rect
        x="52"
        y="34"
        width="22"
        height="28"
        rx="6"
        fill="#27272A"
        stroke="#3F3F46"
        strokeWidth="1"
        animate={{ y: [34, 31, 34] }}
        transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="63" cy="48" r="5" fill="#B9FF66" opacity="0.8" />
    </svg>
  );
}

export function AiAutomationAnim() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Card Base */}
      <rect x="6" y="14" width="76" height="60" rx="10" fill="#090D16" stroke="#1E293B" strokeWidth="1.5" />

      {/* Connecting Network Lines */}
      <motion.path
        d="M24 44 L44 26 L64 44 L44 62 Z"
        stroke="#334155"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        animate={{ strokeDashoffset: [0, -12] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Active Beams */}
      <line x1="24" y1="44" x2="44" y2="26" stroke="#B9FF66" strokeWidth="1.5" opacity="0.7" />
      <line x1="44" y1="26" x2="64" y2="44" stroke="#38BDF8" strokeWidth="1.5" opacity="0.7" />

      {/* Pulsing Nodes */}
      <circle cx="24" cy="44" r="4" fill="#38BDF8" />
      <circle cx="64" cy="44" r="4" fill="#38BDF8" />
      <circle cx="44" cy="26" r="4" fill="#38BDF8" />
      <circle cx="44" cy="62" r="4" fill="#38BDF8" />

      {/* Core Glowing Node */}
      <motion.circle
        cx="44"
        cy="44"
        r="7"
        fill="#B9FF66"
        animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function BrandIdentityAnim() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="14" width="76" height="60" rx="10" fill="#18181B" stroke="#27272A" strokeWidth="1.5" />

      {/* Morphing Geometric Logo Shapes */}
      <motion.rect
        x="24"
        y="28"
        width="22"
        height="22"
        rx="6"
        fill="#B9FF66"
        animate={{ rotate: [0, 90, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="58"
        cy="39"
        r="11"
        fill="#3F3F46"
        stroke="#B9FF66"
        strokeWidth="1.5"
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M 30 58 L 58 58 L 44 46 Z"
        fill="#52525B"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function EcommerceAnim() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="14" width="76" height="60" rx="10" fill="#18181B" stroke="#27272A" strokeWidth="1.5" />

      {/* Product Cards Slider */}
      <motion.g
        animate={{ x: [0, -18, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="16" y="24" width="24" height="32" rx="6" fill="#27272A" stroke="#3F3F46" strokeWidth="1" />
        <rect x="20" y="28" width="16" height="14" rx="4" fill="#E8B5A3" />
        <rect x="20" y="46" width="16" height="3" rx="1.5" fill="#A1A1AA" />

        <rect x="46" y="24" width="24" height="32" rx="6" fill="#27272A" stroke="#3F3F46" strokeWidth="1" />
        <rect x="50" y="28" width="16" height="14" rx="4" fill="#B9FF66" />
        <rect x="50" y="46" width="16" height="3" rx="1.5" fill="#A1A1AA" />

        <rect x="76" y="24" width="24" height="32" rx="6" fill="#27272A" stroke="#3F3F46" strokeWidth="1" />
      </motion.g>

      {/* Cart Badge */}
      <rect x="16" y="60" width="56" height="8" rx="4" fill="#27272A" />
      <circle cx="64" cy="64" r="5" fill="#B9FF66" />
    </svg>
  );
}

export function SeoPerformanceAnim() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="14" width="76" height="60" rx="10" fill="#18181B" stroke="#27272A" strokeWidth="1.5" />

      {/* Rising Metric Bars */}
      <motion.rect
        x="18"
        y="50"
        width="10"
        height="18"
        rx="3"
        fill="#3F3F46"
        animate={{ height: [12, 18, 12], y: [56, 50, 56] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.rect
        x="34"
        y="38"
        width="10"
        height="30"
        rx="3"
        fill="#52525B"
        animate={{ height: [20, 30, 20], y: [48, 38, 48] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.rect
        x="50"
        y="28"
        width="10"
        height="40"
        rx="3"
        fill="#38BDF8"
        animate={{ height: [30, 40, 30], y: [38, 28, 38] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      <motion.rect
        x="66"
        y="22"
        width="10"
        height="46"
        rx="3"
        fill="#B9FF66"
        animate={{ height: [36, 46, 36], y: [32, 22, 32] }}
        transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
      />
    </svg>
  );
}

export function OngoingSupportAnim() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="14" width="76" height="60" rx="10" fill="#18181B" stroke="#27272A" strokeWidth="1.5" />

      {/* Chat Bubbles */}
      <rect x="18" y="26" width="38" height="18" rx="6" fill="#27272A" />
      <rect x="24" y="32" width="26" height="6" rx="3" fill="#52525B" />

      <motion.g
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="34" y="48" width="38" height="18" rx="6" fill="#27272A" stroke="#3F3F46" strokeWidth="1" />
        <rect x="40" y="54" width="20" height="6" rx="3" fill="#B9FF66" />
      </motion.g>

      {/* Active Pulse Indicator */}
      <motion.circle
        cx="68"
        cy="26"
        r="4"
        fill="#B9FF66"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}
