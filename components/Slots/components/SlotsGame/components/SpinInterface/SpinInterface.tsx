import { AvailableRounds } from "./components/AvailableRounds";
import { DepletedCTA } from "./components/DepletedCTA";
import { DynamicProgressBar } from "./components/DynamicProgressBar";
import { SpinButton } from "./components/SpinButton";
import { SpinInterfaceProps } from "@/components/Slots/types";
import { UserActions } from "./components/UserActions";
import { DesktopUserActions } from "./components/DesktopUserActions";
import { SpinSource } from "@/context/UserContext/types";

const SpinInterface = ({
  barColor,
  tenantBarColor,
  onSpin,
  spinning,
  dailyLimit,
  disabled,
  isEmpty,
  progress,
  resetsAt,
  remaining,
  tenantDailyLimit,
  tenantDisabled,
  tenantIsEmpty,
  tenantProgress,
  tenantRemaining,
  tenantResetsAt,
  tenantBranding,
  userMonthlyLimit,
  userWeeklyLimit,
  tenantSettings,
  userPromoGiros,
  subscriptionExtras,
  isSubscriptionExtrasEmpty,
  subscriptionExtrasGranted,
  subscriptionExtrasRemaining,
  sumLimit,
  sumRemaining,
  spinSource,
  subscriptionsExtrasDisabled,
  allTenantSpinsDisabled,
  nextSpinSource,
}: SpinInterfaceProps) => {
  const tenantPrimaryColor = tenantBranding?.primaryColor;
  const globalColor = barColor;
  const globalBarColor = `${globalColor}`;
  const primaryColorClassName = `${tenantPrimaryColor}`;
  const promobetColorClassName = `${"#00EEFF"}`;
  const isSubscriptionExtrasPresent = subscriptionExtras != undefined;
  const subscriptionRemaining = subscriptionExtrasRemaining ?? 0;

  console.log("SpinSource in SpinInterface", spinSource);

  return (
    <>
      <div className="bg-white/20 backdrop-blur shadow-md mb-4 p-2 px-3 md:w-full mx-auto ">
        {tenantBranding != undefined ? (
          <>
            <DesktopUserActions
              userPromoGiros={userPromoGiros}
              userWeeklyLimit={userWeeklyLimit}
              userMonthlyLimit={userMonthlyLimit}
            />

            <div>
              {nextSpinSource === "courtesy" &&
              tenantRemaining &&
              tenantRemaining > 0 ? (
                <div className="cursor-default flex space-x-1 items-center">
                  <span className="text-xs tracking-widest">
                    Cortesia do Parceiro
                  </span>

                  <div className="-mt-1">
                    <span className="text-xs">x</span>
                    <span>{tenantRemaining}</span>
                  </div>
                </div>
              ) : subscriptionRemaining > 0 ? (
                <div className="cursor-default flex space-x-1 items-center">
                  <span className="text-xs tracking-widest capitalize">
                    {subscriptionExtras?.plan}
                  </span>

                  <div className="-mt-1">
                    <span className="text-xs">x</span>
                    <span>{subscriptionRemaining}</span>
                  </div>
                </div>
              ) : (
                <div className="cursor-default flex space-x-1 items-center">
                  <span className="text-xs tracking-widest">
                    Sem giros disponíveis
                  </span>
                </div>
              )}
              <AvailableRounds
                resetsAt={tenantResetsAt}
                dailyLimit={tenantDailyLimit as number}
                isEmpty={tenantIsEmpty as boolean}
                remaining={tenantRemaining as number}
                isSubscriptionExtrasPresent={isSubscriptionExtrasPresent}
                subscriptionExtrasGranted={subscriptionExtrasGranted}
                subscriptionExtrasRemaining={subscriptionExtrasRemaining}
                sumLimit={sumLimit}
                sumRemaining={sumRemaining}
              />
            </div>
            <DynamicProgressBar
              barColor={tenantBarColor as string}
              progress={tenantProgress as number}
            />
            <div className="flex items-center justify-center">
              <SpinButton
                primaryColorClassName={
                  nextSpinSource === "courtesy"
                    ? primaryColorClassName
                    : promobetColorClassName
                }
                disabled={allTenantSpinsDisabled}
                spinning={spinning}
                onSpin={() => onSpin(nextSpinSource as SpinSource)}
              />
            </div>

            {tenantIsEmpty && isSubscriptionExtrasEmpty && <DepletedCTA />}
            <div className="block lg:hidden">
              <UserActions
                userWeeklyLimit={userWeeklyLimit}
                userMonthlyLimit={userMonthlyLimit}
                userPromoGiros={userPromoGiros}
              />
            </div>
          </>
        ) : (
          <>
            <div className="cursor-default">
              <span className="text-xs tracking-widest text-slate-700">
                Promobet
              </span>
            </div>
            <AvailableRounds
              resetsAt={resetsAt}
              dailyLimit={dailyLimit}
              isEmpty={isEmpty}
              remaining={remaining}
            />
            <DynamicProgressBar barColor={globalBarColor} progress={progress} />
            {isEmpty && <DepletedCTA />}
            {remaining != 0 && (
              <div className="my-3 flex items-center justify-center">
                <SpinButton
                  disabled={disabled}
                  spinning={spinning}
                  onSpin={() => onSpin("courtesy")}
                />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default SpinInterface;
