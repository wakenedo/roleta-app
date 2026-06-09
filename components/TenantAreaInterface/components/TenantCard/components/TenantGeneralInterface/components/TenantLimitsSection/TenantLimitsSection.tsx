import { TenantSectionMarker } from "@/components/TenantAreaInterface/components/TenantSectionMarker";
import { InfoRow } from "../InfoRow";
import { TenantLimitsSectionProps } from "@/components/TenantAreaInterface/types";

const TenantLimitsSection = ({
  tenant,
  registeredProductsAmount,
  subscriptionBasedLimit,
}: TenantLimitsSectionProps) => {
  return (
    <>
      <TenantSectionMarker markerTitle="Limites" />
      <div className="flex flex-col space-y-2 px-1 py-2">
        <InfoRow
          label="Limite de Giros Globais Mensais"
          value={
            tenant.spinPool?.used !== undefined ? (
              <span className="font-semibold">
                {tenant.spinPool.monthlyLimit - tenant.spinPool.used} /{" "}
                {tenant.spinPool.monthlyLimit}
              </span>
            ) : (
              (tenant.spinPool?.monthlyLimit ?? "-")
            )
          }
        />
        <InfoRow
          label="Produtos"
          value={
            <span className="font-semibold">
              {registeredProductsAmount} / {subscriptionBasedLimit}
            </span>
          }
        />
      </div>
    </>
  );
};
export default TenantLimitsSection;
