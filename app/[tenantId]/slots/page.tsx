"use client";
import { Slots } from "@/components/Slots";
import { TenantSlotsDedicatedRouteBackground } from "@/components/TenantSlotsDedicatedRouteBackground";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useParams } from "next/navigation";

export default function TenantSlotsPage() {
  const { tenant, loading, error } = useTenant();
  const { tenantId } = useParams();
  if (!tenant) return;
  if (tenantId != tenant.id) return;
  const tenantName = tenant.name;
  const tenantSettings = tenant.settings;
  const tenantBranding = tenant.branding;
  const primaryColor =
    tenantBranding && (tenantBranding.primaryColor as string);
  if (!tenantSettings && !tenantBranding) return;
  const paramTenantId = tenantId;

  console.log("tenantSettings", tenantSettings);
  console.log("primaryColor", primaryColor);

  return (
    <TenantSlotsDedicatedRouteBackground
      tenantBranding={tenantBranding}
      tenantName={tenantName}
    >
      <Slots
        tenantId={paramTenantId}
        tenantBranding={tenantBranding}
        tenantSettings={tenantSettings}
        tenantName={tenantName}
      />
    </TenantSlotsDedicatedRouteBackground>
  );
}
