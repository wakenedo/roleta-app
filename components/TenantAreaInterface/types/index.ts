import {
  ProductsStatsProps,
  Tenant,
  TenantBranding,
  TenantProduct,
} from "@/context/TenantContext/types";
import { Dispatch, SetStateAction } from "react";

interface TenantAreaInterfaceProps {
  loading: boolean;
  tenant: Tenant | null;
  setTenant: (t: Tenant | null) => void;
  error: string | null;
  logout: () => void;
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
}

interface TenantPreviewContentProps {
  tenantBranding: TenantBranding | undefined;
  tenantName: string;
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
  tenant: Tenant | null;
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
  tenant: Tenant;
  registeredProductsAmount: number;
}

interface TenantLimitsSectionProps {
  tenant: Tenant;
  registeredProductsAmount: number;
  subscriptionBasedLimit: 100 | 250 | 500 | 0;
}

interface TenantGeneralInterfaceProps {
  tenant: Tenant;
  tenantEmail: string | null | undefined;
  registeredProductsAmount: number;
}

interface TenantPartnerSectionProps {
  tenant: Tenant;
  tenantEmail: string | null | undefined;
  createdAt: string;
}

interface TenantPlanSectionProps {
  //will extend on payment integration
  tenant: Tenant;
}

interface TenantCardProps {
  tenant: Tenant;
  loading: boolean;
  registeredProductsAmount: number;
  error: string | null;
}

interface TenantCardHeaderProps {
  tenant: Tenant;
  handleLogout: () => void;
  activeTab: "preview" | "general" | "catalog";
  setActiveTab: Dispatch<SetStateAction<"preview" | "general" | "catalog">>;
  setActiveModal: (modal: "advanced" | "bug" | "suggestion" | null) => void;
}

interface TenantShareExperience {
  tenantIdentifier: string;
  absolutePosition?: boolean;
}
interface HeaderSectionTabProps {
  setActiveTab: Dispatch<SetStateAction<"preview" | "general" | "catalog">>;
  activeTab: "preview" | "general" | "catalog";
}

interface HeaderSectionGreetingsProps {
  tenantName: string;
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
};
