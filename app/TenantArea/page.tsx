"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TenantAreaInterface } from "@/components/TenantAreaInterface";
import { TenantSlotsDedicatedRouteBackground } from "@/components/TenantSlotsDedicatedRouteBackground";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useEffect } from "react";

const TenantArea = () => {
  const { user, logout } = useAuth();
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
    <>
      <TenantSlotsDedicatedRouteBackground tenantBranding={tenant?.branding}>
        <Header user={user} tenantId={tenant?.id} />
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
      <Footer />
    </>
  );
};

export default TenantArea;
