import { UserSubscriptionModes } from "../UserSubscriptionModes";
import { TenantSubscriptionModes } from "../TenantSubscriptionModes";
import { AnimatedCta } from "./components/AnimatedCta";

const UserOfflineHomePage = () => {
  return (
    <div className="flex flex-col border-2 border-black md:mx-2 mt-13 md:py-2 space-y-4 ">
      <AnimatedCta />
      <UserSubscriptionModes />
      <TenantSubscriptionModes />
    </div>
  );
};
export default UserOfflineHomePage;
