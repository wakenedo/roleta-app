import { Dispatch, SetStateAction } from "react";

const DUserActionsHeader = ({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: Dispatch<SetStateAction<"limits" | "extras" | "report">>;
  activeTab: "limits" | "extras" | "report";
}) => {
  return (
    <div className=" text-xs font-light tracking-widest flex space-x-2 rounded-t-xl bg-white/5 backdrop-blur cursor-pointer w-fit ">
      <div
        className={`p-2 px-2 ${
          activeTab === "limits"
            ? "bg-gray-100 backdrop-blur font-extrabold text-[#84e9e4] text-shadow-2xs shadow-sm rounded-t-xl "
            : "text-slate-500 "
        }`}
        onClick={() => setActiveTab("limits")}
      >
        Limites
      </div>
      <div
        className={`p-2 px-2  ${
          activeTab === "extras"
            ? "bg-gray-100 backdrop-blur font-extrabold text-[#84e9e4] text-shadow-2xs shadow-sm  rounded-t-xl "
            : "text-slate-500 "
        }`}
        onClick={() => setActiveTab("extras")}
      >
        Extras
      </div>
      <div
        className={`p-2 px-2  ${
          activeTab === "report"
            ? "bg-red-400 text-slate-50 shadow-sm text-shadow-2xs font-extrabold rounded-t-xl "
            : "text-slate-500 "
        }`}
        onClick={() => setActiveTab("report")}
      >
        Reportar
      </div>
    </div>
  );
};
export default DUserActionsHeader;
