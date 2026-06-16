import { InfoRow } from "../../../TenantGeneralInterface/components/InfoRow";
import { SeasonStatsProps } from "@/context/TenantContext/types";
import { DynamicStatsInterface } from "../DynamicStatsInterface";

const SeasonalAnalytics = ({
  seasonStats,
  loading,
}: {
  seasonStats: SeasonStatsProps;
  loading: boolean;
}) => {
  console.log("SeasonalAnalytics seasonStats", seasonStats);
  return (
    <div className="flex flex-col justify-between   px-1  md:max-h-160">
      {seasonStats ? (
        <>
          <DynamicStatsInterface
            engagementStats={seasonStats.stats.engagement}
            mode="season"
          />
          <div className="mt-2">
            <InfoRow
              label="Giros"
              value={seasonStats.stats.platform.totalSpins ?? "N/A"}
            />
            <InfoRow
              label="Novos Usuários"
              value={seasonStats.stats.platform.totalUsers ?? "N/A"}
            />
            <InfoRow
              label="Recompensas Exibidas"
              value={seasonStats.stats.platform.totalRewardsShown ?? "N/A"}
            />
            <InfoRow
              label="Pontuação do Ranking"
              value={seasonStats.ranking?.score ?? "N/A"}
            />
          </div>
        </>
      ) : (
        <p className="mt-2">No analytics data available.</p>
      )}
    </div>
  );
};
export default SeasonalAnalytics;
