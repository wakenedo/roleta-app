import {
  RegisterTenant,
  TenantRegisterStep,
} from "@/context/TenantContext/types";

interface TenantAuthContextProps {
  sessionTenantId: string | null;
  tenantRegister: (name: string, planId: string) => Promise<RegisterTenant>;
  tenantLogout: () => void;
  tenantFetch: (url: string, options?: RequestInit) => Promise<Response>;
  tenantLogin: (email: string, password: string) => Promise<TenantMeResponse>;
  tenantMe: () => Promise<TenantMeResponse | null | undefined>;
}

type TenantMeResponse = {
  tenantId: string;
  onboardingStep: TenantRegisterStep;
  status: string;
};

export type { TenantAuthContextProps, TenantMeResponse };
