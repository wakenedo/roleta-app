"use client";

import React, { useState } from "react";
import { SlotsGame } from "./SlotsGame";
import { Product } from "./types";

const Slots = () => {
  const [spinning, setSpinning] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const renderDeployAddress = process.env.NEXT_PUBLIC_RENDER_API ?? "";

  const spin = async (idToken: string) => {
    setSpinning(true);
    try {
      const res = await fetch(renderDeployAddress, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Spin failed:", errorData);
        setSpinning(false);
        return;
      }

      const data = await res.json();
      setSelectedProducts(data.products || []); // Fallback just in case
      console.log("Spin success:", data);
    } catch (err) {
      console.error("Network error:", err);
    } finally {
      setTimeout(() => {
        setSpinning(false);
      }, 2500);
    }
  };

  return (
    <div className="bg-slate-800 h-auto min-h-[480px] flex flex-col rounded-b-xs text-white py-2">
      <h2 className="text-2xl font-bold mb-2 ml-2">Descubra Suas Ofertas</h2>
      <div className="border-t border-slate-600 mx-2" />
      <div className="flex mt-4 mx-2 items-center justify-center">
        <SlotsGame
          selectedProducts={selectedProducts}
          spin={spin}
          spinning={spinning}
        />
      </div>
    </div>
  );
};

export default Slots;
