"use client";
import { Tenant } from "@/context/TenantContext/types";
import TenantSubscriptionCard from "./components/TenantSubscriptionCard/TenantSubscriptionCard";
import { TenantMaxedSubscription } from "./components/TenantMaxedSubscription";

const TENANT_PLANS = {
  tenant: {
    tenantScopedQuota: 10,
    productLimit: 100,
  },
  tenantPro: {
    tenantScopedQuota: 20,
    productLimit: 250,
  },
  tenantPremium: {
    tenantScopedQuota: 40,
    productLimit: 500,
  },
};

const TenantSubscriptionModes = ({ tenant }: { tenant?: Tenant | null }) => {
  const CURRENT_TENANT_PLAN = tenant?.subscription; // 🔥 mock for now

  const plans = [
    {
      id: "tenant",
      name: "TENANT",
      price: "R$199/mês",
    },
    {
      id: "tenantPro",
      name: "TENANT PRO",
      price: "R$399/mês",
    },
    {
      id: "tenantPremium",
      name: "TENANT PREMIUM",
      price: "R$699/mês",
      highlight: true,
    },
  ];

  const tenantMaxPlan = tenant?.subscription === "tenantPremium";

  if (tenantMaxPlan) {
    return null;
  }

  return (
    <section
      id="subscription-modes-tenant"
      className="relative md:mx-2 my-20  overflow-hidden bg-gradient-to-br from-[#0b0f1f] via-[#141b3a] to-[#1d1147] text-white p-16"
    >
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-purple-500 opacity-10 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 text-center mb-16 cursor-default">
        <h2 className="text-5xl font-extrabold tracking-widest bg-gradient-to-r text-[#84e9e4] ">
          PLANOS PARA PARCEIROS
        </h2>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Escale sua presença na Promobet, aumente seus giros e amplie sua
          vitrine de produtos.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan) => {
          const config = TENANT_PLANS[plan.id as keyof typeof TENANT_PLANS];

          return (
            <TenantSubscriptionCard
              config={config}
              plan={plan}
              tenantPlan={CURRENT_TENANT_PLAN}
              key={plan.id}
            />
          );
        })}
      </div>

      <div className="mt-16 text-center text-xs text-gray-500 max-w-3xl mx-auto cursor-default">
        Assinaturas para parceiros serão processadas via Stripe. É possível
        alterar ou cancelar seu plano a qualquer momento.
      </div>
    </section>
  );
};

export default TenantSubscriptionModes;
