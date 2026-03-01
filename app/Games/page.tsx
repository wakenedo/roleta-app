"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Slots } from "@/components/Slots";
import { UserInterface } from "@/components/UserInterface";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";

const Games = () => {
  const { user, logout } = useAuth();
  const { tenant } = useTenant();
  return (
    <>
      <Header user={user} tenantId={tenant?.id} />
      <div className=" bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-slate-800 font-sans">
        <main className="flex flex-col justify-between  min-h-screen relative z-10 pt-4">
          {user != null && <Slots />}
        </main>
        <div className="z-10 flex sticky-bottom w-full">
          {user != null && <UserInterface user={user} logout={logout} />}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Games;
