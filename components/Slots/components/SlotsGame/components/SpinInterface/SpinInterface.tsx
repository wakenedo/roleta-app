import { FC } from "react";
import { AvailableRounds } from "./components/AvailableRounds";
import { DepletedCTA } from "./components/DepletedCTA";
import { DynamicProgressBar } from "./components/DynamicProgressBar";
import { SpinButton } from "./components/SpinButton";
import { SpinInterfaceProps } from "@/components/Slots/types";
import { BsExclamationCircle } from "react-icons/bs";
import { UserActions } from "./components/UserActions";
import { DesktopUserActions } from "./components/DesktopUserActions";

const SpinInterface: FC<SpinInterfaceProps> = ({
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
}) => {
  console.log("SpinInterface tenantBranding", tenantBranding);
  const tenantPrimaryColor = tenantBranding?.primaryColor;

  const primaryColorClassName = `${tenantPrimaryColor}`;
  return (
    <>
      <div className="bg-white/20 backdrop-blur shadow-md mb-4 p-2 px-3 md:w-full mx-auto ">
        {tenantBranding != undefined ? (
          <>
            <DesktopUserActions
              userWeeklyLimit={userWeeklyLimit}
              userMonthlyLimit={userMonthlyLimit}
            />
            <div>
              <span className="text-xs tracking-widest">
                Cortesia do Parceiro
              </span>
              <AvailableRounds
                resetsAt={tenantResetsAt}
                dailyLimit={tenantDailyLimit as number}
                isEmpty={tenantIsEmpty as boolean}
                remaining={tenantRemaining as number}
              />
            </div>
            <DynamicProgressBar
              barColor={tenantBarColor as string}
              progress={tenantProgress as number}
            />
            {tenantRemaining != 0 && (
              <div className=" flex items-center justify-center">
                <SpinButton
                  primaryColorClassName={primaryColorClassName}
                  disabled={tenantDisabled}
                  spinning={spinning}
                  onSpin={onSpin}
                />
              </div>
            )}

            {tenantIsEmpty && <DepletedCTA />}
            <div className="block lg:hidden">
              <UserActions
                userWeeklyLimit={userWeeklyLimit}
                userMonthlyLimit={userMonthlyLimit}
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
          </>
        )}
      </div>
    </>
  );
};
export default SpinInterface;
