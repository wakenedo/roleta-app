import { SpinHistoryItem, UserStats } from "@/context/UserContext/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { UserLimitQuotasProps } from "../../types";
import { UserRecentTenants } from "./components/UserRecentTenants";
import { UserRemainingQuota } from "./components/UserRemainingQuota";
import { UserSpinHistory } from "./components/UserSpinHistory";
import UserQuotaLimits from "./components/UserQuotaLimits/UserQuotaLimits";

const UserGeneralSection = ({
  barColor,
  dailyQuotaLimit,
  isQuotaEmpty,
  progressBar,
  quotaCooldownTimeLeft,
  remainingQuota,
  router,
  uniqueTenants,
  userLimitQuotas,
  userStats,
  userSubscriptionStatus,
}: {
  uniqueTenants: SpinHistoryItem[];
  router: AppRouterInstance;
  quotaCooldownTimeLeft: string;
  barColor: string;
  isQuotaEmpty: boolean;
  dailyQuotaLimit: number | undefined;
  progressBar: number;
  remainingQuota: number | undefined;
  userStats: UserStats | undefined;
  userSubscriptionStatus: string | undefined;
  userLimitQuotas: UserLimitQuotasProps;
}) => {
  return (
    <div className="bg-white/90 backdrop-blur shadow-md px-1 w-full h-fit pb-1">
      <div className=" bg-white/90 backdrop-blur shadow-md md:px-4 md:py-4  px-3 py-3 ">
        <div className="flex  space-x-2">
          <div className=" flex flex-col ">
            <UserRecentTenants uniqueTenants={uniqueTenants} router={router} />
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <UserRemainingQuota
              quotaCooldownTimeLeft={quotaCooldownTimeLeft}
              barColor={barColor}
              isQuotaEmpty={isQuotaEmpty}
              dailyQuotaLimit={dailyQuotaLimit}
              progressBar={progressBar}
              remainingQuota={remainingQuota}
            />
            <UserSpinHistory stats={userStats} />
            <UserQuotaLimits
              accountSubscriptionStatus={userSubscriptionStatus}
              accountLimitQuotas={userLimitQuotas}
              router={router}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserGeneralSection;
