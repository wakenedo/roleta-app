"use client";

import { FC, useEffect, useRef, useState } from "react";
import { Product, SlotsConfig } from "./types";
import { ProductSlotsReelsProvider } from "@/context/ProductSlotsReelsContext/ProductSlotsReelsContext";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useUser } from "@/context/UserContext/UserContext";
import { SlotsTitle } from "./components/SlotsTitle";
import { SlotsGame } from "./components/SlotsGame";
import { productSlotsReelsGradient } from "./components/SlotsGame/components/ProductSlotsReels/utils";
import { SlotsLoading } from "./components/SlotsLoading";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { SpinQuota } from "@/context/UserContext/types";

const Slots: FC<SlotsConfig> = ({
  tenantId,
  tenantBranding,
  tenantSettings,
  tenantName,
}) => {
  const [spinning, setSpinning] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const { authorizedFetch } = useAuth();
  const { loading, optimisticSpin } = useUser();
  const { refreshQuota, tenantQuota } = useTenant();
  const { refresh, quota, globalQuotaLoading } = useGlobalQuota();

  const renderDeployAddress = process.env.NEXT_PUBLIC_API_URL;

  const spin = async () => {
    if (spinning) return;

    setSpinning(true);

    const endpoint = tenantId
      ? `${renderDeployAddress}/spin/${tenantId}`
      : `${renderDeployAddress}/spin`;

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
      if (tenantId) {
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
    if (!tenantId) refresh();
  }, [tenantId, refresh]);

  return (
    <div
      ref={gradientRef}
      className="shadow-2xl h-auto min-h-[450px] flex flex-col py-2 md:w-2xl w-full md:px-0 px-2"
    >
      <SlotsTitle tenantName={tenantName} />
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
              quota={tenantId ? (tenantQuota as SpinQuota) : quota}
            />
          </ProductSlotsReelsProvider>
        )}
      </div>
    </div>
  );
};

export default Slots;
