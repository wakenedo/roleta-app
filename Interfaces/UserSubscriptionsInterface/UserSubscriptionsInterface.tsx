import { UserChoiceSubscription } from "./components/UserChoiceSubscription";
import { UserPremium } from "./components/UserPremium";
import { UserPremiumPlus } from "./components/UserPremiumPlus";

const UserSubscriptionsInterface = ({
  planId,
  upgradeUserSubscription,
  successUpgradeUserSub,
  loadingUpgradeUserSub,
}: {
  upgradeUserSubscription: (selectedPlan: string) => Promise<void>;
  planId: string | null;
  successUpgradeUserSub: boolean;
  loadingUpgradeUserSub: boolean;
}) => {
  console.log(planId);
  switch (planId != null && planId) {
    case "premium":
      return <UserPremium planId={planId} />;

    case "premium+":
      return <UserPremiumPlus planId={planId} />;

    default:
      return (
        <UserChoiceSubscription
          upgradeUserSubscription={upgradeUserSubscription}
          successUpgradeUserSub={successUpgradeUserSub}
          loadingUpgradeUserSub={loadingUpgradeUserSub}
        />
      );
  }
};

export default UserSubscriptionsInterface;
