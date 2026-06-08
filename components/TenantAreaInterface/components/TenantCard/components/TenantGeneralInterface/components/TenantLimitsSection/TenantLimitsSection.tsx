import { InfoRow } from "../InfoRow";
import { TenantLimitsSectionProps } from "@/components/TenantAreaInterface/types";

const TenantLimitsSection = ({
  tenant,
  registeredProductsAmount,
  subscriptionBasedLimit,
}: TenantLimitsSectionProps) => {
  return (
    <>
      <div className="border border-slate-400 bg-slate-400  py-2">
        <span className="px-2 text-md tracking-widest font-bold line-clamp-1 text-slate-50">
          Limites
        </span>
      </div>
      <div className="px-1 py-3">
        <InfoRow
          label="Produtos"
          value={`${registeredProductsAmount} / ${subscriptionBasedLimit}`}
        />
        <InfoRow
          label="Limite de Giros Globais Mensais"
          value={
            tenant.spinPool?.used !== undefined
              ? `${tenant.spinPool.monthlyLimit - tenant.spinPool.used} / ${tenant.spinPool.monthlyLimit}`
              : (tenant.spinPool?.monthlyLimit ?? "-")
          }
        />
      </div>
    </>
  );
};
export default TenantLimitsSection;
