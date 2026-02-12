import { FC } from "react";
import { AvailableRounds } from "./components/AvailableRounds";
import { DepletedCTA } from "./components/DepletedCTA";
import { DynamicProgressBar } from "./components/DynamicProgressBar";
import { SpinButton } from "./components/SpinButton";
import { SpinInterfaceProps } from "@/components/Slots/types";

const SpinInterface: FC<SpinInterfaceProps> = ({
  dailyLimit,
  barColor,
  progress,
  onSpin,
  disabled,
  spinning,
  remaining,
  isEmpty,
  resetsAt,
}) => {
  return (
    <>
      <div className="bg-white/5 backdrop-blur shadow-md mb-4 p-2 w-full ">
        <AvailableRounds
          resetsAt={resetsAt}
          dailyLimit={dailyLimit}
          isEmpty={isEmpty}
          remaining={remaining}
        />
        <DynamicProgressBar barColor={barColor} progress={progress} />
        {isEmpty && <DepletedCTA />}
        {remaining != 0 && (
          <div className="my-3 flex items-center justify-center">
            <SpinButton
              disabled={disabled}
              spinning={spinning}
              onSpin={onSpin}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default SpinInterface;
