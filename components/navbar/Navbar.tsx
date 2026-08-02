"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

import NavYugLogo from "@/components/branding/NavYugLogo";
import { BRAND } from "@/lib/brand";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "How We Work", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 90, damping: 20, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,250,250,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--ny-border)" : "1px solid transparent",
      }}
    >
      <div className="container-xl py-4 flex items-center justify-between">
        {/* Transparent Logo Mark */}
        <Link href="/" className="flex items-center mr-[14px] group select-none" aria-label={`${BRAND.name} home`}>
          <NavYugLogo variant="mark" priority size={36} className="h-[26px] sm:h-[30px] lg:h-[36px]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative text-sm py-1 transition-colors duration-200"
              style={{ color: "var(--ny-muted)" }}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07 }}
              whileHover="hover"
              onHoverStart={(e) => {
                (e.target as HTMLElement).style.color = "var(--ny-foreground)";
              }}
              onHoverEnd={(e) => {
                (e.target as HTMLElement).style.color = "var(--ny-muted)";
              }}
            >
              {link.label}
              <motion.span
                variants={{ hover: { scaleX: 1, opacity: 1 } }}
                initial={{ scaleX: 0, opacity: 0 }}
                style={{ originX: 0, background: "var(--ny-lime)", width: "100%", height: "2px", position: "absolute", bottom: 0, left: 0, borderRadius: "1px" } as React.CSSProperties}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <motion.a
          href="#contact"
          className="hidden lg:inline-flex btn-primary text-sm"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Let&apos;s Talk →
        </motion.a>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          style={{ color: "var(--ny-foreground)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <motion.span
            className="block w-5 h-px"
            style={{ background: "var(--ny-foreground)" }}
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-5 h-px"
            style={{ background: "var(--ny-foreground)" }}
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block w-5 h-px"
            style={{ background: "var(--ny-foreground)" }}
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <motion.div
        id="mobile-menu"
        className="lg:hidden overflow-hidden"
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={{
          background: "rgba(250,250,250,0.97)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid var(--ny-border)",
        }}
      >
        <nav className="px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--ny-muted)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary text-sm w-fit mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk →
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}
