import { UserAreaSectionBackground } from "@/backgrounds/UserAreaSectionBackground";

const UserPaymentSection = () => {
  return (
    <UserAreaSectionBackground>
      <h3 className="cursor-default text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
        Assinatura
      </h3>
      <hr className="border-t border-slate-300 mb-6" />
      <div className="border border-slate-200 bg-slate-200 p-1 -mt-1">
        <div className="px-1 pb-1 mt-2">
          <div className="flex justify-between items-center text-base">
            <span className={`text-sm text-slate-600`}>Plano</span>
            <span className={`text-sm text-slate-700 text-right`}>
              userSubscriptionMode
            </span>
          </div>
        </div>
        <div className="px-1 pb-1 mt-2 border rounded border-slate-400">
          <div className="flex justify-between items-center text-base">
            <span className={`text-sm text-slate-600`}>
              Cancelar Assinatura - Atualizar Plano - Extratos
            </span>
          </div>
        </div>
        <div className="border-b border-slate-400  px-1  py-2">
          <span className=" text-sm tracking-widest font-semibold line-clamp-1">
            Pagamento
          </span>
        </div>
        <div className="px-1 py-3 border border-slate-400 mt-1 h-45">
          <div className="cursor-default flex justify-between items-center text-base">
            <span className={`text-sm text-slate-400`}>label</span>
            <span className={`text-sm text-slate-500 text-right`}>value</span>
          </div>
          <div className="px-1 pb-1 mt-2 border rounded border-slate-400">
            <div className="flex justify-between items-center text-base">
              <span className={`text-sm text-slate-600`}>
                Metodos de pagamento salvos - Faturas - Suporte
              </span>
            </div>
          </div>
        </div>
      </div>
    </UserAreaSectionBackground>
  );
};
export default UserPaymentSection;
