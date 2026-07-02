import { UserChoiceSubscription } from "./components/UserChoiceSubscription";
import { UserPremium } from "./components/UserPremium";
import { UserPremiumPlus } from "./components/UserPremiumPlus";

const UserSubscriptionsInterface = ({ planId }: { planId: string | null }) => {
  console.log(planId);
  switch (planId != null && planId) {
    case "premium":
      return <UserPremium planId={planId} />;

    case "premium+":
      return <UserPremiumPlus planId={planId} />;

    default:
      return <UserChoiceSubscription />;
  }
};

export default UserSubscriptionsInterface;
