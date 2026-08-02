"use client";

import React from "react";
import { motion } from "framer-motion";
import NavYugLogo from "@/components/branding/NavYugLogo";
import { MessageItem, BUBBLE_SIZE_CLASS } from "./types";

const BUBBLE_SIZES = BUBBLE_SIZE_CLASS || {
  small: "max-w-[85%] sm:max-w-[56%]",
  medium: "max-w-[90%] sm:max-w-[66%]",
  large: "max-w-[95%] sm:max-w-[76%]",
};

interface MessageBubbleProps {
  message: MessageItem;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isClient = message.sender === "client";
  const sizeClass = BUBBLE_SIZES[message.bubbleSize || "medium"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      whileHover={{ y: -2 }}
      className={`flex items-end gap-3 my-4 ${isClient ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-white border border-black/5 shadow-xs select-none">
        {isClient ? (
          <span className="text-[10px] font-bold text-neutral-600">You</span>
        ) : (
          <NavYugLogo variant="mark" size={18} />
        )}
      </div>

      {/* Bubble Content */}
      <div
        className={`p-4 sm:p-5 rounded-2xl shadow-xs transition-shadow duration-200 hover:shadow-md ${
          isClient
            ? "bg-[#F7F7F7] border border-black/5 rounded-br-xs text-neutral-900"
            : "bg-[#F8FFF1] border border-[rgba(185,255,102,0.25)] rounded-bl-xs text-neutral-900"
        } ${sizeClass}`}
      >
        <p className="text-sm sm:text-[15px] leading-relaxed font-sans font-normal">
          {message.text}
        </p>

        {/* Status indicator badge (e.g. "✓ Responded") */}
        {message.status && !isClient && (
          <div className="flex justify-end items-center gap-1 mt-2.5">
            <span className="text-[10px] font-mono text-[#5F8E1E] font-medium tracking-tight">
              {message.status}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
