"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  WebDesignAnim,
  AiAutomationAnim,
  BrandIdentityAnim,
  EcommerceAnim,
  SeoPerformanceAnim,
  OngoingSupportAnim,
} from "./ServiceAnimations";

const SERVICES = [
  {
    title: "Web Design & Development",
    description:
      "Custom-built websites engineered for high performance, smooth responsiveness, and maximum conversions.",
    Animation: WebDesignAnim,
    badge: "CORE",
  },
  {
    title: "AI-Powered Features",
    description:
      "Intelligent chatbots, AI search, workflow automation, and custom LLM integrations built directly into your product.",
    Animation: AiAutomationAnim,
    badge: "AI FEATURE",
  },
  {
    title: "Brand Identity",
    description:
      "Logos, typography systems, and visual design languages that position your business as an industry leader.",
    Animation: BrandIdentityAnim,
    badge: null,
  },
  {
    title: "E-Commerce",
    description:
      "Scalable online storefronts engineered for fast checkout, custom product builders, and global growth.",
    Animation: EcommerceAnim,
    badge: null,
  },
  {
    title: "SEO & Performance",
    description:
      "Technical Core Web Vitals optimization, structured data, and search architecture so you load fast and rank #1.",
    Animation: SeoPerformanceAnim,
    badge: null,
  },
  {
    title: "Ongoing Support",
    description:
      "Continuous optimization, security updates, feature scaling, and dedicated technical growth partnership post-launch.",
    Animation: OngoingSupportAnim,
    badge: null,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 select-none"
      style={{ background: "var(--ny-bg)" }}
      aria-label="Services"
    >
      <div className="container-xl max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          className="mb-16 sm:mb-20 text-center max-w-[620px] mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#5D6475] bg-white border border-[#E1E5EE] px-3.5 py-1 rounded-full shadow-2xs">
            WHAT WE DO
          </span>
          <h2 className="font-display font-extrabold tracking-tight leading-[1.1] text-3xl sm:text-5xl text-[#0B1020] mt-5 mb-4">
            Everything your business needs online.
          </h2>
          <p className="text-base sm:text-lg text-[#5D6475] font-normal leading-relaxed">
            Craftsmanship, engineering precision, and AI intelligence built into every product we ship.
          </p>
        </motion.div>

        {/* Product-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              className="group relative rounded-3xl bg-white border border-[#E1E5EE] p-7 sm:p-8 flex flex-col justify-between overflow-hidden shadow-layered transition-all duration-300 hover:shadow-2xl hover:border-[#FF6B5E]/60 cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              {/* Badge */}
              {service.badge && (
                <span className="absolute top-6 right-6 text-[9px] font-mono font-bold tracking-wider text-white bg-[#FF6B5E] px-2.5 py-0.5 rounded-full shadow-xs">
                  {service.badge}
                </span>
              )}

              {/* Top Vector Animation Frame */}
              <div className="w-full h-32 mb-6 rounded-2xl bg-[#F7F8FC] border border-[#E1E5EE]/70 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0B1020]/5">
                <service.Animation />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-[#0B1020] mb-2.5 leading-snug group-hover:text-[#0B1020]">
                  {service.title}
                </h3>
                <p className="text-sm text-[#5D6475] leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Bottom Learn More Link */}
              <div className="mt-6 pt-4 border-t border-[#E8E8E2]/60 flex items-center justify-between text-xs font-semibold text-[#111111] group-hover:text-black">
                <span>Learn More</span>
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
