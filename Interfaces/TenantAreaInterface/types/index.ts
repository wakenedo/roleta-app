import {
  Payment,
  ProductsStatsProps,
  SeasonStatsProps,
  StatsProps,
  Tenant,
  TenantBranding,
  TenantCatalogItem,
  TenantProduct,
  TenantSpinPool,
} from "@/context/TenantContext/types";
import {
  ReceivedCsvPreviewProps,
  ReceivedJsonPreviewProps,
  VerificationResult,
  VerifyCatalogResponse,
} from "@/hooks/types";
import { ProductsImportedProps } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/types";
import { Dispatch, SetStateAction } from "react";

interface AuthorizedFetchProps {
  (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
  (
    input: string | URL | globalThis.Request,
    init?: RequestInit,
  ): Promise<Response>;
}

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
  authorizedFetch: AuthorizedFetchProps;
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
  setIsMultipleProductsCheckoutVisible: Dispatch<SetStateAction<boolean>>;
  setIsObjectCheckoutViewable: Dispatch<SetStateAction<boolean>>;
  isObjectCheckoutViewable: boolean;
  isMultipleProductsCheckoutVisible: boolean;
  catalogSelectionState: CatalogSelectionState;
  setCatalogSelectionState: Dispatch<SetStateAction<CatalogSelectionState>>;

  verifyCatalog: (products: TenantProduct[]) => Promise<VerifyCatalogResponse>;
  verification: VerifyCatalogResponse | null;
  verificationLoading: boolean;

  importCatalogProductsCSV: (
    file: File,
    path: "onboard" | "admin/catalog",
    dryRun?: boolean,
  ) => Promise<any>;
  importCatalogProductsJSON: (
    file: File,
    path: "onboard" | "admin/catalog",
    dryRun?: boolean,
  ) => Promise<any>;
  productsImported: ProductsImportedProps;
  handleCatalogSubmitProducts: () => Promise<void>;
  previewProducts: TenantProduct[];
  pickProducts: TenantProduct[];
  validateProducts: () => boolean;
  file: File | null;
  handleFileUpload: (
    file: File,
    path: "onboard" | "admin/catalog",
  ) => Promise<void>;
  isProductsPreviewTableOpen: boolean;
  setIsProductsPreviewTableOpen: Dispatch<SetStateAction<boolean>>;
  updateProducts: Dispatch<SetStateAction<TenantProduct[]>>;
  handlePreviewTableCancel: () => void;
  catalogItems: TenantCatalogItem[];
  catalogItemsJsonResponse: ReceivedJsonPreviewProps | null;
  catalogItemsCsvResponse: ReceivedCsvPreviewProps | null;
  responsePanel: {
    preview: unknown[] | undefined;
    products: TenantProduct[];
    errors: number;
    warnings: number;
    total: number;
    valid: number;
  };
  catalogState: CatalogState;
  closeCatalogVerificationModal: () => void;
  isCatalogVerificationModalOpen: boolean;
  setIsCatalogVerificationModalOpen: Dispatch<SetStateAction<boolean>>;
  verificationByProductId: Map<string, VerificationResult>;
  setIsRemoveProductsModalOpen: Dispatch<SetStateAction<boolean>>;
  isRemoveProductsModalOpen: boolean;
  closeRemoveProductsModal: () => void;
  handleRemoveAllCatalogProducts: () => Promise<void>;
  removalLoading: boolean;
  removalResult: CatalogProductsRemovalResult | null;
  productsImportedLoading: boolean;
}

interface TenantPreviewContentProps {
  tenantBranding: TenantBranding | undefined;
  tenantName: string | undefined;
  primaryColor: string | undefined;
  loading: boolean;
  sessionTenantId: string | null;
  globalQuotaLoading: boolean;
  authorizedFetch: AuthorizedFetchProps;
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
  authorizedFetch: AuthorizedFetchProps;
}

