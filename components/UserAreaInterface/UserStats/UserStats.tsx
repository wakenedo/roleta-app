// components/UserStats.tsx
"use client";

import { SubscriptionStatus } from "./components/SubscriptionStatus";
import { AccountSpinHistory } from "./components/AccountSpinHistory";

import { AccountRewardHistory } from "./components/AccountRewardHistory";
import { TrophiesAcquired } from "./components/TrophiesAcquired";
import { UserState } from "@/context/UserContext/types";

const UserStats = ({ data }: { data: UserState | null }) => {
  const accountStats = data?.stats;
  const totalReward = data?.stats.totalRewards;
  const subStatus = data?.user.subscription;
  return (
    <div className="bg-white/90 backdrop-blur rounded-lg shadow-md md:p-4 p-2">
      <div>
        <span className="text-sm font-semibold text-slate-800">
          Estatísticas do Usuário
        </span>
        <hr className="border-t border-slate-300 my-2" />
      </div>
      <div className=" flex flex-col space-y-2">
        <SubscriptionStatus subStatus={subStatus} />
        <AccountRewardHistory total={totalReward} />
        <AccountSpinHistory stats={accountStats} />
        <TrophiesAcquired />
      </div>
    </div>
  );
};

export default UserStats;
