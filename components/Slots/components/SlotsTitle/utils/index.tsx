import { DynamicGradient } from "real-time-gradient";

const slotsTitleGradientLifecycle = ({
  slotsTitleGradientRef,
}: {
  slotsTitleGradientRef: React.RefObject<HTMLDivElement | null>;
}) => {
  if (!slotsTitleGradientRef.current) return;

  const gradient = new DynamicGradient(slotsTitleGradientRef.current, {
    type: "linear",
    direction: "135deg",
    colors: ["#ff0000", "#00ff00", "#ffffff"],
    schedule: [
      { time: "6:00", colors: ["#6366f1", "#22d3ee", "#facc15"] },
      { time: "18:00", colors: ["#e6ec48", "#22d3ee", "#34d399"] },
      { time: "22:00", colors: ["#1e1b4b", "#0f172a", "#020617"] },
    ],
    textClip: true,
    transitionDuration: 1200,
  });

  return () => {
    gradient.destroy();
  };
};

export { slotsTitleGradientLifecycle };
