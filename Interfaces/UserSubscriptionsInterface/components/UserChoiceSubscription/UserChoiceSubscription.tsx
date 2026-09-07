import { AreaBackground } from "@/backgrounds/AreaBackground";

//Align shape with USER_SPIN_PLANS

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "Grátis",
    description: "Para começar a explorar a plataforma.",
    globalSpins: 10,
    tenantMultiplier: "0x",
    monthlyQuota: 100,
    weeklyQuota: 25,
    current: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "R$ 39,99",
    period: "/mês",
    description: "Mais giros, mais ofertas e mais oportunidades.",
    globalSpins: 20,
    tenantMultiplier: "10",
    monthlyQuota: 200,
    weeklyQuota: 50,
  },
  {
    id: "premium+",
    name: "Premium+",
    price: "R$ 59,99",
    period: "/mês",
    description: "A experiência completa para aproveitar ao máximo.",
    globalSpins: 30,
    tenantMultiplier: "30",
    monthlyQuota: 400,
    weeklyQuota: 100,
    recommended: true,
  },
];

const UserChoiceSubscription = ({
  upgradeUserSubscription,
  successUpgradeUserSub,
  loadingUpgradeUserSub,
}: {
  loadingUpgradeUserSub: boolean;
  successUpgradeUserSub: boolean;
  upgradeUserSubscription: (selectedPlan: string) => Promise<void>;
}) => {
  return (
    <AreaBackground>
      <main className="relative z-10 flex min-h-screen flex-col px-4 py-8">
        <div className="mx-auto w-full max-w-6xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="mt-2 text-5xl text-amber-500 font-bold sm:text-4xl">
              Escolha seu plano
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300 sm:text-base">
              Escolha o plano que melhor combina com a forma como você quer
              aproveitar os giros, ofertas e recompensas da PromoBet.
            </p>
          </div>

          {/* Plans */}
          <div className="grid gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col overflow-hidden rounded-2xl border p-6 transition ${
                  plan.recommended
                    ? "border-yellow-400 shadow-lg shadow-yellow-400/10"
                    : "border-white/10"
                } ${
                  plan.current
                    ? "bg-white/5"
                    : "bg-black/20 hover:border-white/20"
                }`}
              >
                {/* Recommended badge */}
                {plan.recommended && (
                  <div className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
                    RECOMENDADO
                  </div>
                )}

                {/* Plan */}
                <div>
                  <h2 className="text-2xl font-bold">{plan.name}</h2>

                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="mb-1 text-sm text-gray-400">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 min-h-[48px] text-sm text-gray-400">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="my-6 space-y-4 border-y border-white/10 py-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Giros Globais</span>
                    <span className="font-semibold">
                      {plan.globalSpins}/dia
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">
                      Giros por Tenant
                    </span>
                    <span className="font-semibold">
                      {plan.tenantMultiplier}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Cota mensal</span>
                    <span className="font-semibold">{plan.monthlyQuota}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Cota semanal</span>
                    <span className="font-semibold">{plan.weeklyQuota}</span>
                  </div>
                </div>

                {/* Action */}
                <div className="mt-auto">
                  {plan.current ? (
                    <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-gray-400">
                      Plano atual
                    </div>
                  ) : successUpgradeUserSub ? (
                    <div className="rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-center text-sm font-semibold text-green-400">
                      🎉 Assinatura ativada!
                    </div>
                  ) : (
                    <button
                      onClick={() => upgradeUserSubscription(plan.id)}
                      disabled={loadingUpgradeUserSub}
                      className={`w-full rounded-lg px-4 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${
                        plan.recommended
                          ? "bg-yellow-400 text-black hover:bg-yellow-500"
                          : "border border-yellow-400/50 bg-transparent text-yellow-400 hover:bg-yellow-400/10"
                      }`}
                    >
                      {loadingUpgradeUserSub
                        ? "Processando..."
                        : `Escolher ${plan.name}`}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-xs text-gray-500">
            Você poderá aproveitar os benefícios do novo plano após a
            confirmação da assinatura.
          </p>
        </div>
      </main>
    </AreaBackground>
  );
};

export default UserChoiceSubscription;
