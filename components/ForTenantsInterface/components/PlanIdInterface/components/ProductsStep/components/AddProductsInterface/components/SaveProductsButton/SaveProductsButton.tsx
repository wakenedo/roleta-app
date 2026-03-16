import { SaveProductsButtonProps } from "@/components/ForTenantsInterface/components/PlanIdInterface/types";
const SaveProductsButton = ({ onClick }: SaveProductsButtonProps) => {
  return (
    <button onClick={onClick} className="bg-indigo-500 py-3 rounded-lg">
      Importar Produtos
    </button>
  );
};

export default SaveProductsButton;
