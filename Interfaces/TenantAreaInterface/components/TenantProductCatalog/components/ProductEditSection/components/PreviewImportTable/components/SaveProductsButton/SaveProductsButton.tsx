import { SaveCatalogProductsButtonProps } from "@/Interfaces/TenantAreaInterface/types";

const SaveProductsButton = ({ onClick }: SaveCatalogProductsButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer bg-[#00EEFF] py-3 rounded-lg"
    >
      Importar Produtos
    </button>
  );
};

export default SaveProductsButton;
