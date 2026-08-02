"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  { name: "Restaurant", industry: "Food & Beverage", accent: "#FFF3E0", dot: "#FF8A00" },
  { name: "Gift Shop",  industry: "Retail & E-Commerce", accent: "#FCE4EC", dot: "#E91E63" },
  { name: "Construction Co.", industry: "Construction", accent: "#E8F5E9", dot: "#2E7D32" },
  { name: "Hospital",   industry: "Healthcare", accent: "#E3F2FD", dot: "#1565C0" },
  { name: "Law Firm",   industry: "Legal Services", accent: "#EDE7F6", dot: "#4527A0" },
  { name: "Gym",        industry: "Fitness & Wellness", accent: "#E8F5E9", dot: "#1B5E20" },
  { name: "Interior Design", industry: "Design & Lifestyle", accent: "#FBE9E7", dot: "#BF360C" },
];

function BrowserFrame({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{ boxShadow: "var(--ny-shadow-md)", border: "1px solid rgba(0,0,0,0.07)" }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-1.5 px-3 py-2.5"
        style={{ background: "#F0F0F0", borderBottom: "1px solid rgba(0,0,0,0.07)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
        <div
          className="flex-1 mx-3 h-5 rounded-full flex items-center px-3"
          style={{ background: "#E0E0E0", fontSize: "0.6rem", color: "#888" }}
        >
          navyug.in/{project.name.toLowerCase().replace(/\s+/g, "-")}
        </div>
      </div>
      {/* Page preview */}
      <div
        className="h-40 flex flex-col items-center justify-center gap-3 relative overflow-hidden"
        style={{ background: project.accent }}
      >
        {/* Simulated layout lines */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-20">
          <div className="h-2 w-3/4 rounded" style={{ background: project.dot }} />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded" style={{ background: project.dot }} />
            <div className="h-1.5 w-5/6 rounded" style={{ background: project.dot }} />
            <div className="h-1.5 w-4/6 rounded" style={{ background: project.dot }} />
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-20 rounded-full" style={{ background: project.dot }} />
            <div className="h-6 w-20 rounded-full border-2" style={{ borderColor: project.dot }} />
          </div>
        </div>
        {/* Project initial */}
        <span
          className="text-5xl font-display font-black select-none opacity-10 z-10"
          aria-hidden="true"
        >
          {project.name.charAt(0)}
        </span>
      </div>
    </div>
  );
}

export default function ShowcaseSection() {
  return (
    <section id="work" className="section-padding" style={{ background: "var(--ny-surface-2)" }} aria-label="Selected Work">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          className="mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
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
            Every project built with precision and delivered on time. No exceptions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.name}
              className="card-premium overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
              aria-label={`${project.name} project preview`}
            >
              {/* Browser frame */}
              <div className="relative overflow-hidden">
                <motion.div
                  className="transition-transform duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  <BrowserFrame project={project} />
                </motion.div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center rounded-xl"
                  style={{ background: "rgba(15,15,15,0.6)", backdropFilter: "blur(4px)" }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className="text-sm font-semibold px-5 py-2.5 rounded-full"
                    style={{ background: "var(--ny-lime)", color: "#0F0F0F" }}
                  >
                    View Case Study →
                  </span>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold" style={{ color: "var(--ny-foreground)" }}>
                    {project.name}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: "var(--ny-muted)" }}>
                    {project.industry}
                  </p>
                </div>
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: project.dot }}
                  aria-hidden="true"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
