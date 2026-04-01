"use client";

import { useEffect, useState } from "react";
import { SeasonTenant } from "./types";

export function useSeasonLeaderboard(limit = 50) {
  const [data, setData] = useState<SeasonTenant[]>([]);
  const [leaderboardLoading, setLeaderboardLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        setLeaderboardLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/seasons/leaderboard?limit=${limit}`,
          {
            cache: "no-store",
          },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch leaderboard");
        }

        const json = await res.json();
        console.log("Raw Leaderboard Response:", res);

        setData(json.leaderboard || []);
      } finally {
        setLeaderboardLoading(false);
      }
    }

    fetchLeaderboard();
  }, [limit]);

  return { data, leaderboardLoading };
}
