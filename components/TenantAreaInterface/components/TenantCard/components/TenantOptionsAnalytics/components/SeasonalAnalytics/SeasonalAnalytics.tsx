import { SeasonTenantStats } from "@/hooks/useTenantSeasonStats";
import { InfoRow } from "../../../TenantGeneralInterface/components/InfoRow";

const SeasonalAnalytics = ({
  seasonStats,
  loading,
}: {
  seasonStats: SeasonTenantStats;
  loading: boolean;
}) => {
  console.log("SeasonalAnalytics seasonStats", seasonStats);
  return (
    <div className="flex flex-col justify-between   px-1 mx-1 mt-2 md:max-h-160">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="flex flex-col justify-between    md:max-h-160 ">
          <div className="border border-slate-200 bg-slate-200 p-4 mt-2 md:h-dvh">
            Dynamic Component
          </div>
          <div className="mt-2">
            <InfoRow
              label="Giros"
              value={seasonStats.stats?.totalSpins ?? "N/A"}
            />
            <InfoRow
              label="Novos Usuários"
              value={seasonStats.stats?.totalUsers ?? "N/A"}
            />
            <InfoRow
              label="Recompensas Exibidas"
              value={seasonStats.stats?.totalRewardsShown ?? "N/A"}
            />
            <InfoRow
              label="Pontuação do Ranking"
              value={seasonStats.ranking?.score ?? "N/A"}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default SeasonalAnalytics;
