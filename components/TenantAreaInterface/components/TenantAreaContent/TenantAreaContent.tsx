"use client";

import { TenantSlotsDedicatedRouteBackground } from "@/components/TenantSlotsDedicatedRouteBackground";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useEffect } from "react";
import TenantAreaInterface from "../../TenantAreaInterface";

const TenantAreaContent = () => {
  const { logout } = useAuth();
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

  useEffect(() => {
    if (tenant) {
      loadProducts();
      loadPreview();
    }
  }, [tenant, loadPreview, loadProducts]);
  return (
    <TenantSlotsDedicatedRouteBackground
      tenantBranding={tenant?.branding}
      tenantName={tenant?.name}
    >
      <TenantAreaInterface
        logout={logout}
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
