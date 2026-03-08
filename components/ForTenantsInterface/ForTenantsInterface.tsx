import { useTenant } from "@/context/TenantContext/TenantContext";
import { PlanIdInterface } from "./components/PlanIdInterface";
import { TenantSubscriptionInterface } from "./components/TenantSubscriptionInterface";
import TenantsHowItWorksInterface from "./components/TenantHowItWorksInterface/TenantsHowItWorksInterface";

const ForTenantsInterface = ({ planId }: { planId?: string | null }) => {
  console.log("FOR TENANTS PLAN:", planId);
  const { tenant } = useTenant();
  const tenantSubscription = tenant?.subscription;
  if (planId) {
    return <PlanIdInterface planId={planId} />;
  }
  if (tenantSubscription) {
    return (
      <TenantSubscriptionInterface tenantSubscription={tenantSubscription} />
    );
  }
  return <TenantsHowItWorksInterface />;
};
export default ForTenantsInterface;
