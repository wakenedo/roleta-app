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
  spins: SpinQuota | undefined;
  loading: boolean;
}

type UserCardProps = {
  user: User | null;
  logout: () => void;
};

type DailyQuotaProps = {
  data: UserState | null;
  spins: SpinQuota | undefined;
  historyPreview: SpinHistoryItem[] | undefined;
  loading: boolean;
};

export type { UserAreaInterfaceProps, UserCardProps, DailyQuotaProps };
