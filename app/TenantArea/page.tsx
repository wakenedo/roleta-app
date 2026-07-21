"use client";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useTenantSeasonStats } from "@/hooks/useTenantSeasonStats";
import { HeaderAndFooterInterface } from "@/Interfaces/HeaderAndFooterInterface";
import { TenantAreaInterface } from "@/Interfaces/TenantAreaInterface";
import { CatalogSelectionState } from "@/Interfaces/TenantAreaInterface/types";
import { formatDateTime } from "@/utils/formatter-utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TenantArea = () => {
  const { tenantLogout, sessionTenantId } = useTenantAuth();
  const { tenant, loading, error, products, preview, setTenant } = useTenant();
  const { authorizedFetch } = useAuth();
  const { refresh: globalRefresh, globalQuotaLoading } = useGlobalQuota();
  const tenantIdentifier = tenant?.id;
  const { seasonStats, loading: seasonStatsLoading } =
    useTenantSeasonStats(tenantIdentifier);
  const router = useRouter();

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

  const closeModal = () => setActiveModal(null);

  const handleLogout = () => {
    setTenant(null);
    tenantLogout();
    router.push("/");
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
      />
    </HeaderAndFooterInterface>
  );
};

export default TenantArea;
