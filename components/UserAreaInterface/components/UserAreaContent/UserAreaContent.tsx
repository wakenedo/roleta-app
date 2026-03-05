"use client";
import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useUser } from "@/context/UserContext/UserContext";
import { redirect } from "next/navigation";
import { useMemo } from "react";
import UserAreaInterface from "../../UserAreaInterface";

const UserAreaContent = () => {
  const { user, logout } = useAuth();
  const { data, loading } = useUser();
  const { quota } = useGlobalQuota();

  if (!user) {
    redirect("/");
  }

  const history = useMemo(
    () => data?.historyPreview ?? [],
    [data?.historyPreview],
  );

  const spins = quota;
  return (
    <AreaBackground>
      <UserAreaInterface
        historyPreview={history}
        loading={loading}
        spins={spins}
        data={data}
        user={user}
        logout={logout}
      />
    </AreaBackground>
  );
};
export default UserAreaContent;
