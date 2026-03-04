"use client";
import { UserOfflineHomePage } from "./components/UserOfflineHomePage";
import { UserOnlineHomePage } from "./components/UserOnlineHomePage";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useUser } from "@/context/UserContext/UserContext";
import { useTenant } from "@/context/TenantContext/TenantContext";

const HomePageInterface = () => {
  const { user } = useAuth();
  const { data } = useUser();
  const { tenant } = useTenant();
  return (
    <>
      {user === null && <UserOfflineHomePage />}
      {user != null && <UserOnlineHomePage userData={data} tenant={tenant} />}
    </>
  );
};
export default HomePageInterface;
