"use client";

import { useMemo } from "react";
import { useTenants } from "@/hooks/useTenants";
import { PopularTenants } from "../PopularTenants";

const ActiveTenantsInterface = () => {
  const { tenants, filtered, loading, error, search, setSearch } = useTenants();

  // For now: simple popularity logic
  // Later this can come from backend (recommended)
  const popularTenants = useMemo(() => {
    return [...tenants]
      .sort((a, b) => {
        const aCooldown = a.settings?.cooldownMs ?? 3000;
        const bCooldown = b.settings?.cooldownMs ?? 3000;

        // Lower cooldown = more engaging = more popular (temporary heuristic)
        return aCooldown - bCooldown;
      })
      .slice(0, 6);
  }, [tenants]);

  const featuredTenant = popularTenants[0] || null;

  return (
    <div className="pt-2 space-y-10 pb-10">
      <PopularTenants
        featured={featuredTenant}
        tenants={popularTenants}
        loading={loading}
        error={error}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

export default ActiveTenantsInterface;
