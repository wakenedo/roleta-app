import { InterfaceSwitch } from "@/components/InterfaceSwitch";
import { useState } from "react";
import { AllTimeAnalytics } from "./components/AllTimeAnalytics";
import { SeasonalAnalytics } from "./components/SeasonalAnalytics";
import { Tenant } from "@/context/TenantContext/types";
import { useTenantSeasonStats } from "@/hooks/useTenantSeasonStats";
import { TenantSectionMarker } from "../../../TenantSectionMarker";

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
    <div className="w-full h-full md:w-1/2 flex flex-col ">
      <TenantSectionMarker markerTitle="Estatísticas" />
      <div className="items-center -mt-1">
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
