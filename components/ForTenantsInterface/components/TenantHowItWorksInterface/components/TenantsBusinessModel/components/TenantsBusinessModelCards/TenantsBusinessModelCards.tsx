const TenantsBusinessModelCards = () => {
  return (
    <section className="max-w-5xl text-center">
      <div className="grid md:grid-cols-2 gap-10 text-left ">
        <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] border border-slate-800  p-6 flex items-start gap-4">
          <div className="border-l border-slate-800 h-full" />

          <div className="flex flex-col space-y-3">
            <div>
              <h4 className="font-bold text-[#84e9e4]  text-2xl">
                Produtos ou Links Afiliados
              </h4>
            </div>
            <div>
              <p className="text-slate-100">
                Utilize seus próprios links afiliados ou produtos do seu
                marketplace. Você mantém total controle.
              </p>
            </div>
            <div className="border border-slate-800  md:h-50"></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] border border-slate-800  p-6 flex items-start gap-4">
          <div className="border-slate-800 border-l h-full" />

          <div className="flex flex-col space-y-3">
            <div>
              <h4 className="font-bold text-[#84e9e4]  text-2xl">
                Sistema de Tiers Flexível
              </h4>
            </div>
            <div>
              <p className="text-slate-100">
                Configure seu próprio sistema de níveis ou deixe que nós
                configuremos a estrutura ideal para você.
              </p>
            </div>
            <div className="border border-slate-800  md:h-50"></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] border border-slate-800  p-6 flex items-start gap-4">
          <div className="border-l border-slate-800 h-full" />

          <div className="flex flex-col space-y-3">
            <div>
              <h4 className="font-bold text-[#84e9e4]  text-2xl">
                Limite de Produtos por Plano
              </h4>
            </div>
            <div>
              <p className="text-slate-100 ">
                Cada plano determina quantos produtos ou links você pode
                cadastrar na sua experiência.
              </p>
            </div>
            <div className="border border-slate-800  md:h-50"></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] border border-slate-800  p-6 flex items-start gap-4">
          <div className="border-l border-slate-800 h-full" />

          <div className="flex flex-col space-y-3">
            <div>
              <h4 className="font-bold text-[#84e9e4]  text-2xl">
                Dashboard com Analytics
              </h4>
            </div>
            <div>
              <p className="text-slate-100">
                Acesse o TenantArea para acompanhar métricas, editar
                configurações, gerenciar produtos e otimizar resultados.
              </p>
            </div>
            <div className="border border-slate-800  md:h-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TenantsBusinessModelCards;
