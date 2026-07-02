import { SubscriptionTenantInterface } from "./components/SubscriptionTenantInterface";
import { SubscriptionTenantPremiumInterface } from "./components/SubscriptionTenantPremiumInterface";
import { SubscriptionTenantProInterface } from "./components/SubscriptionTenantProInterface";

const TenantSubscriptionInterface = ({
  tenantSubscription,
}: {
  tenantSubscription: string;
}) => {
  if (tenantSubscription === "tenantPremium") {
    return <SubscriptionTenantPremiumInterface />;
  }
  if (tenantSubscription === "tenantPro") {
    return <SubscriptionTenantProInterface />;
  }

  return <SubscriptionTenantInterface />;
};
export default TenantSubscriptionInterface;
