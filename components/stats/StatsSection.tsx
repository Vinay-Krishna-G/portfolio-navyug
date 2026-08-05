"use client";

import { motion } from "framer-motion";
import { HiOutlineBolt, HiOutlinePaintBrush, HiOutlineCpuChip, HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const STATS = [
  {
    stat: "90+",
    statLabel: "Lighthouse",
    icon: HiOutlineBolt,
    title: "Performance First",
    description: "Fast loading websites. Every build is optimized for Core Web Vitals.",
    iconBg: "rgba(255, 107, 94, 0.25)",
    iconColor: "#4B7512",
  },
  {
    stat: "100%",
    statLabel: "Custom",
    icon: HiOutlinePaintBrush,
    title: "Design-First",
    description: "Every pixel designed for your brand. Zero generic templates.",
    iconBg: "rgba(99, 170, 255, 0.20)",
    iconColor: "#1D547F",
  },
  {
    stat: "10x",
    statLabel: "Automation",
    icon: HiOutlineCpuChip,
    title: "AI Ready",
    description: "Intelligent workflows, chatbots, and AI integrations built right in.",
    iconBg: "rgba(167, 139, 250, 0.20)",
    iconColor: "#58289E",
  },
  {
    stat: "50+",
    statLabel: "Projects",
    icon: HiOutlineDevicePhoneMobile,
    title: "Mobile First",
    description: "Designed for phone screens first, then scaled to every browser.",
    iconBg: "rgba(251, 191, 36, 0.20)",
    iconColor: "#8E4600",
  },
];

export default function StatsSection() {
  return (
    <section
      aria-label="Value Propositions and Key Stats"
      className="py-6 lg:py-10"
      style={{ background: "var(--ny-bg)" }}
    >
      <div className="container-xl">
        {/* Single Cohesive Horizontal Value Strip Container */}
        <motion.div
          className="w-full rounded-[24px] overflow-hidden border transition-all duration-300"
          style={{
            background: "linear-gradient(180deg, #FCFFF8 0%, #F5FCEE 100%)",
            border: "1px solid rgba(255, 107, 94, 0.30)",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.03), 0 12px 28px rgba(0, 0, 0, 0.05)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{
            boxShadow: "0 2px 6px rgba(0,0,0,.03), 0 16px 36px rgba(0,0,0,.06)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/5">
            {STATS.map((item) => (
              <div
                key={item.title}
                className="p-6 lg:p-7 flex flex-col justify-between gap-4 group transition-colors hover:bg-white/40"
              >
                {/* Header: Icon + Value Title */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: item.iconBg }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.iconColor }} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 leading-snug">
                        {item.title}
                      </h3>
                      <span
                        className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full inline-block mt-0.5 border"
                        style={{
                          background: "rgba(255, 107, 94, 0.18)",
                          color: "#3B6E00",
                          borderColor: "rgba(255, 107, 94, 0.30)",
                        }}
                      >
                        {item.stat} {item.statLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
