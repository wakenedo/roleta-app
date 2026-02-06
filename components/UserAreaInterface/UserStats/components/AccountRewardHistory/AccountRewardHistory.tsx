import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";

const AccountRewardHistory = () => {
  return (
    <>
      <UserAreaSectionBackground>
        <span className="text-sm font-semibold text-slate-800 mb-2 line-clamp-2">
          Prêmios Acumulados
        </span>
        <hr className="border-t border-slate-300 mb-4" />
        <div className="text-sm text-slate-500">
          <div className="w-fit flex flex-col">
            <div>
              <span className="text-xs font-semibold text-slate-600">
                Economizado
              </span>
              <div>
                <span className="text-xs text-slate-600">R$ 0,00</span>
              </div>
            </div>
          </div>
        </div>
      </UserAreaSectionBackground>
    </>
  );
};
export default AccountRewardHistory;
