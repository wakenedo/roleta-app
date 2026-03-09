"use client";
import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useUser } from "@/context/UserContext/UserContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import UserAreaInterface from "../../UserAreaInterface";

const UserAreaContent = () => {
  const { user, logout } = useAuth();
  const { data, loading, historyPreview } = useUser();
  const { quota, refresh } = useGlobalQuota();

  if (!user) {
    redirect("/");
  }

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <AreaBackground>
      <UserAreaInterface
        historyPreview={historyPreview}
        loading={loading}
        spins={quota}
        data={data}
        user={user}
        logout={logout}
      />
    </AreaBackground>
  );
};
export default UserAreaContent;
