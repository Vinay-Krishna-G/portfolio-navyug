"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";

const MAISON_BISTRO_SCREENS = [
  "/portfolio/restaurant/screenshots/01-home.webp",
  "/portfolio/restaurant/screenshots/02-services.webp",
  "/portfolio/restaurant/screenshots/03-gallery.webp",
  "/portfolio/restaurant/screenshots/04-contact.webp",
];

const DELIVERABLES_MAP: Record<string, string[]> = {
  restaurant: ["Bespoke UI/UX", "Online Reservation Engine", "Interactive Tasting Menu", "Lighthouse 99"],
  "gift-shop": ["E-Commerce Storefront", "Custom Bundle Builder", "Shopify Integration", "Fast Checkout"],
  boutique: ["Haute Couture Lookbook", "Interactive Grid", "Brand Design System", "Mobile Responsive"],
  gym: ["Biometric Analytics", "Real-Time Class Sync", "AI Fitness Tracker", "Dark Mode UI"],
  hospital: ["Patient EHR Portal", "Doctor Scheduler", "HIPAA Architecture", "Accessibility AAA"],
  construction: ["Megastructure Showcase", "Commercial Bid Portal", "Industrial Gallery", "Fast Performance"],
};

export default function ShowcaseSection() {
  const [maisonScreenIdx, setMaisonScreenIdx] = useState(0);

  // Slow, imperceptible Apple-style transition every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMaisonScreenIdx((prev) => (prev + 1) % MAISON_BISTRO_SCREENS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const maisonProject = PROJECTS[0];
  const pulseProject = PROJECTS[3]; // Gym/Fitness
  const giftProject = PROJECTS[1]; // Gift Shop
  const boutiqueProject = PROJECTS[2]; // Boutique
  const healthcareProject = PROJECTS[4]; // Hospital
  const constructionProject = PROJECTS[5]; // Construction

  return (
    <section
      id="work"
      className="py-28 sm:py-36 select-none"
      style={{ background: "var(--ny-bg)" }}
      aria-label="Selected Work"
    >
      <div className="container-xl max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* ── Section Header ── */}
        <motion.div
          className="mb-20 sm:mb-24 text-center max-w-[720px] mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#686B72] bg-white border border-[#E7E7E3] px-4 py-1.5 rounded-full shadow-2xs">
            SELECTED WORK
          </span>
          <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[1.08] text-4xl sm:text-6xl text-[#111111] mt-6 mb-5">
            Built for ambitious businesses.
          </h2>
          <p className="text-base sm:text-xl text-[#686B72] font-normal leading-relaxed">
            Case studies engineered with bespoke digital craftsmanship, high performance, and zero templates.
          </p>
        </motion.div>


        {/* ── Master Project 1: Maison Bistro (Screen Dominating Feature) ── */}
        <motion.article
          className="group relative rounded-[28px] bg-white border border-[#E7E7E3] p-8 sm:p-12 mb-20 overflow-hidden shadow-[0_8px_30px_rgba(17,17,17,0.05)] hover:shadow-[0_24px_70px_rgba(17,17,17,0.09)] transition-all duration-700"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header Info */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7A2632]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#686B72]">
                  LUXURY FINE DINING PLATFORM
                </span>
              </div>
              <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-[-0.03em]">
                {maisonProject.name}
              </h3>
              <p className="text-base sm:text-lg text-[#686B72] font-normal mt-3 max-w-2xl leading-relaxed">
                Bespoke dining experience with interactive tasting menus and streamlined online reservations.
              </p>
            </div>

            {/* Live Action Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 self-start lg:self-auto text-xs font-bold px-7 py-3.5 rounded-full bg-[#111111] text-white hover:bg-neutral-800 transition-colors shadow-xs"
            >
              <span>Explore Case Study</span>
              <span className="text-base">→</span>
            </a>
          </div>

          {/* Screen Dominating Huge Browser Viewport */}
          <div className="relative w-full h-[360px] sm:h-[540px] rounded-2xl overflow-hidden bg-neutral-900 border border-[#E7E7E3] shadow-md group-hover:scale-[1.005] transition-transform duration-700">
            {/* Chrome Bar */}
            <div className="h-8 w-full bg-[#1C1C1E] flex items-center px-4 gap-2 border-b border-neutral-800">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
              <div className="mx-auto bg-neutral-800 px-5 py-0.5 rounded-full text-[11px] text-neutral-400 font-mono">
                maisonbistro.com
              </div>
            </div>

            {/* Screenshot Frame */}
            <div className="relative w-full h-[calc(100%-32px)] bg-neutral-950">
              <Image
                src={MAISON_BISTRO_SCREENS[maisonScreenIdx]}
                alt="Maison Bistro Showcase"
                fill
                className="object-cover object-top transition-opacity duration-1000"
                priority
              />
            </div>
          </div>

          {/* Footer Metadata: Tech Stack & Scope */}
          <div className="mt-10 pt-8 border-t border-[#E7E7E3] flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Tech Stack Icons/Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono uppercase tracking-wider text-[#686B72] mr-3">Stack:</span>
              {[
                { name: "▲ Next.js 15" },
                { name: "TS TypeScript" },
                { name: "TW Tailwind" },
                { name: "FM Motion" },
                { name: "▲ Vercel" },
              ].map((t) => (
                <span
                  key={t.name}
                  className="text-xs font-mono font-medium px-3.5 py-1.5 rounded-full bg-[#F6F6F3] text-[#111111] border border-[#E7E7E3]"
                >
                  {t.name}
                </span>
              ))}
            </div>

            {/* Scope / Deliverables Checklist */}
            <div className="flex items-center gap-4 flex-wrap text-xs text-[#686B72] font-medium">
              <span className="text-xs font-mono uppercase tracking-wider text-[#686B72] mr-1">Scope:</span>
              {DELIVERABLES_MAP["restaurant"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="text-[#10B981] font-bold">✓</span> {item}
                </span>
              ))}
            </div>
          </div>
        </motion.article>


        {/* ── Dual Pair 1: Pulse Fitness & Luxe Gift Studio ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

          {/* Pulse Fitness */}
          <motion.article
            className="group relative rounded-[28px] bg-white border border-[#E7E7E3] p-8 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(17,17,17,0.04)] hover:shadow-[0_20px_60px_rgba(17,17,17,0.08)] transition-all duration-500 hover:-translate-y-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#686B72]">
                  {pulseProject.industry}
                </span>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: pulseProject.dotColor }} />
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] mb-2 tracking-tight">
                {pulseProject.name}
              </h3>
              <p className="text-sm text-[#686B72] font-normal leading-relaxed mb-6">
                Biometric athletic tracking dashboard with real-time trainer sync.
              </p>

              {/* Viewport */}
              <div className="relative w-full h-[240px] rounded-2xl overflow-hidden bg-neutral-900 border border-[#E7E7E3] mb-6 shadow-xs group-hover:scale-[1.01] transition-transform duration-500">
                <div className="h-6 w-full bg-[#1C1C1E] flex items-center px-3 gap-1.5 border-b border-neutral-800">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]/80" />
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]/80" />
                  <span className="w-2 h-2 rounded-full bg-[#10B981]/80" />
                </div>
                <div className="relative w-full h-[calc(100%-24px)] bg-neutral-950">
                  <Image
                    src={`/portfolio/${pulseProject.id}/screenshots/01-home.webp`}
                    alt={pulseProject.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#686B72] font-medium mb-6 pt-4 border-t border-[#E7E7E3]">
                {DELIVERABLES_MAP["gym"].map((item) => (
                  <span key={item} className="flex items-center gap-1">
                    <span className="text-[#10B981] font-bold">✓</span> {item}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-between w-full pt-4 border-t border-[#E7E7E3] text-xs font-bold text-[#111111] group-hover:text-black"
              >
                <span>Explore Project</span>
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.article>

          {/* Luxe Gift Studio */}
          <motion.article
            className="group relative rounded-[28px] bg-white border border-[#E7E7E3] p-8 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(17,17,17,0.04)] hover:shadow-[0_20px_60px_rgba(17,17,17,0.08)] transition-all duration-500 hover:-translate-y-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#686B72]">
                  {giftProject.industry}
                </span>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: giftProject.dotColor }} />
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] mb-2 tracking-tight">
                {giftProject.name}
              </h3>
              <p className="text-sm text-[#686B72] font-normal leading-relaxed mb-6">
                Curated e-commerce storefront with custom product bundle builder.
              </p>

              {/* Viewport */}
              <div className="relative w-full h-[240px] rounded-2xl overflow-hidden bg-neutral-900 border border-[#E7E7E3] mb-6 shadow-xs group-hover:scale-[1.01] transition-transform duration-500">
                <div className="h-6 w-full bg-[#1C1C1E] flex items-center px-3 gap-1.5 border-b border-neutral-800">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]/80" />
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]/80" />
                  <span className="w-2 h-2 rounded-full bg-[#10B981]/80" />
                </div>
                <div className="relative w-full h-[calc(100%-24px)] bg-neutral-950">
                  <Image
                    src={`/portfolio/${giftProject.id}/screenshots/01-home.webp`}
                    alt={giftProject.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#686B72] font-medium mb-6 pt-4 border-t border-[#E7E7E3]">
                {DELIVERABLES_MAP["gift-shop"].map((item) => (
                  <span key={item} className="flex items-center gap-1">
                    <span className="text-[#10B981] font-bold">✓</span> {item}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-between w-full pt-4 border-t border-[#E7E7E3] text-xs font-bold text-[#111111] group-hover:text-black"
              >
                <span>Explore Project</span>
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.article>

        </div>


        {/* ── Master Project 2: Velvet & Thread (Screen Dominating Feature) ── */}
        <motion.article
          className="group relative rounded-[28px] bg-white border border-[#E7E7E3] p-8 sm:p-12 mb-20 overflow-hidden shadow-[0_8px_30px_rgba(17,17,17,0.05)] hover:shadow-[0_24px_70px_rgba(17,17,17,0.09)] transition-all duration-700"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1E1E1E]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#686B72]">
                  HAUTE COUTURE BOUTIQUE & LOOKBOOK
                </span>
              </div>
              <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-[-0.03em]">
                {boutiqueProject.name}
              </h3>
              <p className="text-base sm:text-lg text-[#686B72] font-normal mt-3 max-w-2xl leading-relaxed">
                High-fashion brand identity and digital lookbook tailored for bespoke apparel.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 self-start lg:self-auto text-xs font-bold px-7 py-3.5 rounded-full bg-[#111111] text-white hover:bg-neutral-800 transition-colors shadow-xs"
            >
              <span>Explore Case Study</span>
              <span className="text-base">→</span>
            </a>
          </div>

          <div className="relative w-full h-[340px] sm:h-[480px] rounded-2xl overflow-hidden bg-neutral-900 border border-[#E7E7E3] shadow-md group-hover:scale-[1.005] transition-transform duration-700">
            <div className="h-8 w-full bg-[#1C1C1E] flex items-center px-4 gap-2 border-b border-neutral-800">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
              <div className="mx-auto bg-neutral-800 px-5 py-0.5 rounded-full text-[11px] text-neutral-400 font-mono">
                velvetthread.co
              </div>
            </div>

            <div className="relative w-full h-[calc(100%-32px)] bg-neutral-950">
              <Image
                src={`/portfolio/${boutiqueProject.id}/screenshots/01-home.webp`}
                alt="Velvet & Thread Showcase"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[#E7E7E3] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono uppercase tracking-wider text-[#686B72] mr-3">Stack:</span>
              {[
                { name: "▲ Next.js 15" },
                { name: "TS TypeScript" },
                { name: "TW Tailwind" },
                { name: "FM Motion" },
                { name: "▲ Vercel" },
              ].map((t) => (
                <span
                  key={t.name}
                  className="text-xs font-mono font-medium px-3.5 py-1.5 rounded-full bg-[#F6F6F3] text-[#111111] border border-[#E7E7E3]"
                >
                  {t.name}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 flex-wrap text-xs text-[#686B72] font-medium">
              <span className="text-xs font-mono uppercase tracking-wider text-[#686B72] mr-1">Scope:</span>
              {DELIVERABLES_MAP["boutique"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="text-[#10B981] font-bold">✓</span> {item}
                </span>
              ))}
            </div>
          </div>
        </motion.article>


        {/* ── Dual Pair 2: Apex Healthcare & Apex Built Infra ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Apex Healthcare */}
          <motion.article
            className="group relative rounded-[28px] bg-white border border-[#E7E7E3] p-8 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(17,17,17,0.04)] hover:shadow-[0_20px_60px_rgba(17,17,17,0.08)] transition-all duration-500 hover:-translate-y-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#686B72]">
                  {healthcareProject.industry}
                </span>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: healthcareProject.dotColor }} />
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] mb-2 tracking-tight">
                {healthcareProject.name}
              </h3>
              <p className="text-sm text-[#686B72] font-normal leading-relaxed mb-6">
                Clinical EHR portal, doctor scheduling roster, and patient triage portal.
              </p>

              <div className="relative w-full h-[240px] rounded-2xl overflow-hidden bg-neutral-900 border border-[#E7E7E3] mb-6 shadow-xs group-hover:scale-[1.01] transition-transform duration-500">
                <div className="h-6 w-full bg-[#1C1C1E] flex items-center px-3 gap-1.5 border-b border-neutral-800">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]/80" />
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]/80" />
                  <span className="w-2 h-2 rounded-full bg-[#10B981]/80" />
                </div>
                <div className="relative w-full h-[calc(100%-24px)] bg-neutral-950">
                  <Image
                    src={`/portfolio/${healthcareProject.id}/screenshots/01-home.webp`}
                    alt={healthcareProject.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#686B72] font-medium mb-6 pt-4 border-t border-[#E7E7E3]">
                {DELIVERABLES_MAP["hospital"].map((item) => (
                  <span key={item} className="flex items-center gap-1">
                    <span className="text-[#10B981] font-bold">✓</span> {item}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-between w-full pt-4 border-t border-[#E7E7E3] text-xs font-bold text-[#111111] group-hover:text-black"
              >
                <span>Explore Project</span>
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.article>

          {/* Apex Built Infra */}
          <motion.article
            className="group relative rounded-[28px] bg-white border border-[#E7E7E3] p-8 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(17,17,17,0.04)] hover:shadow-[0_20px_60px_rgba(17,17,17,0.08)] transition-all duration-500 hover:-translate-y-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#686B72]">
                  {constructionProject.industry}
                </span>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: constructionProject.dotColor }} />
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] mb-2 tracking-tight">
                {constructionProject.name}
              </h3>
              <p className="text-sm text-[#686B72] font-normal leading-relaxed mb-6">
                Megastructure engineering portfolio and commercial bid management portal.
              </p>

              <div className="relative w-full h-[240px] rounded-2xl overflow-hidden bg-neutral-900 border border-[#E7E7E3] mb-6 shadow-xs group-hover:scale-[1.01] transition-transform duration-500">
                <div className="h-6 w-full bg-[#1C1C1E] flex items-center px-3 gap-1.5 border-b border-neutral-800">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]/80" />
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]/80" />
                  <span className="w-2 h-2 rounded-full bg-[#10B981]/80" />
                </div>
                <div className="relative w-full h-[calc(100%-24px)] bg-neutral-950">
                  <Image
                    src={`/portfolio/${constructionProject.id}/screenshots/01-home.webp`}
                    alt={constructionProject.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#686B72] font-medium mb-6 pt-4 border-t border-[#E7E7E3]">
                {DELIVERABLES_MAP["construction"].map((item) => (
                  <span key={item} className="flex items-center gap-1">
                    <span className="text-[#10B981] font-bold">✓</span> {item}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-between w-full pt-4 border-t border-[#E7E7E3] text-xs font-bold text-[#111111] group-hover:text-black"
              >
                <span>Explore Project</span>
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.article>

        </div>

      </div>
    </section>
  );
}
