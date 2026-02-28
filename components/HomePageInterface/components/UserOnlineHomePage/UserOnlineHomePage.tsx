import { TenantSubscriptionModes } from "../TenantSubscriptionModes";
import { UserSubscriptionModes } from "../UserSubscriptionModes";
import { ActiveTenantsInterface } from "./components/ActiveTenantsInterface";

const UserOnlineHomePage = () => {
  return (
    <div className="flex flex-col border-2 border-black md:mx-2 mt-13 mb-22 md:py-2 space-y-4 ">
      <ActiveTenantsInterface />
      <UserSubscriptionModes />
      <TenantSubscriptionModes />
    </div>
  );
};
export default UserOnlineHomePage;
