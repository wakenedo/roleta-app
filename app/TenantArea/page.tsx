"use client";

import { Header } from "@/components/Header";
import { TenantAreaInterface } from "@/components/TenantAreaInterface";
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
      <Header user={user} />
      <TenantAreaInterface
        logout={logout}
        loading={loading}
        tenant={tenant}
        error={error}
        products={products}
        preview={preview}
        tenantQuota={tenantQuota}
      />
    </>
  );
};

export default TenantArea;
