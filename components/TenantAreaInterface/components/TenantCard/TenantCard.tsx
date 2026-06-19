import { TenantOptions } from "./components/TenantOptions";
import { TenantError } from "../TenantError";
import { FC } from "react";
import { TenantCardProps } from "../../types";

const TenantCard: FC<TenantCardProps> = ({
  loading,
  error,
  registeredProductsAmount,
  tenantSubscriptionMode,
  tenantEmail,
  createdAt,
  tenantGlobalStats,
  seasonStats,
  seasonStatsLoading,
  formattedCreatedAt,
  tenantIdentifier,
  tenantStatus,
  tenantName,
  tenantSpinPool,
  tenantPayment,
}) => {
  return (
    <div className="w-full bg-white/90 backdrop-blur  shadow-md ">
      {error && <TenantError error={error} />}
      {loading && (
        <div className="flex flex-col gap-3 ">
          <hr className="border-t border-slate-300" />
          <div>
            <p>Loading tenant...</p>
          </div>
        </div>
      )}
      {!loading && !error && (
        <div className=" flex flex-col mx-1 pb-1">
          <TenantOptions
            registeredProductsAmount={registeredProductsAmount}
            tenantGlobalStats={tenantGlobalStats}
            tenantSubscriptionMode={tenantSubscriptionMode}
            tenantEmail={tenantEmail}
            createdAt={createdAt}
            seasonStats={seasonStats}
            seasonStatsLoading={seasonStatsLoading}
            formattedCreatedAt={formattedCreatedAt}
            tenantIdentifier={tenantIdentifier}
            tenantStatus={tenantStatus}
            tenantName={tenantName}
            tenantSpinPool={tenantSpinPool}
            tenantPayment={tenantPayment}
          />
        </div>
      )}
    </div>
  );
};
export default TenantCard;
