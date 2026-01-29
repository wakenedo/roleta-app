import { Tier, TierConfig } from "@/components/Slots/types";

const TIER_GRADIENTS: Record<Tier, TierConfig> = {
  common: {
    colors: ["#0F172A", "#1E293B", "#020617"],
    duration: 1800, // 👈 subtle motion so it never looks dead
  },
  rare: {
    colors: [
      "#3B82F6", // blue-500
      "#60A5FA", // blue-400
      "#93C5FD", // blue-300
      "#BFDBFE", // blue-200
      "#DBEAFE", // blue-100
      "#BFDBFE", // blue-200
      "#93C5FD", // blue-300
    ],
    effectColors: [
      "#3B82F6", // blue-500
      "#93C5FD", // blue-300
      "#BFDBFE", // blue-200
      "#DBEAFE", // blue-100
      "#60A5FA", // blue-400
      "#3B82F6", // blue-500
      "#60A5FA", // blue-400
      "#93C5FD", // blue-300
      "#BFDBFE", // blue-200
      "#DBEAFE", // blue-100
      "#BFDBFE", // blue-200
      "#93C5FD", // blue-300
    ],
    hue: "silver",
    duration: 5400,
  },
  jackpot: {
    colors: [
      "#F59E0B", // amber-500
      "#FBBF24", // amber-400
      "#FCD34D", // amber-300
      "#FDE68A", // amber-200
      "#FEF3C7", // amber-100
      "#FDE68A", // amber-200
      "#FCD34D", // amber-300
    ],
    effectColors: [
      "#F59E0B", // amber-500
      "#FCD34D", // amber-300
      "#FDE68A", // amber-200
      "#FEF3C7", // amber-100
      "#FBBF24", // amber-400
      "#F59E0B", // amber-500
      "#FBBF24", // amber-400
      "#FCD34D", // amber-300
      "#FDE68A", // amber-200
      "#FEF3C7", // amber-100
      "#FDE68A", // amber-200
      "#FCD34D", // amber-300
    ],
    hue: "gold",
    duration: 5400,
  },
};
const BADGE_TIER_GRADIENTS: Record<Tier, TierConfig> = {
  common: {
    colors: ["#0F172A", "#1E293B", "#020617"],
    duration: 1800, // 👈 subtle motion so it never looks dead
  },
  rare: {
    colors: [
      "#3B82F6", // blue-500
      "#60A5FA", // blue-400
      "#93C5FD", // blue-300
      "#BFDBFE", // blue-200
      "#DBEAFE", // blue-100
      "#93C5FD", // blue-300
    ],
    effectColors: [
      "#93C5FD", // blue-300
      "#DBEAFE", // blue-100
      "#BFDBFE", // blue-200
      "#93C5FD", // blue-300
      "#60A5FA", // blue-400
    ],
    hue: "silver",
    duration: 3400,
  },
  jackpot: {
    colors: [
      "#F59E0B", // amber-500
      "#FBBF24", // amber-400
      "#FCD34D", // amber-300
      "#FDE68A", // amber-200
      "#FEF3C7", // amber-100
      "#FCD34D", // amber-300
    ],
    effectColors: [
      "#FCD34D", // amber-300
      "#FEF3C7", // amber-100
      "#FDE68A", // amber-200
      "#FCD34D", // amber-300
      "#FBBF24", // amber-400
    ],
    hue: "gold",
    duration: 3400,
  },
};

const TIER_STYLES = {
  jackpot: {
    name: "text-amber-700",
    border: "border-amber-200",
    fullPrice: "text-slate-600",
    discountedPrice: "text-green-500",
    glow: "text-shadow-amber-50",
  },
  rare: {
    name: "text-blue-700",
    border: "border-blue-300",
    fullPrice: "text-slate-600",
    discountedPrice: "text-green-500",
    glow: "text-shadow-blue-50",
  },
  common: {
    name: "text-slate-400",
    border: "border-gray-400",
    fullPrice: "text-slate-400",
    discountedPrice: "text-green-500",
    glow: "",
  },
} as const;

export { TIER_GRADIENTS, BADGE_TIER_GRADIENTS, TIER_STYLES };
