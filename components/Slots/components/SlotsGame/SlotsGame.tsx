"use client";

import { SlotsGameProps } from "../../types";
import { ProductSlotsReels } from "./components/ProductSlotsReels";
import { SpinInterface } from "./components/SpinInterface";

const SlotsGame: React.FC<SlotsGameProps & { onSpin: () => void }> = ({
  spinning,
  onSpin,
  quota,
  tenantBranding,
  tenantSettings,
}) => {
  const remaining = quota?.remaining ?? 0;
  const resetsAt = quota?.resetsAt;

  const disabled = spinning || !quota || (quota && remaining <= 0);

  const dailyLimit = quota?.limit ?? 0;

  const progress = dailyLimit > 0 ? (remaining / dailyLimit) * 100 : 0;

  const barColor =
    progress > 60
      ? "bg-green-400"
      : progress > 30
        ? "bg-yellow-400"
        : "bg-red-400";

  const isEmpty = remaining === 0;

  console.log("SlotsGame - quota:", quota);

  return (
    <div className="flex flex-col items-center w-full md:w-fit">
      <ProductSlotsReels />

      <div className="md:min-w-xl min-w-full px-4">
        <SpinInterface
          resetsAt={resetsAt}
          disabled={disabled}
          remaining={remaining}
          onSpin={onSpin}
          barColor={barColor}
          dailyLimit={dailyLimit}
          isEmpty={isEmpty}
          progress={progress}
          spinning={spinning}
        />
      </div>
    </div>
  );
};

export default SlotsGame;
