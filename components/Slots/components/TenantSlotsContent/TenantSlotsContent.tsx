"use client";

import { TenantSlotsDedicatedRouteBackground } from "@/components/TenantSlotsDedicatedRouteBackground";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useParams } from "next/navigation";
import Slots from "../../Slots";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useUser } from "@/context/UserContext/UserContext";
import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import { useAuth } from "@/context/AuthContext/AuthContext";

const TenantSlotsContent = () => {
  const { tenant, error } = useTenant();
  const { tenantId } = useParams();
  const { authorizedFetch } = useAuth();
  const { sessionTenantId } = useTenantAuth();
  const { loading, optimisticSpin } = useUser();
  const { refresh, quota, globalQuotaLoading } = useGlobalQuota();

  if (!tenant) return;
  const paramTenantId = tenantId as string;
  const tenantName = tenant.name;
  const tenantSettings = tenant.settings;
  const tenantBranding = tenant.branding;
  if (!tenantSettings && !tenantBranding) return;
  return (
    <TenantSlotsDedicatedRouteBackground
      tenantBranding={tenantBranding}
      tenantName={tenantName}
    >
      <div className="mt-14">
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
          refresh={refresh}
        />
      </div>
    </TenantSlotsDedicatedRouteBackground>
  );
};
export default TenantSlotsContent;
