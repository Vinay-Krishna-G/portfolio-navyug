"use client";

import React from "react";
import { motion } from "framer-motion";
import NavYugLogo from "@/components/branding/NavYugLogo";
import { ConversationMessage, BubbleSize } from "./types";

const BUBBLE_SIZES: Record<BubbleSize, string> = {
  small: "max-w-[85%] sm:max-w-[56%]",
  medium: "max-w-[90%] sm:max-w-[66%]",
  large: "max-w-[95%] sm:max-w-[76%]",
};

interface ConversationBubbleProps {
  message: ConversationMessage;
}

export default function ConversationBubble({ message }: ConversationBubbleProps) {
  const isClient = message.sender === "client";
  const sizeClass = BUBBLE_SIZES[message.bubbleSize || "medium"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
      className={`flex items-end gap-3 my-3 sm:my-4 ${
        isClient ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-white border border-black/5 shadow-xs select-none">
        {isClient ? (
          <span className="text-[10px] font-bold text-neutral-600">You</span>
        ) : (
          <NavYugLogo variant="mark" size={18} />
        )}
      </div>

      {/* Bubble Body */}
      <div
        className={`p-4 sm:p-5 rounded-2xl shadow-xs transition-shadow duration-200 hover:shadow-md ${
          isClient
            ? "bg-[#F7F7F7] border border-black/5 rounded-br-xs text-neutral-900"
            : "bg-[#FFF0EE] border border-[rgba(255,107,94,0.25)] rounded-bl-xs text-neutral-900"
        } ${sizeClass}`}
      >
        <div className="text-sm sm:text-[15px] leading-relaxed font-sans font-normal">
          {message.content}
        </div>

        {/* Status indicator badge (e.g. "✓ Responded") */}
        {message.status && !isClient && (
          <div className="flex justify-end items-center gap-1 mt-2">
            <span className="text-[10px] font-mono text-[#5F8E1E] font-medium tracking-tight">
              {message.status}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
