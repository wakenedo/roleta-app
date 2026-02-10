import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { UserState } from "@/context/UserContext/types";
import { SubscriptionTag } from "./SubscriptionTag";

const SubscriptionStatus = ({ data }: { data: UserState | null }) => {
  const subscriptionStatus = data?.user.subscription;
  return (
    <UserAreaSectionBackground>
      <span className="text-xs font-semibold text-slate-600">
        Assinatura Ativa :
      </span>
      <div>
        <SubscriptionTag subStatus={subscriptionStatus} />
      </div>
    </UserAreaSectionBackground>
  );
};
export default SubscriptionStatus;
