import { Dispatch, SetStateAction } from "react";

type TenantBranding = {
  logoUrl?: string | null;
  primaryColor?: string;
};

type TenantSettings = {
  cooldownMs: number;
};

type TenantRegisterStep =
  | "register"
  | "payment"
  | "branding"
  | "products"
  | "complete";

type RegisterTenant = {
  name: string;
  email: string;
  password: string;
  planId: string;
  tenantId: string;
  onboardingStep: TenantRegisterStep;
};

type TenantSpinPool = {
  monthlyLimit: number;
  used: number;
};

type Payment = {
  paid: boolean;
};

type PlatformStatsProps = {
  totalClicks: number;
  totalRewardsShown: number;
  totalSpins: number;
  totalUsers: number;
};

type ProductsStatsProps = {
  total: number;
  active: number;
  affiliateProviders: string[];
  limit: number;
  mode: string;
  inactive: number;
  averagePrice: number;
  categories: {
    name: string;
    count: number;
  }[];
  tiers: {
    name: string;
    count: number;
  }[];
};

type topProductProps = {
  affiliateProvider: string | null;
  category: string;
  clicks: number;
  image: string | null;
  name: string;
  tier: string;
  url: string;
};

type affiliateProvidersProps = {
  name: string;
  clicks: number;
};

type topCategoriesProps = {
  name: string;
  clicks: number;
};

type EngagementStatsProps = {
  affiliateProviders: affiliateProvidersProps[];
  averageClicksPerProduct: number;
  clickEvents: number;
  clickedProducts: number;
  lastUpdatedAt: string;
  topCategories: topCategoriesProps[];
  topProducts: topProductProps[];
};

type SeasonRankingProps = {
  score: number;
};

type StatsProps = {
  platform: PlatformStatsProps;
  products: ProductsStatsProps;
  engagement: EngagementStatsProps;
};
type SeasonStatsProps = {
  ranking?: SeasonRankingProps;
  stats: {
    platform: PlatformStatsProps;
    products: ProductsStatsProps;
    engagement: EngagementStatsProps;
  };
  createdAt: {
    _nanoseconds: number;
    _seconds: number;
  };
  updatedAt: {
    _nanoseconds: number;
    _seconds: number;
  };
};

type Tenant = {
  id: string;
  name: string;
  ownerUid: string;
  subscriptionMode: string;
  status: "active" | "inactive" | "pending" | "canceled" | "suspended";
  payment?: Payment;
  branding?: TenantBranding;
  stats?: StatsProps;
  settings?: TenantSettings;
  affiliate?: string | null;
  spinPool?: TenantSpinPool;
  createdAt?: string;
  updatedAt?: string;
};

type TenantProductMetadata = {
  store?: string;
  category?: string;
  commission?: number;
  commissionRate?: string;
  campaign?: string;
  affiliateProvider?: string;
  stock?: null;
};

type TenantProduct = {
  id: string;
  name: string;
  image: string;
  url: string;
  offerUrl: string;
  commission?: number | null;
  commissionRate?: string | null;
  tier: "common" | "rare" | "jackpot";
  description?: string | null;
  category?: string | null;
  affiliate?: string | null;
  store?: string | null;
  price?: number | null;
  priority?: number;
  stock?: number | null;
  metadata?: TenantProductMetadata;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

type TenantQuota = {
  quota: QuotaProps | null;
} | null;

type QuotaProps = {
  used: number;
  remaining: number;
  limit: number;
  resetsAt: string;
};

type TenantContextProps = {
  tenant: Tenant | null;
  products: TenantProduct[];
  preview: TenantProduct[];
  loading: boolean;
  error: string | null;
  setTenant: (t: Tenant | null) => void;
  setProducts: Dispatch<SetStateAction<TenantProduct[]>>;
  refresh: () => Promise<void>;
  loadPreview: () => Promise<void>;
  loadProducts: () => Promise<void>;
  invalidateProducts: () => void;
  invalidatePreview: () => void;
};

type DynamicStatsInterfaceProps = {
  engagementStats: EngagementStatsProps;
  mode?: "global" | "season";
};

export type {
  Tenant,
  TenantBranding,
  TenantRegisterStep,
  TenantSettings,
  TenantContextProps,
  TenantProduct,
  TenantQuota,
  RegisterTenant,
  QuotaProps,
  StatsProps,
  SeasonStatsProps,
  EngagementStatsProps,
  ProductsStatsProps,
  DynamicStatsInterfaceProps,
};
