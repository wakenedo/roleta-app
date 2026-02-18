import { Product } from "@/components/Slots/types";

type SpinQuota = {
  used: number;
  remaining: number;
  limit: number;
  resetsAt: string;
  tenantId?: string | null;
};

type UserStats = {
  totalSpins: number;
  totalRewards: number;
  jackpots: number;
  rare: number;
  common: number;
};

type BackendUser = {
  id: string;
  email: string;
  name: string | null;
  photoURL: string | null;
  createdAt: string | null;
  subscription: string;
};

type UserState = {
  user: BackendUser;
  quota: {
    spins: SpinQuota;
  };
  stats: UserStats;
  rewards: unknown[];
  historyPreview: SpinHistoryItem[];
};

interface SpinHistoryItem {
  id: string;
  createdAt: string;
  ip?: string;
  userAgent?: string;
  quotaBefore: number;
  quotaAfter: number;
  products: Product[];
}

interface UserContextProps {
  data: UserState | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  optimisticSpin: (quota: SpinQuota) => void;
}

export type {
  UserContextProps,
  UserState,
  BackendUser,
  SpinQuota,
  UserStats,
  SpinHistoryItem,
};
