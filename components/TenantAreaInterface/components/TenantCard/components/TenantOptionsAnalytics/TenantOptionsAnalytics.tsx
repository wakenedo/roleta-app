import { InterfaceSwitch } from "@/components/InterfaceSwitch";
import { useState } from "react";
import { AllTimeAnalytics } from "./components/AllTimeAnalytics";
import { SeasonalAnalytics } from "./components/SeasonalAnalytics";

const TenantOptionsAnalytics = () => {
  const [onToggleChange, setOnToggleChange] = useState(
    "left" as "left" | "right",
  );

  const handleToggle = (side: "left" | "right") => {
    setOnToggleChange(side);
  };

  return (
    <div className="w-full md:w-1/2 border border-slate-300">
      <span className=" pb-1  px-2 md:text-md tracking-widest font-bold text-slate-800  line-clamp-1  ">
        Estatisticas
      </span>
      <div className="mx-1 -mt-5">
        <InterfaceSwitch
          leftComponent={<AllTimeAnalytics />}
          rightComponent={<SeasonalAnalytics />}
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
