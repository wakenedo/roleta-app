"use client";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useCatalogProductsRemoval } from "@/hooks/useCatalogProductsRemoval";
import { useCatalogVerification } from "@/hooks/useCatalogVerification";
import { useProductsImport } from "@/hooks/useProductsImport";
import { useTenantOnboarding } from "@/hooks/useTenantOnboarding";
import { useTenantSeasonStats } from "@/hooks/useTenantSeasonStats";
import { HeaderAndFooterInterface } from "@/Interfaces/HeaderAndFooterInterface";
import { TenantAreaInterface } from "@/Interfaces/TenantAreaInterface";
import { CatalogSelectionState } from "@/Interfaces/TenantAreaInterface/types";
import { formatDateTime } from "@/utils/formatter-utils";
import { getInvalidProductIds } from "@/utils/verification-utils";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const TenantArea = () => {
  const router = useRouter();
  const { tenantLogout, sessionTenantId } = useTenantAuth();
  const {
    tenant,
    loading,
    error,
    products,
    preview,
    setTenant,
    setProducts,
    refresh,
    setLoading,
  } = useTenant();
  const { authorizedFetch } = useAuth();
  const { refresh: globalRefresh, globalQuotaLoading } = useGlobalQuota();
  const { importProductsJSON, importProductsCSV } = useTenantOnboarding();
  const tenantIdentifier = tenant?.id;
  const tenantCurrentPlan = tenant?.subscriptionMode;
  const { seasonStats, loading: seasonStatsLoading } =
    useTenantSeasonStats(tenantIdentifier);

  const {
    verifyCatalog,
    verification,
    loading: _loading,
  } = useCatalogVerification(tenantIdentifier as string);

  const {
    loading: removalLoading,
    removalResult,
    removeItemsFromCatalog,
  } = useCatalogProductsRemoval(tenantIdentifier as string);

  const productsImported = useProductsImport({
    selectedPlan: {
      id: tenantCurrentPlan || "",
      name: tenantCurrentPlan || "",
      price: "",
    },
    importProductsCSV,
    importProductsJSON,
    refresh,
    setTenantLoading: setLoading,
  });
  const {
    validateProducts,
    file,
    handleFileUpload,
    handleCatalogSubmitProducts,
    updateProducts,
    clearImport,
    catalogItems,
    catalogItemsJsonResponse,
    catalogItemsCsvResponse,
    catalogStatus,
    loading: productsImportedLoading,
    errors: productsImportedErrors,
  } = productsImported;
  const [catalogSelectionState, setCatalogSelectionState] =
    useState<CatalogSelectionState>({
      selectionMode: "none",
      productSelected: undefined,
      multipleProductsSelected: [],
    });

  const [activeTab, setActiveTab] = useState<"general" | "catalog" | "preview">(
    "general",
  );
  const [activeModal, setActiveModal] = useState<
    "advanced" | "bug" | "suggestion" | null
  >(null);
  const [showStats, setShowStats] = useState(false);

  const [
    isMultipleProductsCheckoutVisible,
    setIsMultipleProductsCheckoutVisible,
  ] = useState(false);

  const [isObjectCheckoutViewable, setIsObjectCheckoutViewable] =
    useState(false);

  const [isProductsPreviewTableOpen, setIsProductsPreviewTableOpen] =
    useState(false);

  const [isCatalogVerificationModalOpen, setIsCatalogVerificationModalOpen] =
    useState(false);

  const [isRemoveProductsModalOpen, setIsRemoveProductsModalOpen] =
    useState(false);

  const closeModal = () => setActiveModal(null);
  const closeCatalogVerificationModal = () =>
    setIsCatalogVerificationModalOpen(false);

  const closeRemoveProductsModal = () => setIsRemoveProductsModalOpen(false);

  const handleLogout = () => {
    setTenant(null);
    tenantLogout();
    router.push("/");
  };

  const handlePreviewTableCancel = () => {
    clearImport();
    setIsMultipleProductsCheckoutVisible(false);
  };

  const _seasonStats = seasonStats && seasonStats;

  const registeredProductsAmount = products.length;
  const tenantProductStats = tenant?.stats?.products;
  const tenantEmail = tenant?.email;
  const tenantName = tenant?.name;
  const tenantSubscriptionMode = tenant?.subscriptionMode;
  const createdAt = tenant?.createdAt as string;
  const tenantGlobalStats = tenant?.stats;

  const formattedCreatedAt = formatDateTime(createdAt);
  const tenantStatus = tenant?.status;
  const tenantSpinPool = tenant?.spinPool;
  const tenantPayment = tenant?.payment;
  const tenantBranding = tenant?.branding;

  const isCSV = productsImported.file?.name.endsWith(".csv");

  const previewProducts = isCSV ? products : productsImported.products;

  const pickProducts =
    productsImported.products.length > 0 ? productsImported.products : products;

  const catalogResponse =
    catalogItemsJsonResponse ?? catalogItemsCsvResponse ?? null;

  const hasPreview = previewProducts?.length > 0;
  const productsToRender = pickProducts;

  const csvOrJsonFileResponse =
    catalogItemsCsvResponse ?? catalogItemsJsonResponse ?? null;

  const hasCatalogResponse = !!csvOrJsonFileResponse;
  const isCatalogStateLoading =
    catalogStatus === "loading" && !hasCatalogResponse;

  const responsePanel = {
    preview: catalogResponse?.preview,
    products: catalogResponse?.products ?? [],
    errors: catalogResponse?.errorCount ?? 0,
    warnings: catalogResponse?.warningsCount ?? 0,
    total: catalogResponse?.products?.length ?? 0,
    valid: catalogResponse?.validCount ?? 0,
  };

  const verificationByProductId = useMemo(
    () =>
      new Map(
        verification?.results.map((result) => [result.product.id, result]) ??
          [],
      ),
    [verification],
  );

  const invalidProductIds = getInvalidProductIds(verificationByProductId);

  const handleRemoveCatalogProducts = async (productIds: string[]) => {
    if (productIds.length === 0) return;

    const result = await removeItemsFromCatalog(productIds);

    if (!result) return;

    setProducts(
      products.filter(
        (product) => !result.removedProductIds.includes(product.id),
      ),
    );

    setCatalogSelectionState({
      selectionMode: "none",
      productSelected: undefined,
      multipleProductsSelected: [],
    });
  };

  const handleRemoveAllCatalogProducts = async () => {
    const productIds = products.map((product) => product.id);

    await handleRemoveCatalogProducts(productIds);
  };

  console.log("TenantArea", products);

  return (
    <HeaderAndFooterInterface>
      <TenantAreaInterface
        authorizedFetch={authorizedFetch}
        globalRefresh={globalRefresh}
        closeModal={closeModal}
        handleLogout={handleLogout}
        error={error}
        globalQuotaLoading={globalQuotaLoading}
        loading={loading}
        preview={preview}
        products={products}
        sessionTenantId={sessionTenantId}
        tenant={tenant}
        seasonStats={_seasonStats}
        seasonStatsLoading={seasonStatsLoading}
        activeTab={activeTab}
        activeModal={activeModal}
        createdAt={createdAt}
        formattedCreatedAt={formattedCreatedAt}
        registeredProductsAmount={registeredProductsAmount}
        tenantBranding={tenantBranding}
        tenantEmail={tenantEmail}
        tenantGlobalStats={tenantGlobalStats}
        tenantIdentifier={tenantIdentifier}
        tenantName={tenantName}
        tenantPayment={tenantPayment}
        tenantProductStats={tenantProductStats}
        tenantSpinPool={tenantSpinPool}
        tenantStatus={tenantStatus}
        tenantSubscriptionMode={tenantSubscriptionMode}
        showStats={showStats}
        isMultipleProductsCheckoutVisible={isMultipleProductsCheckoutVisible}
        isObjectCheckoutViewable={isObjectCheckoutViewable}
        catalogSelectionState={catalogSelectionState}
        setShowStats={setShowStats}
        setIsMultipleProductsCheckoutVisible={
          setIsMultipleProductsCheckoutVisible
        }
        setIsObjectCheckoutViewable={setIsObjectCheckoutViewable}
        setCatalogSelectionState={setCatalogSelectionState}
        setActiveTab={setActiveTab}
        setActiveModal={setActiveModal}
        verifyCatalog={verifyCatalog}
        verification={verification}
        verificationLoading={_loading}
        importCatalogProductsCSV={importProductsCSV}
        importCatalogProductsJSON={importProductsJSON}
        productsImported={productsImported}
        file={file}
        validateProducts={validateProducts}
        handleFileUpload={handleFileUpload}
        handleCatalogSubmitProducts={handleCatalogSubmitProducts}
        pickProducts={pickProducts}
        previewProducts={previewProducts}
        isProductsPreviewTableOpen={isProductsPreviewTableOpen}
        setIsProductsPreviewTableOpen={setIsProductsPreviewTableOpen}
        updateProducts={updateProducts}
        handlePreviewTableCancel={handlePreviewTableCancel}
        catalogItems={catalogItems}
        catalogState={catalogStatus}
        responsePanel={responsePanel}
        closeCatalogVerificationModal={closeCatalogVerificationModal}
        isCatalogVerificationModalOpen={isCatalogVerificationModalOpen}
        setIsCatalogVerificationModalOpen={setIsCatalogVerificationModalOpen}
        verificationByProductId={verificationByProductId}
        setIsRemoveProductsModalOpen={setIsRemoveProductsModalOpen}
        isRemoveProductsModalOpen={isRemoveProductsModalOpen}
        closeRemoveProductsModal={closeRemoveProductsModal}
        handleRemoveAllCatalogProducts={handleRemoveAllCatalogProducts}
        removalLoading={removalLoading}
        removalResult={removalResult}
        productsImportedLoading={productsImportedLoading}
        hasPreview={hasPreview}
        productsToRender={productsToRender}
        hasCatalogResponse={hasCatalogResponse}
        isCatalogStateLoading={isCatalogStateLoading}
        productsImportedErrors={productsImportedErrors}
      />
    </HeaderAndFooterInterface>
  );
};

export default TenantArea;
