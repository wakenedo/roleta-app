"use client";

import { SlotsGameProps } from "../../types";
import { ProductSlotsReels } from "./components/ProductSlotsReels";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useUser } from "@/context/UserContext/UserContext";
import { SpinInterface } from "./components/SpinInterface";

const SlotsGame: React.FC<SlotsGameProps & { onSpin: () => void }> = ({
  spinning,
  onSpin,
}) => {
  const { user } = useAuth();
  const { data, loading } = useUser();
  if (!data) return;

  const quota = data.quota.spins;
  const remaining = quota.remaining ?? 0;

  const disabled = !user || spinning || loading || (quota && remaining <= 0);

  const dailyLimit = data.quota.spins.limit;

  const progress = dailyLimit > 0 ? (remaining / dailyLimit) * 100 : 0;

  const barColor =
    progress > 60
      ? "bg-green-400"
      : progress > 30
        ? "bg-yellow-400"
        : "bg-red-400";

  const isEmpty = remaining === 0;

  return (
    <div className="flex flex-col items-center">
      <ProductSlotsReels />

      {loading ? (
        <p className="mb-2 text-sm text-slate-500">Carregando...</p>
      ) : (
        <div className="min-w-xl">
          <SpinInterface
            disabled={disabled}
            remaining={remaining}
            onSpin={onSpin}
            barColor={barColor}
            dailyLimit={dailyLimit}
            isEmpty={isEmpty}
            progress={progress}
            spinning={spinning}
          />
        </div>
      )}
    </div>
  );
};

export default SlotsGame;