interface ProductEditSectionProps {
  tenantProductStats: ProductsStatsProps | undefined;
  setIsMultipleProductsCheckoutVisible: Dispatch<SetStateAction<boolean>>;
  setIsObjectCheckoutViewable: Dispatch<SetStateAction<boolean>>;
  setCatalogSelectionState: Dispatch<SetStateAction<CatalogSelectionState>>;
  isObjectCheckoutViewable: boolean;
  catalogSelectionState: CatalogSelectionState;
  isMultipleProductsCheckoutVisible: boolean;
  verifyCatalog: (products: TenantProduct[]) => Promise<VerifyCatalogResponse>;
  verification: VerifyCatalogResponse | null;
  verificationLoading: boolean;
  products: TenantProduct[];
  handleFileUpload: (
    file: File,
    path: "onboard" | "admin/catalog",
  ) => Promise<void>;
  productsImported: ProductsImportedProps;
  handleCatalogSubmitProducts: () => Promise<void>;
  previewProducts: TenantProduct[];
  pickProducts: TenantProduct[];
  setIsProductsPreviewTableOpen: Dispatch<SetStateAction<boolean>>;
  setIsCatalogVerificationModalOpen: Dispatch<SetStateAction<boolean>>;
  verificationByProductId: Map<string, VerificationResult>;
  setIsRemoveProductsModalOpen: Dispatch<SetStateAction<boolean>>;
  handleRemoveAllCatalogProducts: () => Promise<void>;
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
  tenantSubscriptionMode: string | undefined;
  loading: boolean;
  error: string | null;
  showStats: boolean;
  setShowStats: Dispatch<SetStateAction<boolean>>;
  setIsMultipleProductsCheckoutVisible: Dispatch<SetStateAction<boolean>>;
  setIsObjectCheckoutViewable: Dispatch<SetStateAction<boolean>>;
  isObjectCheckoutViewable: boolean;
  isMultipleProductsCheckoutVisible: boolean;
  catalogSelectionState: CatalogSelectionState;
  setCatalogSelectionState: Dispatch<SetStateAction<CatalogSelectionState>>;
  verification: VerifyCatalogResponse | null;
  verifyCatalog: (products: TenantProduct[]) => Promise<VerifyCatalogResponse>;
  verificationLoading: boolean;
  handleFileUpload: (
    file: File,
    path: "onboard" | "admin/catalog",
  ) => Promise<void>;
  productsImported: ProductsImportedProps;
  handleCatalogSubmitProducts: () => Promise<void>;
  previewProducts: TenantProduct[];
  pickProducts: TenantProduct[];
  isProductsPreviewTableOpen: boolean;
  setIsProductsPreviewTableOpen: Dispatch<SetStateAction<boolean>>;
  updateProducts: Dispatch<SetStateAction<TenantProduct[]>>;
  handlePreviewTableCancel: () => void;
  catalogItems: TenantCatalogItem[];
  catalogItemsJsonResponse: ReceivedJsonPreviewProps | null;
  catalogItemsCsvResponse: ReceivedCsvPreviewProps | null;
  responsePanel: {
    preview: unknown[] | undefined;
    products: TenantProduct[];
    errors: number;
    warnings: number;
    total: number;
    valid: number;
  };
  catalogState: CatalogState;
  closeCatalogVerificationModal: () => void;
  isCatalogVerificationModalOpen: boolean;
  setIsCatalogVerificationModalOpen: Dispatch<SetStateAction<boolean>>;
  verificationByProductId: Map<string, VerificationResult>;
  isRemoveProductsModalOpen: boolean;
  setIsRemoveProductsModalOpen: Dispatch<SetStateAction<boolean>>;
  closeRemoveProductsModal: () => void;
  handleRemoveAllCatalogProducts: () => Promise<void>;
  removalLoading: boolean;
  removalResult: CatalogProductsRemovalResult | null;
  productsImportedLoading: boolean;
}

interface TenantProductCatalogProductCard {
  product: TenantProduct;
  selected: boolean;
  onProductClick: () => void;
  verification: VerificationResult | undefined;
  verificationLoading: boolean;
}

interface TenantProductCatalogProductGridProps {
  products: TenantProduct[];
  catalogSelectionState: CatalogSelectionState;
  setCatalogSelectionState: Dispatch<SetStateAction<CatalogSelectionState>>;

  verificationLoading: boolean;

