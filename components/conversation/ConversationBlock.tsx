"use client";

import React, { useState, useEffect, useRef } from "react";
import { ConversationBlockData, THINKING_MS } from "./types";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

const DELAYS = THINKING_MS || {
  short: 700,
  medium: 1000,
  long: 1400,
};

interface ConversationBlockProps {
  block: ConversationBlockData;
  isLast: boolean;
}

export default function ConversationBlock({ block, isLast }: ConversationBlockProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const hasAnimatedRef = useRef(false);

  // Extract question & answer messages
  const questionMsg = block.messages.find((m) => m.sender === "client");
  const typingMsg = block.messages.find((m) => m.type === "typing");
  const answerMsg = block.messages.find((m) => m.sender === "navyug");

  const thinkingDuration = DELAYS[typingMsg?.thinking || "medium"];

  // IntersectionObserver for scroll-triggered sequence
  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasAnimatedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Sequence controller (runs ONCE and preserves state)
  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;

    // Step 1: Question renders instantly when in view
    // Step 2: Typing indicator appears after 200ms
    const typingTimer = setTimeout(() => {
      setShowTyping(true);
    }, 200);

    // Step 3: Typing completes after thinkingDuration -> answer reveals
    const answerTimer = setTimeout(() => {
      setShowTyping(false);
      setShowAnswer(true);
    }, 200 + thinkingDuration);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(answerTimer);
    };
  }, [isInView, thinkingDuration]);

  return (
    <div ref={containerRef} className="w-full py-4 border-b border-black/5 last:border-b-0">
      {/* Client Question */}
      {questionMsg && (hasAnimatedRef.current || isInView) && (
        <MessageBubble message={questionMsg} />
      )}

      {/* Typing Indicator */}
      {showTyping && <TypingIndicator />}

      {/* NavYug Response */}
      {showAnswer && answerMsg && <MessageBubble message={answerMsg} />}
    </div>
  );
}
