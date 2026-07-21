import { Dispatch, SetStateAction } from "react";
import { CatalogSelectionState } from "../../types";
import { buildSelectionMode } from "../../catalog/builders";

interface ToggleSelectMultipleProductsButtonProps {
  catalogSelectionState: CatalogSelectionState;
  setCatalogSelectionState: Dispatch<SetStateAction<CatalogSelectionState>>;
}
const ToggleSelectMultipleProductsButton = ({
  catalogSelectionState,
  setCatalogSelectionState,
}: ToggleSelectMultipleProductsButtonProps) => {
  const isMultipleMode = catalogSelectionState.selectionMode === "multiple";

  return (
    <button
      onClick={() =>
        setCatalogSelectionState(
          buildSelectionMode(
            catalogSelectionState,
            isMultipleMode ? "single" : "multiple",
          ),
        )
      }
      className={`
      w-full rounded-md border px-3 py-2 transition
      ${
        isMultipleMode
          ? "bg-[#00EEFF] text-slate-900 border-[#00EEFF]"
          : "bg-white text-slate-600 border-slate-300 hover:bg-slate-100"
      }
    `}
    >
      {isMultipleMode
        ? "✓ Modo múltiplo ativado"
        : "Selecionar vários produtos"}
    </button>
  );
};
export default ToggleSelectMultipleProductsButton;
