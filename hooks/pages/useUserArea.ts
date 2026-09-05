import { getTimeUntil } from "@/components/Slots/components/SlotsGame/components/SpinInterface/utils";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { SpinHistoryItem } from "@/context/UserContext/types";
import { useUser } from "@/context/UserContext/UserContext";
import { formatCountdown } from "@/utils/formatter-utils";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export const useUserArea = () => {
  const router = useRouter();
  const { user, logout, loading: authLoading } = useAuth();
  const { data, loading, historyPreview } = useUser();
  const { quota, refresh } = useGlobalQuota();

  const resetAt = quota?.resetsAt;

  const remainingQuota = quota?.remaining;
  const dailyQuotaLimit = quota?.limit;

  const progressBar =
    dailyQuotaLimit && remainingQuota && dailyQuotaLimit > 0
      ? (remainingQuota / dailyQuotaLimit) * 100
      : 0;

  const barColor =
    progressBar > 60
      ? "bg-amber-500"
      : progressBar > 30
        ? "bg-yellow-400"
        : "bg-red-400";

  const isQuotaEmpty = remainingQuota === 0;

  const [activeTab, setActiveTab] = useState<
    "general" | "visited" | "spin-history" | "trophies"
  >("general");
  const [activeModal, setActiveModal] = useState<
    "advanced" | "bug" | "suggestion" | null
  >(null);

  const [quotaCooldownTimeLeft, setQuotaCoolDownTimeLeft] = useState(
    formatCountdown(getTimeUntil(resetAt as string)),
  );

  const userName = user?.displayName;
  const userPhotoURL = user?.photoURL;
  const userEmail = user?.email;

  const subStatus = data?.user.subscription;
  const userStats = data?.stats;
  const userLimitQuotas = data?.limits;
  const userSubscriptionStatus = data?.user.subscription;
  const userClickEvents = data?.clickEvents;

  const isHistoryPreviewEmpty = historyPreview?.length === 0;

  const globalSpinHistory = historyPreview?.filter((spin) => !spin.tenantId);

  const tenantSpinHistory = historyPreview?.filter((spin) => spin.tenantId);

  const groupedTenantHistory = tenantSpinHistory?.reduce(
    (acc, spin) => {
      const key = spin.tenantId!;

      if (!acc[key]) acc[key] = [];
      acc[key].push(spin);

      return acc;
    },
    {} as Record<string, SpinHistoryItem[]>,
  );

  const tenantsSpin = historyPreview
    ?.filter((spin) => spin.tenantId != null)
    ?.reduce((acc, spin) => {
      const existing = acc.get(spin.tenantId as string);

      if (!existing) {
        acc.set(spin.tenantId as string, spin);
        return acc;
      }

      // keep the most recent one
      if (new Date(spin.createdAt) > new Date(existing.createdAt)) {
        acc.set(spin.tenantId as string, spin);
      }

      return acc;
    }, new Map<string, SpinHistoryItem>())
    ?.values();

  const uniqueTenants = Array.from(tenantsSpin || []).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  useEffect(() => {
    if (!isQuotaEmpty) return;

    const interval = setInterval(() => {
      const result = getTimeUntil(resetAt as string);

      if (result.isExpired) {
        setQuotaCoolDownTimeLeft("disponível!");
        clearInterval(interval);
        return;
      }

      setQuotaCoolDownTimeLeft(formatCountdown(result));
    }, 1000);

    return () => clearInterval(interval);
  }, [resetAt, isQuotaEmpty]);

  const closeModal = () => setActiveModal(null);
  useEffect(() => {
    if (user) {
      refresh({ tenantId: null });
    }
  }, [user, refresh]);

  return {
    user,
    userName,
    userPhotoURL,
    userEmail,
    subStatus,
    userStats,
    userLimitQuotas,
    userSubscriptionStatus,
    userClickEvents,
    historyPreview,
    quota,
    loading,
    authLoading,
    activeTab,
    activeModal,
    setActiveModal,
    setActiveTab,
    logout,
    closeModal,
    resetAt,
    isHistoryPreviewEmpty,
    globalSpinHistory,
    groupedTenantHistory,
    router,
    uniqueTenants,
    barColor,
    isQuotaEmpty,
    dailyQuotaLimit,
    remainingQuota,
    progressBar,
    quotaCooldownTimeLeft,
  };
};
