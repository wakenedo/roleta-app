import { UserAreaSectionBackground } from "@/backgrounds/UserAreaSectionBackground";

const UserGlobalSpinsStats = () => {
  return (
    <div className=" cursor-default">
      <UserAreaSectionBackground>
        <span className="text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
          Giros Realizados (Global)
        </span>
        <hr className="border-t border-slate-300 mb-4" />
        <div className="tracking-widest text-xs text-slate-600 ">
          <span className="font-bold ">Total</span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              global totalSpins
            </span>
          </div>
        </div>
        <div className="tracking-widest text-xs text-slate-600 ">
          <span className="font-bold ">Jackpots</span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              global jackpots
            </span>
          </div>
        </div>
        <div className="tracking-widest text-xs text-slate-600 ">
          <span className="font-bold ">Raros </span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              global rare
            </span>
          </div>
        </div>
        <div className="tracking-widest text-xs text-slate-600 ">
          <span className="font-bold ">Comum </span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              global common
            </span>
          </div>
        </div>
      </UserAreaSectionBackground>
    </div>
  );
};
export default UserGlobalSpinsStats;
