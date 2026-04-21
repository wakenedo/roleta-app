import { Tenant, TenantProduct } from "@/context/TenantContext/types";

interface TenantAreaInterfaceProps {
  loading: boolean;
  tenant: Tenant | null;
  setTenant: (t: Tenant | null) => void;
  error: string | null;
  logout: () => void;
  products: TenantProduct[];
  preview: TenantProduct[];
}

interface TenantCardProps {
  tenant: Tenant;
  loading: boolean;
  registeredProductsAmount: number;
  error: string | null;
}

export type { TenantAreaInterfaceProps, TenantCardProps };
