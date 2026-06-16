"use client";

import { SlotsGameProps } from "../../types";
import { ProductSlotsReels } from "./components/ProductSlotsReels";
import { SpinInterface } from "./components/SpinInterface";

const SlotsGame: React.FC<SlotsGameProps & { onSpin: () => void }> = ({
  spinning,
  onSpin,
  quota,
  currentSpinId,
  selectedProducts,
  tenantQuota,
  tenantBranding,
  userMonthlyLimit,
  userWeeklyLimit,
  tenantSettings,
}) => {
  const remaining = quota?.remaining ?? 0;
  const tenantRemaining = tenantQuota?.remaining ?? 0;

  const resetsAt = quota?.resetsAt;
  const tenantResetsAt = tenantQuota?.resetsAt;

  const disabled = spinning || !quota || (quota && remaining <= 0);
  const tenantDisabled =
    spinning || !tenantQuota || (tenantQuota && remaining <= 0);

  const dailyLimit = quota?.limit ?? 0;
  const tenantDailyLimit = tenantQuota?.limit ?? 0;

  const progress = dailyLimit > 0 ? (remaining / dailyLimit) * 100 : 0;
  const tenantProgress =
    tenantDailyLimit > 0 ? (tenantRemaining / tenantDailyLimit) * 100 : 0;

  const barColor =
    progress > 60
      ? "bg-green-400"
      : progress > 30
        ? "bg-yellow-400"
        : "bg-red-400";

  const tenantBarColor =
    tenantProgress > 60
      ? `bg-[${tenantBranding?.primaryColor}]`
      : tenantProgress > 30
        ? "bg-yellow-400"
        : "bg-red-400";

  const isEmpty = remaining === 0;
  const tenantIsEmpty = tenantRemaining === 0;

  console.log("SlotsGame - quota:", quota);
  console.log("SlotsGame - tenantQuota:", tenantQuota);
  console.log("Slots Game - tenantBranding", tenantBranding);

  return (
    <div className="flex flex-col items-center w-full md:w-fit">
      <ProductSlotsReels
        currentSpinId={currentSpinId}
        selectedProducts={selectedProducts}
      />

      <div className="md:min-w-xl min-w-full px-4">
        {tenantBranding != undefined ? (
          <SpinInterface
            barColor={barColor}
            tenantBarColor={tenantBarColor}
            onSpin={onSpin}
            spinning={spinning}
            dailyLimit={dailyLimit}
            disabled={disabled}
            isEmpty={isEmpty}
            progress={progress}
            resetsAt={resetsAt}
            remaining={remaining}
            tenantBranding={tenantBranding}
            tenantDailyLimit={tenantDailyLimit}
            tenantDisabled={tenantDisabled}
            tenantIsEmpty={tenantIsEmpty}
            tenantProgress={tenantProgress}
            tenantResetsAt={tenantResetsAt}
            tenantRemaining={tenantRemaining}
            userMonthlyLimit={userMonthlyLimit}
            userWeeklyLimit={userWeeklyLimit}
          />
        ) : (
          <SpinInterface
            barColor={barColor}
            onSpin={onSpin}
            spinning={spinning}
            dailyLimit={dailyLimit}
            disabled={disabled}
            isEmpty={isEmpty}
            progress={progress}
            resetsAt={resetsAt}
            remaining={remaining}
          />
        )}
      </div>
    </div>
  );
};

export default SlotsGame;
