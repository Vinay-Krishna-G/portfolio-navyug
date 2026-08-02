import React from "react";

export type MessageSender = "client" | "navyug";
export type MessageType = "text" | "typing" | "cta" | "image" | "link";
export type ThinkingLevel = "short" | "medium" | "long";
export type BubbleSize = "small" | "medium" | "large";
export type EngineStatus = "idle" | "waiting" | "typing" | "rendering" | "finished";

export interface ConversationMessage {
  id: string;
  sender?: MessageSender;
  type: MessageType;
  content?: React.ReactNode | string;
  thinking?: ThinkingLevel;
  delayAfter?: number;
  bubbleSize?: BubbleSize;
  status?: string;
}

export interface ConversationConfig {
  companyName: string;
  subtitle: string;
  availability: string;
  responseTime: string;
  accentLime?: string;
}
