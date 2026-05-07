import { InterfaceSwitch } from "@/components/InterfaceSwitch";
import { useState } from "react";
import { AllTimeAnalytics } from "./components/AllTimeAnalytics";
import { SeasonalAnalytics } from "./components/SeasonalAnalytics";
import { Tenant } from "@/context/TenantContext/types";
import { useTenantSeasonStats } from "@/hooks/useTenantSeasonStats";

const TenantOptionsAnalytics = ({ tenant }: { tenant: Tenant }) => {
  const { seasonStats, loading } = useTenantSeasonStats(tenant.id);

  const [onToggleChange, setOnToggleChange] = useState(
    "left" as "left" | "right",
  );
  const tenantGlobalStats = tenant?.stats;

  const handleToggle = (side: "left" | "right") => {
    setOnToggleChange(side);
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col ">
      <div className="border border-slate-400  py-2 ml-1 mr-1">
        <span className="px-2 text-md tracking-widest font-bold line-clamp-1">
          Estatísticas
        </span>
      </div>
      <div className="items-center -mt-2">
        <InterfaceSwitch
          leftComponent={
            <AllTimeAnalytics tenantGlobalStats={tenantGlobalStats} />
          }
          rightComponent={
            <SeasonalAnalytics seasonStats={seasonStats} loading={loading} />
          }
          leftLabel="All Time"
          rightLabel="Temporadas"
          onToggleChange={handleToggle}
          activeSide={onToggleChange}
        />
      </div>
    </div>
  );
};
export default TenantOptionsAnalytics;
