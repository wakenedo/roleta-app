"use client";

const USER_SPIN_PLANS = {
  free: {
    global: 10,
    tenantMultiplier: 0,
  },
  premium: {
    global: 20,
    tenantMultiplier: 0.5,
  },
  "premium+": {
    global: 30,
    tenantMultiplier: 1,
  },
};

const UserSubscriptionModes = () => {
  const CURRENT_USER_PLAN = "free"; // 🔥 mock for now

  const plans = [
    {
      id: "free",
      name: "FREE",
      price: "Grátis",
    },
    {
      id: "premium",
      name: "PREMIUM",
      price: "R$29/mês",
      highlight: false,
    },
    {
      id: "premium+",
      name: "PREMIUM+",
      price: "R$49/mês",
      highlight: true,
    },
  ];

  const handleSubscribe = (planId: string) => {
    console.log("Subscribe to:", planId);
  };

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

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan) => {
          const config =
            USER_SPIN_PLANS[plan.id as keyof typeof USER_SPIN_PLANS];
          const isFreeUser = CURRENT_USER_PLAN === plan.id;

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

              <button
                onClick={() => handleSubscribe(plan.id)}
                disabled={isFreeUser}
                className={`w-full py-3  font-semibold transition-all duration-300
                ${
                  isFreeUser
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#84e9e4] to-amber-500 hover:opacity-90 text-slate-800 cursor-pointer"
                }`}
              >
                {isFreeUser ? "Plano Atual" : "Assinar"}
              </button>
            </div>
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
