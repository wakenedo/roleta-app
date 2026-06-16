import { StatsProps } from "@/context/TenantContext/types";
import { InfoRow } from "../../../TenantGeneralInterface/components/InfoRow";

const AllTimeAnalytics = ({
  tenantGlobalStats,
}: {
  tenantGlobalStats: StatsProps | undefined;
}) => {
  console.log("AllTimeAnalytics tenantGlobalStats", tenantGlobalStats);
  return (
    <div className="flex flex-col justify-between  px-1 mx-1 mt-2 md:max-h-160 ">
      {tenantGlobalStats ? (
        <>
          <div className="border border-slate-200 bg-slate-200 p-4 mt-2 md:h-dvh">
            Dynamic Component
          </div>
          <div className="mt-2">
            <InfoRow
              label="Giros"
              value={tenantGlobalStats.platform.totalSpins.toString()}
            />
            <InfoRow
              label="Clicks"
              value={tenantGlobalStats.platform.totalClicks.toString()}
            />
            <InfoRow
              label="Usuários"
              value={tenantGlobalStats.platform.totalUsers.toString()}
            />
            <InfoRow
              label="Recompensas Exibidas"
              value={tenantGlobalStats.platform.totalRewardsShown.toString()}
            />
          </div>
        </>
      ) : (
        <p className="mt-2">No analytics data available.</p>
      )}
    </div>
  );
};
export default AllTimeAnalytics;
