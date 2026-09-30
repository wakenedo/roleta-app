import { SlotsGameProps } from "../../types";
import { ProductSlotsReels } from "./components/ProductSlotsReels";
import { SpinInterface } from "./components/SpinInterface";

const SlotsGame: React.FC<SlotsGameProps & { onSpin: () => void }> = ({
  spinning,
  onSpin,
  quota,
  currentSpinId,
  selectedProducts,
  tenantId,
  tenantQuota,
  tenantBranding,
  tenantSettings,
  userMonthlyLimit,
  userWeeklyLimit,
  subscriptionExtras,
  subscriptionExtrasGranted,
  subscriptionExtrasRemaining,
  isSubscriptionExtrasEmpty,
}) => {
  const remaining = quota?.remaining ?? 0;
  const tenantRemaining = tenantQuota?.remaining ?? 0;

  const resetsAt = quota?.resetsAt;
  const tenantResetsAt = tenantQuota?.resetsAt;

  const disabled = spinning || !quota || (quota && remaining <= 0);
  const tenantDisabled =
    spinning || !tenantQuota || (tenantQuota && tenantRemaining <= 0);

  const dailyLimit = quota?.limit ?? 0;
  const tenantDailyLimit = tenantQuota?.limit ?? 0;
  const tenantUserExtraSpins = tenantQuota?.userExtraSpins;
  const tenantScopedQuota = tenantQuota?.tenantScopedQuota;

  const userPromoGiros = quota?.promoGiros;

  const sumRemaining =
    subscriptionExtrasRemaining && remaining + subscriptionExtrasRemaining;

  const sumLimit =
    subscriptionExtrasGranted && dailyLimit + subscriptionExtrasGranted;

  const progress = dailyLimit > 0 ? (remaining / dailyLimit) * 100 : 0;
  const tenantProgress =
    tenantDailyLimit > 0 ? (tenantRemaining / tenantDailyLimit) * 100 : 0;

  // Will increment this logic to make distinct for user when extras are being queued
  const tenantAndSubscriptionProgress =
    sumLimit && sumRemaining && sumLimit > 0
      ? (sumRemaining / sumLimit) * 100
      : 0;

  const barColor =
    progress >= 60
      ? "bg-green-400"
      : progress > 30
        ? "bg-yellow-400"
        : "bg-red-400";

  const tenantBarColor = tenantBranding?.primaryColor;

  const isEmpty = remaining === 0;
  const tenantIsEmpty = tenantRemaining === 0;

  return (
    <div className="flex flex-col items-center w-full ">
      <ProductSlotsReels
        currentSpinId={currentSpinId}
        selectedProducts={selectedProducts}
        tenantId={tenantId}
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
            tenantUserExtraSpins={tenantUserExtraSpins}
            tenantScopedQuota={tenantScopedQuota}
            subscriptionExtras={subscriptionExtras}
            isSubscriptionExtrasEmpty={isSubscriptionExtrasEmpty}
            subscriptionExtrasGranted={subscriptionExtrasGranted}
            subscriptionExtrasRemaining={subscriptionExtrasRemaining}
            sumLimit={sumLimit}
            sumRemaining={sumRemaining}
            userPromoGiros={userPromoGiros}
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
            userPromoGiros={userPromoGiros}
          />
        )}
      </div>
    </div>
  );
};

export default SlotsGame;
