// components/DailyQuota.tsx
"use client";

const DailyQuota = () => {
  return (
    <div className="bg-white/90 backdrop-blur rounded-lg shadow-md p-4">
      <h3 className="text-sm font-semibold text-slate-800 mb-2">
        Rodadas de hoje
      </h3>

      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-700">Restantes</span>

        <span className="text-lg font-bold text-green-600">3 / 5</span>
      </div>

      <div className="mt-2 h-2 bg-slate-200 rounded">
        <div className="h-2 w-3/5 bg-green-400 rounded" />
      </div>
    </div>
  );
};

export default DailyQuota;
