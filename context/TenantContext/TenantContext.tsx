"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { setTenantId } from "./utils";
import { Tenant, TenantContextProps, TenantProduct } from "./types";
import { useParams } from "next/navigation";
import { useTenantAuth } from "../TenantAuthContext/TenantAuthContext";

const TenantContext = createContext<TenantContextProps | undefined>(undefined);

export const TenantProvider = ({ children }: { children: ReactNode }) => {
  const { tenantFetch, tenantToken, sessionTenantId } = useTenantAuth();
  const { tenantId } = useParams();
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [products, setProducts] = useState<TenantProduct[]>([]);
  const [preview, setPreview] = useState<TenantProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [previewLoaded, setPreviewLoaded] = useState(false);

  const resolvedTenantId = !sessionTenantId ? tenantId : sessionTenantId;

  const fetchTenant = useCallback(async () => {
    if (!tenantToken && !sessionTenantId && !resolvedTenantId) return;
    try {
      setLoading(true);
      setError(null);

      const tenantRes = await tenantFetch(`/tenants/${resolvedTenantId}`);

      if (!tenantRes?.ok) throw new Error("tenant failed");
      const tenantJson = await tenantRes.json();
      console.log("tenantJson tenantFetch", tenantJson);

      setTenant(tenantJson ?? null);
    } catch (err) {
      console.error(err);
      setError("Failed to load tenant");
    } finally {
      setLoading(false);
    }
  }, [tenantFetch, resolvedTenantId]);

  const loadProducts = async () => {
    if (
      (!tenantToken && !sessionTenantId && !resolvedTenantId) ||
      productsLoaded
    )
      return;
    try {
      const res = await tenantFetch(
        `/tenants/${resolvedTenantId}/admin/products`,
      );
      if (!res?.ok) throw new Error("products failed");
      const json = await res.json();
      setProducts(json ?? []);
      setProductsLoaded(true);
      console.log("Fetching products from API");
    } catch (err) {
      console.error(err);
    }
  };

  const loadPreview = async () => {
    if (!resolvedTenantId || previewLoaded) return;

    try {
      const res = await tenantFetch(`/tenants/${resolvedTenantId}/preview`);
      if (!res?.ok) throw new Error("preview failed");
      const json = await res.json();
      setPreview(json ?? []);
      setPreviewLoaded(true);
      console.log("Fetching preview from API");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (previewLoaded && productsLoaded) return;
    fetchTenant();
  }, [fetchTenant, previewLoaded, productsLoaded]);

  useEffect(() => {
    setTenantId(tenant?.id ?? null);
  }, [tenant]);
  useEffect(() => {
    tenantToken === null && setTenant(null);
  }, [tenantToken, setTenant]);

  return (
    <TenantContext.Provider
      value={{
        tenant,
        products,
        preview,
        loading,
        error,
        setTenant,
        refresh: fetchTenant,
        loadProducts,
        loadPreview,
        invalidateProducts: () => setProductsLoaded(false),
        invalidatePreview: () => setPreviewLoaded(false),
      }}
    >
      {children}
    </TenantContext.Provider>
  );
};

export const useTenant = () => {
  const ctx = useContext(TenantContext);
  if (!ctx) throw new Error("useTenant must be used within TenantProvider");
  return ctx;
};
