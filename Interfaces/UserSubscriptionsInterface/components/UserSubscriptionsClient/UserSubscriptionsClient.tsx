"use client";
import UserSubscriptionsInterface from "../../UserSubscriptionsInterface";
import { HeaderAndFooterInterface } from "@/Interfaces/HeaderAndFooterInterface";
import { useUserSubscriptions } from "@/hooks/pages/useUserSubscriptions";

const UserSubscriptionsClient = () => {
  const {
    planId,
    upgradeUserSubscription,
    successUpgradeUserSub,
    loadingUpgradeUserSub,
  } = useUserSubscriptions();

  return (
    <HeaderAndFooterInterface>
      <UserSubscriptionsInterface
        planId={planId}
        upgradeUserSubscription={upgradeUserSubscription}
        successUpgradeUserSub={successUpgradeUserSub}
        loadingUpgradeUserSub={loadingUpgradeUserSub}
      />
    </HeaderAndFooterInterface>
  );
};
export default UserSubscriptionsClient;
