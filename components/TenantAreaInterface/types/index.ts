import { Tenant, TenantProduct } from "@/context/TenantContext/types";

interface TenantAreaInterfaceProps {
  loading: boolean;
  tenant: Tenant | null;
  error: string | null;
  logout: () => void;
  products: TenantProduct[];
  preview: TenantProduct[];
}

export type { TenantAreaInterfaceProps };
