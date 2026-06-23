import { TENANT_PLANS, tenantPlans } from "../../utils/tenantHelpers";
import { SubscriptionModesSectionFooterDisclaimer } from "../SubscriptionModesSectionFooterDisclaimer";
import { SubscriptionModesSectionTitle } from "../SubscriptionModesSectionTitle";
import { SubscriptionModesSectionBackground } from "../SubscriptionModesSectionBackground";
import { TenantSubscriptionModesProps } from "../../types";
import { TenantSubscriptionCard } from "./components/TenantSubscriptionCard";

const TenantSubscriptionModes = ({
  currentTenantPlan,
  tenantMaxedPlan,
}: TenantSubscriptionModesProps) => {
  const title = "PLANOS PARA PARCEIROS";
  const subTitle =
    "Escale sua presença na Promobet, aumente seus giros e amplie sua vitrine de produtos.";
  const message =
    "Assinaturas para parceiros serão processadas via Stripe. É possível alterar ou cancelar seu plano a qualquer momento.";

  if (tenantMaxedPlan) {
    return null;
  }

  return (
    <SubscriptionModesSectionBackground>
      <SubscriptionModesSectionTitle title={title} subTitle={subTitle} />
      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {tenantPlans.map((plan) => {
          const config = TENANT_PLANS[plan.id as keyof typeof TENANT_PLANS];

          return (
            <TenantSubscriptionCard
              config={config}
              plan={plan}
              tenantPlan={currentTenantPlan}
              key={plan.id}
            />
          );
        })}
      </div>
      <SubscriptionModesSectionFooterDisclaimer message={message} />
    </SubscriptionModesSectionBackground>
  );
};

export default TenantSubscriptionModes;
