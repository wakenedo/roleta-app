import {
  Payment,
  ProductsStatsProps,
  SeasonStatsProps,
  StatsProps,
  Tenant,
  TenantBranding,
  TenantProduct,
  TenantSpinPool,
} from "@/context/TenantContext/types";
import { Dispatch, SetStateAction } from "react";

interface TenantAreaInterfaceProps {
  loading: boolean;
  seasonStats: SeasonStatsProps | undefined;
  seasonStatsLoading: boolean;
  tenant: Tenant | null;
  error: string | null;
  products: TenantProduct[];
  preview: TenantProduct[];
  sessionTenantId: string | null;
  globalQuotaLoading: boolean;
  globalRefresh: ({ tenantId }: { tenantId: string | null }) => Promise<void>;
  authorizedFetch: {
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    (
      input: string | URL | globalThis.Request,
      init?: RequestInit,
    ): Promise<Response>;
  };
  activeTab: "preview" | "general" | "catalog";
  setActiveTab: Dispatch<SetStateAction<"preview" | "general" | "catalog">>;
  activeModal: "advanced" | "bug" | "suggestion" | null;
  setActiveModal: Dispatch<
    SetStateAction<"advanced" | "bug" | "suggestion" | null>
  >;
  closeModal: () => void;
  handleLogout: () => void;
  registeredProductsAmount: number;
  tenantProductStats: ProductsStatsProps | undefined;
  tenantEmail: string | undefined;
  tenantName: string | undefined;
  tenantSubscriptionMode: string | undefined;
  createdAt: string;
  tenantGlobalStats: StatsProps | undefined;
  formattedCreatedAt: string;
  tenantStatus: TenantStatus;
  tenantIdentifier: string | undefined;
  tenantSpinPool: TenantSpinPool | undefined;
  tenantPayment: Payment | undefined;
  tenantBranding: TenantBranding | undefined;
  showStats: boolean;
  setShowStats: Dispatch<SetStateAction<boolean>>;
}

interface TenantPreviewContentProps {
  tenantBranding: TenantBranding | undefined;
  tenantName: string | undefined;
  primaryColor: string | undefined;
  loading: boolean;
  sessionTenantId: string | null;
  globalQuotaLoading: boolean;
  authorizedFetch: {
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    (
      input: string | URL | globalThis.Request,
      init?: RequestInit,
    ): Promise<Response>;
  };
  refresh: ({ tenantId }: { tenantId: string | null }) => Promise<void>;
  logoUrl?: string | undefined | null;
}

interface TenantPreviewProps {
  tenantName: string | undefined;
  tenantBranding: TenantBranding | undefined;
  preview: TenantProduct[];
  loading: boolean;
  error: string | null;
  sessionTenantId: string | null;
  globalQuotaLoading: boolean;
  globalRefresh: ({ tenantId }: { tenantId: string | null }) => Promise<void>;
  authorizedFetch: {
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    (
      input: string | URL | globalThis.Request,
      init?: RequestInit,
    ): Promise<Response>;
  };
}

interface TenantPreviewMenuProps {
  primaryColor: string | undefined;
  logoUrl: string | undefined | null;
}

interface TenantOptionsProps {
  tenantEmail: string | undefined;
  tenantName: string | undefined;
  tenantSubscriptionMode: string | undefined;
  tenantGlobalStats: StatsProps | undefined;
  registeredProductsAmount: number;
  createdAt: string;
  seasonStats: SeasonStatsProps | undefined;
  seasonStatsLoading: boolean;
  tenantStatus: TenantStatus;
  formattedCreatedAt: string;
  tenantIdentifier: string | undefined;
  tenantSpinPool: TenantSpinPool | undefined;
  tenantPayment: Payment | undefined;
}

interface TenantLimitsSectionProps {
  registeredProductsAmount: number;
  subscriptionBasedLimit: 100 | 250 | 500 | 0;
  tenantSpinPool: TenantSpinPool | undefined;
}

interface TenantGeneralInterfaceProps {
  tenantSubscriptionMode: string | undefined;
  createdAt: string;
  tenantEmail: string | null | undefined;
  tenantName: string | null | undefined;
  registeredProductsAmount: number;
  tenantStatus: TenantStatus;
  formattedCreatedAt: string;
  tenantIdentifier: string | undefined;
  tenantSpinPool: TenantSpinPool | undefined;
  tenantPayment: Payment | undefined;
}

