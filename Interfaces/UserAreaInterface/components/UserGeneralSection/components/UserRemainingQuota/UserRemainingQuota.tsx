import { UserAreaSectionBackground } from "@/backgrounds/UserAreaSectionBackground";
import { BiErrorCircle } from "react-icons/bi";

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
      <div className="flex justify-between">
        <span className="cursor-default text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
          Rodadas de hoje
        </span>
        {isQuotaEmpty && (
          <div className="flex items-center justify-center space-x-1 text-slate-500">
            <span className="text-xs mt-1">Seus giros voltam em:</span>
            <b className="text-md">{quotaCooldownTimeLeft}</b>
          </div>
        )}
      </div>
      <hr className="border-t border-slate-300 mb-4" />

      {isQuotaEmpty ? (
        <div className="mt-3 text-center cursor-default">
          <div className="flex flex-col space-y-1 mb-2">
            <div
              className="py-2 flex flex-col justify-center items-center 
            border-dashed
            border border-red-400 w-fit px-2 rounded mx-auto"
            >
              <div className="py-2">
                <BiErrorCircle className="text-red-400 w-8 h-8" />
              </div>
              <p className="text-xs text-red-400 tracking-widest ">
                Você atingiu o limite diário de rodadas.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </UserAreaSectionBackground>
  );
};
export default UserRemainingQuota;
