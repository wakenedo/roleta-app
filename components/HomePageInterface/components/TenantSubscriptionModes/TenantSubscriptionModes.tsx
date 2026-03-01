"use client";

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

const TenantSubscriptionModes = () => {
  const CURRENT_TENANT_PLAN = "tenant"; // 🔥 mock for now

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

  const handleSubscribe = (planId: string) => {
    console.log("Upgrade tenant to:", planId);
  };

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
        <h2 className="text-5xl font-extrabold tracking-widest bg-gradient-to-r text-amber-500">
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
          const isCurrent = false;

          return (
            <div
              key={plan.id}
              className={`relative  p-8 transition-all duration-300
              ${
                plan.highlight
                  ? "border border-purple-400 shadow-[0_0_45px_rgba(168,85,247,0.4)] scale-105"
                  : "border border-white/10"
              }
              bg-gradient-to-br from-[#111827] to-[#1f2937]`}
            >
              {plan.highlight && (
                <div className="cursor-default absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  IDEAL PARA GRANDES MARCAS
                </div>
              )}

              <h3 className="text-2xl font-bold tracking-wide mb-4 text-[#84e9e4] cursor-default">
                {plan.name}
              </h3>

              <div className="cursor-default text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#84e9e4] to-amber-500 hover:opacity-90 bg-clip-text text-transparent">
                {plan.price}
              </div>

              <ul className="space-y-3 text-gray-300 mb-8 cursor-default">
                <li>🎰 {config.tenantScopedQuota} Giros por Usuário</li>
                <li>📦 Até {config.productLimit} Produtos Ativos</li>
                <li>📊 Dashboard Analítico</li>
                <li>🎨 Personalização de Marca</li>
              </ul>

              <button
                onClick={() => handleSubscribe(plan.id)}
                disabled={isCurrent}
                className={`w-full py-3 font-semibold transition-all duration-300
                ${
                  isCurrent
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#84e9e4] to-amber-500 hover:opacity-90 text-slate-800 cursor-pointer"
                }`}
              >
                {isCurrent ? "Plano Atual" : "Saber Mais"}
              </button>
            </div>
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
