import { SpinSource } from "@/context/UserContext/types";
import { SlotsGameProps } from "../../types";
import { ProductSlotsReels } from "./components/ProductSlotsReels";
import { SpinInterface } from "./components/SpinInterface";

const SlotsGame = ({
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
  spinSource,
}: SlotsGameProps) => {
  const remaining = quota?.remaining ?? 0;
  const tenantRemaining = tenantQuota?.remaining ?? 0;
  const subscriptionRemaining = subscriptionExtrasRemaining ?? 0;

  const disabled = spinning || !quota || remaining <= 0;

  const courtesyDisabled = spinning || !tenantQuota || tenantRemaining <= 0;

  const subscriptionDisabled = spinning || subscriptionRemaining <= 0;

  const resetsAt = quota?.resetsAt;
  const tenantResetsAt = tenantQuota?.resetsAt;

  const tenantDisabled =
    spinning || !tenantQuota || (tenantQuota && tenantRemaining <= 0);

  const dailyLimit = quota?.limit ?? 0;
  const tenantDailyLimit = tenantQuota?.limit ?? 0;

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

  const allTenantSpinsDisabled = courtesyDisabled && subscriptionDisabled;

  const nextSpinSource: SpinSource =
    tenantRemaining > 0
      ? "courtesy"
      : subscriptionRemaining > 0
        ? "subscription"
        : "courtesy";

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
            subscriptionExtras={subscriptionExtras}
            isSubscriptionExtrasEmpty={isSubscriptionExtrasEmpty}
            subscriptionExtrasGranted={subscriptionExtrasGranted}
            subscriptionExtrasRemaining={subscriptionExtrasRemaining}
            sumLimit={sumLimit}
            sumRemaining={sumRemaining}
            spinSource={spinSource}
            subscriptionsExtrasDisabled={subscriptionDisabled}
            nextSpinSource={nextSpinSource}
            allTenantSpinsDisabled={allTenantSpinsDisabled}
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
