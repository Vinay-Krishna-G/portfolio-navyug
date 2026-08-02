"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";

const FAQS = [
  { q: "How long does a project take?", a: "Most projects take 4–8 weeks depending on scope. We'll give you an accurate timeline during our discovery call after understanding your requirements." },
  { q: "Do you work with small businesses?", a: "Yes. Many of our best projects have been for small businesses and local brands. What matters is that you take your online presence seriously." },
  { q: "Can you redesign an existing website?", a: "Absolutely. Redesigns are one of our specialties. We audit what's there, identify what's working, and rebuild with purpose — not just a fresh coat of paint." },
  { q: "Do you provide AI integrations?", a: "Yes. From chatbots and AI-driven content to smart search and recommendation systems — we design and integrate AI features that make sense for your business." },
  { q: "What does ongoing support include?", a: "Performance monitoring, security updates, content changes, bug fixes, and proactive recommendations. Think of us as an embedded tech team." },
  { q: "How do we get started?", a: "Fill out the contact form or email us directly. We'll schedule a 30-minute discovery call and share a proposal within 48 hours." },
];

function FAQItem({ faq, index, isOpen, onToggle }: {
  faq: (typeof FAQS)[number]; index: number; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <motion.div
      className="border-b"
      style={{ borderColor: "var(--ny-border)" }}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
    >
      <button
        id={`faq-btn-${index}`}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
      >
        <span className="text-sm font-medium" style={{ color: "var(--ny-foreground)" }}>
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full"
          style={{ background: "var(--ny-surface-3)", border: "1px solid var(--ny-border-lg)" }}
          aria-hidden="true"
        >
          {isOpen
            ? <HiMinus className="w-3.5 h-3.5" style={{ color: "var(--ny-foreground)" }} />
            : <HiPlus className="w-3.5 h-3.5" style={{ color: "var(--ny-muted)" }} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-btn-${index}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-6 text-sm leading-relaxed pr-10" style={{ color: "var(--ny-muted)" }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding" style={{ background: "var(--ny-surface-2)" }} aria-label="FAQ">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span className="section-label">FAQ</span>
            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--ny-foreground)" }}
            >
              Common questions
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ny-muted)" }}>
              Can&apos;t find your answer?{" "}
              <a href="mailto:hello@navyug.in" className="underline underline-offset-4 hover:opacity-70 transition-opacity" style={{ color: "var(--ny-foreground)" }}>
                Email us directly →
              </a>
            </p>
          </motion.div>
          <div>
            {FAQS.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
