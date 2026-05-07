import { TenantGlobalStats } from "@/context/TenantContext/types";

const AllTimeAnalytics = ({
  tenantGlobalStats,
}: {
  tenantGlobalStats: TenantGlobalStats | undefined;
}) => {
  console.log("AllTimeAnalytics tenantGlobalStats", tenantGlobalStats);
  return (
    <div className=" border border-slate-400 px-2 mr-2 ml-1 mt-2">
      {tenantGlobalStats ? (
        <>
          <div className="border border-slate-400 p-4 mt-2">
            Graph Component
          </div>
          <div className="mt-2">
            <p>Total Clicks: {tenantGlobalStats.totalClicks}</p>
            <p>Total Rewards Shown: {tenantGlobalStats.totalRewardsShown}</p>
            <p>Total Spins: {tenantGlobalStats.totalSpins}</p>
            <p>Total Users: {tenantGlobalStats.totalUsers}</p>
          </div>
        </>
      ) : (
        <p className="mt-2">No analytics data available.</p>
      )}
    </div>
  );
};
export default AllTimeAnalytics;
