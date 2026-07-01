"use client";

import { useState } from "react";

const faqs = [
  {
    category: "Geral",
    items: [
      {
        q: "O que é a Promobet?",
        a: "A Promobet é uma plataforma gamificada onde você descobre produtos através de uma experiência de roleta (slots), conectando você a ofertas de parceiros e marketplaces.",
      },
      {
        q: "A Promobet é um site de apostas?",
        a: "Não. A Promobet não envolve apostas com dinheiro real. É uma experiência de descoberta de produtos com elementos de jogo.",
      },
    ],
  },
  {
    category: "Como funciona",
    items: [
      {
        q: "Como funciona o sistema de spins?",
        a: "Você recebe uma quantidade de spins diários para girar a roleta e descobrir produtos afiliados.",
      },
      {
        q: "O que acontece quando eu giro?",
        a: "Você recebe um produto selecionado aleatoriamente dentro de um sistema de tiers (níveis).",
      },
    ],
  },
  {
    category: "Spins & Sistema",
    items: [
      {
        q: "Os spins são gratuitos?",
        a: "Sim, você recebe spins gratuitos diariamente. Planos podem oferecer spins adicionais.",
      },
      {
        q: "O que são tiers?",
        a: "Tiers representam a raridade dos produtos (comum, raro, jackpot), tornando a experiência mais dinâmica.",
      },
    ],
  },
  {
    category: "Compras & Pagamentos",
    items: [
      {
        q: "Eu compro dentro da Promobet?",
        a: "Não. As compras são realizadas diretamente nos sites oficiais dos parceiros.",
      },
      {
        q: "A Promobet vende produtos?",
        a: "Não. A Promobet apenas conecta você aos produtos através de links afiliados.",
      },
    ],
  },
  {
    category: "Segurança & Parceiros",
    items: [
      {
        q: "Os produtos são confiáveis?",
        a: "Sim, trabalhamos com parceiros e marketplaces reconhecidos.",
      },
      {
        q: "Meus dados estão seguros?",
        a: "Sim. Utilizamos práticas modernas de segurança e não compartilhamos dados sensíveis sem consentimento.",
      },
    ],
  },
];

const FAQInterface = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-12 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300">
      {/* TITLE */}
      <section className="text-center max-w-3xl mt-2">
        <h1 className="text-5xl font-extrabold text-amber-500">FAQ</h1>
      </section>

      {/* FAQ LIST */}
      <div className="w-full max-w-4xl space-y-8 mt-10">
        {faqs.map((section, sIndex) => (
          <div key={sIndex}>
            <h2 className="text-xl font-bold text-slate-700 mb-4">
              {section.category}
            </h2>

            <div className="space-y-3">
              {section.items.map((item, iIndex) => {
                const key = `${sIndex}-${iIndex}`;
                const isOpen = openIndex === key;

                return (
                  <div
                    key={key}
                    className="bg-white rounded-xl shadow-md p-4 cursor-pointer transition"
                    onClick={() => toggle(key)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-slate-800">{item.q}</h3>
                      <span className="text-lg">{isOpen ? "−" : "+"}</span>
                    </div>

                    {isOpen && (
                      <p className="text-sm text-slate-600 mt-3">{item.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FAQInterface;
