"use client";

import { Tenant } from "@/context/TenantContext/types";
import { useEffect, useState, useCallback, useMemo } from "react";
import { UseTenantsReturn } from "./types";

export const useTenants = (): UseTenantsReturn => {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const fetchTenants = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tenants`);

      if (!res.ok) throw new Error("Failed to fetch tenants");

      const data = await res.json();

      setTenants(data.tenants ?? []);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTenants();
  }, [fetchTenants]);

  const filtered = useMemo(() => {
    if (!search) return tenants;

    return tenants.filter((t) =>
      t.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, tenants]);

  return {
    tenants,
    filtered,
    loading,
    error,
    search,
    setSearch,
    refetch: fetchTenants,
  };
};
