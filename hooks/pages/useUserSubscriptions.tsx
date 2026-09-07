import { useAuth } from "@/context/AuthContext/AuthContext";
import { useUser } from "@/context/UserContext/UserContext";
import { API_URL } from "@/enums";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const useUserSubscriptions = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");
  const { authorizedFetch } = useAuth();
  const { refresh } = useUser();

  const [loadingUpgradeUserSub, setLoadingUpgradeUserSub] = useState(false);
  const [successUpgradeUserSub, setSuccessUpgradeUserSub] = useState(false);

  const upgradeUserSubscription = async (selectedPlan: string) => {
    if (!selectedPlan) return;

    try {
      setLoadingUpgradeUserSub(true);

      const res = await authorizedFetch(`${API_URL}/users/subscriptions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: selectedPlan,
        }),
      });

      if (!res.ok) {
        throw new Error("Subscription failed");
      }

      await refresh();
      setSuccessUpgradeUserSub(true);
    } catch (err) {
      console.error("Upgrade failed:", err);
    } finally {
      setLoadingUpgradeUserSub(false);
    }
  };

  return {
    planId,
    upgradeUserSubscription,
    loadingUpgradeUserSub,
    successUpgradeUserSub,
  };
};
