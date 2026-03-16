"use client";

import { FC, useEffect, useRef, useState } from "react";
import { Product, SlotsConfig } from "./types";
import { ProductSlotsReelsProvider } from "@/context/ProductSlotsReelsContext/ProductSlotsReelsContext";
import { SlotsTitle } from "./components/SlotsTitle";
import { SlotsGame } from "./components/SlotsGame";
import { productSlotsReelsGradient } from "./components/SlotsGame/components/ProductSlotsReels/utils";
import { SlotsLoading } from "./components/SlotsLoading";
import { SpinQuota } from "@/context/UserContext/types";

const Slots: FC<SlotsConfig> = ({
  tenantId,
  tenantBranding,
  tenantSettings,
  tenantName,
  refreshQuota,
  authorizedFetch,
  globalQuotaLoading,
  loading,
  optimisticSpin,
  quota,
  refresh,
  sessionTenantId,
}) => {
  const [spinning, setSpinning] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const spin = async () => {
    if (spinning) return;

    setSpinning(true);

    const endpoint = tenantId
      ? `${API_URL}/spin/${tenantId}`
      : `${API_URL}/spin`;

    try {
      const res = await authorizedFetch(endpoint, {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error("Spin failed");
      }

      // 🎯 Backend is the authority
      setSelectedProducts(data.products ?? []);
      if (tenantId && refreshQuota) {
        optimisticSpin(tenantId);
        refreshQuota();
      } else optimisticSpin();
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

  useEffect(() => {
    if (tenantId) refresh({ tenantId: tenantId });
    else if (!tenantId && !sessionTenantId) refresh({ tenantId: null });
  }, [tenantId, refresh, sessionTenantId]);

  return (
    <div
      ref={gradientRef}
      className="shadow-2xl h-auto min-h-[450px] flex flex-col py-2 md:w-2xl w-full md:px-0 px-2"
    >
      <SlotsTitle tenantName={tenantName} tenantBranding={tenantBranding} />
      <div className="z-10 border-b border-slate-100 md:mx-6 mx-3" />
      <div className="z-10 flex mt-4 items-center justify-center h-full w-full">
        {loading && globalQuotaLoading ? (
          <div className="mt-40">
            <SlotsLoading />
          </div>
        ) : (
          <ProductSlotsReelsProvider
            spinning={spinning}
            selectedProducts={selectedProducts}
          >
            <SlotsGame
              spinning={spinning}
              onSpin={spin}
              quota={quota as SpinQuota}
            />
          </ProductSlotsReelsProvider>
        )}
      </div>
    </div>
  );
};

export default Slots;
