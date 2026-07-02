import {
  RegisterTenant,
  Tenant,
  TenantBranding,
  TenantProduct,
  TenantRegisterStep,
} from "@/context/TenantContext/types";
import { Dispatch, SetStateAction } from "react";

type RawProductsProps = [];

type StepHeaderProps = {
  stepNumber: number;
  stepText: string;
};

type StepHeaderInterfaceProps = {
  stepHeader: StepHeaderProps;
  planId: string;
  step: TenantRegisterStep;
};

interface UseTenantsReturn {
  tenants: Tenant[];
  filtered: Tenant[];
  loading: boolean;
  error: string | null;
  search: string;
  setSearch: (value: string) => void;
  refetch: () => Promise<void>;
}

type SeasonTenant = {
  id: string;
  tenantId: string;
  ranking?: {
    score: number;
  };
  stats?: {
    totalSpins: number;
    totalUsers: number;
    totalRewardsShown: number;
    totalClicks: number;
  };
};

type UseProductsImportsProps = {
  selectedPlan: {
    id: string;
    name: string;
    price: string;
  };
  importProductsCSV?: (file: File, dryRun?: boolean) => Promise<unknown>;
  importProductsJSON?: (file: File, dryRun?: boolean) => Promise<unknown>;
};

type CsvPreviewProps = {
  preview: unknown[];
  errors: string[];
  total: number;
  valid: number;
} | null;

type JsonPreviewProps = {
  preview: unknown[];
  products: unknown[];
  errors: string[];
  total: number;
  valid: number;
} | null;

type RegisterTenantProps = {
  name: string;
  isEmailVerified: boolean;
  planId?: string | null;
  setTenantId: Dispatch<SetStateAction<string>>;
  tenantRegister: (name: string, planId: string) => Promise<RegisterTenant>;
  setStep: Dispatch<SetStateAction<TenantRegisterStep>>;
};

type CreateAndSendVerificationProps = {
  setVerificationSent: Dispatch<SetStateAction<boolean>>;
  email: string;
  password: string;
};

type CheckEmailVerificationProps = {
  setIsEmailVerified: Dispatch<SetStateAction<boolean>>;
  setCheckingVerification: Dispatch<SetStateAction<boolean>>;
};

type CompletePaymentProps = {
  tenantFetch: (url: string, options?: RequestInit) => Promise<Response>;
  tenantId: string;
  setStep: Dispatch<SetStateAction<TenantRegisterStep>>;
};

type SaveBrandingProps = {
  branding: TenantBranding;
  file?: File;
  tenantFetch: (url: string, options?: RequestInit) => Promise<Response>;
  tenantId: string;
  setLogoUrl: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<TenantRegisterStep>>;
};

type SaveProductsProps = {
  products: TenantProduct[];
  tenantFetch: (url: string, options?: RequestInit) => Promise<Response>;
  tenantId: string;
  setStep: Dispatch<SetStateAction<TenantRegisterStep>>;
};

type ImportProductsCSV = {
  file: File;
  dryRun?: boolean;
  tenantId: string;
  tenantFetch: (url: string, options?: RequestInit) => Promise<Response>;
};

type ImportProductsJson = {
  file: File;
  dryRun?: boolean;
  tenantId: string;
  tenantFetch: (url: string, options?: RequestInit) => Promise<Response>;
};

type ResolveCompleteProps = {
  tenantId: string;
  tenantFetch: (url: string, options?: RequestInit) => Promise<Response>;
};

type ImportProductsProps = {
  products: TenantProduct[];
  tenantId: string;
  tenantFetch: (url: string, options?: RequestInit) => Promise<Response>;
};

export type {
  RawProductsProps,
  StepHeaderProps,
  UseTenantsReturn,
  StepHeaderInterfaceProps,
  SeasonTenant,
  UseProductsImportsProps,
  CsvPreviewProps,
  JsonPreviewProps,
  RegisterTenantProps,
  CreateAndSendVerificationProps,
  CheckEmailVerificationProps,
  CompletePaymentProps,
  SaveBrandingProps,
  SaveProductsProps,
  ImportProductsCSV,
  ImportProductsJson,
  ResolveCompleteProps,
  ImportProductsProps,
};
