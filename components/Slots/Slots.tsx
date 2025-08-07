"use client";

import React, { useState } from "react";
import { SlotsGame } from "./SlotsGame";
import { Product } from "./types";

const Slots = () => {
  const [spinning, setSpinning] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const renderDeployAddress = process.env.NEXT_PUBLIC_RENDER_API;

  const spin = async (idToken: string) => {
    if (!renderDeployAddress) {
      throw new Error("A variável NEXT_PUBLIC_RENDER_API não está definida.");
    }

    setSpinning(true);
    try {
      const res = await fetch(`${renderDeployAddress}/spin`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      const contentType = res.headers.get("content-type");

      if (!res.ok || !contentType?.includes("application/json")) {
        const text = await res.text(); // safer than res.json()
        console.error("Unexpected response:", text);
        throw new Error("API returned non-JSON or error response.");
      }

      const data = await res.json();
      setSelectedProducts(data.products || []);
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
