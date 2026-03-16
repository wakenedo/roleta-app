import { CompleteProductsStepButtonProps } from "@/components/ForTenantsInterface/components/PlanIdInterface/types";

const CompleteProductsStepButton: React.FC<CompleteProductsStepButtonProps> = ({
  products,
  onSave,
  areProductsValidated,
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
