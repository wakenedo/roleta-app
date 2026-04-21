import { Tenant } from "@/context/TenantContext/types";
import { Dispatch, SetStateAction } from "react";
import { FaPowerOff } from "react-icons/fa";

const TenantCardHeader = ({
  tenant,
  handleLogout,
  setActiveTab,
  activeTab,
}: {
  tenant: Tenant;
  handleLogout: () => void;
  activeTab: "preview" | "general" | "catalog";
  setActiveTab: Dispatch<SetStateAction<"preview" | "general" | "catalog">>;
}) => {
  return (
    <div className="mt-1 bg-white/90 backdrop-blur">
      <div className="flex justify-between items-center px-3 mx-1 py-2 ">
        <h2 className="text-xl font-bold tracking-wide text-slate-800">
          {tenant.name}
        </h2>

        <FaPowerOff
          size={14}
          className="mr-1 w-fit cursor-pointer text-slate-400 hover:text-red-400 transition"
          onClick={handleLogout}
        />
      </div>
      <hr className="border-t border-slate-300  mx-4 mb-2" />

      <div className="mx-1 text-sm font-light tracking-widest flex space-x-4 rounded-t-2xl cursor-pointer  bg-slate-500/5  w-fit ">
        <div
          className={`p-2 px-5 ${
            activeTab === "general"
              ? "bg-white text-slate-600 shadow-sm rounded-t-2xl underline underline-offset-4"
              : "text-slate-400 "
          }`}
          onClick={() => setActiveTab("general")}
        >
          Dados Gerais
        </div>
        <div
          className={`p-2 px-5  ${
            activeTab === "catalog"
              ? "bg-white text-slate-600 shadow-sm  rounded-t-2xl underline underline-offset-4"
              : "text-slate-400 "
          }`}
          onClick={() => setActiveTab("catalog")}
        >
          Gerenciador de Catalogo
        </div>
        <div
          className={`p-2 px-5  ${
            activeTab === "preview"
              ? "bg-white text-slate-600 shadow-sm  rounded-t-2xl underline underline-offset-4"
              : "text-slate-400 "
          }`}
          onClick={() => setActiveTab("preview")}
        >
          Previa
        </div>
      </div>
    </div>
  );
};
export default TenantCardHeader;
