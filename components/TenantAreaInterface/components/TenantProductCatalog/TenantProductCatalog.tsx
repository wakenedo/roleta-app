import { TenantError } from "../TenantError";
import { ProductGrid } from "./components/ProductGrid";
import { ProductJsonViewer } from "./components/ProductJsonViewer";
import { ProductEditSection } from "./components/ProductEditSection";
import { TenantProductCatalogProps } from "../../types";
import { TenantProductStats } from "./components/TenantProductStats";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TenantProductStatsToggleButton } from "./components/TenantProductStats/components/TenantProductStatsToggleButton";

const TenantProductCatalog = ({
  products,
  tenantProductStats,
  loading,
  error,
}: TenantProductCatalogProps) => {
  const [showStats, setShowStats] = useState(false);
  if (!products) return error;
  console.log("tenantProductStats", tenantProductStats);
  return (
    <div className="bg-white/90 backdrop-blur shadow-md px-1 w-full h-fit pb-1">
      <div className=" bg-white/90 backdrop-blur shadow-md md:px-4 md:py-4 px-3 py-3 ">
        {error && <TenantError error={error} />}
        {loading && <span>Loading tenant...</span>}
        {!loading && !error && (
          <div className="flex flex-col">
            <div className=" flex space-x-2  ">
              <div className="relative flex flex-col w-1/2">
                <ProductGrid products={products} />

                <TenantProductStatsToggleButton
                  setShowStats={setShowStats}
                  showStats={showStats}
                />

                <AnimatePresence>
                  {showStats && (
                    <motion.div
                      initial={{ opacity: 0, y: 410 }}
                      animate={{ opacity: 1, y: 410 }}
                      exit={{ opacity: 0, y: 410 }}
                      transition={{ duration: 0.5 }}
                      className="
          absolute
          inset-0
          z-10
          bg-white/60
          backdrop-blur-sm
          overflow-auto
          p-4
          border-t border-x
          border-white
          shadow-2xs
          h-fit
          bottom-0
          
          drop-shadow
        "
                    >
                      <TenantProductStats stats={tenantProductStats} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex flex-col w-1/2">
                <ProductEditSection />
                <ProductJsonViewer products={products} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TenantProductCatalog;
