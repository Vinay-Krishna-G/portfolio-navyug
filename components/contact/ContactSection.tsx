"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setState("submitting");
    setTimeout(() => setState("success"), 1200);
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    background: "var(--ny-bg)",
    border: `1.5px solid ${errors[field] ? "#ef4444" : "var(--ny-border-lg)"}`,
    borderRadius: "0.625rem",
    color: "var(--ny-foreground)",
    fontSize: "0.875rem",
    padding: "0.875rem 1.125rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s ease",
  });

  return (
    <section id="contact" className="section-padding" style={{ background: "var(--ny-bg)" }} aria-label="Contact">
      <div className="container-xl">
        {/* Cinematic CTA */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="font-display font-bold leading-[1.05] tracking-tight mx-auto"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "var(--ny-foreground)",
              maxWidth: "22rem",
            }}
          >
            Ready to build something remarkable?
          </h2>
          <p className="mt-6 text-base" style={{ color: "var(--ny-muted)" }}>
            We respond within 24 hours. No fluff, no commitment.
          </p>
        </motion.div>

        {/* Form + info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-4xl mx-auto">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span className="section-label">Get In Touch</span>
            <h3 className="text-2xl font-display font-bold mb-6" style={{ color: "var(--ny-foreground)" }}>
              Start a conversation
            </h3>
            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--ny-dim)" }}>Email</p>
                <a href="mailto:hello@navyug.in" className="text-sm hover:opacity-70 transition-opacity" style={{ color: "var(--ny-foreground)" }}>
                  hello@navyug.in
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--ny-dim)" }}>Response time</p>
                <p className="text-sm" style={{ color: "var(--ny-foreground)" }}>Within 24 hours</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--ny-dim)" }}>Location</p>
                <p className="text-sm" style={{ color: "var(--ny-foreground)" }}>India · Remote worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          >
            {state === "success" ? (
              <motion.div
                className="card-premium p-10 flex flex-col items-start gap-5"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                  style={{ background: "var(--ny-lime-dim)", border: "1px solid rgba(185,255,102,0.3)" }}
                >
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--ny-foreground)" }}>Message received.</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ny-muted)" }}>
                    Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
                <button className="btn-outline text-sm mt-2" onClick={() => { setForm({ name: "", email: "", message: "" }); setState("idle"); }}>
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5" aria-label="Contact form">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-name" className="text-xs font-medium" style={{ color: "var(--ny-foreground)" }}>Name</label>
                  <input id="c-name" type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))} style={inputStyle("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} />
                  {errors.name && <p id="e-name" className="text-xs text-red-500">{errors.name}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-email" className="text-xs font-medium" style={{ color: "var(--ny-foreground)" }}>Email</label>
                  <input id="c-email" type="email" placeholder="you@company.com" value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))} style={inputStyle("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined} />
                  {errors.email && <p id="e-email" className="text-xs text-red-500">{errors.email}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-message" className="text-xs font-medium" style={{ color: "var(--ny-foreground)" }}>Message</label>
                  <textarea id="c-message" rows={5} placeholder="Tell us about your project..." value={form.message} onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))} style={{ ...inputStyle("message"), resize: "none" }} aria-invalid={!!errors.message} aria-describedby={errors.message ? "e-msg" : undefined} />
                  {errors.message && <p id="e-msg" className="text-xs text-red-500">{errors.message}</p>}
                </div>

                <motion.button
                  id="contact-submit"
                  type="submit"
                  className="btn-primary justify-center text-sm"
                  disabled={state === "submitting"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {state === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </span>
                  ) : "Send Message →"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
