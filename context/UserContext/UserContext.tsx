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

export type SpinQuota = {
  used: number;
  remaining: number;
  limit: number;
  resetsAt: string;
};

export type UserStats = {
  totalSpins: number;
  totalRewards: number;
  jackpots: number;
};

export type BackendUser = {
  id: string;
  email: string;
  name: string | null;
  photoURL: string | null;
  createdAt: string | null;
};

export type UserState = {
  user: BackendUser;
  quota: {
    spins: SpinQuota;
  };
  stats: UserStats;
  rewards: unknown[];
};

interface UserContextProps {
  data: UserState | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  consumeSpin: (quota: SpinQuota) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

const API_URL = process.env.NEXT_PUBLIC_LOCAL_API;

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
      setData(json);
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

  return (
    <UserContext.Provider
      value={{
        data,
        loading,
        error,
        refresh: fetchMe,
        consumeSpin,
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
