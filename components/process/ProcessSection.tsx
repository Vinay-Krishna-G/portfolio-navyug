"use client";

import { motion } from "framer-motion";

const STEPS = [
  { n: "01", title: "Discovery", body: "We deeply understand your business, goals, audience, and competitive landscape. No assumptions." },
  { n: "02", title: "Strategy", body: "We define the roadmap — sitemap, architecture, content plan, and timeline — before design begins." },
  { n: "03", title: "Design", body: "High-fidelity designs crafted for your brand. You see exactly what will be built before we build it." },
  { n: "04", title: "Build", body: "Clean code, performance-first, tested across every device and browser. No shortcuts." },
  { n: "05", title: "Launch", body: "Smooth deployment. We handle domain, hosting, SSL, analytics, and go-live support end-to-end." },
  { n: "06", title: "Support", body: "We stay with you. Maintenance, feature updates, performance monitoring, and growth support." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding" style={{ background: "var(--ny-bg)" }} aria-label="Our Process">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div>
            <span className="section-label">How We Work</span>
            <h2
              className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--ny-foreground)" }}
            >
              A process built for clarity
            </h2>
          </div>
          <p className="text-base leading-relaxed" style={{ color: "var(--ny-muted)" }}>
            No surprises. No delays. You&apos;ll know exactly where we are at every step, and you&apos;ll always have a say in the direction.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              className="card-premium p-8 flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-bold tabular-nums tracking-widest"
                  style={{ color: "var(--ny-dim)" }}
                >
                  {step.n}
                </span>
                {/* Subtle connector line (first 5 steps) */}
                {i < 5 && (
                  <div className="h-px flex-1 mx-4" style={{ background: "var(--ny-border-lg)" }} aria-hidden="true" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--ny-foreground)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ny-muted)" }}>
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
