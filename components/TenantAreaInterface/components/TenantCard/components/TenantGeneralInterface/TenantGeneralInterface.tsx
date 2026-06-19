import { TenantPartnerSection } from "./components/TenantPartnerSection";
import { TenantPlanSection } from "./components/TenantPlanSection";
import { TenantLimitsSection } from "./components/TenantLimitsSection";
import { TenantGeneralInterfaceProps } from "@/components/TenantAreaInterface/types";

const TenantGeneralInterface = ({
  tenantEmail,
  registeredProductsAmount,
  tenantSubscriptionMode,
  formattedCreatedAt,
  tenantIdentifier,
  tenantStatus,
  tenantName,
  tenantSpinPool,
  tenantPayment,
}: TenantGeneralInterfaceProps) => {
  const productsSubscriptionBasedLimit = (tenantSubscriptionMode?: string) => {
    switch (tenantSubscriptionMode) {
      case "tenant":
        return 100;
      case "tenantPro":
        return 250;
      case "tenantPremium":
        return 500;
      default:
        return 0;
    }
  };

  const subscriptionBasedLimit = productsSubscriptionBasedLimit(
    tenantSubscriptionMode,
  );

  return (
    <div className="flex-col space-y-4 pr-2 pb-4  w-full md:w-1/2">
      <div className="space-y-1 ">
        <TenantPartnerSection
          tenantEmail={tenantEmail}
          tenantName={tenantName}
          formattedCreatedAt={formattedCreatedAt}
          tenantIdentifier={tenantIdentifier}
          tenantStatus={tenantStatus}
        />
        <TenantLimitsSection
          registeredProductsAmount={registeredProductsAmount}
          subscriptionBasedLimit={subscriptionBasedLimit}
          tenantSpinPool={tenantSpinPool}
        />
        <TenantPlanSection
          tenantPayment={tenantPayment}
          tenantSubscriptionMode={tenantSubscriptionMode}
        />
      </div>
    </div>
  );
};
export default TenantGeneralInterface;
