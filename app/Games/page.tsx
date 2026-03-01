"use client";
import { Footer } from "@/components/Footer";
import { GamesPageInterface } from "@/components/GamesPageInterface";
import { Header } from "@/components/Header";
import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";

const Games = () => {
  const { user } = useAuth();
  const { tenant } = useTenant();
  return (
    <>
      <Header user={user} tenantId={tenant?.id} />
      <AreaBackground>
        <GamesPageInterface />
      </AreaBackground>
      <Footer />
    </>
  );
};
export default Games;
