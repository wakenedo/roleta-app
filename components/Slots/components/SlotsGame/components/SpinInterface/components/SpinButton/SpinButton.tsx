import { SpinButtonProps } from "@/components/Slots/types";
import { FC } from "react";
import { getTextColorFromBgClass } from "../../utils";

const SpinButton: FC<SpinButtonProps> = ({
  onSpin,
  disabled,
  spinning,
  primaryColorClassName,
}) => {
  const textColorClass = getTextColorFromBgClass(primaryColorClassName);
  console.log("SpinButton primaryColorClassName", primaryColorClassName);
  const classNames = `
      cursor-pointer px-20 py-1 drop-shadow text-shadow-2xs transition
     ${primaryColorClassName != undefined ? primaryColorClassName : "bg-amber-500"}
     ${textColorClass} mt-1 mb-3
     hover:bg-amber-300 hover:text-amber-600
      text-amber-900 rounded-xs disabled:bg-slate-400 pb-2 font-semibold`;
  return (
    <div className="">
      <button
        onClick={onSpin}
        disabled={disabled as boolean}
        className={classNames}
      >
        {spinning ? "Girando..." : "Girar"}
      </button>
    </div>
  );
};
export default SpinButton;
