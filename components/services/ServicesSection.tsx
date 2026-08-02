"use client";

import { motion } from "framer-motion";
import {
  HiOutlineGlobeAlt,
  HiOutlineCpuChip,
  HiOutlineSparkles,
  HiOutlineShoppingBag,
  HiOutlineChartBar,
  HiOutlineLifebuoy,
} from "react-icons/hi2";

const SERVICES = [
  {
    icon: HiOutlineGlobeAlt,
    title: "Web Design & Development",
    description:
      "Custom-built websites that are fast, responsive, and crafted to convert visitors into customers.",
    tint: "var(--ny-tint-lime)",
    iconBg: "var(--ny-icon-lime)",
    iconColor: "#3a7a00",
    badge: "Core",
  },
  {
    icon: HiOutlineCpuChip,
    title: "AI-Powered Features",
    description:
      "Chatbots, intelligent search, automation, and AI-driven content built directly into your product.",
    tint: "var(--ny-tint-blue)",
    iconBg: "var(--ny-icon-blue)",
    iconColor: "#1a5fa8",
    badge: "New",
  },
  {
    icon: HiOutlineSparkles,
    title: "Brand Identity",
    description:
      "Logos, typography, and visual systems that give your business a consistent, premium presence.",
    tint: "var(--ny-tint-purple)",
    iconBg: "var(--ny-icon-purple)",
    iconColor: "#5b21b6",
    badge: null,
  },
  {
    icon: HiOutlineShoppingBag,
    title: "E-Commerce",
    description:
      "Scalable online stores built for performance — Shopify, custom builds, or headless commerce.",
    tint: "var(--ny-tint-amber)",
    iconBg: "var(--ny-icon-amber)",
    iconColor: "#92400e",
    badge: null,
  },
  {
    icon: HiOutlineChartBar,
    title: "SEO & Performance",
    description:
      "Technical SEO, Core Web Vitals optimisation, and structured data so you rank and load fast.",
    tint: "var(--ny-tint-teal)",
    iconBg: "var(--ny-icon-teal)",
    iconColor: "#065f46",
    badge: null,
  },
  {
    icon: HiOutlineLifebuoy,
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. Dedicated maintenance, updates, and growth support.",
    tint: "var(--ny-tint-rose)",
    iconBg: "var(--ny-icon-rose)",
    iconColor: "#9f1239",
    badge: null,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding" style={{ background: "var(--ny-bg)" }} aria-label="Services">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="section-label">What We Do</span>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--ny-foreground)", maxWidth: "28rem" }}
          >
            Everything your business needs online
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              className="relative rounded-2xl p-8 flex flex-col gap-6 overflow-hidden"
              style={{
                background: service.tint,
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "var(--ny-shadow-sm)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
                transition: { duration: 0.2 },
              }}
            >
              {/* Badge */}
              {service.badge && (
                <span
                  className="absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    color: "var(--ny-muted)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {service.badge}
                </span>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: service.iconBg }}
              >
                <service.icon
                  className="w-6 h-6"
                  style={{ color: service.iconColor }}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-base font-semibold mb-2.5 leading-snug"
                  style={{ color: "var(--ny-foreground)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ny-muted)" }}>
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
