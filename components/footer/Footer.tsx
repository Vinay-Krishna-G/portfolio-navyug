"use client";

import React from "react";
import Link from "next/link";
import NavYugLogo from "@/components/branding/NavYugLogo";
import { BRAND } from "@/lib/brand";
import {
  NAVYUG_EMAIL,
  NAVYUG_X_LINK,
  NAVYUG_INSTAGRAM_LINK,
  NAVYUG_LINKEDIN_LINK,
  NAVYUG_GITHUB_LINK,
} from "@/lib/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#090909] pt-28 pb-10 border-t border-white/5 overflow-hidden text-[#8a8a8a]">
      {/* Ambient Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(185, 255, 102, 0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-sans text-[clamp(28px,4vw,48px)] font-light text-[#f5f5f5] tracking-tight leading-[1.1] mb-6">
              Building the Next Era of <br className="hidden sm:block" />
              <span className="text-[#8a8a8a] italic font-serif">
                Digital Businesses.
              </span>
            </h2>
            <p className="font-sans text-[15px] leading-relaxed text-[#8a8a8a] max-w-lg">
              {BRAND.name} is a premium digital product studio engineering
              exceptional websites, AI solutions, SaaS platforms, and brand
              experiences that drive measurable impact.
            </p>
          </div>

          {/* Lead Generation CTA Box (Replacing Newsletter) */}
          <div className="shrink-0 w-full md:w-auto flex flex-col gap-5 bg-white/[0.02] p-8 rounded-3xl border border-white/5 backdrop-blur-xs max-w-sm">
            <h3 className="font-sans text-lg font-medium text-white leading-snug">
              Let&apos;s build something remarkable.
            </h3>
            <p className="font-sans text-xs leading-relaxed text-[#8a8a8a]">
              Tell us about your project and we&apos;ll get back within 24 hours.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 font-mono text-[13px] tracking-wide font-semibold text-[#090909] bg-[#B9FF66] hover:bg-white transition-all rounded-full px-6 py-3 mt-1 hover:scale-[1.02] group w-fit cursor-pointer"
            >
              Start a Project
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Faint Horizontal Divider */}
        <div className="w-full h-px bg-white/[0.06] mb-16" aria-hidden="true" />

        {/* 4-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-24">
          {/* Column 1: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] tracking-tight uppercase text-white/40 mb-1">
              Services
            </h4>
            <a
              href="#services"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              Web Platforms{" "}
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <a
              href="#services"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              SaaS Development{" "}
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <a
              href="#services"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              AI Automation{" "}
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <a
              href="#services"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              Brand Identity{" "}
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
          </div>

          {/* Column 2: Portfolio */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] tracking-tight uppercase text-white/40 mb-1">
              Portfolio
            </h4>
            <a
              href="#work"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              Restaurant Website{" "}
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <a
              href="#work"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              Gift Shop Website{" "}
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <span className="font-sans text-[14px] text-[#8a8a8a]/60 flex items-center gap-2">
              Boutique Website{" "}
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/5">
                Coming Soon
              </span>
            </span>
            <span className="font-sans text-[14px] text-[#8a8a8a]/60 flex items-center gap-2">
              Gym Website{" "}
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/5">
                Coming Soon
              </span>
            </span>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] tracking-tight uppercase text-white/40 mb-1">
              Company
            </h4>
            <a
              href="#services"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              About Us{" "}
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <a
              href="#process"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              Process{" "}
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <a
              href="#process"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              How We Work{" "}
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <a
              href="#faq"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              FAQ{" "}
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] tracking-tight uppercase text-white/40 mb-1">
              Contact &amp; Connect
            </h4>
            <div className="flex flex-col gap-1 mb-2">
              <a
                href={`mailto:${NAVYUG_EMAIL}`}
                className="font-mono text-[13px] text-white hover:text-[#B9FF66] transition-colors"
              >
                {NAVYUG_EMAIL}
              </a>
              <span className="font-sans text-[11px] text-[#8a8a8a]/70">
                Typically replies within 24 hours
              </span>
            </div>

            <div className="flex flex-col gap-2.5 pt-2 border-t border-white/5">
              <Link
                href={NAVYUG_X_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group font-sans text-[13px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
              >
                Twitter / X{" "}
                <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                  ↗
                </span>
              </Link>
              <Link
                href={NAVYUG_LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group font-sans text-[13px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
              >
                LinkedIn{" "}
                <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                  ↗
                </span>
              </Link>
              <Link
                href={NAVYUG_INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group font-sans text-[13px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
              >
                Instagram{" "}
                <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                  ↗
                </span>
              </Link>
              <Link
                href={NAVYUG_GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group font-sans text-[13px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
              >
                GitHub{" "}
                <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Location */}
          <div className="flex items-center gap-5">
            {/* 20-30% Larger Logo */}
            <NavYugLogo variant="full" size={56} className="h-12 sm:h-14" />
            <span className="font-sans text-[12px] text-[#8a8a8a] flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-[#B9FF66]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Crafted with passion in India
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="font-sans text-[12px] tracking-tight text-white/40">
              © {year} {BRAND.name}. All rights reserved.
            </span>
            <a
              href="#privacy"
              className="font-sans text-[12px] text-white/40 hover:text-white tracking-tighter transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="font-sans text-[12px] text-white/40 hover:text-white tracking-tighter transition-colors"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="#cookies"
              className="font-sans text-[12px] text-white/40 hover:text-white tracking-tighter transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
