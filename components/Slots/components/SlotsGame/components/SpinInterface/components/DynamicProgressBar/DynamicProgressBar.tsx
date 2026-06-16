import { DynamicProgressBarProps } from "@/components/Slots/types";
import { FC } from "react";

const DynamicProgressBar: FC<DynamicProgressBarProps> = ({
  barColor,
  progress,
}) => {
  return (
    <div className="pb-1 my-1">
      <div className="  h-2 bg-slate-200 rounded overflow-hidden shadow-lg">
        <div
          className={`h-2 ${barColor} rounded transition-all `}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
export default DynamicProgressBar;
