import { TenantSubscriptionModes } from "@/components/HomePageInterface/components/TenantSubscriptionModes";
import { BiBarChartAlt2, BiRocket } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { LuLink2 } from "react-icons/lu";

const TenantsHowItWorksInterface = () => {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen relative z-10 pt-16 pb-24 px-6 text-white">
        {/* Hero */}
        <section className="max-w-4xl text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Monetize sua audiência com sua própria experiência gamificada
          </h1>

          <p className="text-slate-400 text-lg md:text-xl">
            Crie sua própria plataforma interativa, promova seus produtos ou
            links afiliados e transforme engajamento em conversão.
          </p>
        </section>

        {/* How It Works */}
        <section className="max-w-6xl w-full grid md:grid-cols-3 gap-10 mb-24">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
            <BiRocket className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">1. Assine um Plano</h3>
            <p className="text-slate-400">
              Escolha o plano ideal para seu volume de produtos e necessidade de
              personalização.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
            <CiSettings className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">2. Configure sua Marca</h3>
            <p className="text-slate-400">
              Durante o onboarding você define nome, logo, cores e adiciona seus
              produtos ou links afiliados.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
            <LuLink2 className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">
              3. Receba sua URL Exclusiva
            </h3>
            <p className="text-slate-400">
              Após concluir, você recebe uma URL própria para promover sua
              experiência gamificada.
            </p>
          </div>
        </section>

        {/* Business Model */}
        <section className="max-w-5xl text-center mb-24">
          <h2 className="text-3xl font-bold mb-6">
            Modelo de Negócio para Parceiros
          </h2>

          <p className="text-slate-400 mb-6">
            Ideal para afiliados, creators e marcas que desejam promover seus
            próprios produtos ou marketplaces.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h4 className="font-semibold mb-2">
                Produtos ou Links Afiliados
              </h4>
              <p className="text-slate-400">
                Utilize seus próprios links afiliados ou produtos do seu
                marketplace. Você mantém total controle.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h4 className="font-semibold mb-2">Sistema de Tiers Flexível</h4>
              <p className="text-slate-400">
                Configure seu próprio sistema de níveis ou deixe que nós
                configuremos a estrutura ideal para você.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
              <h4 className="font-semibold mb-2">
                Limite de Produtos por Plano
              </h4>
              <p className="text-slate-400">
                Cada plano determina quantos produtos ou links você pode
                cadastrar na sua experiência.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex items-start gap-4">
              <BiBarChartAlt2 className="w-6 h-6 text-indigo-400 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Dashboard com Analytics</h4>
                <p className="text-slate-400">
                  Acesse o TenantArea para acompanhar métricas, editar
                  configurações, gerenciar produtos e otimizar resultados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
      </main>
      <TenantSubscriptionModes />
    </>
  );
};

export default TenantsHowItWorksInterface;
