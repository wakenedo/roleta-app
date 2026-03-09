import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { UserStats } from "@/context/UserContext/types";

const AccountSpinHistory = ({ stats }: { stats: UserStats | undefined }) => {
  if (!stats) return;
  return (
    <>
      <UserAreaSectionBackground>
        <span className="text-sm font-semibold text-slate-800 mb-2 line-clamp-2">
          Giros Realizados
        </span>
        <hr className="border-t border-slate-300 mb-4" />
        <div>
          <span className="text-xs font-semibold text-slate-600">Total</span>
          <div>
            <span className="text-xs text-slate-600">{stats.totalSpins}</span>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-600">Jackpots</span>
          <div>
            <span className="text-xs text-slate-600">{stats.jackpots}</span>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-600">Raros </span>
          <div>
            <span className="text-xs text-slate-600">{stats.rare}</span>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-600">Comum </span>
          <div>
            <span className="text-xs text-slate-600">{stats.common}</span>
          </div>
        </div>
      </UserAreaSectionBackground>
    </>
  );
};
export default AccountSpinHistory;
