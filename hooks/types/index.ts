import {
  RegisterTenant,
  Tenant,
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

type ReceivedCsvPreviewProps = {
  preview: unknown[];
  errors: string[];
  total: number;
  valid: number;
};

type JsonPreviewProps = {
  preview: unknown[];
  products: unknown[];
  errors: string[];
  total: number;
  valid: number;
} | null;

type ReceivedJsonPreviewProps = {
  preview: unknown[];
  products: TenantProduct[];
  errors: string[];
  total: number;
  valid: number;
};

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

interface VerificationUrl {
  valid: boolean;
  originalUrl: string | null;
  finalUrl: string | null;
  redirected: boolean;
  statusCode: number | null;
  headers?: Record<string, string>;
  error?: string | null;
}

interface ProviderVerification {
  valid: boolean;
  type: "provider";
  url: string;
  expected: string | null;
  detected: string | null;
  matches: boolean | null;
}

interface RedirectVerification {
  valid: boolean;
  type: "redirect";
  redirected: boolean;
  from: string;
  to: string;
}

interface ProductExistsVerification {
  valid: boolean;
  type: "product";
  exists: boolean;
  reason: string | null;
  statusCode: number | null;
  finalUrl: string | null;
}

interface ProductVerification {
  url: VerificationUrl;
  provider: ProviderVerification;
  redirect: RedirectVerification;
  productExists: ProductExistsVerification;
}

interface VerificationResult {
  product: TenantProduct;
  status: "valid" | "invalid" | "warning";
  valid: boolean;
  errors: string[];
  warnings: string[];
  verification: ProductVerification;
}

interface VerifyCatalogResponse {
  total: number;
  validCount: number;
  invalidCount: number;
  warnings: string[];
  results: VerificationResult[];
}
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
  ReceivedJsonPreviewProps,
  ReceivedCsvPreviewProps,
  VerifyCatalogResponse,
};
