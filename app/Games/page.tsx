"use client";
import { AreaBackground } from "@/backgrounds/AreaBackground";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useUser } from "@/context/UserContext/UserContext";
import { GamesPageInterface } from "@/Interfaces/GamesPageInterface";

const Games = () => {
  const { authorizedFetch } = useAuth();
  const { loading, optimisticSpin } = useUser();
  const { refresh, quota, globalQuotaLoading } = useGlobalQuota();
  return (
    <>
      <Header />
      <AreaBackground>
        <GamesPageInterface
          authorizedFetch={authorizedFetch}
          loading={loading}
          optimisticSpin={optimisticSpin}
          refresh={refresh}
          quota={quota}
          globalQuotaLoading={globalQuotaLoading}
        />
      </AreaBackground>
      <Footer />
    </>
  );
};
export default Games;
