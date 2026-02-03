import { DynamicGradient } from "real-time-gradient";

const productSlotsReelsGradient = (
  gradientRef: React.RefObject<HTMLDivElement | null>,
) => {
  if (!gradientRef.current) return;

  const gradient = new DynamicGradient(gradientRef.current, {
    type: "linear",
    direction: "135deg",
    colors: ["#7c3aed", "#22d3ee", "#facc15"],
    transitionDuration: 1200,
  });

  return () => {
    gradient.destroy();
  };
};

export { productSlotsReelsGradient };
