"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { SpinHistoryItem, UserContextProps, UserState } from "./types";
import { useParams } from "next/navigation";

const UserContext = createContext<UserContextProps | undefined>(undefined);

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const buildNextHistory = (prev: UserState): SpinHistoryItem[] => {
  const limits: Record<string, number> = {
    free: 10,
    premium: 20,
    "premium+": 30,
  };

  const limit = limits[prev.user.subscription] ?? 10;
  return [...(prev.historyPreview ?? [])].slice(0, limit);
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user, authorizedFetch, loading: authLoading } = useAuth();
  const { tenantId } = useParams();
  const [data, setData] = useState<UserState | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const performFetch = useCallback(
    async (opts?: { silent?: boolean }) => {
      if (!user) {
        setData(null);
        return;
      }

      try {
        if (!opts?.silent) setLoading(true);
        setError(null);

        const res = await authorizedFetch(`${API_URL}/users/me`);
        if (!res.ok) throw new Error("Failed to fetch user");

        const json = await res.json();

        setData((prev) => {
          if (!prev) return json;

          const merged = [
            ...json.historyPreview,
            ...(prev.historyPreview ?? []),
          ];

          const unique = Array.from(
            new Map(merged.map((item) => [item.id, item])).values(),
          );

          return {
            ...json,
            historyPreview: unique,
          };
        });
      } catch (err) {
        console.error(err);
        setError("Failed to load user data");
      } finally {
        if (!opts?.silent) setLoading(false);
      }
    },
    [user, authorizedFetch],
  );

  const fetchMe = useCallback(async () => {
    await performFetch();
  }, [performFetch]);

  const historyPreview = useMemo(
    () => data?.historyPreview ?? [],
    [data?.historyPreview],
  );

  useEffect(() => {
    if (!authLoading) {
      fetchMe();
    }
  }, [authLoading, fetchMe]);

  const optimisticSpin = (tenantId?: string | null) => {
    setData((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        activeTenant: tenantId ?? null,
        stats: {
          ...prev.stats,
          totalSpins: prev.stats.totalSpins + 1,
        },
        historyPreview: buildNextHistory(prev),
      };
    });
  };

  const clickedProduct = async ({
    spinId,
    productUrl,
    position,
  }: {
    spinId: string;
    productUrl: string;
    position?: number;
  }) => {
    try {
      const res = await authorizedFetch(`${API_URL}/spin/${tenantId}/click`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          spinId,
          productClicked: {
            productUrl,
          },
          positionClicked: position ?? null,
        }),
      });

      if (!res?.ok) throw new Error("Click Failed");

      const json = await res.json();
      console.log("✅ click tracked", json);

      return json;
    } catch (err) {
      console.error("❌ click error", err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        data,
        historyPreview,
        loading,
        error,
        refresh: fetchMe,
        optimisticSpin,
        clickedProduct,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used within UserProvider");
  }
  return ctx;
};
