import { UserAreaSectionBackground } from "@/Interfaces/UserAreaInterface/UserAreaSectionBackground";

const UserRemainingQuota = ({
  barColor,
  isQuotaEmpty,
  remainingQuota,
  dailyQuotaLimit,
  progressBar,
  quotaCooldownTimeLeft,
}: {
  barColor: string;
  isQuotaEmpty: boolean;
  remainingQuota: number | undefined;
  dailyQuotaLimit: number | undefined;
  progressBar: number;
  quotaCooldownTimeLeft: string;
}) => {
  return (
    <UserAreaSectionBackground>
      <span className="cursor-default text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
        Rodadas de hoje
      </span>
      <hr className="border-t border-slate-300 mb-4" />
      <div className="cursor-default flex items-center justify-between mb-1">
        <span className="text-xs tracking-widest text-slate-400">
          Restantes
        </span>

        <span
          className={`text-lg font-bold ${
            isQuotaEmpty ? "text-red-600" : "text-amber-500"
          }`}
        >
          {remainingQuota} / {dailyQuotaLimit}
        </span>
      </div>

      <div className="mt-2 h-2 bg-slate-200 rounded overflow-hidden">
        <div
          className={`h-2 ${barColor} rounded transition-all`}
          style={{ width: `${progressBar}%` }}
        />
      </div>

      {isQuotaEmpty && (
        <div className="mt-3 text-center">
          <div className="flex flex-col space-y-1 mb-2">
            <div>
              <p className="text-xs text-red-600 ">
                Você atingiu o limite diário de rodadas
              </p>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <span className="text-xs">Seus giros voltam em:</span>
              <b className="text-md">{quotaCooldownTimeLeft}</b>
            </div>
          </div>
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
export default UserRemainingQuota;
