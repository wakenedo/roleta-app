"use client";
import { AuthInterface } from "@/components/AuthInterface";
import { Header } from "@/components/Header";
import { Slots } from "@/components/Slots";
import { UserInterface } from "@/components/UserInterface";
import { useAuth } from "@/context/AuthContext/AuthContext";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <>
      <Header user={user} />
      <div className=" bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-slate-800 font-sans">
        <div>
          <main className="flex flex-col justify-between  min-h-screen relative z-10 pt-4">
            <div className="flex flex-col   items-center  mt-7 mx-2">
              {user != null && <Slots />}
              {user === null && <AuthInterface />}
              <div></div>
            </div>
            <div className="z-10 flex sticky-bottom w-full">
              {user != null && <UserInterface user={user} logout={logout} />}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
