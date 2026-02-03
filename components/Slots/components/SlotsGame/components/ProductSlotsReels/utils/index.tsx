import { DynamicGradient } from "real-time-gradient";

const productSlotsReelsGradient = (
  gradientRef: React.RefObject<HTMLDivElement | null>,
) => {
  if (!gradientRef.current) return;

  const gradient = new DynamicGradient(gradientRef.current, {
    type: "linear",
    direction: "135deg",
    colors: ["#7c3aed", "#22d3ee", "#facc15"],
    schedule: [
      { time: "6:00", colors: ["#7c3aed", "#22d3ee", "#facc15"] },
      { time: "18:00", colors: ["#ed3a5b", "#22d3ee", "#15fa87"] },
      { time: "22:00", colors: ["#ed8b3a", "#be22ee", "#1515fa"] },
    ],
    transitionDuration: 1200,
  });

  return () => {
    gradient.destroy();
  };
};

export { productSlotsReelsGradient };
