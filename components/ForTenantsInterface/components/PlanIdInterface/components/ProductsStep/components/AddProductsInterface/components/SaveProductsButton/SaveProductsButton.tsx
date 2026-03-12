import { TenantProduct } from "@/context/TenantContext/types";

const SaveProductsButton = ({
  products,
  onSave,
}: {
  products: TenantProduct[];
  onSave: (products: TenantProduct[]) => void;
}) => {
  return (
    <button
      onClick={() => onSave(products)}
      className="bg-indigo-500 py-3 rounded-lg"
    >
      Finalizar Onboarding
    </button>
  );
};
export default SaveProductsButton;
