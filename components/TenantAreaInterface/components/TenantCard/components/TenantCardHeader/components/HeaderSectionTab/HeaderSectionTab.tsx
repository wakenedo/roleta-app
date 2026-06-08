import { Dispatch, SetStateAction } from "react";

const HeaderSectionTab = ({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: Dispatch<SetStateAction<"preview" | "general" | "catalog">>;
  activeTab: "preview" | "general" | "catalog";
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
          activeTab === "catalog"
            ? "bg-white text-slate-600 shadow-sm  rounded-t-2xl "
            : "text-slate-400 "
        }`}
        onClick={() => setActiveTab("catalog")}
      >
        Gerenciador de Catalogo
      </div>
      <div
        className={`p-2 px-5  ${
          activeTab === "preview"
            ? "bg-white text-slate-600 shadow-sm  rounded-t-2xl "
            : "text-slate-400 "
        }`}
        onClick={() => setActiveTab("preview")}
      >
        Previa
      </div>
    </div>
  );
};
export default HeaderSectionTab;
