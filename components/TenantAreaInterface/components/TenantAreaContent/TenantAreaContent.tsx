"use client";

import { TenantSlotsDedicatedRouteBackground } from "@/components/TenantSlotsDedicatedRouteBackground";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useEffect } from "react";

import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import TenantAreaInterface from "../../TenantAreaInterface";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useAuth } from "@/context/AuthContext/AuthContext";

const TenantAreaContent = () => {
  const { tenantLogout, sessionTenantId } = useTenantAuth();
  const {
    tenant,
    loading,
    error,
    products,
    preview,
    refresh,
    loadProducts,
    loadPreview,
    setTenant,
  } = useTenant();
  const { authorizedFetch } = useAuth();
  const {
    refresh: globalRefresh,
    quota,
    globalQuotaLoading,
  } = useGlobalQuota();

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    if (!tenant) return;
    loadProducts();
    loadPreview();
  }, [tenant, loadPreview, loadProducts]);

  return (
    <TenantSlotsDedicatedRouteBackground
      tenantBranding={tenant?.branding}
      tenantName={tenant?.name}
    >
      <TenantAreaInterface
        logout={tenantLogout}
        loading={loading}
        tenant={tenant}
        setTenant={setTenant}
        error={error}
        products={products}
        preview={preview}
        sessionTenantId={sessionTenantId}
        globalQuotaLoading={globalQuotaLoading}
        globalRefresh={globalRefresh}
        authorizedFetch={authorizedFetch}
      />
    </TenantSlotsDedicatedRouteBackground>
  );
};
export default TenantAreaContent;
