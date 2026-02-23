import {
  Tenant,
  TenantProduct,
  TenantQuota,
} from "@/context/TenantContext/types";

interface TenantAreaInterfaceProps {
  loading: boolean;
  tenant: Tenant | null;
  error: string | null;
  logout: () => void;
  products: TenantProduct[];
  preview: TenantProduct[];
  tenantQuota: TenantQuota | null;
}

export type { TenantAreaInterfaceProps };
