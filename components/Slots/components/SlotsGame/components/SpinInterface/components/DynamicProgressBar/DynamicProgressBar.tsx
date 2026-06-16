import { DynamicProgressBarProps } from "@/components/Slots/types";
import { FC } from "react";

const DynamicProgressBar: FC<DynamicProgressBarProps> = ({
  barColor,
  progress,
}) => {
  const fillColor =
    progress > 60
      ? barColor || "#22c55e"
      : progress > 30
        ? "#facc15" // yellow-400
        : "#f87171"; // red-400
  return (
    <div className="pb-1 my-1">
      <div className="  h-2 bg-slate-200 rounded overflow-hidden shadow-lg">
        <div
          className="h-2 rounded transition-all duration-300"
          style={{
            width: `${progress}%`,
            backgroundColor: fillColor,
          }}
        />
      </div>
    </div>
  );
};
export default DynamicProgressBar;
