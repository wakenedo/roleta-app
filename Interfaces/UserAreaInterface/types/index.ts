import {
  ClickEvent,
  SpinHistoryItem,
  SpinQuota,
  UserState,
  UserStats,
} from "@/context/UserContext/types";
import { User } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";

interface UserAreaInterfaceProps {
  user: User | null;
  logout: () => void;
  loading: boolean;
  activeTab: "general" | "visited" | "spin-history" | "trophies";
  activeModal: "advanced" | "bug" | "suggestion" | null;
  setActiveTab: Dispatch<
    SetStateAction<"general" | "visited" | "spin-history" | "trophies">
  >;
  setActiveModal: Dispatch<
    SetStateAction<"advanced" | "bug" | "suggestion" | null>
  >;
  userName: string | undefined;
  closeModal: () => void;
  subStatus: string | undefined;
  userPhotoURL: string | null | undefined;
  userEmail: string | null | undefined;
  userStats: UserStats | undefined;
  userSubscriptionStatus: string | undefined;
  userLimitQuotas: UserLimitQuotasProps | undefined;
  userClickEvents: ClickEvent[] | undefined;
  isHistoryPreviewEmpty: boolean;
  globalSpinHistory: SpinHistoryItem[] | undefined;
  groupedTenantHistory: Record<string, SpinHistoryItem[]> | undefined;
  router: AppRouterInstance;
  uniqueTenants: SpinHistoryItem[];
  barColor: string;
  isQuotaEmpty: boolean;
  dailyQuotaLimit: number | undefined;
  progressBar: number;
  remainingQuota: number | undefined;
  quotaCooldownTimeLeft: string;
}

type UserLimitQuotasProps =
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
  router: AppRouterInstance;
};

export type {
  UserAreaInterfaceProps,
  UserCardProps,
  UserLimitQuotasProps,
  DailyQuotaProps,
  UserOptionsProps,
  AccountUserQuotaInterfaceProps,
};
