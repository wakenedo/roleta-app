import {
  CardGradientLifecycleProps,
  Product,
  Tier,
} from "@/components/Slots/types";
import { TIER_GRADIENTS, TIER_STYLES } from "../enum";
import { DynamicGradient } from "real-time-gradient";

const formatPriceBRL = (value: number | string): string => {
  const numeric = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(numeric)) return "R$ 0,00";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numeric);
};

const cardGradientLifecycle = ({
  gradientRef,
  product,
}: CardGradientLifecycleProps) => {
  if (!gradientRef.current) return;

  const tier: Tier = product.tier as Tier;
  const config = TIER_GRADIENTS[tier];

  const gradient = new DynamicGradient(gradientRef.current, {
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

const tierStyle = (product: Product) =>
  TIER_STYLES[product.tier as keyof typeof TIER_STYLES] ?? TIER_STYLES.common;

export { formatPriceBRL, cardGradientLifecycle, tierStyle };
