import { SeasonTenantStats } from "@/hooks/useTenantSeasonStats";

const SeasonalAnalytics = ({
  seasonStats,
  loading,
}: {
  seasonStats: SeasonTenantStats;
  loading: boolean;
}) => {
  console.log("SeasonalAnalytics seasonStats", seasonStats);
  return (
    <div className="border border-slate-400  px-2 mx-1 mt-2">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <p className="text-md text-slate-700">
            Total Spins: {seasonStats.stats?.totalSpins ?? "N/A"}
          </p>
          <p className="text-md text-slate-700">
            Total Users: {seasonStats.stats?.totalUsers ?? "N/A"}
          </p>
          <p className="text-md text-slate-700">
            Total Rewards Shown: {seasonStats.stats?.totalRewardsShown ?? "N/A"}
          </p>
          <p className="text-lg font-bold">
            Ranking Score: {seasonStats.ranking?.score ?? "N/A"}
          </p>
        </>
      )}
    </div>
  );
};
export default SeasonalAnalytics;
