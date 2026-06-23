import { TenantSubscriptionModes } from "@/components/HomePageInterface/components/TenantSubscriptionModes";
import { MonetizeYourAudience } from "./components/MonetizeYourAudience";
import { TenantsBusinessModel } from "./components/TenantsBusinessModel";

const TenantsHowItWorksInterface = ({
  currentTenantPlan,
  tenantMaxedPlan,
}: {
  currentTenantPlan: string | undefined;
  tenantMaxedPlan: boolean;
}) => {
  return (
    <>
      <MonetizeYourAudience />
      <TenantsBusinessModel />
      <TenantSubscriptionModes
        currentTenantPlan={currentTenantPlan}
        tenantMaxedPlan={tenantMaxedPlan}
      />
    </>
  );
};

export default TenantsHowItWorksInterface;
