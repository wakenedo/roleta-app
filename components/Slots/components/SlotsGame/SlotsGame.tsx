"use client";

import { SlotsGameProps } from "../types";
import { ProductSlotsReels } from "./components/ProductSlotsReels";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useUser } from "@/context/UserContext/UserContext";
import { SpinButton } from "./components/SpinButton";

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

      {loading ? (
        <p className="mb-2 text-sm text-slate-500">Carregando...</p>
      ) : (
        <>
          <p className="mb-2 text-sm text-slate-900">
            {quota ? `Rodadas restantes hoje: ${remaining}` : "—"}
          </p>
          <SpinButton
            disabled={disabled}
            user={user}
            spinning={spinning}
            remaining={remaining}
            onSpin={onSpin}
          />
        </>
      )}
    </div>
  );
};

export default SlotsGame;
