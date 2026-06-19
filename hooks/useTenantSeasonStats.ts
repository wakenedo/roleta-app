"use client";

import { SeasonStatsProps } from "@/context/TenantContext/types";
import { useEffect, useRef, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function useTenantSeasonStats(tenantId: string | undefined | null) {
  const [seasonStats, setSeasonStats] = useState<SeasonStatsProps>();
  const [loading, setLoading] = useState(false);

  const lastFetchedTenant = useRef<string | null>(null);

  useEffect(() => {
    if (!tenantId) return;

    if (lastFetchedTenant.current === tenantId) return;

    const fetchSeasonStats = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API_URL}/seasons/${tenantId}`, {
          cache: "no-store",
        });

        const data = await res.json();

        setSeasonStats(data);
        lastFetchedTenant.current = tenantId;
      } catch (error) {
        console.error("Error fetching season stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSeasonStats();
  }, [tenantId]);

  return { seasonStats, loading };
}
