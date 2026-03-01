"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";
import { UserAreaInterface } from "@/components/UserAreaInterface";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useUser } from "@/context/UserContext/UserContext";
import { redirect } from "next/navigation";
import { useMemo } from "react";

const UserArea = () => {
  const { user, logout } = useAuth();
  const { data, loading } = useUser();
  const { quota } = useGlobalQuota();
  const { tenant } = useTenant();

  if (!user) {
    redirect("/");
  }

  const history = useMemo(
    () => data?.historyPreview ?? [],
    [data?.historyPreview],
  );

  const spins = quota;

  return (
    <>
      <Header user={user} tenantId={tenant?.id} />
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
      <Footer />
    </>
  );
};

export default UserArea;
