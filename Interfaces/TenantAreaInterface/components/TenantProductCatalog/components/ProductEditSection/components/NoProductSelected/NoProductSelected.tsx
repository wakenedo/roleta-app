import { ToggleSelectMultipleProductsButton } from "@/Interfaces/TenantAreaInterface/components/ToggleSelectMultipleProductsButton";
import { CatalogSelectionState } from "@/Interfaces/TenantAreaInterface/types";
import { Dispatch, SetStateAction } from "react";
import { BsBagPlus } from "react-icons/bs";

const NoProductSelected = ({
  catalogSelectionState,
  setCatalogSelectionState,
}: {
  catalogSelectionState: CatalogSelectionState;
  setCatalogSelectionState: Dispatch<SetStateAction<CatalogSelectionState>>;
}) => {
  return (
    <div className="  shadow-inner bg-slate-100 h-full w-full py-2 px-2">
      <div className="drop-shadow items-center justify-center flex flex-col space-y-2  h-full">
        <div className="bg-white p-6 flex flex-col space-y-2 items-center text-slate-500">
          <BsBagPlus size={34} />
          <span>Selecione Um Produto</span>
          <span className="text-sm">
            Você Pode Selecionar Vários Produtos Também
          </span>
          <ToggleSelectMultipleProductsButton
            catalogSelectionState={catalogSelectionState}
            setCatalogSelectionState={setCatalogSelectionState}
          />
        </div>
      </div>
    </div>
  );
};
export default NoProductSelected;
