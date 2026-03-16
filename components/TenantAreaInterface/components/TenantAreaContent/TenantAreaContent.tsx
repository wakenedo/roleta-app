"use client";

import { TenantSlotsDedicatedRouteBackground } from "@/components/TenantSlotsDedicatedRouteBackground";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useEffect } from "react";

import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import TenantAreaInterface from "../../TenantAreaInterface";

const TenantAreaContent = () => {
  const { tenantLogout } = useTenantAuth();
  const {
    tenant,
    loading,
    error,
    products,
    preview,
    refresh,
    loadProducts,
    loadPreview,
  } = useTenant();

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
        error={error}
        products={products}
        preview={preview}
      />
    </TenantSlotsDedicatedRouteBackground>
  );
};
export default TenantAreaContent;
