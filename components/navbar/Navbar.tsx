"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
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
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Scroll hysteresis threshold (Top: <25px, Scrolled: >60px)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 60 && !scrolled) {
      setScrolled(true);
    } else if (latest < 25 && scrolled) {
      setScrolled(false);
    }
  });

  // Track active section for indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300"
      style={{
        background: scrolled ? "transparent" : "rgba(250,250,250,0.90)",
        backdropFilter: scrolled ? "none" : "blur(16px)",
        borderBottom: scrolled ? "1px solid transparent" : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="container-xl h-full flex items-center justify-between">
        {/* Left Column (25%): Anchored Logo Mark */}
        <div className="w-1/2 sm:w-1/4 flex items-center justify-start shrink-0">
          <Link
            href="/"
            className="flex items-center group select-none"
            aria-label={`${BRAND.name} home`}
          >
            <NavYugLogo variant="mark" priority size={36} className="h-[26px] sm:h-[30px] lg:h-[36px]" />
          </Link>
        </div>

        {/* Center Column (50%): Centered Floating Liquid Glass Pill */}
        <div className="w-2/4 hidden lg:flex items-center justify-center shrink-0">
          <nav aria-label="Main navigation">
            <motion.div
              className="flex items-center justify-center gap-7 sm:gap-8 px-6 py-2.5 rounded-full select-none min-w-[560px] max-w-[640px] transition-all duration-300"
              style={{
                background: scrolled
                  ? "linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.46) 100%)"
                  : "transparent",
                backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
                border: scrolled ? "1px solid rgba(255, 255, 255, 0.72)" : "1px solid transparent",
                borderRadius: scrolled ? "9999px" : "0px",
                boxShadow: scrolled
                  ? "0 10px 28px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.65)"
                  : "none",
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-200 py-1 whitespace-nowrap ${
                      isActive ? "text-neutral-900 font-bold" : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    {link.label}

                    {/* Active / Hover 2px Lime Indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#B9FF66]"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    )}
                  </a>
                );
              })}
            </motion.div>
          </nav>
        </div>

        {/* Right Column (25%): Anchored Lime CTA */}
        <div className="w-1/2 sm:w-1/4 hidden lg:flex items-center justify-end shrink-0">
          <a
            href="#contact"
            className="btn-primary text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 hover:brightness-105 hover:shadow-md cursor-pointer"
            style={{ background: "#B9FF66", color: "#0F0F0F" }}
          >
            Let&apos;s Talk →
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center justify-end">
          <button
            id="mobile-menu-toggle"
            className="flex flex-col gap-1.5 p-2"
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
            className="btn-primary text-sm w-fit mt-2 font-bold px-6 py-3 rounded-full"
            style={{ background: "#B9FF66", color: "#0F0F0F" }}
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk →
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}
