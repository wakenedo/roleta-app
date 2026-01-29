"use client";

import React, { useState } from "react";
import { SlotsGame } from "./SlotsGame";
import { Product } from "./types";
import { ProductSlotsReelsProvider } from "@/context/ProductSlotsReelsContext/ProductSlotsReelsContext";
import { useAuth } from "@/context/AuthContext/AuthContext";

const Slots = () => {
  const [spinning, setSpinning] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const { getToken } = useAuth();

  const renderDeployAddress = process.env.NEXT_PUBLIC_LOCAL_API;

  const spin = async () => {
    setSpinning(true);

    try {
      const token = await getToken();

      const res = await fetch(`${renderDeployAddress}/spin`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Spin request failed");
      }

      const data = await res.json();
      setSelectedProducts(data.products ?? []);
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
          <SlotsGame spinning={spinning} spin={spin} />
        </ProductSlotsReelsProvider>
      </div>
    </div>
  );
};

export default Slots;
