"use client";

import { SlotsGameProps } from "../types";
import ProductSlotsReels from "./components/ProductSlotsReels/ProductSlotsReels";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useUser } from "@/context/UserContext/UserContext";

const SlotsGame: React.FC<SlotsGameProps & { onSpin: () => void }> = ({
  spinning,
  onSpin,
}) => {
  const { user } = useAuth();
  const { data, loading } = useUser();

  const quota = data?.quota.spins;
  const remaining = quota?.remaining ?? 0;

  const disabled = !user || spinning || loading || (quota && remaining <= 0);

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <ProductSlotsReels />

      <p className="mb-2 text-sm text-slate-900">
        {quota ? `Rodadas restantes hoje: ${remaining}` : "—"}
      </p>

      <button
        onClick={onSpin}
        disabled={disabled}
        className="px-6 py-2 bg-green-400 text-slate-50 rounded-xs disabled:bg-slate-400 mb-2"
      >
        {!user
          ? "Faça login para girar"
          : spinning
            ? "Girando..."
            : remaining <= 0
              ? "Limite diário atingido"
              : "Girar"}
      </button>
    </div>
  );
};

export default SlotsGame;
