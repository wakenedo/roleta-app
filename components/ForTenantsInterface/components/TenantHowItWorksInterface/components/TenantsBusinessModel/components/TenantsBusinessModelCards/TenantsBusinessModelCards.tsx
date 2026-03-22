const TenantsBusinessModelCards = () => {
  return (
    <section className="max-w-5xl text-center">
      <div className="grid md:grid-cols-2 gap-10 text-left ">
        <div
          className="cursor-default group relative flex flex-col items-center  
      bg-gradient-to-br from-[#111827] to-[#1f2937]
      border border-white/5
      backdrop-blur-md
      transition-all duration-300 
      hover:-translate-y-2 p-6"
        >
          <div className="border-l border-slate-800 h-full" />

          <div className="flex flex-col space-y-3">
            <div>
              <h4 className="font-bold text-amber-500  text-2xl">
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
          <div
            className="absolute inset-0  opacity-0 transition-opacity duration-300 
        group-hover:opacity-100 
        bg-gradient-to-r from-[#84e9e4]/1 to-purple-500/15 
        pointer-events-none"
          />
        </div>

        <div
          className="cursor-default group relative flex flex-col items-center  
      bg-gradient-to-br from-[#111827] to-[#1f2937]
      border border-white/5
      backdrop-blur-md
      transition-all duration-300 
      hover:-translate-y-2 p-6"
        >
          <div className="border-slate-800 border-l h-full" />

          <div className="flex flex-col space-y-3">
            <div>
              <h4 className="font-bold text-amber-500  text-2xl">
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
          <div
            className="absolute inset-0  opacity-0 transition-opacity duration-300 
        group-hover:opacity-100 
        bg-gradient-to-r from-[#84e9e4]/1 to-purple-500/15 
        pointer-events-none"
          />
        </div>

        <div
          className="cursor-default group relative flex flex-col items-center  
      bg-gradient-to-br from-[#111827] to-[#1f2937]
      border border-white/5
      backdrop-blur-md
      transition-all duration-300 
      hover:-translate-y-2 p-6"
        >
          <div className="border-l border-slate-800 h-full" />

          <div className="flex flex-col space-y-3">
            <div>
              <h4 className="font-bold text-amber-500  text-2xl">
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
          <div
            className="absolute inset-0  opacity-0 transition-opacity duration-300 
        group-hover:opacity-100 
        bg-gradient-to-r from-[#84e9e4]/1 to-purple-500/15 
        pointer-events-none"
          />
        </div>

        <div
          className="cursor-default group relative flex flex-col items-center  
      bg-gradient-to-br from-[#111827] to-[#1f2937]
      border border-white/5
      backdrop-blur-md
      transition-all duration-300 
      hover:-translate-y-2 p-6"
        >
          <div className="border-l border-slate-800 h-full" />

          <div className="flex flex-col space-y-3">
            <div>
              <h4 className="font-bold text-amber-500  text-2xl">
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
          <div
            className="absolute inset-0  opacity-0 transition-opacity duration-300 
        group-hover:opacity-100 
        bg-gradient-to-r from-[#84e9e4]/1 to-purple-500/15 
        pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};
export default TenantsBusinessModelCards;
