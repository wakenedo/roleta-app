"use client";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useUser } from "@/context/UserContext/UserContext";
import { HeaderAndFooterInterface } from "@/Interfaces/HeaderAndFooterInterface";
import { UserAreaInterface } from "@/Interfaces/UserAreaInterface";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const UserArea = () => {
  const { user, logout } = useAuth();
  const { data, loading, historyPreview } = useUser();
  const { quota, refresh } = useGlobalQuota();

  if (!user) {
    redirect("/");
  }

  useEffect(() => {
    refresh({ tenantId: null });
  }, [refresh]);
  return (
    <HeaderAndFooterInterface>
      <UserAreaInterface
        user={user}
        data={data}
        logout={logout}
        historyPreview={historyPreview}
        spins={quota}
        loading={loading}
      />
    </HeaderAndFooterInterface>
  );
};

export default UserArea;
