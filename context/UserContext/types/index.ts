import { Product } from "@/components/Slots/types";

type SpinQuota = {
  used: number;
  remaining: number;
  limit: number;
  resetsAt: string;
};

type UserStats = {
  totalSpins: number;
  totalRewards: number;
  jackpots: number;
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
  historyPreview: Product[] | [];
};

interface UserContextProps {
  data: UserState | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  consumeSpin: (quota: SpinQuota) => void;
}

export type { UserContextProps, UserState, BackendUser, SpinQuota, UserStats };
