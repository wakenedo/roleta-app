"use client";
import { useState, useCallback } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { SpinQuota } from "../UserContext/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const useGlobalQuota = () => {
  const { authorizedFetch } = useAuth();
  const [quota, setQuota] = useState<SpinQuota | null>(null);
  const [globalQuotaLoading, setGlobalQuotaLoading] = useState(false);

  const refresh = useCallback(
    async ({ tenantId }: { tenantId: string | null }) => {
      setGlobalQuotaLoading(true);

      if (tenantId != null) {
        try {
          const res = await authorizedFetch(
            `${API_URL}/tenants/${tenantId}/quota`,
          );
          const json = await res.json();
          console.log("GlobalQuota", json);
          setQuota(json.quota);
        } finally {
          setGlobalQuotaLoading(false);
        }
      }
      if (tenantId === null) {
        try {
          const res = await authorizedFetch(`${API_URL}/spin/quota`);
          const json = await res.json();
          setQuota(json.quota);
        } finally {
          setGlobalQuotaLoading(false);
        }
      }
    },
    [authorizedFetch],
  );

  console.log("GlobalQuotaContext: quota =", quota);

  return { quota, refresh, globalQuotaLoading };
};

export { useGlobalQuota };
