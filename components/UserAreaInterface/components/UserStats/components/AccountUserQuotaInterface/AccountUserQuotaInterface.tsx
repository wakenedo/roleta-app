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

  const handleClick = () => {
    router.push(`/UserSubscriptions`);
  };

  return (
    <div className="w-xl">
      <UserAreaSectionBackground>
        <span className="text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
          Quotas Parceiros
        </span>
        <hr className="border-t border-slate-300 mb-4" />
        <div className="tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold ">Mês</span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              {userMonthlyRemainingQuota}/{userMonthlyLimitQuota}
            </span>
          </div>
        </div>
        <div className="tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold ">Semana</span>
          <div>
            <span className="text-base font-semibold text-slate-400">
              {userWeeklyRemainingQuota}/{userWeeklyLimitQuota}
            </span>
          </div>
        </div>

        <div className="tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold ">Extras</span>
          <div>
            {accountSubscriptionStatus != "free" ? (
              <span className="text-base font-semibold text-slate-400">
                {config.tenantMultiplier}
              </span>
            ) : (
              <div>
                <a
                  onClick={handleClick}
                  className="text-base font-semibold text-amber-500 cursor-pointer"
                >
                  Atualize sua Assinatura
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="tracking-widest text-xs text-slate-600 uppercase">
          <span className="font-bold ">Adquiridas</span>
          <div>
            <span className="text-base font-semibold text-slate-400">0</span>
          </div>
        </div>
      </UserAreaSectionBackground>
    </div>
  );
};
export default AccountUserQuotaInterface;
