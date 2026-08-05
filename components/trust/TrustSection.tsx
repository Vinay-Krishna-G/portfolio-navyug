"use client";

import React from "react";
import { motion } from "framer-motion";
import { studioStats } from "@/data/trustStats";

export default function TrustSection() {
  return (
    <section className="w-full my-20 sm:my-28 select-none" aria-label="Trust Metrics">
      <div className="container-xl max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Subtle Label */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#686B72]">
            WHY CLIENTS CHOOSE NAVYUG
          </span>
        </motion.div>

        {/* Continuous Apple-Style Trust Strip Container */}
        <motion.div
          className="w-full bg-white border border-[#E7E7E3] rounded-3xl p-6 sm:p-10 shadow-[0_2px_10px_rgba(17,17,17,0.04)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#E7E7E3]">
            {studioStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center text-center ${
                  i !== 0 ? "pt-6 lg:pt-0" : ""
                } px-4`}
              >
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-[#686B72] font-normal leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
