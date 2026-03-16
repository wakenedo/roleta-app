import { RegisterTenant } from "@/context/TenantContext/types";

interface TenantAuthContextProps {
  tenantToken: string | null;
  sessionTenantId: string | null;
  tenantLogin: (email: string, password: string) => Promise<void>;
  tenantRegister: (
    name: string,
    email: string,
    password: string,
    planId: string,
  ) => Promise<RegisterTenant>;

  tenantLogout: () => void;
  tenantFetch: (url: string, options?: RequestInit) => Promise<Response>;
}

export type { TenantAuthContextProps };
