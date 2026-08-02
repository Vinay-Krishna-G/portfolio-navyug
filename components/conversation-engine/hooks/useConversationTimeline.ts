"use client";

import { useState, useEffect, useRef } from "react";
import { ConversationMessage, EngineStatus } from "../types";
import { TIMELINE } from "../timeline";
import { wait } from "../utils/wait";

interface UseConversationTimelineReturn {
  visibleIds: string[];
  visibleLookup: Set<string>;
  activeTypingId: string | null;
  status: EngineStatus;
}

export function useConversationTimeline(
  messages: ConversationMessage[],
  isVisible: boolean
): UseConversationTimelineReturn {
  const [visibleIds, setVisibleIds] = useState<string[]>([]);
  const [visibleLookup, setVisibleLookup] = useState<Set<string>>(new Set());
  const [activeTypingId, setActiveTypingId] = useState<string | null>(null);
  const [status, setStatus] = useState<EngineStatus>("idle");

  const hasStartedRef = useRef(false);
  const messagesRef = useRef(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    if (!isVisible || hasStartedRef.current || messagesRef.current.length === 0) {
      return;
    }

    hasStartedRef.current = true;
    let isCancelled = false;

    const runTimeline = async () => {
      setStatus("waiting");
      await wait(TIMELINE.initialPause);

      for (const msg of messagesRef.current) {
        if (isCancelled) break;

        if (msg.type === "typing") {
          setActiveTypingId(msg.id);
          setStatus("typing");
          const thinkingDuration = TIMELINE.thinking[msg.thinking || "medium"];
          await wait(thinkingDuration);
          setActiveTypingId(null);
          await wait(TIMELINE.pauseBeforeTyping);
        } else {
          setStatus("rendering");
          setVisibleIds((prev) => [...prev, msg.id]);
          setVisibleLookup((prev) => new Set([...Array.from(prev), msg.id]));

          const delay = msg.delayAfter || TIMELINE.pauseAfterAnswer;
          await wait(delay);
        }
      }

      if (!isCancelled) {
        setStatus("finished");
      }
    };

    runTimeline();

    return () => {
      isCancelled = true;
    };
  }, [isVisible]);

  return { visibleIds, visibleLookup, activeTypingId, status };
}
