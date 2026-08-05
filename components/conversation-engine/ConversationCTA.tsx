"use client";

import React from "react";
import { motion } from "framer-motion";
import NavYugLogo from "@/components/branding/NavYugLogo";
import { ConversationMessage } from "./types";

interface ConversationCTAProps {
  message: ConversationMessage;
}

export default function ConversationCTA({ message }: ConversationCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-end gap-3 my-5 pt-2"
    >
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-white border border-black/5 shadow-xs select-none">
        <NavYugLogo variant="mark" size={18} />
      </div>

      {/* CTA Message Box */}
      <div className="p-6 sm:p-7 rounded-2xl rounded-bl-xs bg-[#FFF0EE] border border-[rgba(255,107,94,0.3)] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-full sm:max-w-[85%]">
        <div className="flex flex-col gap-1">
          <span className="text-base font-bold text-neutral-900 leading-snug">
            {message.content}
          </span>
          <p className="text-sm text-neutral-600">
            Let&apos;s discuss your requirements and build something memorable together.
          </p>
        </div>

        <a
          href="#contact"
          className="btn-primary text-sm font-semibold px-6 py-3 shrink-0 self-start sm:self-auto rounded-full cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
        >
          Schedule a Call →
        </a>
      </div>
    </motion.div>
  );
}
