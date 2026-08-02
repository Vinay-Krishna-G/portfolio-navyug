import Link from "next/link";
import NavYugLogo from "@/components/branding/NavYugLogo";
import { BRAND } from "@/lib/brand";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#FAFAFA] text-neutral-900 select-none">
      <div className="mb-6">
        <NavYugLogo variant="full" size={60} priority />
      </div>

      <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-neutral-200/60 text-neutral-700 mb-4 border border-black/5">
        404 — Page Not Found
      </span>

      <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
        Lost in the digital void?
      </h1>

      <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed mb-8">
        The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>

      <Link
        href="/"
        className="btn-primary text-sm font-semibold px-6 py-3 rounded-full"
      >
        Return to Home →
      </Link>
    </div>
  );
}
