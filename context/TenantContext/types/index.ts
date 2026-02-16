type Tenant = {
  id: string;
  name: string;
  ownerUid: string;
  status: "active" | "inactive";

  branding?: {
    logoUrl?: string | null;
    primaryColor?: string;
  };

  settings?: {
    cooldownMs: number;
    spinLimits: {
      free: number;
      pro: number;
    };
  };

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

type TenantContextProps = {
  tenant: Tenant | null;
  products: TenantProduct[];
  preview: TenantProduct[];
  loading: boolean;
  error: string | null;
  setTenant: (t: Tenant | null) => void;
  refresh: () => Promise<void>;
};

export type { Tenant, TenantContextProps, TenantProduct };
