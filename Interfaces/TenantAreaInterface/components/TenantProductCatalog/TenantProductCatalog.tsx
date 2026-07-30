import { TenantError } from "../TenantError";
import { ProductGrid } from "./components/ProductGrid";
import { ProductEditSection } from "./components/ProductEditSection";
import { TenantProductStats } from "./components/TenantProductStats";
import { AnimatePresence, motion } from "framer-motion";
import { TenantProductStatsToggleButton } from "./components/TenantProductStats/components/TenantProductStatsToggleButton";
import { TenantProductCatalogProps } from "../../types";
import { PreviewImportTable } from "./components/ProductEditSection/components/PreviewImportTable";

const TenantProductCatalog = ({
  products,
  tenantProductStats,
  loading,
  error,
  showStats,
  isMultipleProductsCheckoutVisible,
  isObjectCheckoutViewable,
  catalogSelectionState,
  setShowStats,
  setCatalogSelectionState,
  setIsMultipleProductsCheckoutVisible,
  setIsObjectCheckoutViewable,
  verification,
  verificationLoading,
  verifyCatalog,
  handleFileUpload,
  handleCatalogSubmitProducts,
  pickProducts,
  previewProducts,
  productsImported,
  isProductsPreviewTableOpen,
  setIsProductsPreviewTableOpen,
  tenantSubscriptionMode,
  updateProducts,
  handlePreviewTableCancel,
}: TenantProductCatalogProps) => {
  if (!products) return error;
  const { pagination, setPage, paginatedProducts, page, file } =
    productsImported;
  const _selectedPlan = {
    id: tenantSubscriptionMode || "",
    name: tenantSubscriptionMode || "",
    price: "",
  };
  return (
    <>
      {isProductsPreviewTableOpen && file != null && (
        <div className="flex-1 overflow-y-auto">
          <PreviewImportTable
            handleCatalogSubmitProducts={handleCatalogSubmitProducts}
            page={page}
            paginatedProducts={paginatedProducts}
            pagination={pagination}
            products={products}
            productsImported={productsImported}
            selectedPlan={_selectedPlan}
            setIsProductsPreviewTableOpen={setIsProductsPreviewTableOpen}
            setPage={setPage}
            updateProducts={updateProducts}
            pickProducts={pickProducts}
            previewProducts={previewProducts}
            handlePreviewTableCancel={handlePreviewTableCancel}
          />
        </div>
      )}
      <div className="bg-white/90 backdrop-blur shadow-md px-1 w-full h-fit pb-1">
        <div className=" bg-white/90 backdrop-blur shadow-md md:px-4 md:py-4 px-3 py-3 ">
          {error && <TenantError error={error} />}
          {loading && <span>Loading tenant...</span>}
          {!loading && !error && (
            <div className="flex flex-col">
              <div className=" flex space-x-2  ">
                <div className="relative flex flex-col w-1/2">
                  <ProductGrid
                    products={products}
                    catalogSelectionState={catalogSelectionState}
                    setCatalogSelectionState={setCatalogSelectionState}
                  />

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
          rounded-br
          drop-shadow
        "
                      >
                        <TenantProductStats stats={tenantProductStats} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex flex-col w-1/2">
                  <ProductEditSection
                    tenantProductStats={tenantProductStats}
                    isMultipleProductsCheckoutVisible={
                      isMultipleProductsCheckoutVisible
                    }
                    isObjectCheckoutViewable={isObjectCheckoutViewable}
                    catalogSelectionState={catalogSelectionState}
                    setIsMultipleProductsCheckoutVisible={
                      setIsMultipleProductsCheckoutVisible
                    }
                    setIsObjectCheckoutViewable={setIsObjectCheckoutViewable}
                    setCatalogSelectionState={setCatalogSelectionState}
                    verification={verification}
                    verificationLoading={verificationLoading}
                    verifyCatalog={verifyCatalog}
                    products={products}
                    handleFileUpload={handleFileUpload}
                    handleCatalogSubmitProducts={handleCatalogSubmitProducts}
                    pickProducts={pickProducts}
                    previewProducts={previewProducts}
                    productsImported={productsImported}
                    isProductsPreviewTableOpen={isProductsPreviewTableOpen}
                    setIsProductsPreviewTableOpen={
                      setIsProductsPreviewTableOpen
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default TenantProductCatalog;
