import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { UserStats } from "@/context/UserContext/types";

const AccountSpinHistory = ({ stats }: { stats: UserStats | undefined }) => {
  if (!stats) return;
  return (
    <div className="w-xl cursor-default">
      <UserAreaSectionBackground>
        <span className="text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
          Giros Realizados
        </span>
        <hr className="border-t border-slate-300 mb-4" />
        <div className="tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold ">Total</span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              {stats.totalSpins}
            </span>
          </div>
        </div>
        <div className="tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold ">Jackpots</span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              {stats.jackpots}
            </span>
          </div>
        </div>
        <div className="tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold ">Raros </span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              {stats.rare}
            </span>
          </div>
        </div>
        <div className="tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold ">Comum </span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              {stats.common}
            </span>
          </div>
        </div>
      </UserAreaSectionBackground>
    </div>
  );
};
export default AccountSpinHistory;
