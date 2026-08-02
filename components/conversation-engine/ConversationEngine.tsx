"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ConversationConfig, ConversationMessage } from "./types";
import { NAVYUG_CONVERSATION_CONFIG } from "./conversation-config";
import { FAQ_CONVERSATION_MESSAGES } from "./faq-conversation";
import { useConversationVisibility } from "./hooks/useConversationVisibility";
import { useConversationTimeline } from "./hooks/useConversationTimeline";
import { scrollToBottom } from "./utils/scrollToBottom";
import ConversationHeader from "./ConversationHeader";
import ConversationRenderer from "./ConversationRenderer";

interface ConversationEngineProps {
  config?: ConversationConfig;
  messages?: ConversationMessage[];
}

export default function ConversationEngine({
  config = NAVYUG_CONVERSATION_CONFIG,
  messages = FAQ_CONVERSATION_MESSAGES,
}: ConversationEngineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const isVisible = useConversationVisibility(sectionRef);
  const { visibleLookup, activeTypingId, visibleIds } = useConversationTimeline(
    messages,
    isVisible
  );

  // Smooth container-scoped auto-scroll on new message render
  useEffect(() => {
    if (visibleIds.length > 0) {
      scrollToBottom(scrollContainerRef.current);
    }
  }, [visibleIds.length]);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--ny-surface-2)" }}
      aria-label="FAQ & Conversation"
    >
      <div className="container-xl flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="section-label">FAQ</span>
          <h2
            className="font-display font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "var(--ny-foreground)" }}
          >
            Got questions? <br className="hidden sm:block" />
            <span className="italic font-serif text-neutral-500 font-normal">
              We&apos;ve got answers.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
            A real conversation about our process, pricing, and what makes NavYug different.
          </p>
        </motion.div>

        {/* ── Main 1080px Conversation Container Panel ── */}
        <motion.div
          className="w-full max-w-[1080px] bg-[#FAFAFA] rounded-[24px] border border-black/5 shadow-[0_2px_6px_rgba(0,0,0,0.02),0_12px_28px_rgba(0,0,0,0.04)] overflow-hidden"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Non-Sticky Conversation Header */}
          <ConversationHeader config={config} />

          {/* Container Scroll Body */}
          <div
            ref={scrollContainerRef}
            className="p-4 sm:p-8 flex flex-col max-h-[700px] overflow-y-auto scroll-smooth"
          >
            <ConversationRenderer
              messages={messages}
              visibleLookup={visibleLookup}
              activeTypingId={activeTypingId}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
