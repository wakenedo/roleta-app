// components/Rewards.tsx
"use client";

const Rewards = () => {
  return (
    <div className="bg-white/90 backdrop-blur rounded-lg shadow-md p-4">
      <h3 className="text-sm font-semibold text-slate-800 mb-2">
        Últimos prêmios
      </h3>

      <ul className="text-sm text-slate-700 space-y-1">
        <li>🎁 Cupom R$10 – Loja X</li>
        <li>🎁 Frete grátis – Loja Y</li>
        <li className="text-slate-400 italic">Nenhum prêmio recente</li>
      </ul>
    </div>
  );
};

export default Rewards;
