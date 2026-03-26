"use client";

import { AccountLastOffersClickedInterface } from "./components/AccountLastOffersClickedInterface";
import { AccountSpinHistory } from "./components/AccountSpinHistory";
import { AccountUserQuotaInterface } from "./components/AccountUserQuotaInterface";
import { TrophiesAcquired } from "./components/TrophiesAcquired";
import { UserState } from "@/context/UserContext/types";

const UserStats = ({ data }: { data: UserState | null }) => {
  const accountStats = data?.stats;
  const accountLimitQuotas = data?.limits;
  const accountSubscriptionStatus = data?.user.subscription;
  const accountClickEvents = data?.clickEvents;
  return (
    <div>
      <div className=" flex flex-col space-y-2 ">
        <AccountLastOffersClickedInterface
          accountClickEvents={accountClickEvents}
        />
        <div className="flex w-full space-x-2">
          <AccountSpinHistory stats={accountStats} />
          <AccountUserQuotaInterface
            accountSubscriptionStatus={accountSubscriptionStatus}
            accountLimitQuotas={accountLimitQuotas}
          />
        </div>
        <TrophiesAcquired />
      </div>
    </div>
  );
};

export default UserStats;
