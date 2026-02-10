"use client";

import { Header } from "@/components/Header";
import { UserAreaInterface } from "@/components/UserAreaInterface";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useUser } from "@/context/UserContext/UserContext";
import { redirect } from "next/navigation";

const UserArea = () => {
  const { user, logout } = useAuth();
  const { data } = useUser();

  return (
    <>
      <Header user={user} />
      {user ? (
        <UserAreaInterface data={data} user={user} logout={logout} />
      ) : (
        redirect("/")
      )}
    </>
  );
};

export default UserArea;
