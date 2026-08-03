import { CompleteProductsStepButtonProps } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/types";

const CompleteProductsStepButton = ({
  products,
  onSave,
  areProductsValidated,
}: CompleteProductsStepButtonProps) => {
  return (
    <button
      disabled={products.length === 0}
      onClick={() => onSave(products, "onboard")}
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
