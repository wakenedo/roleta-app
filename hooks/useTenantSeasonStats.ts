"use client";

import { SeasonStatsProps } from "@/context/TenantContext/types";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export function useTenantSeasonStats(tenantId: string | undefined | null) {
  const [seasonStats, setSeasonStats] = useState<SeasonStatsProps>();
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  async function fetchSeasonStats() {
    try {
      setLoading(true);
      setLoaded(false);
      const res = await fetch(`${API_URL}/seasons/${tenantId}`, {
        cache: "no-store",
      });
      const data = await res.json();
      setSeasonStats(data);
    } catch (error) {
      console.error("Error fetching season stats:", error);
    } finally {
      setLoading(false);
      setLoaded(true);
    }
  }

  useEffect(() => {
    if (!tenantId && !loaded && seasonStats) return;
    else fetchSeasonStats();
  }, [tenantId]);

  return { seasonStats, loading };
}
