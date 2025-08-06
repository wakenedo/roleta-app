"use client";

import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { SlotsGameProps } from "../types";
import { ProductSlots } from "./components/ProductSlots";

const MAX_SPINS_PER_DAY = 5;

const SlotsGame: React.FC<SlotsGameProps> = ({
  spinning,
  selectedProducts,
  spin,
}) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user?.uid || "guest"; // fallback for dev

  const [spinsToday, setSpinsToday] = useState(0);

  useEffect(() => {
    const today = new Date().toDateString();
    const stored = localStorage.getItem(`spins-${uid}-${today}`);
    setSpinsToday(stored ? parseInt(stored) : 0);
  }, [uid]);

  const handleSpin = async () => {
    if (spinning || spinsToday >= MAX_SPINS_PER_DAY) return;

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.warn("User not logged in");
      return;
    }

    const idToken = await user.getIdToken();
    if (!idToken) return;

    const newCount = spinsToday + 1;
    const today = new Date().toDateString();
    localStorage.setItem(`spins-${uid}-${today}`, newCount.toString());
    setSpinsToday(newCount);

    spin(idToken);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <ProductSlots selectedProducts={selectedProducts} spinning={spinning} />
      <button
        onClick={handleSpin}
        disabled={spinning || spinsToday >= MAX_SPINS_PER_DAY}
        className="px-6 py-2 bg-green-500 text-white rounded-xs disabled:bg-gray-400"
      >
        {spinning
          ? "Girando..."
          : spinsToday >= MAX_SPINS_PER_DAY
          ? "Limite diário atingido"
          : "Girar"}
      </button>

      <p className="mt-2 text-sm text-gray-400">
        Rodadas restantes hoje: {MAX_SPINS_PER_DAY - spinsToday}
      </p>
    </div>
  );
};
export default SlotsGame;
