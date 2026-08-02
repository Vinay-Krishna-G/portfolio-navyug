import Link from "next/link";
import NavYugLogo from "@/components/branding/NavYugLogo";
import { BRAND } from "@/lib/brand";
import { NAVYUG_EMAIL, NAVYUG_X_LINK, NAVYUG_INSTAGRAM_LINK, NAVYUG_LINKEDIN_LINK } from "@/lib/constants";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--ny-foreground)", color: "var(--ny-bg)" }}>
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col">
            {/* Logo — 16px bottom margin */}
            <div className="mb-4">
              <NavYugLogo variant="full" size={48} className="h-10 sm:h-12" />
            </div>
            
            {/* Tagline — 8px bottom margin */}
            <p className="text-sm font-semibold tracking-wide mb-2 text-white/90">
              {BRAND.tagline}
            </p>

            {/* Supporting Text — 24px bottom margin */}
            <p className="text-xs leading-relaxed mb-6" style={{ color: "rgba(250,250,250,0.55)" }}>
              {BRAND.subhead} • {BRAND.supportingText}
            </p>

            <a
              href={`mailto:${NAVYUG_EMAIL}`}
              className="text-xs font-mono hover:opacity-100 transition-opacity"
              style={{ color: "rgba(250,250,250,0.6)" }}
            >
              {NAVYUG_EMAIL}
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "rgba(250,250,250,0.35)" }}>
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Our Work", href: "#work" },
                { label: "Process", href: "#process" },
                { label: "The Team", href: "#team" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm hover:opacity-100 transition-opacity" style={{ color: "rgba(250,250,250,0.55)" }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "rgba(250,250,250,0.35)" }}>
              Connect
            </h3>
            <ul className="space-y-3">
              {[
                { label: "LinkedIn ↗", href: NAVYUG_LINKEDIN_LINK },
                { label: "Instagram ↗", href: NAVYUG_INSTAGRAM_LINK },
                { label: "X (Twitter) ↗", href: NAVYUG_X_LINK },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-100 transition-opacity" style={{ color: "rgba(250,250,250,0.55)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-xs" style={{ color: "rgba(250,250,250,0.35)" }}>© {year} {BRAND.name}. All rights reserved.</p>
          <p className="text-xs font-medium" style={{ color: "rgba(250,250,250,0.35)" }}>Quality over quantity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
