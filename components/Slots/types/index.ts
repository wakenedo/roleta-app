import { TenantBranding, TenantSettings } from "@/context/TenantContext/types";
import { SpinQuota } from "@/context/UserContext/types";

type Tier = "common" | "rare" | "jackpot";

interface SlotsConfig {
  tenantId?: string | undefined;
  tenantName?: string;
  tenantSettings?: TenantSettings;
  tenantBranding?: TenantBranding;
  refreshQuota?: () => Promise<void>;
  refresh: ({ tenantId }: { tenantId: string | null }) => Promise<void>;
  quota: SpinQuota | null;
  globalQuotaLoading: boolean;
  optimisticSpin: (tenantId?: string | null) => void;
  loading: boolean;
  sessionTenantId: string | null;
  authorizedFetch: {
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    (
      input: string | URL | globalThis.Request,
      init?: RequestInit,
    ): Promise<Response>;
  };
}

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
  currentSpinId: string | null;
  selectedProducts: Product[];
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
  quota: SpinQuota | null;
  tenantBranding?: TenantBranding;
  tenantSettings?: TenantSettings;
  currentSpinId: string | null;
  selectedProducts: Product[];
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
  disabled: boolean | undefined | null;
  spinning: boolean;
  remaining: number;
  isEmpty: boolean;
  resetsAt: string | undefined;
  tenantBranding?: TenantBranding;
  tenantSettings?: TenantSettings;
}

type AvailableRoundsProps = {
  isEmpty: boolean;
  remaining: number;
  dailyLimit: number;
  resetsAt: string | undefined;
};

type DynamicProgressBarProps = {
  barColor: "bg-green-400" | "bg-yellow-400" | "bg-red-400";
  progress: number;
};

type SpinButtonProps = {
  onSpin: () => void;
  disabled: boolean | null | undefined;
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
  SlotsConfig,
};
