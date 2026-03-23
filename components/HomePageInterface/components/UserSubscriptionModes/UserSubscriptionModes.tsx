"use client";
import { UserState } from "@/context/UserContext/types";
import { UserSubscriptionCard } from "./components/UserSubscriptionCard";
import { UserMaxedSubscription } from "./components/UserMaxedSubscription";

const USER_SPIN_PLANS = {
  free: {
    global: 10,
    tenantMultiplier: 0,
    monthlyGlobalTenantsQuota: 100,
    weeklyGlobalTenantsQuota: 25,
  },
  premium: {
    global: 20,
    tenantMultiplier: 0.5,
    monthlyGlobalTenantsQuota: 200,
    weeklyGlobalTenantsQuota: 50,
  },
  "premium+": {
    global: 30,
    tenantMultiplier: 1,
    monthlyGlobalTenantsQuota: 400,
    weeklyGlobalTenantsQuota: 100,
  },
};

const UserSubscriptionModes = ({
  userData,
}: {
  userData?: UserState | null;
}) => {
  const CURRENT_USER_PLAN = userData?.user.subscription; // 🔥 mock for now
  const plans = [
    {
      id: "premium",
      name: "PREMIUM",
      price: "R$39,",
      highlight: false,
    },
    {
      id: "premium+",
      name: "PREMIUM+",
      price: "R$59,",
      highlight: true,
    },
  ];

  const userMaxPlan = userData?.user.subscription === "premium+";

  if (userMaxPlan) {
    return <UserMaxedSubscription />;
  }

  return (
    <section className="relative md:mx-2 my-20  overflow-hidden bg-gradient-to-br from-[#0b0f1f] via-[#141b3a] to-[#1d1147] text-white p-16">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#84e9e4] opacity-10 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 text-center mb-16 cursor-default">
        <h2 className="text-5xl font-extrabold tracking-widest text-[#84e9e4]">
          PLANOS PROMOBET
        </h2>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Aumente seus giros globais e desbloqueie multiplicadores nos slots dos
          parceiros.
        </p>
      </div>

      <div className={`grid gap-8 md:grid-cols-2 max-w-4xl mx-auto `}>
        {plans.map((plan) => {
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
      <div className="mt-16 text-center text-xs text-gray-500 max-w-3xl mx-auto cursor-default">
        Assinaturas serão processadas via Stripe. Você poderá cancelar ou
        alterar seu plano a qualquer momento.
      </div>
    </section>
  );
};

export default UserSubscriptionModes;
