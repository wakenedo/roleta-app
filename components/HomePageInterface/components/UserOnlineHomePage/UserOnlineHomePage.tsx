import { TenantSubscriptionModes } from "../TenantSubscriptionModes";
import { UserSubscriptionModes } from "../UserSubscriptionModes";
import { ActiveTenantsInterface } from "./components/ActiveTenantsInterface";

const UserOnlineHomePage = () => {
  return (
    <div className="flex flex-col  mt-10 md:py-2  ">
      <ActiveTenantsInterface />
      <UserSubscriptionModes />
      <TenantSubscriptionModes />
    </div>
  );
};
export default UserOnlineHomePage;
