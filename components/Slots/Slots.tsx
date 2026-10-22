"use client";

import { useEffect, useRef, useState } from "react";
import { Product, SlotsConfig } from "./types";
import { ProductSlotsReelsProvider } from "@/context/ProductSlotsReelsContext/ProductSlotsReelsContext";
import { SlotsTitle } from "./components/SlotsTitle";
import { SlotsGame } from "./components/SlotsGame";
import { productSlotsReelsGradient } from "./components/SlotsGame/components/ProductSlotsReels/utils";
import { SlotsLoading } from "./components/SlotsLoading";
import {
  SpinQuota,
  SpinSource,
  TenantSpinQuota,
} from "@/context/UserContext/types";
import { API_URL } from "@/enums";

const Slots = ({
  tenantId,
  tenantBranding,
  tenantSettings,
  tenantName,
  authorizedFetch,
  globalQuotaLoading,
  loading,
  optimisticSpin,
  quota,
  tenantQuota,
  refresh,
  sessionTenantId,
  userMonthlyLimit,
  userWeeklyLimit,
  subscriptionExtras,
  subscriptionExtrasGranted,
  subscriptionExtrasRemaining,
}: SlotsConfig) => {
  const [spinning, setSpinning] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [currentSpinId, setCurrentSpinId] = useState<string | null>(null);
  const [spinSource, setSpinSource] = useState<SpinSource | null>(null);

  const spin = async (source: SpinSource) => {
    if (spinning) return;

    setSpinning(true);
    setSpinSource(source);

    const endpoint = tenantId
      ? `${API_URL}/spin/${tenantId}`
      : `${API_URL}/spin`;

    try {
      const res = await authorizedFetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          spinSource: source,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error("Spin failed");
      }

      // 🎯 Backend is the authority
      setSelectedProducts(data.products ?? []);
      setCurrentSpinId(data.spinId);
      setSpinSource(data.spinSource ?? source);
      if (tenantId) {
        await refresh({
          tenantId,
        });

        optimisticSpin(tenantId);

        await refresh({
          tenantId,
        });
      } else {
        await refresh({
          tenantId: null,
        });
      }
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
      className="shadow-2xl h-auto min-h-112.5 flex flex-col py-2 md:w-2xl w-full md:px-0 px-2"
    >
      <SlotsTitle tenantName={tenantName} tenantBranding={tenantBranding} />
      <div className="z-10 border-b border-slate-100 md:mx-6 mx-3" />
      <div className="z-10 flex mt-4 items-center justify-center h-full w-full">
        {loading && globalQuotaLoading ? (
          <div className="mt-40 h-fit">
            <SlotsLoading />
          </div>
        ) : (
          <ProductSlotsReelsProvider
            spinning={spinning}
            selectedProducts={selectedProducts}
          >
            <SlotsGame
              tenantId={tenantId}
              spinning={spinning}
              onSpin={spin}
              quota={quota as SpinQuota}
              tenantQuota={tenantQuota as TenantSpinQuota}
              currentSpinId={currentSpinId}
              selectedProducts={selectedProducts}
              tenantBranding={tenantBranding}
              userMonthlyLimit={userMonthlyLimit}
              userWeeklyLimit={userWeeklyLimit}
              subscriptionExtras={subscriptionExtras}
              subscriptionExtrasGranted={subscriptionExtrasGranted}
              subscriptionExtrasRemaining={subscriptionExtrasRemaining}
              spinSource={spinSource}
            />
          </ProductSlotsReelsProvider>
        )}
      </div>
    </div>
  );
};

export default Slots;
