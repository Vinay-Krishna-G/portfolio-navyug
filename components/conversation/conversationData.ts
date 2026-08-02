import { ConversationBlockData } from "./types";

export const CONVERSATION_BLOCKS: ConversationBlockData[] = [
  {
    id: "specialization",
    messages: [
      {
        id: "m1",
        sender: "client",
        type: "text",
        bubbleSize: "medium",
        text: "What exactly does NavYug specialize in?",
      },
      { id: "m2", type: "typing", thinking: "short" },
      {
        id: "m3",
        sender: "navyug",
        type: "text",
        bubbleSize: "large",
        status: "✓ Responded",
        text: "We're a premium digital product studio focused on high-performance Web Platforms, scalable SaaS Development, AI Automation, and strategic Brand Identity. Everything is custom-engineered for measurable business impact.",
      },
    ],
  },
  {
    id: "timeline",
    messages: [
      {
        id: "m4",
        sender: "client",
        type: "text",
        bubbleSize: "medium",
        text: "How long does a typical project take?",
      },
      { id: "m5", type: "typing", thinking: "long" },
      {
        id: "m6",
        sender: "navyug",
        type: "text",
        bubbleSize: "large",
        status: "✓ Responded",
        text: "Our timelines are transparent. Marketing & brand sites take 3–5 weeks. Complex SaaS applications or AI integrations take 8–12 weeks. We deploy iteratively so you see usable progress from week two.",
      },
    ],
  },
  {
    id: "code-quality",
    messages: [
      {
        id: "m7",
        sender: "client",
        type: "text",
        bubbleSize: "medium",
        text: "Do you build with low-code tools or custom code?",
      },
      { id: "m8", type: "typing", thinking: "short" },
      {
        id: "m9",
        sender: "navyug",
        type: "text",
        bubbleSize: "large",
        status: "✓ Responded",
        text: "Custom code first. We leverage modern frameworks like Next.js, React, and Node.js to accelerate development, but everything we ship is 100% bespoke code with zero vendor lock-in as you scale.",
      },
    ],
  },
  {
    id: "pricing",
    messages: [
      {
        id: "m10",
        sender: "client",
        type: "text",
        bubbleSize: "medium",
        text: "What is your pricing structure?",
      },
      { id: "m11", type: "typing", thinking: "medium" },
      {
        id: "m12",
        sender: "navyug",
        type: "text",
        bubbleSize: "medium",
        status: "✓ Responded",
        text: "We price based on the value delivered, not hourly estimates. Engagements start at $10k for marketing platforms with transparent, fixed proposals after discovery.",
      },
    ],
  },
];
