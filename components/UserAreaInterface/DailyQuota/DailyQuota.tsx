// components/DailyQuota.tsx
"use client";
import { useUser } from "@/context/UserContext/UserContext";
import { RemainingDisplay } from "./components/RemainingDisplay";
import { DailyOffersHistory } from "./components/DailyOffersHistory";
import { OutOfSpinsInterface } from "./components/OutOfSpinsInterface";

const DailyQuota = () => {
  const { data, loading } = useUser();

  const historyPreview = data?.historyPreview;

  console.log("DailyQuotaData", data?.historyPreview);

  if (loading || !data) {
    return (
      <div className="flex flex-col space-y-2 bg-white/90 backdrop-blur rounded-lg shadow-md p-4">
        <OutOfSpinsInterface />
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-2 bg-white/90 backdrop-blur rounded-lg shadow-md p-4">
      <RemainingDisplay data={data} />
      <DailyOffersHistory historyPreview={historyPreview} />
    </div>
  );
};

export default DailyQuota;
