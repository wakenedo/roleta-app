"use client";
import { useState } from "react";

const sections = [
  {
    title: "Sistema de Spins",
    description:
      "Cada usuário recebe spins diários gratuitos. Spins adicionais podem ser liberados via planos ou ações específicas.",
  },
  {
    title: "Sistema de Tiers",
    description:
      "Produtos possuem níveis (comum, raro, jackpot), aumentando o fator surpresa e descoberta.",
  },
  {
    title: "Afiliados",
    description:
      "Ao clicar em um produto, você é redirecionado para o Marketplace associado do parceiro. A Promobet monetiza via afiliados — sem vender diretamente.",
  },
];

const DetailsInterface = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSection = sections[activeIndex];

  return (
    <>
      <section className="border border-purple-500/20 bg-gradient-to-br from-[#111827] to-[#1f2937] min-w-xl  flex flex-col items-center justify-between text-gray-300 text-sm  p-6 space-y-6">
        <div>
          <div className="max-w-xl space-y-4  ">
            <h3 className=" text-3xl font-extrabold tracking-widest text-amber-500 uppercase">
              {activeSection.title}
            </h3>
            <p className="text-md text-slate-400 font-medium tracking-widest ">
              {activeSection.description}
            </p>
          </div>
        </div>
        {/* CONTENT */}

        {/* BULLETS */}
        <div className="flex space-x-3">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2  rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-white scale-110"
                  : "bg-gray-500 opacity-50 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default DetailsInterface;
