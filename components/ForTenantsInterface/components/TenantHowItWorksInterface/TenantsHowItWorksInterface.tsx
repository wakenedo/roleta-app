import { TenantSubscriptionModes } from "@/components/HomePageInterface/components/TenantSubscriptionModes";
import { MonetizeYourAudience } from "./components/MonetizeYourAudience";
import { TenantsBusinessModel } from "./components/TenantsBusinessModel";

const TenantsHowItWorksInterface = () => {
  return (
    <>
      <MonetizeYourAudience />
      <TenantsBusinessModel />
      <TenantSubscriptionModes />
    </>
  );
};

export default TenantsHowItWorksInterface;
