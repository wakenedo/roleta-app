import { TenantOptions } from "./components/TenantOptions";
import { TenantError } from "../TenantError";
import { TenantCardProps } from "../../types";
import { TenantAreaLoading } from "../TenantAreaLoading";

const TenantCard = ({
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
}: TenantCardProps) => {
  return (
    <div className="bg-white/90 backdrop-blur shadow-md px-1 w-full h-fit pb-1">
      <div className=" bg-white/90 backdrop-blur shadow-md md:px-4 md:py-4  px-3 py-3 ">
        {error && <TenantError error={error} />}
        {loading && (
          <div className=" pb-1">
            <TenantAreaLoading />
          </div>
        )}
        {!loading && !error && (
          <div className=" flex flex-col pb-1">
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
    </div>
  );
};
export default TenantCard;
