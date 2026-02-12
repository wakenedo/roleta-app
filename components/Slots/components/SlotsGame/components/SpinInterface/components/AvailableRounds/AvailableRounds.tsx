import { AvailableRoundsProps } from "@/components/Slots/types";
import { FC, useEffect, useState } from "react";
import { formatCountdown, getTimeUntil } from "../../utils";

const AvailableRounds: FC<AvailableRoundsProps> = ({
  isEmpty,
  remaining,
  dailyLimit,
  resetsAt,
}) => {
  const [timeLeft, setTimeLeft] = useState(
    formatCountdown(getTimeUntil(resetsAt)),
  );

  useEffect(() => {
    if (!isEmpty) return;

    const interval = setInterval(() => {
      const result = getTimeUntil(resetsAt);

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
    <div className="flex flex-col justify-center items-center mt-1 ">
      <div className="flex justify-center items-center gap-1">
        <span
          className={`text-base font-semibold ${
            isEmpty ? "text-red-600" : "text-slate-800"
          } mb-2 `}
        >
          Rodadas de hoje:
        </span>

        <span
          className={`text-lg font-bold ${
            isEmpty ? "text-red-600" : "text-slate-800"
          }`}
        >
          {remaining} / {dailyLimit}
        </span>
      </div>

      {isEmpty && (
        <div className="flex items-center justify-center space-x-1">
          <span className="text-xs">Seus giros voltam em:</span>
          <b className="text-md">{timeLeft}</b>
        </div>
      )}
    </div>
  );
};

export default AvailableRounds;
