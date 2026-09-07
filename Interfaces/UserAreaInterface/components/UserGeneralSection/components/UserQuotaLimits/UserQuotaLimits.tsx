import { UserAreaSectionBackground } from "@/backgrounds/UserAreaSectionBackground";

const UserQuotaLimits = ({
  accountLimitQuotas,
}: {
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
  const userWeeklyLimitQuota = accountLimitQuotas?.tenantGlobal.weekly.limit;
  const userWeeklyRemainingQuota =
    accountLimitQuotas?.tenantGlobal.weekly.remaining;
  const userMonthlyLimitQuota = accountLimitQuotas?.tenantGlobal.monthly.limit;
  const userMonthlyRemainingQuota =
    accountLimitQuotas?.tenantGlobal.monthly.remaining;

  return (
    <UserAreaSectionBackground>
      <span className="cursor-default  text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
        Quotas Parceiros
      </span>
      <hr className="border-t border-slate-300 mb-4" />
      <div className="cursor-default tracking-widest text-xs text-slate-700 ">
        <span className="">Mês</span>
        <div>
          <span className="text-base lg:text-lg  text-slate-600">
            {userMonthlyRemainingQuota}/{userMonthlyLimitQuota}
          </span>
        </div>
      </div>
      <div className="cursor-default tracking-widest text-xs text-slate-700 ">
        <span className="">Semana</span>
        <div>
          <span className="text-base lg:text-lg  text-slate-600">
            {userWeeklyRemainingQuota}/{userWeeklyLimitQuota}
          </span>
        </div>
      </div>
    </UserAreaSectionBackground>
  );
};
export default UserQuotaLimits;
