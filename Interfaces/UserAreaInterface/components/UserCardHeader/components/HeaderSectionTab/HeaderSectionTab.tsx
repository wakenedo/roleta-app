import { Dispatch, SetStateAction } from "react";

const HeaderSectionTab = ({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: Dispatch<
    SetStateAction<"general" | "visited" | "spin-history" | "trophies">
  >;
  activeTab: "general" | "visited" | "spin-history" | "trophies";
}) => {
  return (
    <div className="mx-1 text-sm font-light tracking-widest flex space-x-4 rounded-t-2xl cursor-pointer  bg-slate-500/5  w-fit ">
      <div
        className={`p-2 px-5 ${
          activeTab === "general"
            ? "bg-white text-slate-600 shadow-sm rounded-t-2xl "
            : "text-slate-400 "
        }`}
        onClick={() => setActiveTab("general")}
      >
        Dados Gerais
      </div>
      <div
        className={`p-2 px-5  ${
          activeTab === "visited"
            ? "bg-white text-slate-600 shadow-sm  rounded-t-2xl "
            : "text-slate-400 "
        }`}
        onClick={() => setActiveTab("visited")}
      >
        Produtos Visitados
      </div>
      <div
        className={`p-2 px-5  ${
          activeTab === "spin-history"
            ? "bg-white text-slate-600 shadow-sm  rounded-t-2xl "
            : "text-slate-400 "
        }`}
        onClick={() => setActiveTab("spin-history")}
      >
        Histórico de Giros
      </div>
      <div
        className={`p-2 px-5  ${
          activeTab === "trophies"
            ? "bg-white text-slate-600 shadow-sm  rounded-t-2xl "
            : "text-slate-400 "
        }`}
        onClick={() => setActiveTab("trophies")}
      >
        Troféus
      </div>
    </div>
  );
};
export default HeaderSectionTab;
