import { AvailableRoundsProps } from "@/components/Slots/types";
import { useEffect, useState } from "react";
import { getTimeUntil } from "../../utils";
import { formatCountdown } from "@/utils/formatter-utils";

const AvailableRounds = ({
  isEmpty,
  remaining,
  dailyLimit,
  resetsAt,
  isSubscriptionExtrasPresent,
  sumLimit,
  sumRemaining,
  isSubscriptionExtrasEmpty,
}: AvailableRoundsProps) => {
  const [timeLeft, setTimeLeft] = useState(
    formatCountdown(getTimeUntil(resetsAt as string)),
  );

  useEffect(() => {
    if (!isEmpty) return;

    const interval = setInterval(() => {
      const result = getTimeUntil(resetsAt as string);

      if (result.isExpired) {
        setTimeLeft("disponível!");
        clearInterval(interval);
        return;
      }

      setTimeLeft(formatCountdown(result));
    }, 1000);

    return () => clearInterval(interval);
  }, [resetsAt, isEmpty]);

  return (
    <div className="flex flex-col justify-center items-center  my-1">
      <div className="flex justify-between w-full items-center ">
        <div>
          <span
            className={`text-base cursor-default tracking-widest font-semibold ${
              isEmpty && isSubscriptionExtrasEmpty
                ? "text-red-600"
                : "text-slate-800"
            } mb-2 `}
          >
            {isSubscriptionExtrasPresent && isEmpty
              ? "Rodadas Extras"
              : "Rodadas de Hoje"}
          </span>
        </div>
        {isSubscriptionExtrasPresent ? (
          <div>
            <span
              className={`text-lg font-bold cursor-default ${
                isEmpty && isSubscriptionExtrasEmpty
                  ? "text-red-600"
                  : "text-slate-800"
              }`}
            >
              {sumRemaining} / {sumLimit}
            </span>
          </div>
        ) : (
          <div>
            <span
              className={`text-lg font-bold cursor-default ${
                isEmpty && isSubscriptionExtrasEmpty
                  ? "text-red-600"
                  : "text-slate-800"
              }`}
            >
              {remaining} / {dailyLimit}
            </span>
          </div>
        )}
      </div>

      {isEmpty && isSubscriptionExtrasEmpty && (
        <div className="flex items-center justify-center space-x-1">
          <span className="text-xs">Seus giros voltam em:</span>
          <b className="text-md">{timeLeft}</b>
        </div>
      )}
    </div>
  );
};

export default AvailableRounds;
