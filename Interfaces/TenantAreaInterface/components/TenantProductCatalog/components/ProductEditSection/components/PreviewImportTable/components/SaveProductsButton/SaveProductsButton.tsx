import { SaveCatalogProductsButtonProps } from "@/Interfaces/TenantAreaInterface/types";

const SaveProductsButton = ({ onClick }: SaveCatalogProductsButtonProps) => {
  return (
    <button onClick={onClick} className="bg-indigo-500 py-3 rounded-lg">
      Importar Produtos
    </button>
  );
};

export default SaveProductsButton;
