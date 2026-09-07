import { UserStats } from "@/context/UserContext/types";
import { UserAreaSectionBackground } from "@/backgrounds/UserAreaSectionBackground";

const UserSpinsStats = ({
  userSpinsStats,
}: {
  userSpinsStats: UserStats | undefined;
}) => {
  if (!userSpinsStats) return;
  return (
    <div className=" cursor-default h-full">
      <UserAreaSectionBackground>
        <div className="h-full">
          <span className="text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
            Giros Realizados
          </span>
          <hr className="border-t border-slate-300 mb-4" />
          <div className="tracking-widest text-xs text-slate-600 ">
            <span className="font-bold ">Total</span>
            <div>
              <span className="text-base font-semibold text-slate-400">
                {userSpinsStats.totalSpins}
              </span>
            </div>
          </div>
          <div className="tracking-widest text-xs text-slate-600 ">
            <span className="font-bold ">Jackpots</span>
            <div>
              <span className="text-base font-semibold text-slate-400">
                {userSpinsStats.jackpots}
              </span>
            </div>
          </div>
          <div className="tracking-widest text-xs text-slate-600 ">
            <span className="font-bold ">Raros </span>
            <div>
              <span className="text-base font-semibold text-slate-400">
                {userSpinsStats.rare}
              </span>
            </div>
          </div>
          <div className="tracking-widest text-xs text-slate-600 ">
            <span className="font-bold ">Comum </span>
            <div>
              <span className="text-base font-semibold text-slate-400">
                {userSpinsStats.common}
              </span>
            </div>
          </div>
        </div>
      </UserAreaSectionBackground>
    </div>
  );
};
export default UserSpinsStats;
