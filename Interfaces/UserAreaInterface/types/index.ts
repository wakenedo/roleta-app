import {
  SpinHistoryItem,
  SpinQuota,
  UserState,
} from "@/context/UserContext/types";
import { User } from "firebase/auth";

interface UserAreaInterfaceProps {
  user: User | null;
  data: UserState | null;
  logout: () => void;
  historyPreview: SpinHistoryItem[] | undefined;
  spins: SpinQuota | null;
  loading: boolean;
}

type UserCardProps = {
  user: User | null;
  logout: () => void;
  data: UserState | null;
};
type UserOptionsProps = {
  user: User | null;
  logout: () => void;
  subStatus: string | undefined;
};

type DailyQuotaProps = {
  data: UserState | null;
  spins: SpinQuota | null;
  historyPreview: SpinHistoryItem[] | undefined;
  loading: boolean;
};

type AccountUserQuotaInterfaceProps = {
  accountSubscriptionStatus: string | undefined;
  accountLimitQuotas:
    | {
        tenantGlobal: {
          monthly: {
            limit: number;
            remaining: number;
            used: number;
          };
          weekly: {
            limit: number;
            remaining: number;
            used: number;
          };
        };
      }
    | undefined;
};

export type {
  UserAreaInterfaceProps,
  UserCardProps,
  DailyQuotaProps,
  UserOptionsProps,
  AccountUserQuotaInterfaceProps,
};
