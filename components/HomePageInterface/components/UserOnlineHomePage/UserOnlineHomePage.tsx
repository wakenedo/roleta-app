import { TenantSubscriptionModes } from "../TenantSubscriptionModes";
import { AreaBackground } from "../UserOfflineHomePage/components/AreaBackground";
import { UserSubscriptionModes } from "../UserSubscriptionModes";
import { ActiveTenantsInterface } from "./components/ActiveTenantsInterface";

const UserOnlineHomePage = () => {
  return (
    <div className="flex flex-col  mt-10   ">
      <ActiveTenantsInterface />
      <AreaBackground>
        <UserSubscriptionModes />
        <TenantSubscriptionModes />
      </AreaBackground>
    </div>
  );
};
export default UserOnlineHomePage;
