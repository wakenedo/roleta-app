"use client";
import { Slots } from "@/components/Slots";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useParams } from "next/navigation";

export default function TenantSlotsPage() {
  const { tenant, loading, error, tenantQuota } = useTenant();
  const { tenantId } = useParams();
  if (!tenant) return;
  if (tenantId != tenant.id) return;
  const tenantName = tenant.name;
  const tenantSettings = tenant.settings;
  const tenantBranding = tenant.branding;
  if (!tenantSettings && !tenantBranding) return;
  const paramTenantId = tenantId;

  console.log("tenant", tenantId);

  console.log("tenant quota", tenantQuota);
  return (
    <>
      <div>{tenant.id}</div>
      <Slots
        tenantId={paramTenantId}
        tenantBranding={tenantBranding}
        tenantSettings={tenantSettings}
        tenantName={tenantName}
      />
    </>
  );
}