  verificationByProductId: Map<string, VerificationResult>;
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

type CatalogSelectionSettersProps = {
  setIsMultipleSelectionMode: Dispatch<SetStateAction<boolean>>;
  setMultipleProductsSelected: Dispatch<SetStateAction<TenantProduct[]>>;
  setProductSelected: Dispatch<SetStateAction<TenantProduct | undefined>>;
  setIsProductSelected: Dispatch<SetStateAction<boolean>>;
};

type SingleProductSelectionProps = {
  productSelected: TenantProduct | undefined;
  verifyCatalog: (products: TenantProduct[]) => Promise<VerifyCatalogResponse>;

  productVerification: VerificationResult | undefined;

  verificationLoading: boolean;
};

type MultipleProductsSelectionProps = {
  verifyCatalog: (products: TenantProduct[]) => Promise<VerifyCatalogResponse>;
  verificationLoading: boolean;
  setIsMultipleProductsCheckoutVisible: Dispatch<SetStateAction<boolean>>;
  isMultipleProductsCheckoutVisible: boolean;
  catalogSelectionState: CatalogSelectionState;
  verification: VerifyCatalogResponse | null;
  verificationByProductId: Map<string, VerificationResult>;
};

type CatalogSelectionMode = "none" | "single" | "multiple";

interface HandleCatalogSelectionProps {
  product: TenantProduct;
  catalogSelectionState: CatalogSelectionState;
  setCatalogSelectionState: Dispatch<SetStateAction<CatalogSelectionState>>;
}

interface CatalogSelectionState {
  selectionMode: "none" | "single" | "multiple";
  productSelected?: TenantProduct;
  multipleProductsSelected: TenantProduct[];
}

interface ProductsObjectManagerProps {
  tenantProductStats: ProductsStatsProps | undefined;
  products: TenantProduct[];
  verifyCatalog: (products: TenantProduct[]) => Promise<any>;
  verificationLoading: boolean;

  isObjectCheckoutViewable: boolean;
  handleFileUpload: (
    file: File,
    path: "onboard" | "admin/catalog",
  ) => Promise<void>;
  productsImported: ProductsImportedProps;
  previewProducts: TenantProduct[];
  pickProducts: TenantProduct[];
  setIsProductsPreviewTableOpen: Dispatch<SetStateAction<boolean>>;
  setIsCatalogVerificationModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsRemoveProductsModalOpen: Dispatch<SetStateAction<boolean>>;
  handleRemoveAllCatalogProducts: () => Promise<void>;
}

type ObjectManagerCheckoutProps = {
  productsImported: ProductsImportedProps;
  previewProducts: TenantProduct[];
  pickProducts: TenantProduct[];
};

type CatalogState = "idle" | "loading" | "success" | "warning" | "partial";

type ProductTableProps = {
  products: TenantProduct[];
  paginatedProducts: TenantProduct[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  updateProducts: (products: TenantProduct[]) => void;
  selectedPlan: {
    id: string;
    name: string;
    price: string;
  };
  pagination: {
    totalItems: number;
    perPage: number;
    currentPage: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  previewProducts: TenantProduct[];
  pickProducts: TenantProduct[];
  catalogItemsJsonResponse: ReceivedJsonPreviewProps | null;
  catalogItemsCsvResponse: ReceivedCsvPreviewProps | null;
  catalogItems: TenantCatalogItem[];
  catalogState: CatalogState;
  responsePanel: {
    total: number;
    valid: number;
    warnings: number;
    errors: number;
  };
};

type PreviewImportTableProps = {
  products: TenantProduct[];
  paginatedProducts: TenantProduct[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  updateProducts: (products: TenantProduct[]) => void;
  selectedPlan: {
    id: string;
    name: string;
    price: string;
  };
  pagination: {
    totalItems: number;
    perPage: number;
    currentPage: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  handleCatalogSubmitProducts: () => Promise<void>;
  productsImported: ProductsImportedProps;
  previewProducts: TenantProduct[];
  pickProducts: TenantProduct[];
  handlePreviewTableCancel: () => void;
  catalogItems: TenantCatalogItem[];
  catalogItemsJsonResponse: ReceivedJsonPreviewProps | null;
  catalogItemsCsvResponse: ReceivedCsvPreviewProps | null;
  responsePanel: {
    preview: unknown[] | undefined;
    products: TenantProduct[];
    errors: number;
    warnings: number;
    total: number;
    valid: number;
  };
  catalogState: CatalogState;
  productsImportedLoading: boolean;
};

type SaveCatalogProductsButtonProps = {
  onClick: () => void;
  label: string;
};

type CatalogProductsRemovalResult = {
  removedCount: number;
  removedProductIds: string[];
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
  ProductEditSectionProps,
  TenantProductStatsToggleButtonProps,
  CatalogSelectionSettersProps,
  SingleProductSelectionProps,
  CatalogSelectionMode,
  HandleCatalogSelectionProps,
  MultipleProductsSelectionProps,
  CatalogSelectionState,
  ProductsObjectManagerProps,
  ObjectManagerCheckoutProps,
  PreviewImportTableProps,
  ProductTableProps,
  SaveCatalogProductsButtonProps,
  CatalogState,
  CatalogProductsRemovalResult,
};
