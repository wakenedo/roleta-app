"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";

import { useParams } from "next/navigation";
import { useTenantAuth } from "../TenantAuthContext/TenantAuthContext";

import { setTenantId } from "./utils";
import { Tenant, TenantContextProps, TenantProduct } from "./types";

const TenantContext = createContext<TenantContextProps | undefined>(undefined);

export const TenantProvider = ({ children }: { children: ReactNode }) => {
  const { tenantFetch, sessionTenantId } = useTenantAuth();
  const params = useParams();

  const routeTenantId =
    typeof params?.tenantId === "string" ? params.tenantId : null;

  const resolvedTenantId = sessionTenantId ?? routeTenantId;

  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [products, setProducts] = useState<TenantProduct[]>([]);
  const [preview, setPreview] = useState<TenantProduct[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTenantData = useCallback(async () => {
    if (!resolvedTenantId) return;

    try {
      setLoading(true);
      setError(null);

      const [tenantRes, productsRes, previewRes] = await Promise.all([
        tenantFetch(`/tenants/${resolvedTenantId}`),
        tenantFetch(`/tenants/${resolvedTenantId}/admin/products`),
        tenantFetch(`/tenants/${resolvedTenantId}/preview`),
      ]);
      console.log("ProductsRes", productsRes);
      if (!tenantRes?.ok) {
        throw new Error("Failed to load tenant");
      }

      const tenantJson = await tenantRes.json();

      const productsJson = productsRes?.ok ? await productsRes.json() : [];

      const previewJson = previewRes?.ok ? await previewRes.json() : [];

      setTenant(tenantJson ?? null);
      setProducts(productsJson ?? []);
      setPreview(previewJson ?? []);

      setTenantId(tenantJson?.id ?? null);
    } catch (err) {
      console.error("TenantContext error:", err);

      setTenant(null);
      setProducts([]);
      setPreview([]);

      setError("Failed to load tenant");
    } finally {
      setLoading(false);
    }
  }, [resolvedTenantId, tenantFetch]);

  useEffect(() => {
    fetchTenantData();
  }, [fetchTenantData]);

  const invalidateProducts = () => {
    setProducts([]);
  };

  const invalidatePreview = () => {
    setPreview([]);
  };

  return (
    <TenantContext.Provider
      value={{
        tenant,
        products,
        preview,
        loading,
        error,

        setTenant,
        setProducts,

        refresh: fetchTenantData,

        invalidateProducts,
        invalidatePreview,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
};

export const useTenant = () => {
  const context = useContext(TenantContext);

  if (!context) {
    throw new Error("useTenant must be used within TenantProvider");
  }

  return context;
};
