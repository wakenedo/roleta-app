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

type CardGradientLifecycleProps = {
  gradientRef: React.RefObject<HTMLDivElement | null>;
  product: Product;
};
type BadgeGradientLifecycleProps = {
  badgeGradientRef: React.RefObject<HTMLDivElement | null>;
  product: Product;
};

export type {
  SlotsGameProps,
  Product,
  ProductCardProps,
  Tier,
  TierConfig,
  CardGradientLifecycleProps,
  ProductReelsProps,
  TierBadgeProps,
  BadgeGradientLifecycleProps,
};
