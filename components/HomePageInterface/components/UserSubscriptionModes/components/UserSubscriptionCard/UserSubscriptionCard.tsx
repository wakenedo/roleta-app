import { UserSubscriptionCardProps } from "@/components/HomePageInterface/types";
import { useRouter } from "next/navigation";
import { SubscriptionCardsFooterDisclaimer } from "../../../SubscriptionCardsFooterDisclaimer";
import { UserSubscriptionButton } from "../UserSubscriptionButton";
import { UserSubscriptionCardPerks } from "../UserSubscriptionCardPerks";
import { UserSubscriptionCardHeader } from "../UserSubscriptionCardHeader";

const UserSubscriptionCard = ({
  plan,
  config,
  userPlan,
}: UserSubscriptionCardProps) => {
  const message =
    "Os limites podem ser extendidos através de pacotes vendidos separadamente.";
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

      <UserSubscriptionCardHeader plan={plan} />
      <UserSubscriptionCardPerks config={config} />
      <UserSubscriptionButton
        handleSubscribe={handleSubscribe}
        isUserPlan={isUserPlan}
        plan={plan}
      />
      <SubscriptionCardsFooterDisclaimer message={message} />
    </div>
  );
};
export default UserSubscriptionCard;
