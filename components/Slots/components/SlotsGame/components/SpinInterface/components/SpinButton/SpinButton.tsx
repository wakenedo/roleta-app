import { SpinButtonProps } from "@/components/Slots/types";
import { FC } from "react";

const SpinButton: FC<SpinButtonProps> = ({ onSpin, disabled, spinning }) => {
  return (
    <button
      onClick={onSpin}
      disabled={disabled as boolean}
      className="
      cursor-pointer px-20 py-2 drop-shadow-xl text-shadow-2xs
       bg-green-400 hover:bg-green-200 transition
      text-slate-50 rounded-xs disabled:bg-slate-400 pb-2 font-semibold"
    >
      {spinning ? "Girando..." : "Girar"}
    </button>
  );
};
export default SpinButton;
