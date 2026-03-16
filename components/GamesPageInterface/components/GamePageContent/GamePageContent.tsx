"use client";
import { Slots } from "@/components/Slots";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useUser } from "@/context/UserContext/UserContext";

const GamePageContent = () => {
  const { authorizedFetch } = useAuth();
  const { loading, optimisticSpin } = useUser();
  const { refresh, quota, globalQuotaLoading } = useGlobalQuota();

  return (
    <Slots
      authorizedFetch={authorizedFetch}
      globalQuotaLoading={globalQuotaLoading}
      loading={loading}
      sessionTenantId={null}
      optimisticSpin={optimisticSpin}
      quota={quota}
      refresh={refresh}
    />
  );
};
export default GamePageContent;
