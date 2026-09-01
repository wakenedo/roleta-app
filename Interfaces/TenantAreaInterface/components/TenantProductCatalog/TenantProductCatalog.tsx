import { TenantError } from "../TenantError";
import { ProductGrid } from "./components/ProductGrid";
import { ProductEditSection } from "./components/ProductEditSection";
import { TenantProductStats } from "./components/TenantProductStats";
import { AnimatePresence, motion } from "framer-motion";
import { TenantProductStatsToggleButton } from "./components/TenantProductStats/components/TenantProductStatsToggleButton";
import { TenantProductCatalogProps } from "../../types";
import { PreviewImportTable } from "./components/ProductEditSection/components/PreviewImportTable";
import { TenantAreaLoading } from "../TenantAreaLoading";
import { CatalogVerificationModal } from "./components/CatalogVerificationModal";
import { CatalogRemoveModal } from "./components/CatalogRemoveModal";

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
  catalogItems,
  catalogState,
  responsePanel,
  closeCatalogVerificationModal,
  isCatalogVerificationModalOpen,
  setIsCatalogVerificationModalOpen,
  verificationByProductId,
  isRemoveProductsModalOpen,
  setIsRemoveProductsModalOpen,
  closeRemoveProductsModal,
  handleRemoveAllCatalogProducts,
  removalLoading,
  removalResult,
  productsImportedLoading,
  hasPreview,
  productsToRender,
  hasCatalogResponse,
  isCatalogStateLoading,
  productsImportedErrors,
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
            setPage={setPage}
            updateProducts={updateProducts}
            previewProducts={previewProducts}
            handlePreviewTableCancel={handlePreviewTableCancel}
            catalogItems={catalogItems}
            catalogState={catalogState}
            responsePanel={responsePanel}
            productsImportedLoading={productsImportedLoading}
            hasPreview={hasPreview}
            productsToRender={productsToRender}
            hasCatalogResponse={hasCatalogResponse}
            isCatalogStateLoading={isCatalogStateLoading}
            productsImportedErrors={productsImportedErrors}
          />
        </div>
      )}
      {isRemoveProductsModalOpen && (
        <div className="flex-1 overflow-y-auto">
          <CatalogRemoveModal
            closeRemoveProductsModal={closeRemoveProductsModal}
            removalLoading={removalLoading}
            removalResult={removalResult}
          />
        </div>
      )}
      {isCatalogVerificationModalOpen && (
        <div className="flex-1 overflow-y-auto">
          <CatalogVerificationModal
            closeCatalogVerificationModal={closeCatalogVerificationModal}
            verificationLoading={verificationLoading}
            verification={verification}
          />
        </div>
      )}

      <div className="bg-white/90 backdrop-blur shadow-md px-1 w-full h-fit pb-1">
        <div className=" bg-white/90 backdrop-blur shadow-md md:px-4 md:py-4  px-3 py-3 ">
          {error && <TenantError error={error} />}
          {loading && (
            <div className="pb-1">
              <TenantAreaLoading />
            </div>
          )}
          {!loading && !error && (
            <div className="flex flex-col">
              <div className=" flex space-x-2  ">
                <div className="relative flex flex-col w-1/2">
                  <ProductGrid
                    verificationByProductId={verificationByProductId}
                    verificationLoading={verificationLoading}
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
                    pickProducts={pickProducts}
                    previewProducts={previewProducts}
                    productsImported={productsImported}
                    setIsProductsPreviewTableOpen={
                      setIsProductsPreviewTableOpen
                    }
                    setIsCatalogVerificationModalOpen={
                      setIsCatalogVerificationModalOpen
                    }
                    verificationByProductId={verificationByProductId}
                    setIsRemoveProductsModalOpen={setIsRemoveProductsModalOpen}
                    handleRemoveAllCatalogProducts={
                      handleRemoveAllCatalogProducts
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
