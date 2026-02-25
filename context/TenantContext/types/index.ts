import { SpinQuota } from "@/context/UserContext/types";

type TenantBranding = {
  logoUrl?: string | null;
  primaryColor?: string;
};

type TenantSettings = {
  cooldownMs: number;
};

type Tenant = {
  id: string;
  name: string;
  ownerUid: string;
  status: "active" | "inactive";
  branding?: TenantBranding;
  settings?: TenantSettings;
  affiliate?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

type TenantProduct = {
  id: string;
  name: string;
  image: string;
  url: string;
  tier: "common" | "rare" | "jackpot";
  description?: string | null;
  price?: number | null;
  compareAt?: number | null;
  priority?: number;
  stock?: number | null;
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
  refresh: () => Promise<void>;
  refreshQuota: () => Promise<void>;
  tenantQuota: TenantQuota | SpinQuota;
  loadPreview: () => Promise<void>;
  loadProducts: () => Promise<void>;
  invalidateProducts: () => void;
  invalidatePreview: () => void;
};

export type {
  Tenant,
  TenantBranding,
  TenantSettings,
  TenantContextProps,
  TenantProduct,
  TenantQuota,
  QuotaProps,
};
