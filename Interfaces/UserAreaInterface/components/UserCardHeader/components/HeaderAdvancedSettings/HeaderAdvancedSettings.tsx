import { BsBug, BsGear, BsLightbulb } from "react-icons/bs";

const HeaderAdvancedSettings = ({
  setActiveModal,
}: {
  setActiveModal: (modal: "advanced" | "bug" | "suggestion" | null) => void;
}) => {
  return (
    <div className="mr-1 right-0 absolute mt-14   rounded  p-1 flex gap-2">
      <div className="relative group">
        <button
          onClick={() => setActiveModal("advanced")}
          className="shadow-md cursor-pointer flex items-center px-1 py-1 rounded bg-slate-400 text-white text-xs hover:bg-slate-700"
        >
          <BsGear size={14} />
        </button>

        <span className="z-99 absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[12px] tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100">
          Avançadas
        </span>
      </div>

      <div className="relative group">
        <button
          onClick={() => setActiveModal("bug")}
          className="shadow-md cursor-pointer flex items-center px-1 py-1 rounded bg-slate-400 text-white text-xs hover:bg-slate-700"
        >
          <BsBug size={14} />
        </button>

        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[12px] tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100">
          Reportar Bug
        </span>
      </div>

      <div className="relative group">
        <button
          onClick={() => setActiveModal("suggestion")}
          className="shadow-md cursor-pointer flex items-center px-1 py-1 rounded bg-slate-400 text-white text-xs hover:bg-slate-700"
        >
          <BsLightbulb size={14} />
        </button>

        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[12px] tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100">
          Sugestões
        </span>
      </div>
    </div>
  );
};

export default HeaderAdvancedSettings;