interface TenantPartnerSectionProps {
  tenantEmail: string | null | undefined;
  tenantName: string | null | undefined;
  tenantIdentifier: string | undefined;
  formattedCreatedAt: string;
  tenantStatus: TenantStatus;
}

interface TenantPlanSectionProps {
  //will extend on payment integration
  tenantSubscriptionMode: string | undefined;
  tenantPayment: Payment | undefined;
}

interface TenantCardProps {
  tenantEmail: string | undefined;
  tenantName: string | undefined;
  tenantSubscriptionMode: string | undefined;
  loading: boolean;
  registeredProductsAmount: number;
  error: string | null;
  createdAt: string;
  tenantGlobalStats: StatsProps | undefined;
  seasonStats: SeasonStatsProps | undefined;
  seasonStatsLoading: boolean;
  tenantStatus: TenantStatus;
  formattedCreatedAt: string;
  tenantIdentifier: string | undefined;
  tenantSpinPool: TenantSpinPool | undefined;
  tenantPayment: Payment | undefined;
}

interface TenantCardHeaderProps {
  tenantName: string | undefined;
  tenantIdentifier: string | undefined;
  handleLogout: () => void;
  activeTab: "preview" | "general" | "catalog";
  setActiveTab: Dispatch<SetStateAction<"preview" | "general" | "catalog">>;
  setActiveModal: (modal: "advanced" | "bug" | "suggestion" | null) => void;
}

interface TenantShareExperience {
  tenantIdentifier: string | undefined;
  absolutePosition?: boolean;
}
interface HeaderSectionTabProps {
  setActiveTab: Dispatch<SetStateAction<"preview" | "general" | "catalog">>;
  activeTab: "preview" | "general" | "catalog";
}

interface HeaderSectionGreetingsProps {
  tenantName: string | undefined;
  handleLogout: () => void;
  setActiveModal: (modal: "advanced" | "bug" | "suggestion" | null) => void;
}

interface HeaderAdvancedSettingsModalProps {
  // Will extend as the methods are implemented
  activeModal: "advanced" | "bug" | "suggestion";
  closeModal: () => void;
}

interface HeaderAdvanceSettingsProps {
  setActiveModal: (modal: "advanced" | "bug" | "suggestion" | null) => void;
}

interface TenantProductCatalogProps {
  products: TenantProduct[];
  tenantProductStats: ProductsStatsProps | undefined;
  loading: boolean;
  error: string | null;
  showStats: boolean;
  setShowStats: Dispatch<SetStateAction<boolean>>;
}

interface TenantProductCatalogProductCard {
  product: TenantProduct;
}

interface TenantProductCatalogProductGridProps {
  products: TenantProduct[];
}

interface StatCardProps {
  title: string;
  value: string | number;
}

interface DistributionItem {
  name: string;
  count: number;
}

interface DistributionCardProps {
  title: string;
  data: DistributionItem[];
}

type TenantStatus =
  | "active"
  | "inactive"
  | "pending"
  | "canceled"
  | "suspended"
  | undefined;

type TenantOptionsAnalyticsProps = {
  tenantGlobalStats: StatsProps | undefined;
  seasonStats: SeasonStatsProps | undefined;
  seasonStatsLoading: boolean;
};

type SeasonalAnalyticsProps = {
  seasonStats: SeasonStatsProps | undefined;
  seasonStatsLoading: boolean;
};

type TenantProductStatsToggleButtonProps = {
  showStats: boolean;
  setShowStats: Dispatch<SetStateAction<boolean>>;
};

export type {
  TenantAreaInterfaceProps,
  TenantCardProps,
  TenantPartnerSectionProps,
  TenantPlanSectionProps,
  TenantGeneralInterfaceProps,
  TenantOptionsProps,
  TenantPreviewContentProps,
  TenantPreviewProps,
  TenantPreviewMenuProps,
  TenantLimitsSectionProps,
  TenantCardHeaderProps,
  TenantShareExperience,
  HeaderSectionTabProps,
  HeaderSectionGreetingsProps,
  HeaderAdvancedSettingsModalProps,
  HeaderAdvanceSettingsProps,
  TenantProductCatalogProps,
  TenantProductCatalogProductCard,
  TenantProductCatalogProductGridProps,
  StatCardProps,
  DistributionItem,
  DistributionCardProps,
  TenantStatus,
  TenantOptionsAnalyticsProps,
  SeasonalAnalyticsProps,
  TenantProductStatsToggleButtonProps,
};
