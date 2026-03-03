const UserSubscriptionButton = ({
  plan,
  isUserPlan,
  handleSubscribe,
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
  isUserPlan: boolean;
  handleSubscribe: (planId: string) => void;
}) => {
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
