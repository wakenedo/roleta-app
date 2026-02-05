// components/UserStats.tsx
"use client";

import { User } from "firebase/auth";
import { SubscriptionStatus } from "./components/SubscriptionStatus";
import { AccountSpinHistory } from "./components/AccountSpinHistory";

import { AccountRewardHistory } from "./components/AccountRewardHistory";
import { TrophiesAcquired } from "./components/TrophiesAcquired";

const UserStats = ({ user }: { user: User }) => {
  return (
    <div className="bg-white/90 backdrop-blur rounded-lg shadow-md p-4">
      <div>
        <span className="text-sm font-semibold text-slate-800">
          Estatísticas do Usuário
        </span>
        <hr className="border-t border-slate-300 my-2" />
      </div>
      <div className=" flex flex-col space-y-2">
        <SubscriptionStatus user={user} />
        <AccountRewardHistory />
        <AccountSpinHistory />
        <TrophiesAcquired />
      </div>
    </div>
  );
};

export default UserStats;
