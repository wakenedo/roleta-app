import { UserSubscriptionButtonProps } from "@/components/HomePageInterface/types";

const UserSubscriptionButton = ({
  plan,
  isUserPlan,
  handleSubscribe,
}: UserSubscriptionButtonProps) => {
  return (
    <button
      onClick={() => handleSubscribe(plan.id)}
      disabled={isUserPlan}
      className={`w-full py-3  font-semibold transition-all duration-300
                ${
                  isUserPlan
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#84e9e4] to-amber-500 hover:opacity-90 text-slate-800 cursor-pointer"
                }`}
    >
      {isUserPlan ? "Plano Atual" : "Assinar"}
    </button>
  );
};

export default UserSubscriptionButton;
