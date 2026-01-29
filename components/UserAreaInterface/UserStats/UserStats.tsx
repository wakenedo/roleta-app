// components/UserStats.tsx
"use client";

const UserStats = () => {
  return (
    <div className="bg-white/90 backdrop-blur rounded-lg shadow-md p-4">
      <h3 className="text-sm font-semibold text-slate-800 mb-2">
        Seus números
      </h3>

      <div className="grid grid-cols-3 gap-3 text-center">
        <div>
          <p className="text-lg font-bold text-slate-900">12</p>
          <p className="text-xs text-slate-600">Rodadas</p>
        </div>

        <div>
          <p className="text-lg font-bold text-slate-900">3</p>
          <p className="text-xs text-slate-600">Prêmios</p>
        </div>

        <div>
          <p className="text-lg font-bold text-slate-900">2</p>
          <p className="text-xs text-slate-600">Dias ativos</p>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
