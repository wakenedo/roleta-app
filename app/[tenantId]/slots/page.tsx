"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Slots } from "@/components/Slots";
import { TenantSlotsDedicatedRouteBackground } from "@/components/TenantSlotsDedicatedRouteBackground";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useParams } from "next/navigation";

export default function TenantSlotsPage() {
  const { tenant, loading, error } = useTenant();
  const { tenantId } = useParams();
  if (!tenant) return;
  const paramTenantId = tenantId as string;
  const tenantName = tenant.name;
  const tenantSettings = tenant.settings;
  const tenantBranding = tenant.branding;
  if (!tenantSettings && !tenantBranding) return;

  return (
    <>
      <TenantSlotsDedicatedRouteBackground
        tenantBranding={tenantBranding}
        tenantName={tenantName}
      >
        <Header />
        <div className="mt-14">
          <Slots
            tenantId={paramTenantId}
            tenantBranding={tenantBranding}
            tenantSettings={tenantSettings}
            tenantName={tenantName}
          />
        </div>
      </TenantSlotsDedicatedRouteBackground>
      <Footer />
    </>
  );
}
