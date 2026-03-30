"use client";
import { RemainingDisplay } from "./components/RemainingDisplay";
import { DailyOffersHistory } from "./components/DailyOffersHistory";
import { OutOfSpinsInterface } from "./components/OutOfSpinsInterface";
import { FC } from "react";
import { DailyQuotaProps } from "../../types";
import { RecentTenantsVisited } from "./components/RecentTenantsVisited";

const DailyQuota: FC<DailyQuotaProps> = ({
  spins,
  historyPreview,
  loading,
}) => {
  const resetAt = spins?.resetsAt;

  if (loading || !historyPreview) {
    return (
      <div className="flex flex-col space-y-2 bg-gradient-to-br from-[#0b0f1f] via-[#141b3a] to-[#1d1147] text-white w-xl  shadow-md md:p-4 p-2 xl:border-l xl:border-r-0 xl:border-y-0 border border-amber-500 ">
        <RecentTenantsVisited historyPreview={historyPreview} />
        <OutOfSpinsInterface />
      </div>
    );
  }

  return (
    <div className="mt-2 xl:mt-0 flex flex-col space-y-2 bg-gradient-to-br from-[#0b0f1f] via-[#141b3a] to-[#1d1147] text-white w-xl  shadow-md md:p-4 p-2  xl:border-l xl:border-r-0 xl:border-y-0 border border-amber-500">
      <RecentTenantsVisited historyPreview={historyPreview} />
      <RemainingDisplay resetsAt={resetAt} spins={spins} />
      <DailyOffersHistory historyPreview={historyPreview} />
    </div>
  );
};

export default DailyQuota;
