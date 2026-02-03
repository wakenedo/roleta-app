import { User } from "firebase/auth";

const SpinButton = ({
  onSpin,
  disabled,
  user,
  spinning,
  remaining,
}: {
  onSpin: () => void;
  disabled: boolean | undefined;
  user: User | null;
  spinning: boolean;
  remaining: number;
}) => {
  return (
    <button
      onClick={onSpin}
      disabled={disabled}
      className="
      cursor-pointer px-22 py-2 drop-shadow-xl text-shadow-2xs bg-green-400 
      text-slate-50 rounded-xs disabled:bg-slate-400 mb-4 font-semibold"
    >
      {!user
        ? "Faça login para girar"
        : spinning
          ? "Girando..."
          : remaining <= 0
            ? "Limite diário atingido"
            : "Girar"}
    </button>
  );
};
export default SpinButton;
