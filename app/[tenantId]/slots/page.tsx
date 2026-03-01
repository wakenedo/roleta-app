"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Slots } from "@/components/Slots";
import { TenantSlotsDedicatedRouteBackground } from "@/components/TenantSlotsDedicatedRouteBackground";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useParams } from "next/navigation";

export default function TenantSlotsPage() {
  const { user } = useAuth();
  const { tenant, loading, error } = useTenant();
  const { tenantId } = useParams();
  if (!tenant) return;
  const paramTenantId = tenantId as string;
  const tenantName = tenant.name;
  const tenantSettings = tenant.settings;
  const tenantBranding = tenant.branding;
  const primaryColor =
    tenantBranding && (tenantBranding.primaryColor as string);
  if (!tenantSettings && !tenantBranding) return;

  console.log("tenantSettings", tenantSettings);
  console.log("primaryColor", primaryColor);

  return (
    <>
      <TenantSlotsDedicatedRouteBackground
        tenantBranding={tenantBranding}
        tenantName={tenantName}
      >
        <Header user={user} tenantId={tenant.id} />
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
