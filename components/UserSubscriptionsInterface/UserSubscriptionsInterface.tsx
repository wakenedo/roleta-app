import { UserPremium } from "./components/UserPremium";
import { UserPremiumPlus } from "./components/UserPremiumPlus";

const UserSubscriptionsInterface = ({ planId }: { planId: string | null }) => {
  if (planId === "premium") {
    return <UserPremium planId={planId} />;
  }
  return <UserPremiumPlus planId={planId} />;
};
export default UserSubscriptionsInterface;
