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

export type {
  UserSubscriptionCardProps,
  UserPlansProps,
  UserPlansConfigProps,
  UserSubscriptionButtonProps,
  TenantSubscriptionCardProps,
  TenantPlansProps,
  TenantPlansConfigProps,
  TenantSubscriptionButtonProps,
};
