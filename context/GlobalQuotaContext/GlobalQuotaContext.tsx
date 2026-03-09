"use client";
import { useState, useCallback } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { SpinQuota } from "../UserContext/types";

const renderDeployAddress = process.env.NEXT_PUBLIC_API_URL;

const useGlobalQuota = () => {
  const { authorizedFetch } = useAuth();
  const [quota, setQuota] = useState<SpinQuota | null>(null);
  const [globalQuotaLoading, setGlobalQuotaLoading] = useState(false);

  const refresh = useCallback(async () => {
    setGlobalQuotaLoading(true);

    try {
      const res = await authorizedFetch(`${renderDeployAddress}/spin/quota`);
      const json = await res.json();
      setQuota(json.quota);
    } finally {
      setGlobalQuotaLoading(false);
    }
  }, [authorizedFetch]);

  console.log("GlobalQuotaContext: quota =", quota);

  return { quota, refresh, globalQuotaLoading };
};

export { useGlobalQuota };
