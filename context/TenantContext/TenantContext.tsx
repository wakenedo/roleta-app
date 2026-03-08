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
import {
  Tenant,
  TenantContextProps,
  TenantProduct,
  TenantQuota,
} from "./types";
import { useParams } from "next/navigation";
import { useUser } from "../UserContext/UserContext";
import { useTenantAuth } from "../TenantAuthContext/TenantAuthContext";

const TenantContext = createContext<TenantContextProps | undefined>(undefined);

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const TenantProvider = ({ children }: { children: ReactNode }) => {
  const { tenantFetch } = useTenantAuth();
  const { tenantId } = useParams();
  const { data } = useUser();
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [products, setProducts] = useState<TenantProduct[]>([]);
  const [tenantQuota, setTenantQuota] = useState<TenantQuota>(null);
  const [preview, setPreview] = useState<TenantProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [previewLoaded, setPreviewLoaded] = useState(false);

  const STATIC_TENANT_ID = process.env.NEXT_PUBLIC_DEFAULT_TENANT;
  const paramTenantId = tenantId as string | undefined;

  const isTestUser = data?.user?.id === "9WmAGXUGtkWjq3bqCErXyFETZ4y2";

  const resolvedTenantId = isTestUser
    ? STATIC_TENANT_ID
    : (paramTenantId ?? null);
  console.log("TenantContext ParamTenantId", paramTenantId);
  console.log("Tenant test ownerid", isTestUser);

  const fetchTenant = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [tenantRes, quotaRes] = await Promise.all([
        tenantFetch(`${API_URL}/tenants/${resolvedTenantId}`),
        tenantFetch(`${API_URL}/tenants/${resolvedTenantId}/quota`),
      ]);

      if (!tenantRes.ok) throw new Error("tenant failed");
      if (!quotaRes.ok) throw new Error("tenant quota failed");

      const tenantJson = await tenantRes.json();
      const tenantQuotaJson = await quotaRes.json();

      setTenant(tenantJson ?? null);
      setTenantQuota(tenantQuotaJson.quota ?? null);
    } catch (err) {
      console.error(err);
      setError("Failed to load tenant");
    } finally {
      setLoading(false);
    }
  }, [tenantFetch, resolvedTenantId]);

  const loadProducts = async () => {
    if (!resolvedTenantId || productsLoaded) return;

    try {
      const res = await tenantFetch(
        `${API_URL}/tenants/${resolvedTenantId}/admin/products`,
      );
      if (!res.ok) throw new Error("products failed");
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
      const res = await tenantFetch(
        `${API_URL}/tenants/${resolvedTenantId}/preview`,
      );
      if (!res.ok) throw new Error("preview failed");
      const json = await res.json();
      setPreview(json ?? []);
      setPreviewLoaded(true);
      console.log("Fetching preview from API");
    } catch (err) {
      console.error(err);
    }
  };

  const refreshQuota = async () => {
    const res = await tenantFetch(
      `${API_URL}/tenants/${resolvedTenantId}/quota`,
    );
    const json = await res.json();
    setTenantQuota(json.quota);
  };

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
        tenantQuota,
        loading,
        error,
        setTenant,
        refresh: fetchTenant,
        refreshQuota,
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
