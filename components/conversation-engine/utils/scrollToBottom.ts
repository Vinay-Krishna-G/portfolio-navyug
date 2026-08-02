export const scrollToBottom = (container: HTMLElement | null): void => {
  if (!container) return;
  container.scrollTo({
    top: container.scrollHeight,
    behavior: "smooth",
  });
};
