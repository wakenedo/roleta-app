"use client";

const TheGameExperience = () => {
  const steps = [
    {
      title: "ENTRE NA PROMOBET",
      description:
        "Crie sua conta gratuitamente e garanta acesso as experiências de Roletas.",
      emoji: "🚀",
    },
    {
      title: "GIRE AS ROLETAS, DESCUBRA OFERTAS ",
      description:
        "Use sua cota diária na Roleta Promobet . Ou gire nas Roletas dos Parceiros.",
      emoji: "🎰",
    },
    {
      title: "ENCONTRE PARCEIROS E SEUS PRODUTOS",
      description:
        "Use as cotas disponibilizadas pelos Parceiros registrados e descubra seus produtos e ofertas.",
      emoji: "🏢",
    },
    {
      title: "COMPRE EM MARKETPLACES CONHECIDOS E CONFIÁVEIS",
      description:
        "Finalize sua compra em marketplaces conhecidos e e-commerces oficiais Parceiros.",
      emoji: "🛒",
    },
  ];

  return (
    <>
      {/* Título */}
      <div className="text-center mb-20 mt-14">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-widest text-amber-500 drop-shadow-xl">
          A EXPERIÊNCIA DO JOGO
        </h2>
        <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
          Gire. Descubra. Ganhe ofertas. Compre onde conhece.
        </p>
      </div>

      {/* Etapas estilo slot */}
      <div className="space-y-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between px-8 py-6 rounded-2xl 
            bg-gradient-to-r from-[#111827] to-[#1f2937]
            border border-purple-500/20
            backdrop-blur-md
            shadow-[0_0_25px_rgba(168,85,247,0.15)]
            hover:shadow-[0_0_40px_rgba(238,186,32,0.55)]
            transition-all duration-300"
          >
            <div className="flex-1 mx-8 cursor-default text-center">
              <h3 className="md:text-2xl font-extrabold tracking-widest text-[#84e9e4]">
                {step.title}
              </h3>
              <p className="text-slate-400 md:text-lg tracking-wide text-xs mt-2">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Aviso */}
      <div className=" py-6 text-center text-xs text-gray-500 max-w-3xl mx-auto">
        A Promobet não vende produtos diretamente. As transações são realizadas
        nos marketplaces e plataformas oficiais dos parceiros.
      </div>
    </>
  );
};

export default TheGameExperience;
