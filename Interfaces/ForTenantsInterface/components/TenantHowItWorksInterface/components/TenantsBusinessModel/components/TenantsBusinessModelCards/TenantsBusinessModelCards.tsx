const TenantsBusinessModelCards = () => {
  return (
    <section className="max-w-4xl text-center px-4">
      <div className="grid md:grid-cols-2 gap-4 text-left ">
        <div
          className="cursor-default group relative flex flex-col items-center justify-between 
      bg-gradient-to-br from-[#111827] to-[#1f2937]
      border border-white/5
      backdrop-blur-md
      transition-all duration-300 
      hover:-translate-y-2 p-6"
        >
          <div className="flex flex-col space-y-6">
            <div>
              <h4 className="font-bold text-amber-500 tracking-wide  text-2xl">
                Produtos ou Links Afiliados
              </h4>
            </div>
            <div>
              <p className="text-slate-400 tracking-widest">
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
          className="cursor-default group relative flex flex-col items-center justify-between 
      bg-gradient-to-br from-[#111827] to-[#1f2937]
      border border-white/5
      backdrop-blur-md
      transition-all duration-300 
      hover:-translate-y-2 p-6"
        >
          <div className="flex flex-col space-y-6">
            <div>
              <h4 className="font-bold text-amber-500 tracking-wide text-2xl">
                Sistema de Tiers Flexível
              </h4>
            </div>
            <div>
              <p className="text-slate-400 tracking-widest">
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
          className="cursor-default group relative flex flex-col items-center justify-between  
      bg-gradient-to-br from-[#111827] to-[#1f2937]
      border border-white/5
      backdrop-blur-md
      transition-all duration-300 
      hover:-translate-y-2 p-6"
        >
          <div className="flex flex-col space-y-6">
            <div>
              <h4 className="font-bold text-amber-500 tracking-wide text-2xl">
                Limite de Produtos por Plano
              </h4>
            </div>
            <div>
              <p className="text-slate-400 tracking-widest">
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
          className="cursor-default group relative flex flex-col items-center justify-between 
      bg-gradient-to-br from-[#111827] to-[#1f2937]
      border border-white/5
      backdrop-blur-md
      transition-all duration-300 
      hover:-translate-y-2 p-6"
        >
          <div className="flex flex-col space-y-6">
            <div>
              <h4 className="font-bold tracking-wide text-amber-500  text-2xl">
                Dashboard com Analytics
              </h4>
            </div>
            <div>
              <p className="text-slate-400 tracking-widest">
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
