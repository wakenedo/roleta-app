"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomePageInterface } from "@/components/HomePageInterface";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";

export default function Home() {
  const { user } = useAuth();
  const { tenant } = useTenant();

  return (
    <>
      <Header user={user} tenantId={tenant?.id} />
      <div className="bg-amber-500">
        <div>
          <main className="flex flex-col justify-between  min-h-screen relative z-10 ">
            <HomePageInterface user={user} />
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
