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
  tenantQuota: TenantQuota | SpinQuota;
}

interface TenantCardProps {
  tenant: Tenant;
  loading: boolean;
  error: string | null;
  tenantQuota: TenantQuota | SpinQuota;
}

export type { TenantAreaInterfaceProps, TenantCardProps };
