import { User } from "firebase/auth";

const SubscriptionStatus = ({ user }: { user: User }) => {
  return (
    <div className="bg-white/90 backdrop-blur rounded-lg shadow-md p-4 w-full">
      <span className="text-xs font-semibold text-slate-600">
        Assinatura Ativa :
      </span>
      <div>
        <span className="text-xs text-slate-600">
          {user.email?.includes("promobet.com") ? "Premium" : "Gratuita"}
        </span>
      </div>
    </div>
  );
};
export default SubscriptionStatus;
