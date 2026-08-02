"use client";

import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi2";

const REASONS = [
  { title: "Premium quality, not templates", description: "Every project built from scratch. No page builders, no off-the-shelf themes." },
  { title: "AI-first approach", description: "We design products where intelligence is built into the core experience, not bolted on." },
  { title: "Fast delivery, no delays", description: "We commit to timelines and keep them. Most projects launch within 4–8 weeks." },
  { title: "Transparent process", description: "Weekly updates, shared project board, and direct access to the team at every stage." },
  { title: "Dedicated support post-launch", description: "Your contact stays consistent. No handoffs to junior staff after you sign." },
  { title: "Fewer clients, more focus", description: "We deliberately limit projects. Yours gets the attention it deserves." },
];

export default function WhyNavyugSection() {
  return (
    <section id="why-navyug" className="section-padding" style={{ background: "var(--ny-bg)" }} aria-label="Why NavYug">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span className="section-label">Why Choose Us</span>
            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--ny-foreground)" }}
            >
              Why NavYug
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "var(--ny-muted)", maxWidth: "26rem" }}>
              There are hundreds of agencies. Most ship the same templates with different logos. We don&apos;t. Here&apos;s what actually sets us apart.
            </p>
            <a href="#contact" className="btn-primary">
              Start a Project →
            </a>
          </motion.div>

          {/* Right */}
          <div>
            {REASONS.map((reason, i) => (
              <motion.div
                key={reason.title}
                className="flex gap-5 py-7"
                style={{ borderBottom: i < REASONS.length - 1 ? "1px solid var(--ny-border)" : "none" }}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.45, ease: "easeOut" }}
              >
                <HiCheckCircle
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: "#3a7a00" }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-sm font-semibold mb-1.5" style={{ color: "var(--ny-foreground)" }}>
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ny-muted)" }}>
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
