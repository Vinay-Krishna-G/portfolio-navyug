import { ThinkingLevel } from "./types";

export const TIMELINE = {
  initialPause: 400,
  pauseBeforeTyping: 500,
  pauseAfterAnswer: 700,
  thinking: {
    short: 700,
    medium: 1000,
    long: 1400,
  } as Record<ThinkingLevel, number>,
};
