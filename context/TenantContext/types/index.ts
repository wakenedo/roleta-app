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

type EventProps = {
  tenantId: string;
  ip: string | null;
  userAgent: string | null;
  user: {
    userId: string;
  };
  productsShown: [];
  productClicked: [];
  spinId: string;
  positionClicked: string;
  redirectUrl: string;
  createdAt: string;
};

type EngagementStatsProps = {
  clickEvents: EventProps[];
  clickedProducts: number;
  averageClicksPerProduct: number;
  topProducts: [];
};

type StatsProps = {
  platform: PlatformStatsProps;
  products: ProductsStatsProps;
  engagement: EngagementStatsProps;
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
};
