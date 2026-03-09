import { TenantSubscriptionModes } from "@/components/HomePageInterface/components/TenantSubscriptionModes";

const SubscriptionTenantProInterface = () => {
  return (
    <>
      <main className="flex flex-col justify-between items-center  min-h-screen relative z-10 pt-4">
        <div>
          <h2 className="uppercase">TenantPro</h2>
          <span>TenantPro</span>
        </div>
      </main>
      <TenantSubscriptionModes />
    </>
  );
};
export default SubscriptionTenantProInterface;
