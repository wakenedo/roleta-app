"use client";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { TenantProduct } from "@/context/TenantContext/types";
import { useCatalogVerification } from "@/hooks/useCatalogVerification";
import { useProductsImport } from "@/hooks/useProductsImport";
import { useTenantOnboarding } from "@/hooks/useTenantOnboarding";
import { useTenantSeasonStats } from "@/hooks/useTenantSeasonStats";
import { HeaderAndFooterInterface } from "@/Interfaces/HeaderAndFooterInterface";
import { TenantAreaInterface } from "@/Interfaces/TenantAreaInterface";
import { CatalogSelectionState } from "@/Interfaces/TenantAreaInterface/types";
import { formatDateTime } from "@/utils/formatter-utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TenantArea = () => {
  const router = useRouter();
  const { tenantLogout, sessionTenantId } = useTenantAuth();
  const { tenant, loading, error, products, preview, setTenant, setProducts } =
    useTenant();
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
  const productsImported = useProductsImport({
    selectedPlan: {
      id: tenantCurrentPlan || "",
      name: tenantCurrentPlan || "",
      price: "",
    },
    importProductsCSV,
    importProductsJSON,
  });
  const {
    validateProducts,
    file,
    handleFileUpload,
    updateProducts,
    clearImport,
    catalogItems,
    catalogItemsJsonResponse,
    catalogItemsCsvResponse,
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

  const closeModal = () => setActiveModal(null);

  const handleLogout = () => {
    setTenant(null);
    tenantLogout();
    router.push("/");
  };

  const handleCatalogSubmitProducts = async () => {
    if (!file) return;

    // 🧾 CSV FLOW
    if (file.name.endsWith(".csv")) {
      const result = (await importProductsCSV(
        file,
        "admin/catalog",
        false,
      )) as {
        imported: number;
        products: TenantProduct[];
      };
      setProducts(result.products);
      console.log("Imported ✔", result);
      validateProducts();
      alert(`Imported ${result.imported} products`);
      clearImport();
      return;
    }
    if (file.name.endsWith(".json")) {
      const result = (await importProductsJSON(
        file,
        "admin/catalog",
        false,
      )) as {
        imported: number;
        products: TenantProduct[];
      };
      setProducts(result.products);
      console.log("Imported ✔", result);
      validateProducts();
      alert(`Imported ${result.imported} products`);
      clearImport();
      return;
    }

    console.log("Products validated ✔");
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
        catalogItemsJsonResponse={catalogItemsJsonResponse}
        catalogItemsCsvResponse={catalogItemsCsvResponse}
      />
    </HeaderAndFooterInterface>
  );
};

export default TenantArea;
