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

const buildNextHistory = (
  prev: UserState,
  spin: SpinHistoryItem,
): SpinHistoryItem[] => {
  const limit = prev.user.subscription === "premium" ? 50 : 10;
  return [spin, ...(prev.historyPreview ?? [])].slice(0, limit);
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user, authorizedFetch, loading: authLoading } = useAuth();

  const [data, setData] = useState<UserState | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMe = useCallback(async () => {
    if (!user) {
      setData(null);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await authorizedFetch(`${API_URL}/users/me`);
      if (!res.ok) throw new Error("Failed to fetch user");

      const json = await res.json();
      setData((prev) => {
        if (!prev) return json;

        // merge history (server + optimistic)
        const merged = [...json.historyPreview, ...(prev.historyPreview ?? [])];

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
      setLoading(false);
    }
  }, [user, authorizedFetch]);

  useEffect(() => {
    if (!authLoading) {
      fetchMe();
    }
  }, [authLoading, fetchMe]);

  /**
   * Called after a successful spin
   * Backend remains the authority
   */
  const consumeSpin = (quota: SpinQuota) => {
    setData((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        quota: {
          spins: quota,
        },
        stats: {
          ...prev.stats,
          totalSpins: prev.stats.totalSpins + 1,
        },
      };
    });
  };

  const optimisticSpin = (spin: SpinHistoryItem, quota: SpinQuota) => {
    setData((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        quota: { spins: quota },
        stats: {
          ...prev.stats,
          totalSpins: prev.stats.totalSpins + 1,
        },
        historyPreview: buildNextHistory(prev, spin),
      };
    });
  };

  return (
    <UserContext.Provider
      value={{
        data,
        loading,
        error,
        refresh: fetchMe,
        consumeSpin,
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
