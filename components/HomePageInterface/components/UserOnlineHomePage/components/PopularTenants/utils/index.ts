import { TenantWithSeason } from "@/components/HomePageInterface/types";
import { Tenant } from "@/context/TenantContext/types";
import { SeasonTenant } from "@/hooks/types";

const mergeTenantsWithLeaderboard = (
  tenants: Tenant[],
  leaderboard: SeasonTenant[],
): TenantWithSeason[] => {
  const leaderboardMap = new Map(leaderboard.map((l) => [l.tenantId, l]));

  return tenants.map((tenant) => {
    const seasonData = leaderboardMap.get(tenant.id);

    return {
      ...tenant,
      ranking: seasonData?.ranking,
      stats: seasonData?.stats,
    };
  });
};

const getMedal = (index: number) => {
  switch (index) {
    case 0:
      return "🥇";
    case 1:
      return "🥈";
    case 2:
      return "🥉";
    default:
      return null;
  }
};

export { mergeTenantsWithLeaderboard, getMedal };
