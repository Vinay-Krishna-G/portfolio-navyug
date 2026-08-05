"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <footer className="relative bg-[#080C18] pt-20 pb-12 border-t border-white/5 text-[#9EA6B8] select-none">
      {/* Subtle top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(255, 107, 94, 0.09) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* 5-Column Architectural Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr_1.4fr] gap-x-12 lg:gap-x-16 gap-y-12 mb-20">
          
          {/* Column 1: Services */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-[11px] tracking-tight uppercase text-white/40 mb-2">
              Services
            </h4>
            <a
              href="#services"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              Web Platforms
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#FF6B5E] text-[10px]">
                ↗
              </span>
            </a>
            <a
              href="#services"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              SaaS Development
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <a
              href="#services"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              AI Automation
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <a
              href="#services"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              Brand Identity
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
          </div>

          {/* Column 2: Portfolio */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-[11px] tracking-tight uppercase text-white/40 mb-2">
              Portfolio
            </h4>
            <a
              href="#work"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              Restaurant Website
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <a
              href="#work"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              Gift Shop Website
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <span className="font-sans text-[14px] text-[#8a8a8a]/60 flex items-center gap-2">
              Boutique Website
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/5">
                Soon
              </span>
            </span>
            <span className="font-sans text-[14px] text-[#8a8a8a]/60 flex items-center gap-2">
              Gym Website
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/5">
                Soon
              </span>
            </span>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-[11px] tracking-tight uppercase text-white/40 mb-2">
              Company
            </h4>
            <a
              href="#process"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              Process
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <a
              href="#process"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              How We Work
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <a
              href="#faq"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              FAQ
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
            <a
              href="#contact"
              className="group font-sans text-[14px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
            >
              Contact
              <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                ↗
              </span>
            </a>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-[11px] tracking-tight uppercase text-white/40 mb-2">
              Contact &amp; Connect
            </h4>
            <div className="flex flex-col gap-1 mb-1">
              <a
                href={`mailto:${NAVYUG_EMAIL}`}
                className="font-mono text-[13px] text-white hover:text-[#FF6B5E] transition-colors"
              >
                {NAVYUG_EMAIL}
              </a>
              <span className="font-sans text-[11px] text-[#8a8a8a]/70">
                Typically replies within 24h
              </span>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
              <Link
                href={NAVYUG_X_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group font-sans text-[13px] text-[#8a8a8a] hover:text-[#f5f5f5] transition-colors flex items-center w-fit"
              >
                Twitter / X
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
                LinkedIn
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
                Instagram
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
                GitHub
                <span className="ml-1.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#B9FF66] text-[10px]">
                  ↗
                </span>
              </Link>
            </div>
          </div>

          {/* Column 5: Stay Updated (Seamless 1.4fr Column) */}
          <div className="flex flex-col gap-2">
            <h4 className="font-sans text-sm font-semibold text-white mb-0.5">
              Stay Updated
            </h4>
            <p className="font-sans text-xs leading-relaxed text-white/60 max-w-[340px]">
              Product launches, design insights, and AI updates.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="relative w-full max-w-[340px] mt-1 group/input">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-[48px] bg-white/[0.03] border border-[rgba(255,107,94,0.24)] hover:border-[rgba(255,107,94,0.45)] focus:border-[#FF6B5E] focus:shadow-[0_0_0_4px_rgba(255,107,94,0.16)] rounded-2xl px-4 text-xs text-white placeholder-white/55 focus:outline-none transition-all duration-200 pr-12 font-sans"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to Stay Updated"
                  className="absolute right-2 top-2 bottom-2 px-3 rounded-xl flex items-center justify-center text-[#FF6B5E] hover:brightness-110 focus:outline-none group cursor-pointer"
                >
                  <span className="text-[20px] leading-none transition-all duration-200 group-hover/input:translate-x-1">
                    →
                  </span>
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 max-w-[340px] mt-1"
              >
                <span className="block font-sans text-xs font-semibold text-white mb-0.5">
                  Thanks.
                </span>
                <span className="block font-sans text-xs text-[#8a8a8a]">
                  You&apos;ll hear from us occasionally.
                </span>
              </motion.div>
            )}
          </div>

        </div>

        {/* Modernized Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 font-sans">
          {/* Copyright & Location */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center sm:text-left">
            <span className="text-white/60 font-semibold">© {year} {BRAND.name}</span>
            <span className="hidden sm:inline">•</span>
            <span>Designed &amp; engineered in India.</span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href="#privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="#cookies"
              className="hover:text-white transition-colors"
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
