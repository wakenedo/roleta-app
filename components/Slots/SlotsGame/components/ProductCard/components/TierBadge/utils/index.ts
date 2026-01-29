import { BadgeGradientLifecycleProps, Tier } from "@/components/Slots/types";
import { BADGE_TIER_GRADIENTS } from "../../../enum";
import { DynamicGradient } from "real-time-gradient";

const badgeGradientLifecycle = ({
  badgeGradientRef,
  product,
}: BadgeGradientLifecycleProps) => {
  if (!badgeGradientRef.current) return;

  const tier: Tier = product.tier as Tier;
  const config = BADGE_TIER_GRADIENTS[tier];

  const gradient = new DynamicGradient(badgeGradientRef.current, {
    type: "linear",
    direction: "135deg",
    colors: [...config.colors],
    transitionDuration: config.duration,
  });

  // Rare / jackpot effect
  if (config.effectColors) {
    gradient.triggerEffect({
      applyColors: [...config.effectColors],
      duration: config.duration,
      hue: config.hue,
      loop: true,
    });
  }
  return () => {
    gradient.destroy();
  };
};

export { badgeGradientLifecycle };
