import { TenantSubscriptionCardProps } from "@/components/HomePageInterface/types";
import { TenantSubscriptionButton } from "../TenantSubscriptionButton";
import { useRouter } from "next/navigation";
import { TenantSubscriptionCardPerks } from "../TenantSubscriptionCardPerks";
import { SubscriptionCardsFooterDisclaimer } from "../../../SubscriptionCardsFooterDisclaimer";
import { TenantSubscriptionCardHeader } from "../TenantSubscriptionCardHeader";

const TenantSubscriptionCard = ({
  plan,
  config,
  tenantPlan,
}: TenantSubscriptionCardProps) => {
  const message =
    "Os limites podem ser extendidos através de pacotes vendidos separadamente.";
  const router = useRouter();
  const handleSubscribe = (planId: string) => {
    router.push(`/ForTenants?plan=${planId}`);
    console.log("Upgrade tenant to:", planId);
  };
  const isTenantPlan = plan.id === tenantPlan;

  if (isTenantPlan) return null;

  return (
    <div
      key={plan.id}
      className={`relative  py-8 px-6 transition-all duration-300
              ${
                plan.highlight
                  ? "border border-yellow-400 shadow-[0_0_45px_rgba(168,85,247,0.4)] scale-105"
                  : "border border-white/10"
              }
              bg-gradient-to-br from-[#111827] to-[#1f2937]`}
    >
      {plan.highlight && (
        <div className="cursor-default absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-800 text-xs font-bold tracking-widest px-6 text-center py-1 line-clamp-2 rounded-full">
          IDEAL PARA GRANDES MARCAS
        </div>
      )}
      <TenantSubscriptionCardHeader plan={plan} />
      <TenantSubscriptionCardPerks config={config} />
      <TenantSubscriptionButton
        handleSubscribe={handleSubscribe}
        isTenantPlan={isTenantPlan}
        plan={plan}
      />
      <SubscriptionCardsFooterDisclaimer message={message} />
    </div>
  );
};
export default TenantSubscriptionCard;
