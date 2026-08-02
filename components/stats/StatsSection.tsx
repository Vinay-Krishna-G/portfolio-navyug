"use client";

import { motion } from "framer-motion";
import { HiOutlineBolt, HiOutlinePaintBrush, HiOutlineCpuChip, HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const VALUE_PROPS = [
  {
    icon: HiOutlineBolt,
    title: "Performance First",
    description: "Every site we ship scores 90+ on Core Web Vitals. Fast is non-negotiable.",
  },
  {
    icon: HiOutlinePaintBrush,
    title: "Design-First",
    description: "We don't use templates. Every pixel is intentional and built for your brand.",
  },
  {
    icon: HiOutlineCpuChip,
    title: "AI Ready",
    description: "We integrate intelligent features that make your product smarter over time.",
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: "Mobile First",
    description: "Designed for the phone in your client's hand, then scaled to every screen.",
  },
];

export default function StatsSection() {
  return (
    <section
      aria-label="Value Propositions"
      style={{
        background: "var(--ny-foreground)",
        padding: "5rem 0",
      }}
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {VALUE_PROPS.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.09, duration: 0.5, ease: "easeOut" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "var(--ny-lime-dim)", border: "1px solid rgba(185,255,102,0.2)" }}
              >
                <item.icon className="w-5 h-5" style={{ color: "var(--ny-lime)" }} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: "#F8F8F8" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(248,248,248,0.5)" }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
