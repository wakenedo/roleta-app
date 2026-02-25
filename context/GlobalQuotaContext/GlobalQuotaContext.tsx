import { useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { SpinQuota } from "../UserContext/types";

const renderDeployAddress = process.env.NEXT_PUBLIC_API_URL;

const useGlobalQuota = () => {
  const { authorizedFetch } = useAuth();
  const [quota, setQuota] = useState<SpinQuota | null>(null);
  const [globalQuotaLoading, setGlobalQuotaLoading] = useState(false);

  const refresh = async () => {
    if (globalQuotaLoading) return; // prevent multiple simultaneous refreshes
    setGlobalQuotaLoading(true);
    const res = await authorizedFetch(`${renderDeployAddress}/spin/quota`);
    const json = await res.json();
    setQuota(json.quota);
    setGlobalQuotaLoading(false);
  };
  console.log("GlobalQuotaContext: quota =", quota);
  return { quota, refresh, globalQuotaLoading };
};

export { useGlobalQuota };
