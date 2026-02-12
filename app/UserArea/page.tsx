"use client";

import { Header } from "@/components/Header";
import { UserAreaInterface } from "@/components/UserAreaInterface";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useUser } from "@/context/UserContext/UserContext";
import { redirect } from "next/navigation";
import { useMemo } from "react";

const UserArea = () => {
  const { user, logout } = useAuth();
  const { data, loading } = useUser();

  if (!user) {
    redirect("/");
  }

  const history = useMemo(
    () => data?.historyPreview ?? [],
    [data?.historyPreview],
  );

  const spins = data?.quota.spins;

  return (
    <>
      <Header user={user} />
      <UserAreaInterface
        historyPreview={history}
        loading={loading}
        spins={spins}
        data={data}
        user={user}
        logout={logout}
      />
    </>
  );
};

export default UserArea;
