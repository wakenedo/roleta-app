import { Tenant } from "@/context/TenantContext/types";

type UserSubscriptionCardProps = {
  plan:
    | {
        id: string;
        name: string;
        price: string;
        highlight?: undefined;
      }
    | {
        id: string;
        name: string;
        price: string;
        highlight: boolean;
      };
  config: {
    global: number;
    tenantMultiplier: number;
    monthlyGlobalTenantsQuota: number;
    weeklyGlobalTenantsQuota: number;
  };
  userPlan: string | undefined;
};

type UserPlansProps = {
  plan:
    | {
        id: string;
        name: string;
        price: string;
        highlight?: undefined;
      }
    | {
        id: string;
        name: string;
        price: string;
        highlight: boolean;
      };
};

type UserPlansConfigProps = {
  config: {
    global: number;
    tenantMultiplier: number;
    monthlyGlobalTenantsQuota: number;
    weeklyGlobalTenantsQuota: number;
  };
};

type UserSubscriptionButtonProps = {
  plan:
    | {
        id: string;
        name: string;
        price: string;
        highlight?: undefined;
      }
    | {
        id: string;
        name: string;
        price: string;
        highlight: boolean;
      };
  isUserPlan: boolean;
  handleSubscribe: (planId: string) => void;
};

type TenantSubscriptionCardProps = {
  plan:
    | {
        id: string;
        name: string;
        price: string;
        highlight?: undefined;
      }
    | {
        id: string;
        name: string;
        price: string;
        highlight: boolean;
      };
  config:
    | {
        tenantScopedQuota: number;
        productLimit: number;
        monthlySpinsLimit: number;
      }
    | {
        tenantScopedQuota: number;
        productLimit: number;
        monthlySpinsLimit: number;
      }
    | {
        tenantScopedQuota: number;
        productLimit: number;
        monthlySpinsLimit: number;
      };
  tenantPlan: string | undefined;
};

type TenantPlansConfigProps = {
  config:
    | {
        tenantScopedQuota: number;
        productLimit: number;
        monthlySpinsLimit: number;
      }
    | {
        tenantScopedQuota: number;
        productLimit: number;
        monthlySpinsLimit: number;
      }
    | {
        tenantScopedQuota: number;
        productLimit: number;
        monthlySpinsLimit: number;
      };
};

type TenantPlansProps = {
  plan:
    | {
        id: string;
        name: string;
        price: string;
        highlight?: undefined;
      }
    | {
        id: string;
        name: string;
        price: string;
        highlight: boolean;
      };
};

type TenantSubscriptionButtonProps = {
  plan:
    | {
        id: string;
        name: string;
        price: string;
        highlight?: undefined;
      }
    | {
        id: string;
        name: string;
        price: string;
        highlight: boolean;
      };
  handleSubscribe: (planId: string) => void;
  isTenantPlan: boolean;
};

type PopularTenantsProps = {
  featured: Tenant | null;
  tenants: Tenant[];
  loading: boolean;
  error: string | null;
  search: string;
  setSearch: (value: string) => void;
};

type TenantWithSeason = Tenant & {
  ranking?: {
    score: number;
  };
  stats?: {
    totalSpins: number;
    totalUsers: number;
    totalRewardsShown: number;
  };
};

export type {
  UserSubscriptionCardProps,
  UserPlansProps,
  UserPlansConfigProps,
  UserSubscriptionButtonProps,
  TenantSubscriptionCardProps,
  TenantPlansProps,
  TenantPlansConfigProps,
  TenantSubscriptionButtonProps,
  PopularTenantsProps,
  TenantWithSeason,
};
