"use client";

import React from "react";
import { ConversationMessage } from "./types";
import ConversationBubble from "./ConversationBubble";
import TypingIndicator from "./TypingIndicator";
import ConversationCTA from "./ConversationCTA";

interface ConversationRendererProps {
  messages: ConversationMessage[];
  visibleLookup: Set<string>;
  activeTypingId: string | null;
}

export default function ConversationRenderer({
  messages,
  visibleLookup,
  activeTypingId,
}: ConversationRendererProps) {
  return (
    <div className="w-full flex flex-col">
      {messages.map((msg) => {
        // Render typing indicator if active
        if (msg.type === "typing") {
          if (activeTypingId === msg.id) {
            return <TypingIndicator key={msg.id} />;
          }
          return null;
        }

        // Only render visible messages
        if (!visibleLookup.has(msg.id)) {
          return null;
        }

        // Render CTA message
        if (msg.type === "cta") {
          return <ConversationCTA key={msg.id} message={msg} />;
        }

        // Default text message bubble
        return <ConversationBubble key={msg.id} message={msg} />;
      })}
    </div>
  );
}
