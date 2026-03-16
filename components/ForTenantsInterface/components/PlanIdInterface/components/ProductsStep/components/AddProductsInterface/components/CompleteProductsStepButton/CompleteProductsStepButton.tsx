import { TenantProduct } from "@/context/TenantContext/types";

const CompleteProductsStepButton = ({
  products,
  onSave,
  areProductsValidated,
}: {
  products: TenantProduct[];
  onSave: (products: TenantProduct[]) => void;
  areProductsValidated: boolean;
}) => {
  return (
    <button
      disabled={products.length === 0}
      onClick={() => onSave(products)}
      className={`py-3 rounded-lg ${
        areProductsValidated != true
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-emerald-400"
      }`}
    >
      Finalizar Onboarding
    </button>
  );
};
export default CompleteProductsStepButton;
