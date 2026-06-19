import { TenantAreaSectionBackground } from "../../../TenantAreaSectionBackground";
import { TenantOptionsAnalytics } from "../TenantOptionsAnalytics";
import { TenantGeneralInterface } from "../TenantGeneralInterface";
import { TenantOptionsProps } from "@/components/TenantAreaInterface/types";

const TenantOptions = ({
  tenantEmail,
  registeredProductsAmount,
  tenantSubscriptionMode,
  createdAt,
  tenantGlobalStats,
  seasonStatsLoading,
  seasonStats,
  formattedCreatedAt,
  tenantIdentifier,
  tenantStatus,
  tenantName,
  tenantSpinPool,
  tenantPayment,
}: TenantOptionsProps) => {
  return (
    <TenantAreaSectionBackground>
      <div className=" flex flex-col ">
        <div className="flex space-x-2 justify-between">
          <TenantGeneralInterface
            tenantEmail={tenantEmail}
            registeredProductsAmount={registeredProductsAmount}
            tenantSubscriptionMode={tenantSubscriptionMode}
            createdAt={createdAt}
            formattedCreatedAt={formattedCreatedAt}
            tenantIdentifier={tenantIdentifier}
            tenantStatus={tenantStatus}
            tenantName={tenantName}
            tenantSpinPool={tenantSpinPool}
            tenantPayment={tenantPayment}
          />
          <TenantOptionsAnalytics
            tenantGlobalStats={tenantGlobalStats}
            seasonStats={seasonStats}
            seasonStatsLoading={seasonStatsLoading}
          />
        </div>
      </div>
    </TenantAreaSectionBackground>
  );
};

export default TenantOptions;
