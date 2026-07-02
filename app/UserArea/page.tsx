"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useUser } from "@/context/UserContext/UserContext";
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
    <>
      <Header />
      <UserAreaInterface
        user={user}
        data={data}
        logout={logout}
        historyPreview={historyPreview}
        spins={quota}
        loading={loading}
      />
      <Footer />
    </>
  );
};

export default UserArea;
