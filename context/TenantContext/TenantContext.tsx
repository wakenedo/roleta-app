"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { setTenantId } from "./utils";
import { Tenant, TenantContextProps, TenantProduct } from "./types";

const TenantContext = createContext<TenantContextProps | undefined>(undefined);

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const TenantProvider = ({ children }: { children: ReactNode }) => {
  const { user, authorizedFetch } = useAuth();

  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [products, setProducts] = useState<TenantProduct[]>([]);
  const [preview, setPreview] = useState<TenantProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const STATIC_TENANT_ID = process.env.NEXT_PUBLIC_DEFAULT_TENANT!;

  const fetchTenant = useCallback(async () => {
    if (!user) {
      setTenant(null);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const [tenantRes, productsRes, previewRes] = await Promise.all([
        authorizedFetch(`${API_URL}/tenants/${STATIC_TENANT_ID}`),
        authorizedFetch(
          `${API_URL}/tenants/${STATIC_TENANT_ID}/admin/products`,
        ),
        authorizedFetch(`${API_URL}/tenants/${STATIC_TENANT_ID}/preview`),
      ]);

      if (!tenantRes.ok) throw new Error("tenant failed");
      if (!productsRes.ok) throw new Error("products failed");
      if (!previewRes.ok) throw new Error("preview failed");

      const tenantJson = await tenantRes.json();
      const productsJson = await productsRes.json();
      const previewJson = await previewRes.json();

      setTenant(tenantJson ?? null);
      setProducts(productsJson ?? []);
      setPreview(previewJson ?? []);
    } catch (err) {
      console.error(err);
      setError("Failed to load tenant area");
    } finally {
      setLoading(false);
    }
  }, [user, authorizedFetch, STATIC_TENANT_ID]);

  useEffect(() => {
    fetchTenant();
  }, [fetchTenant]);

  useEffect(() => {
    setTenantId(tenant?.id ?? null);
  }, [tenant]);

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
