import { SpinHistoryItem, UserStats } from "@/context/UserContext/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { UserLimitQuotasProps } from "../../types";
import { UserRecentTenants } from "./components/UserRecentTenants";
import { UserRemainingQuota } from "./components/UserRemainingQuota";
import UserQuotaLimits from "./components/UserQuotaLimits/UserQuotaLimits";
import { UserPaymentSection } from "./components/UserPaymentSection";
import { UserDynamicSection } from "./components/UserDynamicSection";
import { UserPromoGiroSection } from "./components/UserPromoGiroSection";

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
  userSubscriptionStatus: string | undefined;
  userLimitQuotas: UserLimitQuotasProps;
}) => {
  return (
    <div className="bg-white/50 backdrop-blur shadow-md px-1 w-full  pb-1">
      <div className=" bg-white backdrop-blur shadow-md md:px-1 md:py-3  px-3 py-3 ">
        <div className="flex  mb-2  space-x-2">
          <div className="flex justify-between flex-col space-y-2 max-w-full lg:w-full w-md">
            <UserRemainingQuota
              quotaCooldownTimeLeft={quotaCooldownTimeLeft}
              barColor={barColor}
              isQuotaEmpty={isQuotaEmpty}
              dailyQuotaLimit={dailyQuotaLimit}
              progressBar={progressBar}
              remainingQuota={remainingQuota}
            />
            <UserDynamicSection
              router={router}
              isQuotaEmpty={isQuotaEmpty}
              accountSubscriptionStatus={userSubscriptionStatus}
            />
            <UserPaymentSection />
          </div>
          <div className="h-full flex flex-col space-y-2 justify-between max-w-full lg:w-full w-md">
            <UserPromoGiroSection
              router={router}
              isQuotaEmpty={isQuotaEmpty}
              accountSubscriptionStatus={userSubscriptionStatus}
            />
            <UserQuotaLimits accountLimitQuotas={userLimitQuotas} />
            <UserRecentTenants
              uniqueTenants={uniqueTenants}
              router={router}
              isQuotaEmpty={isQuotaEmpty}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserGeneralSection;
