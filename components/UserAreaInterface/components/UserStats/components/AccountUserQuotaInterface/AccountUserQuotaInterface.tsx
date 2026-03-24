import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";

const AccountUserQuotaInterface = () => {
  return (
    <div className="w-xl">
      <UserAreaSectionBackground>
        <span className="text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
          Quotas Parceiros
        </span>
        <hr className="border-t border-slate-300 mb-4" />
        <div className="tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold ">Mês</span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              100/100
            </span>
          </div>
        </div>
        <div className="tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold ">Semana</span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              25/25
            </span>
          </div>
        </div>

        <div className="tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold ">Extras</span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              Atualize sua Assinatura!
            </span>
          </div>
        </div>
        <div className="tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold ">Adquiridas</span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              Compre Quoas que não expiram!
            </span>
          </div>
        </div>
      </UserAreaSectionBackground>
    </div>
  );
};
export default AccountUserQuotaInterface;
