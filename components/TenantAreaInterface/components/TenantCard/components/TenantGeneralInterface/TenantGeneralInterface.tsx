import { Tenant } from "@/context/TenantContext/types";
import { TenantPartnerSection } from "./components/TenantPartnerSection";
import { TenantPlanSection } from "./components/TenantPlanSection";
import { TenantBrandingSection } from "./components/TenantBrandingSection";
import { TenantLimitsSection } from "./components/TenantLimitsSection";

const TenantGeneralInterface = ({
  tenant,
  tenantEmail,
  registeredProductsAmount,
}: {
  tenant: Tenant;
  tenantEmail: string | null | undefined;
  registeredProductsAmount: number;
}) => {
  const tenantSubscriptionMode = tenant.subscriptionMode;

  const productsSubscriptionBasedLimit = (tenantSubscriptionMode: string) => {
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

  const createdAt = tenant.createdAt as string;
  return (
    <div className="flex-col space-y-4 border border-slate-300  px-4 pb-4 pt-2 w-full md:w-1/2">
      <div className="space-y-1 ">
        <TenantPartnerSection
          tenant={tenant}
          tenantEmail={tenantEmail}
          createdAt={createdAt}
        />
        <TenantPlanSection tenant={tenant} />
        <TenantBrandingSection tenant={tenant} />
        <TenantLimitsSection
          tenant={tenant}
          registeredProductsAmount={registeredProductsAmount}
          subscriptionBasedLimit={subscriptionBasedLimit}
        />
      </div>
    </div>
  );
};
export default TenantGeneralInterface;
