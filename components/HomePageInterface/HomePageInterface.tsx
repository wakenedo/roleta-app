import { User } from "firebase/auth";
import { UserOfflineHomePage } from "./components/UserOfflineHomePage";
import { UserOnlineHomePage } from "./components/UserOnlineHomePage";
import { UserState } from "@/context/UserContext/types";
import { Tenant } from "@/context/TenantContext/types";

const HomePageInterface = ({
  user,
  userData,
  tenant,
}: {
  user: User | null;
  userData: UserState | null;
  tenant?: Tenant | null;
}) => {
  return (
    <>
      {user === null && <UserOfflineHomePage />}
      {user != null && (
        <UserOnlineHomePage userData={userData} tenant={tenant} />
      )}
    </>
  );
};
export default HomePageInterface;
