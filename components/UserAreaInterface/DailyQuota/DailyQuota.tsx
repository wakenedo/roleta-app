"use client";
import { RemainingDisplay } from "./components/RemainingDisplay";
import { DailyOffersHistory } from "./components/DailyOffersHistory";
import { OutOfSpinsInterface } from "./components/OutOfSpinsInterface";
import { FC } from "react";
import { DailyQuotaProps } from "../types";

const DailyQuota: FC<DailyQuotaProps> = ({
  spins,
  historyPreview,
  loading,
  data,
}) => {
  if (loading || !historyPreview) {
    return (
      <div className="flex flex-col space-y-2 bg-white/90 backdrop-blur rounded-lg shadow-md p-4">
        <OutOfSpinsInterface />
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-2 bg-white/90 backdrop-blur rounded-lg shadow-md p-4 ">
      <RemainingDisplay spins={spins} />
      <DailyOffersHistory data={data} historyPreview={historyPreview} />
    </div>
  );
};

export default DailyQuota;
