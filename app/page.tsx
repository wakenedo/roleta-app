"use client";
import { AuthInterface } from "@/components/AuthInterface";
import { UserInterface } from "@/components/UserInterface";
import { useAuth } from "@/context/AuthContext/AuthContext";

export default function Home() {
  const { user, logout } = useAuth();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {user === null ? (
          <AuthInterface />
        ) : (
          <UserInterface user={user} logout={logout} />
        )}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
