import { TenantAreaInterfaceProps } from "./types";
import { TenantCard } from "./components/TenantCard";
import { TenantProductCatalog } from "./components/TenantProductCatalog";
import { TenantPreview } from "./components/TenantPreview";
import { HeaderAdvancedSettingsModal } from "./components/TenantCard/components/TenantCardHeader/components/HeaderAdvancedSettingsModal";
import { TenantCardHeader } from "./components/TenantCard/components/TenantCardHeader";
import { TenantSlotsDedicatedRouteBackground } from "@/backgrounds/TenantSlotsDedicatedRouteBackground";

const TenantAreaInterface = ({
  tenant,
  loading,
  error,
  products,
  preview,
  sessionTenantId,
  globalQuotaLoading,
  globalRefresh,
  authorizedFetch,
  seasonStats,
  seasonStatsLoading,
  activeModal,
  activeTab,
  closeModal,
  handleLogout,
  setActiveTab,
  setActiveModal,
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
}: TenantAreaInterfaceProps) => {
  return (
    <TenantSlotsDedicatedRouteBackground
      tenantBranding={tenant?.branding}
      tenantName={tenant?.name}
    >
      <main className="font-sans overflow-hidden md:max-w-8xl mx-auto relative z-10 mb-4 flex flex-col items-center  md:px-4 px-1 ">
        {tenant && (
          <div className="w-full h-full   ">
            <TenantCardHeader
              tenantName={tenantName}
              tenantIdentifier={tenantIdentifier}
              handleLogout={handleLogout}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setActiveModal={setActiveModal}
            />
            {activeTab === "general" && (
              <TenantCard
                loading={loading}
                registeredProductsAmount={registeredProductsAmount}
                error={error}
                tenantEmail={tenantEmail}
                tenantSubscriptionMode={tenantSubscriptionMode}
                createdAt={createdAt}
                tenantGlobalStats={tenantGlobalStats}
                seasonStats={seasonStats}
                seasonStatsLoading={seasonStatsLoading}
                formattedCreatedAt={formattedCreatedAt}
                tenantStatus={tenantStatus}
                tenantIdentifier={tenantIdentifier}
                tenantName={tenantName}
                tenantSpinPool={tenantSpinPool}
                tenantPayment={tenantPayment}
              />
            )}
            {activeTab === "catalog" && (
              <TenantProductCatalog
                error={error}
                loading={loading}
                products={products}
                tenantProductStats={tenantProductStats}
                setShowStats={setShowStats}
                showStats={showStats}
              />
            )}
            {activeTab === "preview" && (
              <TenantPreview
                tenantName={tenantName}
                tenantBranding={tenantBranding}
                preview={preview}
                loading={loading}
                error={error}
                sessionTenantId={sessionTenantId}
                globalQuotaLoading={globalQuotaLoading}
                globalRefresh={globalRefresh}
                authorizedFetch={authorizedFetch}
              />
            )}
          </div>
        )}
      </main>
      {activeModal && (
        <HeaderAdvancedSettingsModal
          activeModal={activeModal}
          closeModal={closeModal}
        />
      )}
    </TenantSlotsDedicatedRouteBackground>
  );
};

export default TenantAreaInterface;
