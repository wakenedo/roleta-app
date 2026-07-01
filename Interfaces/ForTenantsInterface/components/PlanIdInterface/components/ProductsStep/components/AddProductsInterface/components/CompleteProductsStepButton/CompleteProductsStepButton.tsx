import { CompleteProductsStepButtonProps } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/types";

const CompleteProductsStepButton = ({
  products,
  onSave,
  areProductsValidated,
}: CompleteProductsStepButtonProps) => {
  console.log("Products in CompleteProductsStepButton:", products);
  console.log("Are products validated?", areProductsValidated);
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
