import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { User } from "firebase/auth";

const SubscriptionStatus = ({ user }: { user: User }) => {
  return (
    <UserAreaSectionBackground>
      <span className="text-xs font-semibold text-slate-600">
        Assinatura Ativa :
      </span>
      <div>
        <span className="text-xs text-slate-600">
          {user.email?.includes("promobet.com") ? "Premium" : "Gratuita"}
        </span>
      </div>
    </UserAreaSectionBackground>
  );
};
export default SubscriptionStatus;
