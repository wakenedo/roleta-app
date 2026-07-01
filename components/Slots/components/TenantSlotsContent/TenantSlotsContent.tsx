import { TenantSlotsDedicatedRouteBackground } from "@/backgrounds/TenantSlotsDedicatedRouteBackground";
import Slots from "../../Slots";
import { TenantSlotsContentProps } from "../../types";

const TenantSlotsContent = ({
  authorizedFetch,
  globalQuotaLoading,
  loading,
  optimisticSpin,
  quota,
  refreshGlobalQuota,
  sessionTenantId,
  tenant,
  tenantId,
  tenantQuota,
  userData,
}: TenantSlotsContentProps) => {
  if (!tenant) return;
  const paramTenantId = tenantId as string;
  const tenantName = tenant.name;
  const tenantSettings = tenant.settings;
  const tenantBranding = tenant.branding;
  if (!tenantSettings && !tenantBranding) return;
  const userWeeklyLimit = userData?.limits.tenantGlobal.weekly;
  const userMonthlyLimit = userData?.limits.tenantGlobal.monthly;
  return (
    <TenantSlotsDedicatedRouteBackground
      tenantBranding={tenantBranding}
      tenantName={tenantName}
    >
      <div className="pb-22 flex items-center justify-center">
        <Slots
          quota={quota}
          loading={loading}
          tenantName={tenantName}
          tenantId={paramTenantId}
          tenantBranding={tenantBranding}
          tenantSettings={tenantSettings}
          sessionTenantId={sessionTenantId}
          globalQuotaLoading={globalQuotaLoading}
          authorizedFetch={authorizedFetch}
          optimisticSpin={optimisticSpin}
          refresh={refreshGlobalQuota}
          tenantQuota={tenantQuota}
          userMonthlyLimit={userMonthlyLimit}
          userWeeklyLimit={userWeeklyLimit}
        />
      </div>
    </TenantSlotsDedicatedRouteBackground>
  );
};
export default TenantSlotsContent;
