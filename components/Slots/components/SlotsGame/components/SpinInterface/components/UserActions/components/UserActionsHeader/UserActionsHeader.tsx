import { Dispatch, SetStateAction } from "react";

const UserActionsHeader = ({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: Dispatch<SetStateAction<"limits" | "extras" | "report">>;
  activeTab: "limits" | "extras" | "report";
}) => {
  return (
    <div className=" text-xs font-light tracking-widest flex space-x-2 rounded-t-xl bg-white/15 backdrop-blur cursor-pointer w-fit ">
      <div
        className={`p-2 px-2 ${
          activeTab === "limits"
            ? "bg-white/30 backdrop-blur text-slate-700 shadow-sm rounded-t-xl "
            : "text-slate-600 "
        }`}
        onClick={() => setActiveTab("limits")}
      >
        Limites
      </div>
      <div
        className={`p-2 px-2  ${
          activeTab === "extras"
            ? "bg-white/30 backdrop-blur text-slate-700 shadow-sm  rounded-t-xl "
            : "text-slate-600 "
        }`}
        onClick={() => setActiveTab("extras")}
      >
        Extras
      </div>
      <div
        className={`p-2 px-2  ${
          activeTab === "report"
            ? "bg-red-400 text-slate-50 shadow-sm  rounded-t-xl "
            : "text-slate-600 "
        }`}
        onClick={() => setActiveTab("report")}
      >
        Reportar
      </div>
    </div>
  );
};
export default UserActionsHeader;
