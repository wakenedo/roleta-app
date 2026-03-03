const TenantSubscriptionButton = ({
  plan,
  handleSubscribe,
  isTenantPlan,
}: {
  plan:
    | {
        id: string;
        name: string;
        price: string;
        highlight?: undefined;
      }
    | {
        id: string;
        name: string;
        price: string;
        highlight: boolean;
      };
  handleSubscribe: (planId: string) => void;
  isTenantPlan: boolean;
}) => {
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
      {isTenantPlan ? "Plano Atual" : "Saber Mais"}
    </button>
  );
};
export default TenantSubscriptionButton;
