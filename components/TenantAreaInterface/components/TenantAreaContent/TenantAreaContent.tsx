"use client";

import { TenantSlotsDedicatedRouteBackground } from "@/components/TenantSlotsDedicatedRouteBackground";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useEffect } from "react";
import TenantAreaInterface from "../../TenantAreaInterface";
import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";

const TenantAreaContent = () => {
  const { tenantLogout } = useTenantAuth();
  const {
    tenant,
    loading,
    error,
    products,
    preview,
    tenantQuota,
    loadPreview,
    loadProducts,
  } = useTenant();

  console.log("TenantAreaProducts", products);
  useEffect(() => {
    if (tenant) {
      loadProducts();
      loadPreview();
    }
  }, [tenant, loadPreview, loadProducts]);
  console.log("TenantAreaContent", tenantQuota);
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
        tenantQuota={tenantQuota}
      />
    </TenantSlotsDedicatedRouteBackground>
  );
};
export default TenantAreaContent;
