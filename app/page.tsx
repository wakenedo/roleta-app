"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomePageInterface } from "@/components/HomePageInterface";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useUser } from "@/context/UserContext/UserContext";

export default function Home() {
  const { user } = useAuth();
  const { data } = useUser();
  const { tenant } = useTenant();

  return (
    <>
      <Header user={user} tenantId={tenant?.id} />
      <div className="bg-gradient-to-br from-amber-500 to-[#84e9e4]">
        <div>
          <main className="flex flex-col justify-between  min-h-screen relative z-10 ">
            <HomePageInterface user={user} userData={data} tenant={tenant} />
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
