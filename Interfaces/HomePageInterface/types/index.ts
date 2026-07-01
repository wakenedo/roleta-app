import { Tenant } from "@/context/TenantContext/types";
import { User } from "firebase/auth";
import { Dispatch, JSX, ReactNode, RefObject, SetStateAction } from "react";

type HomePageInterfaceProps = {
  user: User | null;
  handleUserSubscribe: (planId: string) => void;
  handleSelectedCardClick: () => void;
  filtered: Tenant[];
  resolveTenantQuota(subscription?: string): number;
  featuredTenant: Tenant;
  selectedPopularTenant: Tenant | null;
  setSelectedPopularTenant: Dispatch<SetStateAction<Tenant | null>>;
  coins: JSX.Element[];
  confetti: number[];
  mounted: boolean;
  tenantMaxedPlan: boolean;
  primaryColor: string;
  currentTenantPlan: string | undefined;
  currentUserPlan: string | undefined;
  userMaxedPlan: boolean;
  handleToggle: (side: "left" | "right") => void;
  onToggleChange: "left" | "right";
  sorted: TenantWithSeason[];
  tenantsLoading: boolean;
  tenantsError: string | null;
  setSearch: (value: string) => void;
  containerRef: RefObject<HTMLDivElement | null>;
  popularTenants: Tenant[];
  search: string;
  leaderboardLoading: boolean;
  tenant: Tenant | null;
};

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
  handleUserSubscribe: (planId: string) => void;
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
  filtered: Tenant[];
  selectedPopularTenant: Tenant | null;
  setSelectedPopularTenant: Dispatch<SetStateAction<Tenant | null>>;
  primaryColor: string;
  handleSelectedCardClick: () => void;
  sorted: TenantWithSeason[];
  resolveTenantQuota(subscription?: string): number;
  leaderboardLoading: boolean;
};

type TenantWithSeason = Tenant & {
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

type UserOnlineHomePageProps = {
  tenant?: Tenant | null;
  userMaxedPlan: boolean;
  tenantMaxedPlan: boolean;
  currentUserPlan: string | undefined;
  currentTenantPlan: string | undefined;
  containerRef: RefObject<HTMLDivElement | null>;
  mounted: boolean;
  confetti: number[];
  coins: JSX.Element[];
  tenantsError: string | null;
  tenantsLoading: boolean;
  popularTenants: Tenant[];
  featuredTenant: Tenant;
  search: string;
  setSearch: (value: string) => void;
  handleUserSubscribe: (planId: string) => void;
  selectedPopularTenant: Tenant | null;
  setSelectedPopularTenant: Dispatch<SetStateAction<Tenant | null>>;
  primaryColor: string;
  filtered: Tenant[];
  handleSelectedCardClick: () => void;
  sorted: TenantWithSeason[];
  resolveTenantQuota(subscription?: string): number;
  leaderboardLoading: boolean;
};

type ActiveTenantsProps = {
  tenantsError: string | null;
  tenantsLoading: boolean;
  popularTenants: Tenant[];
  featuredTenant: Tenant;
  search: string;
  setSearch: (value: string) => void;
  selectedPopularTenant: Tenant | null;
  setSelectedPopularTenant: Dispatch<SetStateAction<Tenant | null>>;
  primaryColor: string;
  filtered: Tenant[];
  handleSelectedCardClick: () => void;
  sorted: TenantWithSeason[];
  resolveTenantQuota(subscription?: string): number;
  leaderboardLoading: boolean;
};

type SearchPopularTenantsInterfaceProps = {
  search: string;
  setSearch: (value: string) => void;
  loading: boolean;
  error: string | null;
  selectedPopularTenant: Tenant | null;
  setSelectedPopularTenant: Dispatch<SetStateAction<Tenant | null>>;
  primaryColor: string;
  filtered: Tenant[];
  handleSelectedCardClick: () => void;
  resolveTenantQuota(subscription?: string): number;
};

type PopularTenantSearchInterfaceProps = {
  search: string;
  setSearch: (value: string) => void;
  filtered: Tenant[];
  setSelected: (value: SetStateAction<Tenant | null>) => void;
  error: string | null;
  loading: boolean;
};

type TenantSubscriptionModesProps = {
  currentTenantPlan: string | undefined;
  tenantMaxedPlan: boolean;
};

interface SellingPointCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface UserOfflineHomePageProps {
  onToggleChange: "left" | "right";
  handleToggle: (side: "left" | "right") => void;
  userMaxedPlan: boolean;
  tenantMaxedPlan: boolean;
  currentUserPlan: string | undefined;
  currentTenantPlan: string | undefined;
  handleUserSubscribe: (planId: string) => void;
}

type TenantModesProps = "tenant" | "tenantPro" | "tenantPremium";

type SearchTenantsProps = {
  filtered: Tenant[];
  loading: boolean;
  error: string | null;
  search: string;
  primaryColor: string;
  setSearch: (value: string) => void;
  handleTenantCardClick: () => void;
};

type UserSubscriptionModesProps = {
  currentUserPlan: string | undefined;
  userMaxedPlan: boolean;
  handleUserSubscribe: (planId: string) => void;
};

export type {
  UserSubscriptionCardProps,
  UserPlansProps,
  UserPlansConfigProps,
  UserSubscriptionButtonProps,
  UserSubscriptionModesProps,
  TenantSubscriptionCardProps,
  TenantPlansProps,
  TenantPlansConfigProps,
  TenantSubscriptionButtonProps,
  PopularTenantsProps,
  TenantWithSeason,
  UserOnlineHomePageProps,
  ActiveTenantsProps,
  TenantSubscriptionModesProps,
  PopularTenantSearchInterfaceProps,
  SearchPopularTenantsInterfaceProps,
  HomePageInterfaceProps,
  SellingPointCardProps,
  UserOfflineHomePageProps,
  TenantModesProps,
  SearchTenantsProps,
};
