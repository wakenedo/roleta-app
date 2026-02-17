"use client";

import { Header } from "@/components/Header";
import { TenantAreaInterface } from "@/components/TenantAreaInterface";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";

const TenantArea = () => {
  const { user, logout } = useAuth();
  const { tenant, loading, error, products, preview } = useTenant();

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
      />
    </>
  );
};

export default TenantArea;
