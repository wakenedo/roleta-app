import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { SubscriptionTag } from "./SubscriptionTag";

const SubscriptionStatus = ({
  subStatus,
}: {
  subStatus: string | undefined;
}) => {
  return (
    <UserAreaSectionBackground>
      <span className="text-xs font-semibold text-slate-600">
        Assinatura Ativa :
      </span>
      <div>
        <SubscriptionTag subStatus={subStatus} />
      </div>
    </UserAreaSectionBackground>
  );
};
export default SubscriptionStatus;
