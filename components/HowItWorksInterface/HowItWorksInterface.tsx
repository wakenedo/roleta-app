import { UserSubscriptionModes } from "../HomePageInterface/components/UserSubscriptionModes";

const HowItWorksInterface = () => {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen relative z-10 pt-10 space-y-20">
        {/* HERO */}
        <section className="text-center max-w-3xl">
          <h1 className="text-5xl font-extrabold text-amber-500">
            COMO FUNCIONA
          </h1>
          <p className="mt-6 text-gray-300">
            Uma nova forma de descobrir produtos: jogando.
          </p>
        </section>

        {/* CORE LOOP */}
        <section className="grid md:grid-cols-3 gap-6 max-w-5xl">
          {[
            {
              title: "SPIN",
              desc: "Você gira a roleta usando sua cota diária.",
              emoji: "🎰",
            },
            {
              title: "DISCOVER",
              desc: "Descubra produtos afiliados selecionados por parceiros.",
              emoji: "🔎",
            },
            {
              title: "BUY",
              desc: "Finalize sua compra diretamente nos marketplaces.",
              emoji: "🛒",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[#111827] border border-purple-500/20"
            >
              <div className="text-4xl">{item.emoji}</div>
              <h3 className="mt-4 font-bold text-[#84e9e4]">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* DETAILS */}
        <section className="max-w-4xl space-y-6 text-gray-300 text-sm">
          <div>
            <h3 className="text-lg font-bold text-white">
              🎯 Sistema de Spins
            </h3>
            <p>
              Cada usuário recebe spins diários gratuitos. Spins adicionais
              podem ser liberados via planos ou ações específicas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">
              💎 Sistema de Tiers
            </h3>
            <p>
              Produtos possuem níveis (comum, raro, jackpot), aumentando o fator
              surpresa e descoberta.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">🤝 Afiliados</h3>
            <p>
              Ao clicar em um produto, você é redirecionado para o Marketplace
              associado do parceiro. A Promobet monetiza via afiliados — sem
              vender diretamente.
            </p>
          </div>
        </section>

        {/* SUBSCRIPTIONS */}
      </main>
      <UserSubscriptionModes />
    </>
  );
};
export default HowItWorksInterface;
