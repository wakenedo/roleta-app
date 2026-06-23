import { Tenant, TenantRegisterStep } from "@/context/TenantContext/types";

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

export type {
  RawProductsProps,
  StepHeaderProps,
  UseTenantsReturn,
  StepHeaderInterfaceProps,
  SeasonTenant,
  UseProductsImportsProps,
};
