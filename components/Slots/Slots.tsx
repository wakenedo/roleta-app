"use client";

import React, { useState } from "react";
import { SlotsGame } from "./SlotsGame";
import { Product } from "./types";
import { ProductSlotsReelsProvider } from "@/context/ProductSlotsReelsContext/ProductSlotsReelsContext";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useUser } from "@/context/UserContext/UserContext";

const Slots = () => {
  const [spinning, setSpinning] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const { authorizedFetch } = useAuth();
  const { consumeSpin } = useUser();

  const renderDeployAddress = process.env.NEXT_PUBLIC_LOCAL_API;

  const spin = async () => {
    if (spinning) return;

    setSpinning(true);

    try {
      const res = await authorizedFetch(`${renderDeployAddress}/spin`, {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error("Spin failed");
      }

      // 🎯 Backend is the authority
      setSelectedProducts(data.products ?? []);
      consumeSpin(data.quota);
    } catch (err) {
      console.error("Spin error:", err);
    } finally {
      setTimeout(() => setSpinning(false), 2500);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl h-auto min-h-[480px] flex flex-col rounded-t-xs text-white py-2 min-w-2xl">
      <h2 className="text-2xl font-bold mb-2 ml-2 text-slate-900">
        Descubra Suas Ofertas
      </h2>
      <div className="border-t border-slate-600 mx-2" />
      <div className="flex mt-4 mx-2 items-center justify-center">
        <ProductSlotsReelsProvider
          spinning={spinning}
          selectedProducts={selectedProducts}
        >
          <SlotsGame spinning={spinning} onSpin={spin} />
        </ProductSlotsReelsProvider>
      </div>
    </div>
  );
};

export default Slots;
