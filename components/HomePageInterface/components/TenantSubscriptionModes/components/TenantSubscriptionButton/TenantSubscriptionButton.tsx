import { TenantSubscriptionButtonProps } from "@/components/HomePageInterface/types";

const TenantSubscriptionButton = ({
  plan,
  handleSubscribe,
  isTenantPlan,
}: TenantSubscriptionButtonProps) => {
  return (
    <button
      onClick={() => handleSubscribe(plan.id)}
      disabled={isTenantPlan}
      className={`w-full py-3 font-semibold transition-all duration-300
                ${
                  isTenantPlan
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#84e9e4] to-amber-500 hover:opacity-90 text-slate-800 cursor-pointer"
                }`}
    >
      {isTenantPlan ? "Plano Atual" : "Assinar"}
    </button>
  );
};
export default TenantSubscriptionButton;
