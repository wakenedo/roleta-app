"use client";
import { TenantSlotsContent } from "@/components/Slots/components/TenantSlotsContent";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useUser } from "@/context/UserContext/UserContext";
import { HeaderAndFooterInterface } from "@/Interfaces/HeaderAndFooterInterface";
import { useParams } from "next/navigation";

export default function TenantSlotsPage() {
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
  return (
    <HeaderAndFooterInterface>
      <TenantSlotsContent
        authorizedFetch={authorizedFetch}
        globalQuotaLoading={globalQuotaLoading}
        loading={loading}
        userData={userData}
        optimisticSpin={optimisticSpin}
        quota={quota}
        refreshGlobalQuota={refreshGlobalQuota}
        sessionTenantId={sessionTenantId}
        tenant={tenant}
        tenantId={tenantId}
        tenantQuota={tenantQuota}
      />
    </HeaderAndFooterInterface>
  );
}
