type Tier = "common" | "rare" | "jackpot";
interface Product {
  id: string;
  name: string;
  image: string;
  url: string;
  price: string;
  discount: string;
  discountedPrice: string;
  tier: Tier;
  store: string;
  campaign: CampaignProps;
}

interface CampaignProps {
  campaignLink: string;
  couponCode: string | null;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

interface ProductReelsProps {
  selectedProducts: Product[];
  spinning: boolean;
}

interface ProductSlotsProps {
  selectedProducts: Product[];
  spinning: boolean;
}

interface SlotsGameProps {
  spinning: boolean;
  onSpin: () => Promise<void>;
}

interface TierBadgeProps {
  product: Product;
}

type TierConfig = {
  colors: string[];
  effectColors?: string[];
  hue?: string;
  duration?: number;
};

interface SpinInterfaceProps {
  dailyLimit: number;
  barColor: "bg-green-400" | "bg-yellow-400" | "bg-red-400";
  progress: number;
  onSpin: () => void;
  disabled: boolean | undefined;
  spinning: boolean;
  remaining: number;
  isEmpty: boolean;
  resetsAt: string;
}

type AvailableRoundsProps = {
  isEmpty: boolean;
  remaining: number;
  dailyLimit: number;
  resetsAt: string;
};

type DynamicProgressBarProps = {
  barColor: "bg-green-400" | "bg-yellow-400" | "bg-red-400";
  progress: number;
};

type SpinButtonProps = {
  onSpin: () => void;
  disabled: boolean | undefined;
  spinning: boolean;
};

type CardGradientLifecycleProps = {
  gradientRef: React.RefObject<HTMLDivElement | null>;
  product: Product;
};
type BadgeGradientLifecycleProps = {
  badgeGradientRef: React.RefObject<HTMLDivElement | null>;
  product: Product;
};

export type {
  SpinInterfaceProps,
  AvailableRoundsProps,
  SpinButtonProps,
  DynamicProgressBarProps,
  SlotsGameProps,
  Product,
  ProductCardProps,
  Tier,
  TierConfig,
  CardGradientLifecycleProps,
  ProductReelsProps,
  ProductSlotsProps,
  TierBadgeProps,
  BadgeGradientLifecycleProps,
};
