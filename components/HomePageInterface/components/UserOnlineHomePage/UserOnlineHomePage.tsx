import { Tenant } from "@/context/TenantContext/types";
import { TenantSubscriptionModes } from "../TenantSubscriptionModes";
import { AreaBackground } from "../UserOfflineHomePage/components/AreaBackground";
import { UserSubscriptionModes } from "../UserSubscriptionModes";
import { ActiveTenantsInterface } from "./components/ActiveTenantsInterface";
import { UserState } from "@/context/UserContext/types";

const UserOnlineHomePage = ({
  userData,
  tenant,
}: {
  userData: UserState | null;
  tenant?: Tenant | null;
}) => {
  return (
    <div className="flex flex-col  mt-10   ">
      <ActiveTenantsInterface />
      <AreaBackground>
        <UserSubscriptionModes userData={userData} />
        <TenantSubscriptionModes tenant={tenant} />
      </AreaBackground>
    </div>
  );
};
export default UserOnlineHomePage;
