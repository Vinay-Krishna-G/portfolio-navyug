"use client";

import { motion } from "framer-motion";

const WORDS = ["Premium", "digital", "experiences."];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.4 },
  },
};

const wordVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 70, damping: 16 },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const TRUSTED_AVATARS = ["V", "R", "S", "A"];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center overflow-hidden"
      style={{
        background: "var(--ny-bg)",
        minHeight: "100svh",
        paddingTop: "9rem",
        paddingBottom: "7rem",
      }}
      aria-label="Hero"
    >
      {/* Very subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Soft ambient glow — top right */}
      <div
        className="absolute top-0 right-0 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(185,255,102,0.07) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        {/* Trusted bar */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-4 mb-12"
        >
          {/* Avatar stack */}
          <div className="flex -space-x-2">
            {TRUSTED_AVATARS.map((letter, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ring-2"
                style={{
                  background: i % 2 === 0 ? "var(--ny-foreground)" : "var(--ny-surface-3)",
                  color: i % 2 === 0 ? "var(--ny-bg)" : "var(--ny-muted)",
                  outline: "2px solid var(--ny-bg)",
                  outlineOffset: "1px",
                }}
              >
                {letter}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm" style={{ color: "var(--ny-muted)" }}>
              Trusted by 50+ businesses
            </span>
            <span className="dot-divider" />
            <span className="badge-lime">
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" aria-hidden="true" />
              AI-powered
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <h1 className="mb-8 overflow-hidden" aria-label="Websites that people remember.">
          <motion.div
            className="font-display font-bold leading-[1.02] tracking-tight"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              color: "var(--ny-foreground)",
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="overflow-hidden">
              <motion.span className="block" variants={wordVariants}>
                Websites that
              </motion.span>
            </div>
            {WORDS.map((word, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  className="block"
                  variants={wordVariants}
                  style={word === "experiences." ? { color: "var(--ny-muted)" } : {}}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </h1>

        {/* Sub-copy */}
        <motion.p
          className="text-lg sm:text-xl max-w-lg leading-relaxed mb-12"
          style={{ color: "var(--ny-muted)", fontWeight: 400 }}
          variants={fadeUp(0.95)}
          initial="hidden"
          animate="visible"
        >
          NavYug builds modern websites and AI-powered digital products for
          ambitious businesses. We take fewer clients and deliver more.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          variants={fadeUp(1.1)}
          initial="hidden"
          animate="visible"
        >
          <a href="#work" className="btn-primary">
            See Our Work
          </a>
          <a href="#contact" className="btn-outline">
            Start a Project →
          </a>
        </motion.div>

        {/* Scroll nudge */}
        <motion.div
          className="flex items-center gap-3 mt-24"
          variants={fadeUp(1.4)}
          initial="hidden"
          animate="visible"
        >
          <div className="w-8 h-px" style={{ background: "var(--ny-dim)" }} aria-hidden="true" />
          <p className="text-xs tracking-widest uppercase" style={{ color: "var(--ny-dim)" }}>
            Scroll to explore
          </p>
        </motion.div>
      </div>
    </section>
  );
}
