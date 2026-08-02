"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const TEAM = [
  {
    initials: "VK",
    name: "Vinay Krishna",
    role: "Founder",
    title: "Full Stack Developer",
    bio: "Leads product and engineering. Believes in building things that are both fast and beautiful.",
    skills: ["React", "Next.js", "Node.js", "AI", "TypeScript"],
    bg: "linear-gradient(135deg, #B9FF6618, #e8ffe018)",
    avatarBg: "#B9FF66",
    avatarColor: "#0F0F0F",
    socials: { github: "#", linkedin: "#", x: "#", mail: "mailto:vinay@navyug.in" },
  },
  {
    initials: "RS",
    name: "Rahul S.",
    role: "Frontend Engineer",
    title: "UI/UX & Motion",
    bio: "Obsessed with micro-interactions and the invisible details that make interfaces feel alive.",
    skills: ["React", "Framer Motion", "CSS", "Figma", "GSAP"],
    bg: "linear-gradient(135deg, #63aaff18, #daf0ff18)",
    avatarBg: "#63aaff",
    avatarColor: "#0F0F0F",
    socials: { github: "#", linkedin: "#", x: "#", mail: "mailto:rahul@navyug.in" },
  },
  {
    initials: "SA",
    name: "Sai A.",
    role: "Backend Engineer",
    title: "Systems & AI Integration",
    bio: "Architects the invisible layer — fast APIs, reliable infra, and AI pipelines that actually work.",
    skills: ["Node.js", "Python", "MongoDB", "Redis", "OpenAI"],
    bg: "linear-gradient(135deg, #a78bfa18, #ede7ff18)",
    avatarBg: "#a78bfa",
    avatarColor: "#0F0F0F",
    socials: { github: "#", linkedin: "#", x: "#", mail: "mailto:sai@navyug.in" },
  },
  {
    initials: "AR",
    name: "Arjun R.",
    role: "UI/UX Designer",
    title: "Brand & Visual Design",
    bio: "Translates strategy into visuals. Every layout he ships feels instantly recognisable.",
    skills: ["Figma", "Brand Design", "Typography", "Illustration", "Webflow"],
    bg: "linear-gradient(135deg, #fb718518, #ffe4ec18)",
    avatarBg: "#fb7185",
    avatarColor: "#0F0F0F",
    socials: { github: "#", linkedin: "#", x: "#", mail: "mailto:arjun@navyug.in" },
  },
];

function TeamCard({ member }: { member: (typeof TEAM)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      className="rounded-2xl p-7 flex flex-col gap-6 cursor-default overflow-hidden relative"
      style={{
        background: member.bg,
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "var(--ny-shadow-sm)",
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
        transition: { duration: 0.25 },
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Avatar + name */}
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold font-display flex-shrink-0"
          style={{
            background: member.avatarBg,
            color: member.avatarColor,
            boxShadow: `0 4px 12px ${member.avatarBg}55`,
          }}
          aria-hidden="true"
        >
          {member.initials}
        </div>
        <div>
          <h3 className="text-base font-semibold" style={{ color: "var(--ny-foreground)" }}>
            {member.name}
          </h3>
          <p className="text-xs font-medium mt-0.5" style={{ color: "var(--ny-muted)" }}>
            {member.role}
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--ny-dim)" }}>
            {member.title}
          </p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm leading-relaxed" style={{ color: "var(--ny-muted)" }}>
        {member.bio}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(255,255,255,0.6)",
              color: "var(--ny-foreground)",
              border: "1px solid rgba(0,0,0,0.06)",
              backdropFilter: "blur(6px)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Social icons — animate in on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="flex items-center gap-3 pt-1"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
          >
            {[
              { Icon: FaGithub, href: member.socials.github, label: "GitHub" },
              { Icon: FaLinkedinIn, href: member.socials.linkedin, label: "LinkedIn" },
              { Icon: FaXTwitter, href: member.socials.x, label: "X" },
              { Icon: HiOutlineEnvelope, href: member.socials.mail, label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={`${member.name} on ${label}`}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  color: "var(--ny-foreground)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="section-padding" style={{ background: "var(--ny-surface-2)" }} aria-label="Our Team">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="section-label">The Team</span>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--ny-foreground)", maxWidth: "32rem" }}
          >
            Meet the people behind NavYug
          </h2>
          <p className="mt-5 text-base max-w-lg leading-relaxed" style={{ color: "var(--ny-muted)" }}>
            A small, focused team that takes your project seriously. When you work with NavYug, you work directly with the people who build.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              transition={{ delay: i * 0.08 }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
