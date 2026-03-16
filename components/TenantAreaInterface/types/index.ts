import {
  Tenant,
  TenantProduct,
  TenantQuota,
} from "@/context/TenantContext/types";
import { SpinQuota } from "@/context/UserContext/types";

interface TenantAreaInterfaceProps {
  loading: boolean;
  tenant: Tenant | null;
  error: string | null;
  logout: () => void;
  products: TenantProduct[];
  preview: TenantProduct[];
}

interface TenantCardProps {
  tenant: Tenant;
  loading: boolean;
  logout: () => void;
  error: string | null;
  tenantQuota: TenantQuota | SpinQuota;
}

export type { TenantAreaInterfaceProps, TenantCardProps };
