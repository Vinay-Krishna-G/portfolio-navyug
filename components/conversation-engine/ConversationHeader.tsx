"use client";

import React from "react";
import NavYugLogo from "@/components/branding/NavYugLogo";
import { ConversationConfig } from "./types";

interface ConversationHeaderProps {
  config: ConversationConfig;
}

export default function ConversationHeader({ config }: ConversationHeaderProps) {
  return (
    <div className="w-full px-6 py-4 rounded-t-[24px] bg-[#FAFAFA] border-b border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none">
      {/* Left: Studio Identity */}
      <div className="flex items-center gap-3">
        <NavYugLogo variant="mark" size={28} priority className="shrink-0" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-bold text-neutral-900 tracking-tight">
              {config.companyName}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 text-neutral-600 border border-black/5">
              {config.subtitle}
            </span>
          </div>
          <span className="text-[11px] text-neutral-500 font-sans">
            {config.responseTime}
          </span>
        </div>
      </div>

      {/* Right: Availability Badge */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8FFF1] border border-[rgba(185,255,102,0.3)] text-xs font-semibold text-[#4F7A17] w-fit">
        <span className="w-2 h-2 rounded-full bg-[#86D227] animate-pulse" />
        <span>{config.availability}</span>
      </div>
    </div>
  );
}
