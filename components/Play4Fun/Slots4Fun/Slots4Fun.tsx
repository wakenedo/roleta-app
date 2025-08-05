"use client";
import React, { useState } from "react";

const symbols = ["🍒", "🍋", "🔔", "🍉", "⭐", "7️⃣"];

const getRandomSymbol = () =>
  symbols[Math.floor(Math.random() * symbols.length)];

const Slots4Fun = () => {
  const [reel1, setReel1] = useState("🍒");
  const [reel2, setReel2] = useState("🍋");
  const [reel3, setReel3] = useState("🔔");
  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState("");

  const spin = () => {
    setSpinning(true);
    setMessage("");

    // Simulate spin delay
    setTimeout(() => {
      const r1 = getRandomSymbol();
      const r2 = getRandomSymbol();
      const r3 = getRandomSymbol();
      setReel1(r1);
      setReel2(r2);
      setReel3(r3);
      setSpinning(false);

      if (r1 === r2 && r2 === r3) {
        setMessage("🎉 JACKPOT!");
      } else if (r1 === r2 || r2 === r3 || r1 === r3) {
        setMessage("😊 Almost! Try again.");
      } else {
        setMessage("😢 No match. Spin again!");
      }
    }, 1000);
  };

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white">
      <h2 className="text-xl font-bold mb-4">🎰 Slot Machine</h2>

      <div className="flex space-x-4 text-6xl mb-4">
        <div className="bg-slate-800 rounded-lg w-20 h-20 flex items-center justify-center shadow-md">
          {reel1}
        </div>
        <div className="bg-slate-800 rounded-lg w-20 h-20 flex items-center justify-center shadow-md">
          {reel2}
        </div>
        <div className="bg-slate-800 rounded-lg w-20 h-20 flex items-center justify-center shadow-md">
          {reel3}
        </div>
      </div>

      <button
        onClick={spin}
        disabled={spinning}
        className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-300 transition disabled:opacity-50"
      >
        {spinning ? "Spinning..." : "Spin"}
      </button>

      {message && <p className="mt-4 text-lg">{message}</p>}
    </div>
  );
};

export default Slots4Fun;
