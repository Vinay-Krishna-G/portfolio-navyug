"use client";

import { motion } from "framer-motion";

const INK = "#0B1020";
const PANEL = "#161B2A";
const LINE = "#3B4356";
const MUTED = "#778096";
const SIGNAL = "#FF6B5E";

function DeviceFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg width="112" height="112" viewBox="0 0 112 112" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="96" height="96" rx="20" fill="#F1F3F8" />
      <rect x="17" y="17" width="78" height="78" rx="14" fill={PANEL} />
      <path d="M31 25H81" stroke="#525B70" strokeWidth="2" strokeLinecap="round" />
      <circle cx="25" cy="25" r="2" fill={SIGNAL} />
      {children}
    </svg>
  );
}

function SignalDot({ cx, cy, delay = 0 }: { cx: number; cy: number; delay?: number }) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="3"
      fill={SIGNAL}
      animate={{ opacity: [0.25, 1, 0.25], scale: [0.75, 1.15, 0.75] }}
      transition={{ duration: 1.8, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function WebDesignAnim() {
  return (
    <DeviceFrame>
      <rect x="28" y="37" width="29" height="4" rx="2" fill="#F7F8FC" />
      <rect x="28" y="46" width="20" height="3" rx="1.5" fill={MUTED} />
      <rect x="28" y="53" width="25" height="3" rx="1.5" fill={LINE} />
      <motion.rect
        x="63"
        y="37"
        width="19"
        height="33"
        rx="5"
        fill="#252C3D"
        stroke="#596278"
        animate={{ y: [37, 33, 37] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.rect
        x="67"
        y="42"
        width="11"
        height="11"
        rx="2"
        fill={SIGNAL}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M28 78H84" stroke="#40495E" strokeWidth="2" strokeLinecap="round" />
      <SignalDot cx={35} cy={78} />
      <SignalDot cx={44} cy={78} delay={0.2} />
      <SignalDot cx={53} cy={78} delay={0.4} />
    </DeviceFrame>
  );
}

export function AiAutomationAnim() {
  return (
    <DeviceFrame>
      <motion.path
        d="M36 66V56L56 44L76 56V66L56 78L36 66Z"
        stroke="#657089"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        animate={{ strokeDashoffset: [0, -21] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
      />
      <circle cx="56" cy="44" r="6" fill={SIGNAL} />
      <circle cx="36" cy="56" r="4" fill="#DDE2EC" />
      <circle cx="76" cy="56" r="4" fill="#DDE2EC" />
      <circle cx="56" cy="78" r="4" fill="#DDE2EC" />
      <motion.circle
        cx="56"
        cy="61"
        r="8"
        fill="#F7F8FC"
        animate={{ scale: [0.72, 1.08, 0.72], opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="56" cy="61" r="3" fill={INK} />
    </DeviceFrame>
  );
}

export function BrandIdentityAnim() {
  return (
    <DeviceFrame>
      <motion.g
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "56px 58px" }}
      >
        <rect x="39" y="41" width="17" height="17" rx="4" fill={SIGNAL} />
        <rect x="58" y="41" width="17" height="17" rx="4" fill="#EDF0F6" />
        <rect x="39" y="60" width="17" height="17" rx="4" fill="#EDF0F6" />
        <rect x="58" y="60" width="17" height="17" rx="4" fill="#596278" />
      </motion.g>
      <motion.rect
        x="28"
        y="82"
        width="56"
        height="2"
        rx="1"
        fill={SIGNAL}
        animate={{ scaleX: [0.25, 1, 0.25], originX: [0, 0.5, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </DeviceFrame>
  );
}

export function EcommerceAnim() {
  return (
    <DeviceFrame>
      <motion.g
        animate={{ x: [0, -18, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        {[0, 1, 2].map((index) => (
          <g key={index} transform={`translate(${25 + index * 25} 39)`}>
            <rect width="20" height="27" rx="4" fill="#262D3E" stroke="#586176" />
            <rect x="4" y="4" width="12" height="11" rx="2" fill={index === 1 ? SIGNAL : "#DEE3ED"} />
            <rect x="4" y="19" width="12" height="2" rx="1" fill={MUTED} />
          </g>
        ))}
      </motion.g>
      <rect x="27" y="76" width="58" height="2" rx="1" fill="#4B5469" />
      <motion.circle
        cx="79"
        cy="77"
        r="5"
        fill={SIGNAL}
        animate={{ scale: [1, 1.22, 1] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
      />
    </DeviceFrame>
  );
}

export function SeoPerformanceAnim() {
  const bars = [
    { x: 31, height: 17, delay: 0 },
    { x: 44, height: 28, delay: 0.16 },
    { x: 57, height: 39, delay: 0.32 },
    { x: 70, height: 50, delay: 0.48 },
  ];

  return (
    <DeviceFrame>
      <path d="M27 79H84" stroke="#586176" strokeWidth="2" strokeLinecap="round" />
      {bars.map((bar, index) => (
        <motion.rect
          key={bar.x}
          x={bar.x}
          y={79 - bar.height}
          width="8"
          height={bar.height}
          rx="2"
          fill={index === bars.length - 1 ? SIGNAL : "#8992A6"}
          animate={{ scaleY: [0.42, 1, 0.42] }}
          transition={{ duration: 2.2, delay: bar.delay, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "bottom" }}
        />
      ))}
      <motion.path
        d="M30 64L47 55L60 60L77 39"
        stroke="#F7F8FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
        animate={{ strokeDashoffset: [0, -16] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "linear" }}
      />
    </DeviceFrame>
  );
}

export function OngoingSupportAnim() {
  return (
    <DeviceFrame>
      <rect x="29" y="39" width="35" height="14" rx="5" fill="#252C3D" />
      <rect x="34" y="44" width="18" height="3" rx="1.5" fill="#A4ADBF" />
      <motion.g
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="48" y="61" width="35" height="14" rx="5" fill="#F0F2F7" />
        <rect x="53" y="66" width="18" height="3" rx="1.5" fill={SIGNAL} />
      </motion.g>
      <motion.circle
        cx="79"
        cy="35"
        r="4"
        fill={SIGNAL}
        animate={{ scale: [1, 1.45, 1], opacity: [1, 0.45, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M29 82H83" stroke="#424A5E" strokeWidth="2" strokeLinecap="round" />
      <SignalDot cx={35} cy={82} />
      <SignalDot cx={43} cy={82} delay={0.2} />
      <SignalDot cx={51} cy={82} delay={0.4} />
    </DeviceFrame>
  );
}
