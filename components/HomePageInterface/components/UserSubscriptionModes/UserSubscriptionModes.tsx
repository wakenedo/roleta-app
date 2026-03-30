"use client";
import { UserState } from "@/context/UserContext/types";
import { UserSubscriptionCard } from "./components/UserSubscriptionCard";
import { UserMaxedSubscription } from "./components/UserMaxedSubscription";
import { USER_SPIN_PLANS, userPlans } from "../../utils/userHelpers";
import { SubscriptionModesSectionTitle } from "../SubscriptionModesSectionTitle";
import { SubscriptionModesSectionFooterDisclaimer } from "../SubscriptionModesSectionFooterDisclaimer";
import { SubscriptionModesSectionBackground } from "../SubscriptionModesSectionBackground";

const UserSubscriptionModes = ({
  userData,
}: {
  userData?: UserState | null;
}) => {
  const CURRENT_USER_PLAN = userData?.user.subscription;
  const userMaxPlan = userData?.user.subscription === "premium+";

  const title = "PLANOS PROMOBET";
  const subTitle =
    "Aumente seus giros globais e desbloqueie multiplicadores nos slots dos parceiros.";
  const message =
    "Assinaturas serão processadas via Stripe. Você poderá cancelar ou alterar seu plano a qualquer momento.";
  if (userMaxPlan) {
    return <UserMaxedSubscription />;
  }

  return (
    <SubscriptionModesSectionBackground>
      <SubscriptionModesSectionTitle title={title} subTitle={subTitle} />
      <div className={`grid gap-8 md:grid-cols-2 max-w-4xl mx-auto `}>
        {userPlans.map((plan) => {
          const config =
            USER_SPIN_PLANS[plan.id as keyof typeof USER_SPIN_PLANS];

          return (
            <UserSubscriptionCard
              config={config}
              plan={plan}
              userPlan={CURRENT_USER_PLAN}
              key={plan.id}
            />
          );
        })}
      </div>
      <SubscriptionModesSectionFooterDisclaimer message={message} />
    </SubscriptionModesSectionBackground>
  );
};

export default UserSubscriptionModes;
