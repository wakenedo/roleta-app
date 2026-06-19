import { TenantSlotsDedicatedRouteBackground } from "@/components/TenantSlotsDedicatedRouteBackground";
import TenantAreaInterface from "../../TenantAreaInterface";
import { TenantAreaContentProps } from "../../types";

const TenantAreaContent = ({
  tenant,
  loading,
  error,
  products,
  preview,
  sessionTenantId,
  authorizedFetch,
  globalRefresh,
  globalQuotaLoading,
  seasonStats,
  seasonStatsLoading,
  activeModal,
  setActiveModal,
  activeTab,
  closeModal,
  handleLogout,
  setActiveTab,
  createdAt,
  formattedCreatedAt,
  registeredProductsAmount,
  tenantBranding,
  tenantEmail,
  tenantGlobalStats,
  tenantIdentifier,
  tenantName,
  tenantPayment,
  tenantProductStats,
  tenantSpinPool,
  tenantStatus,
  tenantSubscriptionMode,
  setShowStats,
  showStats,
}: TenantAreaContentProps) => {
  return (
    <TenantSlotsDedicatedRouteBackground
      tenantBranding={tenant?.branding}
      tenantName={tenant?.name}
    >
      <TenantAreaInterface
        loading={loading}
        tenant={tenant}
        error={error}
        products={products}
        preview={preview}
        sessionTenantId={sessionTenantId}
        globalQuotaLoading={globalQuotaLoading}
        globalRefresh={globalRefresh}
        authorizedFetch={authorizedFetch}
        seasonStats={seasonStats}
        seasonStatsLoading={seasonStatsLoading}
        activeModal={activeModal}
        activeTab={activeTab}
        closeModal={closeModal}
        handleLogout={handleLogout}
        setActiveTab={setActiveTab}
        setActiveModal={setActiveModal}
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
        setShowStats={setShowStats}
        showStats={showStats}
      />
    </TenantSlotsDedicatedRouteBackground>
  );
};
export default TenantAreaContent;
