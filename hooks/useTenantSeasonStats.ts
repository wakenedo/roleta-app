"use client";

import { useEffect, useState } from "react";

export type SeasonPlatformStats = {
  ranking?: {
    score: number;
  };
  stats?: {
    platform: {
      totalSpins: number;
      totalUsers: number;
      totalRewardsShown: number;
    };
  };
};
export function useTenantSeasonStats(tenantId: string) {
  const [seasonStats, setSeasonStats] = useState<SeasonPlatformStats>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSeasonStats() {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/seasons/${tenantId}`,
          {
            cache: "no-store",
          },
        );
        const data = await res.json();
        setSeasonStats(data);
      } catch (error) {
        console.error("Error fetching season stats:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSeasonStats();
  }, [tenantId]);

  return { seasonStats, loading };
}
