import { Tenant } from "@/context/TenantContext/types";

interface TenantAreaInterfaceProps {
  loading: boolean;
  tenant: Tenant | null;
  error: string | null;
  logout: () => void;
}

export type { TenantAreaInterfaceProps };
