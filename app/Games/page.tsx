"use client";
import { AreaBackground } from "@/backgrounds/AreaBackground";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useUser } from "@/context/UserContext/UserContext";
import { GamesPageInterface } from "@/Interfaces/GamesPageInterface";
import { HeaderAndFooterInterface } from "@/Interfaces/HeaderAndFooterInterface";

const Games = () => {
  const { authorizedFetch } = useAuth();
  const { loading, optimisticSpin } = useUser();
  const { refresh, quota, globalQuotaLoading } = useGlobalQuota();
  return (
    <HeaderAndFooterInterface>
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
    </HeaderAndFooterInterface>
  );
};
export default Games;
