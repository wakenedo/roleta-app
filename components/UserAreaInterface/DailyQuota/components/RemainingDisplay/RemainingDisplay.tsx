import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { SpinQuota } from "@/context/UserContext/types";

const RemainingDisplay = ({ spins }: { spins: SpinQuota | undefined }) => {
  const remaining = spins?.remaining;
  const dailyLimit = spins?.limit;

  const progress =
    dailyLimit && remaining && dailyLimit > 0
      ? (remaining / dailyLimit) * 100
      : 0;

  const barColor =
    progress > 60
      ? "bg-green-400"
      : progress > 30
        ? "bg-yellow-400"
        : "bg-red-400";

  const isEmpty = remaining === 0;
  return (
    <UserAreaSectionBackground>
      <span className="text-sm font-semibold text-slate-800 mb-2 line-clamp-2">
        Rodadas de hoje
      </span>
      <hr className="border-t border-slate-300 mb-4" />
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-slate-700">Restantes</span>

        <span
          className={`text-lg font-bold ${
            isEmpty ? "text-red-600" : "text-slate-800"
          }`}
        >
          {remaining} / {dailyLimit}
        </span>
      </div>

      <div className="mt-2 h-2 bg-slate-200 rounded overflow-hidden">
        <div
          className={`h-2 ${barColor} rounded transition-all`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {isEmpty && (
        <div className="mt-3 text-center">
          <p className="text-xs text-red-600 mb-2">
            Você atingiu o limite diário de rodadas
          </p>
          <button
            className="text-xs font-semibold text-white bg-slate-800 px-3 py-1.5 rounded hover:bg-slate-700 transition"
            onClick={() => {
              // future CTA action
              console.log("Upgrade or wait until tomorrow");
            }}
          >
            Voltar amanhã
          </button>
        </div>
      )}
    </UserAreaSectionBackground>
  );
};
export default RemainingDisplay;
