export type MessageSender = "client" | "navyug";
export type MessageType = "text" | "typing" | "cta";
export type ThinkingTime = "short" | "medium" | "long";
export type BubbleSize = "small" | "medium" | "large";

export interface MessageItem {
  id: string;
  sender?: MessageSender;
  type: MessageType;
  text?: string;
  thinking?: ThinkingTime;
  bubbleSize?: BubbleSize;
  status?: "responded" | "delivered" | string;
}

export interface ConversationBlockData {
  id: string;
  messages: MessageItem[];
}

export interface ConversationConfig {
  companyName: string;
  subtitle: string;
  availability: string;
  responseTime: string;
  accentLime?: string;
}

export const THINKING_MS: Record<ThinkingTime, number> = {
  short: 700,
  medium: 1000,
  long: 1400,
};

export const BUBBLE_SIZE_CLASS: Record<BubbleSize, string> = {
  small: "max-w-[85%] sm:max-w-[56%]",
  medium: "max-w-[90%] sm:max-w-[66%]",
  large: "max-w-[95%] sm:max-w-[76%]",
};
