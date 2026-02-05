// components/Rewards.tsx
"use client";

const Rewards = () => {
  return (
    <div className="bg-white/90 backdrop-blur rounded-lg shadow-md p-4">
      <h3 className="text-sm font-semibold text-slate-800 mb-2">
        Últimos prêmios
      </h3>
      <hr className="border-t border-slate-300 mb-4" />

      <div className="text-sm text-slate-500">
        <div className="w-fit flex flex-col">
          <div>
            <span className="text-xs font-semibold text-slate-600">
              Economizado :
            </span>
            <div>
              <span className="text-xs text-slate-600">R$ 0,00</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-600">
              Jackpots :
            </span>
            <div>
              <span className="text-xs text-slate-600">0</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-600">
              Raros :
            </span>
            <div>
              <span className="text-xs text-slate-600">0</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-600">
              Comum :
            </span>
            <div>
              <span className="text-xs text-slate-600">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
