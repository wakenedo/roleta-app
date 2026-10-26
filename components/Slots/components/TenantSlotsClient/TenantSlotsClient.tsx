"use client";
import { TenantSlotsDedicatedRouteBackground } from "@/backgrounds/TenantSlotsDedicatedRouteBackground";

import Slots from "../../Slots";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import { useUser } from "@/context/UserContext/UserContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { HeaderAndFooterInterface } from "@/Interfaces/HeaderAndFooterInterface";

const TenantSlotsClient = () => {
  const { tenant, error } = useTenant();
  const { tenantId } = useParams();
  const { authorizedFetch } = useAuth();
  const { sessionTenantId } = useTenantAuth();
  const { loading, optimisticSpin, data: userData } = useUser();
  const {
    refresh: refreshGlobalQuota,
    quota,
    tenantQuota,
    globalQuotaLoading,
  } = useGlobalQuota();

  const subscriptionExtras = tenantQuota?.subscriptionExtras;

  const subscriptionExtrasRemaining = subscriptionExtras?.remaining;
  const subscriptionExtrasGranted = subscriptionExtras?.granted;
  if (!tenant) return;
  const paramTenantId = tenantId as string;
  const tenantName = tenant.name;
  const tenantSettings = tenant.settings;
  const tenantBranding = tenant.branding;
  if (!tenantSettings && !tenantBranding) return;
  const userWeeklyLimit = userData?.limits?.tenantGlobal.weekly;
  const userMonthlyLimit = userData?.limits?.tenantGlobal.monthly;
  return (
    <HeaderAndFooterInterface>
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
            subscriptionExtras={subscriptionExtras}
            subscriptionExtrasGranted={subscriptionExtrasGranted}
            subscriptionExtrasRemaining={subscriptionExtrasRemaining}
          />
        </div>
      </TenantSlotsDedicatedRouteBackground>
    </HeaderAndFooterInterface>
  );
};
export default TenantSlotsClient;
