"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { useAuth } from "@/context/AuthContext/AuthContext";
import {
  SpinHistoryItem,
  SpinQuota,
  UserContextProps,
  UserState,
} from "./types";

const UserContext = createContext<UserContextProps | undefined>(undefined);

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const buildNextHistory = (prev: UserState): SpinHistoryItem[] => {
  const limit = prev.user.subscription === "premium" ? 50 : 10;
  return [...(prev.historyPreview ?? [])].slice(0, limit);
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user, authorizedFetch, loading: authLoading } = useAuth();

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

  const silentRefresh = useCallback(async () => {
    await performFetch({ silent: true });
  }, [performFetch]);

  useEffect(() => {
    if (!authLoading) {
      fetchMe();
    }
  }, [authLoading, fetchMe]);

  const optimisticSpin = (quota: SpinQuota) => {
    setData((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        quota: { spins: quota },
        stats: {
          ...prev.stats,
          totalSpins: prev.stats.totalSpins + 1,
        },
        historyPreview: buildNextHistory(prev),
      };
    });
    if (!authLoading) {
      silentRefresh();
    }
  };

  return (
    <UserContext.Provider
      value={{
        data,
        loading,
        error,
        refresh: fetchMe,
        optimisticSpin,
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
