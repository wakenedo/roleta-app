"use client";

import { useEffect, useRef, useState } from "react";

import { Product } from "./types";
import { ProductSlotsReelsProvider } from "@/context/ProductSlotsReelsContext/ProductSlotsReelsContext";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useUser } from "@/context/UserContext/UserContext";

import { SlotsTitle } from "./components/SlotsTitle";
import { SlotsGame } from "./components/SlotsGame";
import { productSlotsReelsGradient } from "./components/SlotsGame/components/ProductSlotsReels/utils";

const Slots = () => {
  const [spinning, setSpinning] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const { authorizedFetch } = useAuth();
  const { consumeSpin } = useUser();

  const renderDeployAddress = process.env.NEXT_PUBLIC_API_URL;

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

  const gradientRef = useRef<HTMLDivElement | null>(null);

  /* gradient effect stays here */
  useEffect(() => {
    productSlotsReelsGradient(gradientRef);
  }, [gradientRef]);

  return (
    <div
      ref={gradientRef}
      className="shadow-2xl h-auto min-h-[480px] flex flex-col py-2 min-w-2xl"
    >
      <SlotsTitle />
      <div className="z-10 border-b border-slate-100 mx-8" />
      <div className="z-10 flex mt-4 mx-2 items-center justify-center">
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
