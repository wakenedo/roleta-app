import { StatsProps } from "@/context/TenantContext/types";
import { InfoRow } from "../../../TenantGeneralInterface/components/InfoRow";
import { DynamicStatsInterface } from "../DynamicStatsInterface";

const AllTimeAnalytics = ({
  tenantGlobalStats,
}: {
  tenantGlobalStats: StatsProps | undefined;
}) => {
  console.log("AllTimeAnalytics tenantGlobalStats", tenantGlobalStats);
  return (
    <div className="flex flex-col justify-between  px-1   md:max-h-160 ">
      {tenantGlobalStats ? (
        <>
          <DynamicStatsInterface
            engagementStats={tenantGlobalStats.engagement}
            mode="global"
          />
          <div className="mt-2">
            <InfoRow
              label="Usuários"
              value={
                <span className="font-semibold">
                  {tenantGlobalStats.platform.totalUsers.toString()}
                </span>
              }
            />
            <InfoRow
              label="Giros"
              value={
                <span className="font-semibold">
                  {tenantGlobalStats.platform.totalSpins.toString()}
                </span>
              }
            />

            <InfoRow
              label="Recompensas Exibidas"
              value={
                <span className="font-semibold">
                  {tenantGlobalStats.platform.totalRewardsShown.toString()}
                </span>
              }
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
