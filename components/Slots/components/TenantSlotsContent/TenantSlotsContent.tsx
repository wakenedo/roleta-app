"use client";

import { TenantSlotsDedicatedRouteBackground } from "@/components/TenantSlotsDedicatedRouteBackground";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useParams } from "next/navigation";
import Slots from "../../Slots";

const TenantSlotsContent = () => {
  const { tenant, loading, error } = useTenant();
  const { tenantId } = useParams();
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
          tenantId={paramTenantId}
          tenantBranding={tenantBranding}
          tenantSettings={tenantSettings}
          tenantName={tenantName}
        />
      </div>
    </TenantSlotsDedicatedRouteBackground>
  );
};
export default TenantSlotsContent;
