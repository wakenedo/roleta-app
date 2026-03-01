"use client";

const TheGameExperience = () => {
  const steps = [
    {
      title: "ENTRE NA PROMOBET",
      description:
        "Crie sua conta e desbloqueie acesso à nossa experiência global de slots.",
      emoji: "🚀",
    },
    {
      title: "GIRE OS SLOTS GLOBAIS",
      description:
        "Use sua cota diária para descobrir ofertas afiliadas selecionadas.",
      emoji: "🎰",
    },
    {
      title: "JOGUE NOS SLOTS DOS PARCEIROS",
      description:
        "Explore experiências exclusivas criadas por nossos parceiros e tenants.",
      emoji: "🏢",
    },
    {
      title: "COMPRE NOS MARKETPLACES",
      description:
        "Finalize sua compra em marketplaces e e-commerces oficiais parceiros.",
      emoji: "🛒",
    },
  ];

  return (
    <>
      {/* Título */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-widest text-amber-500 drop-shadow-xl">
          A EXPERIÊNCIA DO JOGO
        </h2>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
          Gire. Descubra. Ganhe ofertas. Compre onde quiser.
        </p>
      </div>

      {/* Etapas estilo slot */}
      <div className="space-y-8 max-w-4xl mx-auto">
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
            <div className="md:text-5xl text-xl drop-shadow-lg">
              {step.emoji}
            </div>

            <div className="flex-1 mx-8 cursor-default">
              <h3 className="md:text-xl font-bold tracking-wide text-[#84e9e4]">
                {step.title}
              </h3>
              <p className="text-gray-400 md:text-sm text-xs mt-1">
                {step.description}
              </p>
            </div>

            <div className="text-3xl font-extrabold text-[#84e9e4]  ">
              0{index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Aviso */}
      <div className=" py-6 text-center text-xs text-gray-500 max-w-3xl mx-auto">
        A Promobet e seus parceiros não vendem produtos diretamente. As
        transações são realizadas nos marketplaces e plataformas oficiais dos
        parceiros.
      </div>
    </>
  );
};

export default TheGameExperience;
