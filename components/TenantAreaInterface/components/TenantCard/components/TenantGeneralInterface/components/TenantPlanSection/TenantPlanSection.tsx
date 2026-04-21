import { Tenant } from "@/context/TenantContext/types";
import { InfoRow } from "../InfoRow";

const TenantPlanSection = ({ tenant }: { tenant: Tenant }) => {
  return (
    <>
      <div className="border-t border-x border-slate-400   py-2">
        <span className="px-2 text-md tracking-widest font-bold line-clamp-1">
          Assinatura
        </span>
      </div>
      <div className="border border-slate-400 p-1 mb-3 -mt-1">
        <div className="px-1 pb-1 mt-2">
          <div className="flex justify-between items-center text-base">
            <span className={`text-sm text-slate-400`}>Plano</span>
            <span className={`text-sm text-slate-500 text-right`}>
              {tenant.subscriptionMode}
            </span>
          </div>
        </div>
        <div className="border-b border-slate-400 px-1  py-2">
          <span className=" text-sm tracking-widest font-semibold line-clamp-1">
            Pagamento
          </span>
        </div>
        <div className="px-1 py-3 border border-slate-400 mt-1 h-35">
          <InfoRow
            label="Status"
            value={tenant.payment?.paid ? "Pago" : "Pendente"}
            small={true}
          />
        </div>
      </div>
    </>
  );
};
export default TenantPlanSection;
