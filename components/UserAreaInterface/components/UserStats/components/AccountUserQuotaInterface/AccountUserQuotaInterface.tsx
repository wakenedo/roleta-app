import { USER_SPIN_PLANS } from "@/components/HomePageInterface/utils/userHelpers";
import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { useRouter } from "next/navigation";

const AccountUserQuotaInterface = ({
  accountSubscriptionStatus,
  accountLimitQuotas,
}: {
  accountSubscriptionStatus: string | undefined;
  accountLimitQuotas:
    | {
        tenantGlobal: {
          monthly: {
            limit: number;
            remaining: number;
            used: number;
          };
          weekly: {
            limit: number;
            remaining: number;
            used: number;
          };
        };
      }
    | undefined;
}) => {
  const router = useRouter();
  const userWeeklyLimitQuota = accountLimitQuotas?.tenantGlobal.weekly.limit;
  const userWeeklyRemainingQuota =
    accountLimitQuotas?.tenantGlobal.weekly.remaining;
  const userMonthlyLimitQuota = accountLimitQuotas?.tenantGlobal.monthly.limit;
  const userMonthlyRemainingQuota =
    accountLimitQuotas?.tenantGlobal.monthly.remaining;

  const config =
    USER_SPIN_PLANS[accountSubscriptionStatus as keyof typeof USER_SPIN_PLANS];

  const mockPromoSpin = 1000;
  const show = false;

  const handleUpdateSubscriptionClick = () => {
    router.push(`/UserSubscriptions`);
  };
  const handleAcquirePromoSpinClick = () => {
    console.log("Next Implementation");
  };

  return (
    <div className="w-xl">
      <UserAreaSectionBackground>
        <span className="cursor-default text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
          Quotas Parceiros
        </span>
        <hr className="border-t border-slate-300 mb-4" />
        <div className="cursor-default tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold ">Mês</span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              {userMonthlyRemainingQuota}/{userMonthlyLimitQuota}
            </span>
          </div>
        </div>
        <div className="cursor-default tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold ">Semana</span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              {userWeeklyRemainingQuota}/{userWeeklyLimitQuota}
            </span>
          </div>
        </div>
        <div className="tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold cursor-default">Adquiridas</span>
          <div>
            {show === false ? (
              <div>
                <a
                  onClick={handleAcquirePromoSpinClick}
                  className="text-base font-semibold text-amber-500 cursor-pointer"
                >
                  Adquira PROMOGIROS
                </a>
              </div>
            ) : (
              <span className="text-base font-semibold text-slate-400 cursor-default">
                {mockPromoSpin}
              </span>
            )}
          </div>
        </div>
        <div className="tracking-widest text-xs text-slate-600 uppercase">
          <span className="cursor-default font-bold ">Extras</span>
          <div>
            {accountSubscriptionStatus != "free" ? (
              <span className="cursor-default text-base font-semibold text-slate-400">
                {config?.tenantMultiplier}
              </span>
            ) : (
              <div>
                <a
                  onClick={handleUpdateSubscriptionClick}
                  className="text-base font-semibold text-amber-500 cursor-pointer"
                >
                  Atualize sua Assinatura
                </a>
              </div>
            )}
          </div>
        </div>
      </UserAreaSectionBackground>
    </div>
  );
};
export default AccountUserQuotaInterface;
