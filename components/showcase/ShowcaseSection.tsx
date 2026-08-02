"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import LivingPreview from "./LivingPreview";

export default function ShowcaseSection() {
  return (
    <section id="work" className="section-padding" style={{ background: "var(--ny-surface-2)" }} aria-label="Selected Work">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div>
            <span className="section-label">Selected Work</span>
            <h2
              className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--ny-foreground)" }}
            >
              Industries we&apos;ve served
            </h2>
          </div>
          <p
            className="text-sm max-w-xs leading-relaxed sm:text-right"
            style={{ color: "var(--ny-muted)" }}
          >
            Every project built with precision, bespoke design, and delivered on time.
          </p>
        </motion.div>

        {/* Grid of Living Website Previews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, i) => (
            <LivingPreview key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
