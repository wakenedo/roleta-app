"use client";

import { Header } from "@/components/Header";
import { UserAreaInterface } from "@/components/UserAreaInterface";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { redirect } from "next/navigation";

const UserArea = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <Header user={user} />
      {user ? <UserAreaInterface user={user} logout={logout} /> : redirect("/")}
    </>
  );
};

export default UserArea;
