import { SpinButtonProps } from "@/components/Slots/types";
import { getTextColorFromBgClass } from "../../utils";

const SpinButton = ({
  onSpin,
  disabled,
  spinning,
  primaryColorClassName,
}: SpinButtonProps) => {
  const textColorClass = getTextColorFromBgClass(primaryColorClassName);
  const classNames = `
  cursor-pointer px-20 py-1 drop-shadow text-shadow-2xs transition
  ${textColorClass} my-2 rounded-xs disabled:bg-slate-400  font-semibold
  hover:bg-amber-300 hover:text-amber-600 text-amber-900 rounded-xs 
  disabled:bg-slate-400 pb-2 font-semibold tracking-widest`;

  return (
    <div>
      <button
        onClick={onSpin}
        disabled={disabled as boolean}
        style={
          {
            "--button-color": primaryColorClassName || "#f59e0b",
          } as React.CSSProperties
        }
        className={`bg-[var(--button-color)] ${classNames}`}
      >
        {spinning ? "Girando..." : "Girar"}
      </button>
    </div>
  );
};
export default SpinButton;
