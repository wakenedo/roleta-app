import UserSubscriptionButton from "../UserSubscriptionButton/UserSubscriptionButton";
import { useRouter } from "next/navigation";

const UserSubscriptionCard = ({
  plan,
  config,
  userPlan,
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
  config: {
    global: number;
    tenantMultiplier: number;
  };
  userPlan: string | undefined;
}) => {
  const router = useRouter();
  const handleSubscribe = (planId: string) => {
    console.log("Subscribe to:", planId);
    router.push(`/UserSubscriptions?plan=${encodeURIComponent(planId)}`);
  };

  const isUserPlan = plan.id === userPlan;
  if (isUserPlan) return null;
  return (
    <div
      key={plan.id}
      className={`relative  p-8 transition-all duration-300
              ${
                plan.highlight
                  ? "border border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.3)] scale-105"
                  : "border border-white/10"
              }
              bg-gradient-to-br from-[#111827] to-[#1f2937]`}
    >
      {plan.highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full cursor-default">
          MAIS POPULAR
        </div>
      )}

      <h3 className="text-2xl font-bold tracking-wide mb-4 text-amber-500 cursor-default">
        {plan.name}
      </h3>

      <div className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#84e9e4] to-amber-500 bg-clip-text text-transparent cursor-default">
        {plan.price}
      </div>

      <ul className="space-y-3 text-gray-300 mb-8 cursor-default">
        <li>🎰 {config.global} Giros Globais</li>
        <li>
          🏢 Multiplicador Tenant:{" "}
          {config.tenantMultiplier > 0
            ? `x${config.tenantMultiplier}`
            : "Não incluso"}
        </li>
      </ul>
      <UserSubscriptionButton
        handleSubscribe={handleSubscribe}
        isUserPlan={isUserPlan}
        plan={plan}
      />
    </div>
  );
};
export default UserSubscriptionCard;
