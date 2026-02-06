import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";

const AccountSpinHistory = () => {
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
            <span className="text-xs text-slate-600">0</span>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-600">Jackpots</span>
          <div>
            <span className="text-xs text-slate-600">0</span>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-600">Raros </span>
          <div>
            <span className="text-xs text-slate-600">0</span>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-600">Comum </span>
          <div>
            <span className="text-xs text-slate-600">0</span>
          </div>
        </div>
      </UserAreaSectionBackground>
    </>
  );
};
export default AccountSpinHistory;
