import {
  Tenant,
  TenantBranding,
  TenantSettings,
} from "@/context/TenantContext/types";
import {
  SpinQuota,
  SubscriptionExtras,
  TenantSpinQuota,
  UserState,
} from "@/context/UserContext/types";
import { ParamValue } from "next/dist/server/request/params";
import { StaticImageData } from "next/image";

type Tier = "common" | "rare" | "jackpot";

interface SlotsConfig {
  tenantId?: string | undefined;
  tenantName?: string;
  tenantSettings?: TenantSettings;
  tenantBranding?: TenantBranding;
  refreshQuota?: () => Promise<void>;
  refresh: ({ tenantId }: { tenantId: string | null }) => Promise<void>;
  quota: SpinQuota | null;
  tenantQuota?: SpinQuota | null;
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
  userWeeklyLimit?:
    | {
        limit: number;
        remaining: number;
        used: number;
      }
    | undefined;
  userMonthlyLimit?:
    | {
        limit: number;
        remaining: number;
        used: number;
      }
    | undefined;
  subscriptionExtras?: SubscriptionExtras | undefined;
  previewMode?: boolean; // Optional prop to indicate if it's in preview mode
}

type ProductMetadata = {
  store?: string;
  category?: string;
  commission?: number;
  commissionRate?: string;
  campaign?: string;
  affiliateProvider?: string;
  stock?: null;
};

interface Product {
  id: string;
  name: string;
  image: string | StaticImageData;
  url: string;
  offerUrl: string;
  price: string;
  discount: string;
  discountedPrice: string;
  metadata?: ProductMetadata | undefined;
  tier: Tier;
  store: string;
  campaign: CampaignProps;
  category?: string;
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
  tenantId?: string;
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
  tenantId?: string;
  spinning: boolean;
  onSpin: () => Promise<void>;
  quota: SpinQuota | null;
  tenantQuota?: TenantSpinQuota | null;
  tenantBranding?: TenantBranding;
  tenantSettings?: TenantSettings;
  currentSpinId: string | null;
  selectedProducts: Product[];
  userWeeklyLimit?:
    | {
        limit: number;
        remaining: number;
        used: number;
      }
    | undefined;
  userMonthlyLimit?:
    | {
        limit: number;
        remaining: number;
        used: number;
      }
    | undefined;
  subscriptionExtras?: SubscriptionExtras | undefined;
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
  barColor: "bg-green-400" | "bg-yellow-400" | "bg-red-400";
  tenantBarColor?: string;
  onSpin: () => void;
  spinning: boolean;
  dailyLimit: number;
  disabled: boolean | undefined | null;
  isEmpty: boolean;
  progress: number;
  resetsAt: string | undefined;
  remaining: number;
  tenantDailyLimit?: number;
  tenantDisabled?: boolean | undefined | null;
  tenantIsEmpty?: boolean;
  tenantProgress?: number;
  tenantResetsAt?: string | undefined;
  tenantRemaining?: number;
  userWeeklyLimit?:
    | {
        limit: number;
        remaining: number;
        used: number;
      }
    | undefined;
  userMonthlyLimit?:
    | {
        limit: number;
        remaining: number;
        used: number;
      }
    | undefined;
  tenantBranding?: TenantBranding;
  tenantSettings?: TenantSettings;
  tenantUserExtraSpins?: number;
  userPromoGiros?: number;
  tenantScopedQuota?: number;
  subscriptionExtras?: SubscriptionExtras | undefined;
  subscriptionExtrasIsEmpty?: boolean | undefined;
}

type AvailableRoundsProps = {
  isEmpty: boolean;
  remaining: number;
  dailyLimit: number;
  resetsAt: string | undefined;
  subscriptionExtras?: SubscriptionExtras | undefined;
};

type DynamicProgressBarProps = {
  barColor: "bg-green-400" | "bg-yellow-400" | "bg-red-400" | string;
  progress: number;

  subscriptionExtras?: SubscriptionExtras | undefined;
};

type SpinButtonProps = {
  onSpin: () => void;
  disabled: boolean | null | undefined;
  spinning: boolean;
  primaryColorClassName?: string;
};

type CardGradientLifecycleProps = {
  gradientRef: React.RefObject<HTMLDivElement | null>;
  product: Product;
};
type BadgeGradientLifecycleProps = {
  badgeGradientRef: React.RefObject<HTMLDivElement | null>;
  product: Product;
};

type TenantSlotsContentProps = {
  tenant: Tenant | null;
  tenantId: ParamValue;
  sessionTenantId: string | null;
  authorizedFetch: {
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    (
      input: string | URL | globalThis.Request,
      init?: RequestInit,
    ): Promise<Response>;
  };
  loading: boolean;
  optimisticSpin: (tenantId?: string | null) => void;
  userData: UserState | null;
  refreshGlobalQuota: ({
    tenantId,
  }: {
    tenantId: string | null;
  }) => Promise<void>;
  quota: SpinQuota | null;
  tenantQuota: TenantSpinQuota | null;
  globalQuotaLoading: boolean;
  subscriptionExtras: SubscriptionExtras | undefined;
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
  TenantSlotsContentProps,
};
