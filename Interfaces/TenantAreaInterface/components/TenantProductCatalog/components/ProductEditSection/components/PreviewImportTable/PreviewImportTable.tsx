import {
  CatalogState,
  PreviewImportTableProps,
} from "@/Interfaces/TenantAreaInterface/types";
import { SaveProductsButton } from "./components/SaveProductsButton";
import { ProductsTable } from "./components/ProductsTable";

const PreviewImportTable = ({
  page,
  paginatedProducts,
  pagination,
  products,
  selectedPlan,
  setPage,
  updateProducts,
  handleCatalogSubmitProducts,
  productsImported,
  previewProducts,
  handlePreviewTableCancel,
  catalogItems,
  catalogState,
  responsePanel,
  productsImportedLoading,
  hasPreview,
  productsToRender,
  hasCatalogResponse,
  isCatalogStateLoading,
  productsImportedErrors,
}: PreviewImportTableProps) => {
  if (productsToRender.length < 0) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/10
      backdrop-blur-sm
      h-full
      
    "
    >
      <div
        className="
        relative
        w-[95vw]
        max-w-7xl
        max-h-[110vh]
        overflow-hidden
        rounded-xl
        bg-white
        shadow-2xl
        p-6
      "
      >
        <ProductsTable
          page={page}
          paginatedProducts={paginatedProducts}
          pagination={pagination}
          products={products}
          selectedPlan={selectedPlan}
          setPage={setPage}
          updateProducts={updateProducts}
          previewProducts={previewProducts}
          catalogItems={catalogItems}
          catalogState={catalogState}
          responsePanel={responsePanel}
          productsImportedLoading={productsImportedLoading}
          productsToRender={productsToRender}
          hasCatalogResponse={hasCatalogResponse}
          isCatalogStateLoading={isCatalogStateLoading}
          productsImportedErrors={productsImportedErrors}
        />

        <div className="mt-4 flex flex-col justify-center gap-5">
          {catalogItems.length != 0 && (
            <SaveProductsButton
              onClick={handleCatalogSubmitProducts}
              label={
                productsImported.file
                  ? "Confirmar Importação"
                  : "Salvar Produtos"
              }
            />
          )}
          {catalogState === "loading" && !hasPreview && (
            <div className="flex flex-col rounded-lg border-slate-200 bg-white border shadow-sm mb-4">
              <div className=" border-slate-200 border-b flex items-center justify-between px-5 py-4">
                <div className="flex flex-col ">
                  <h3 className="text-lg font-semibold text-slate-700">
                    Importação de Catálogo
                  </h3>
                  <p className="text-sm text-slate-500">
                    Identificando produtos para importação
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4  border-slate-200 border-b  ">
                <div className="text-3xl font-bold text-slate-700 flex flex-col items-center py-3">
                  {productsImportedLoading ? (
                    <div className="h-12 w-12 my-2 animate-spin rounded-full border-2 border-slate-200 border-t-cyan-500" />
                  ) : (
                    <div className="h-12 w-12 my-2 animate-spin rounded-full border-2 border-slate-200 border-t-cyan-500" />
                  )}
                  <div className="text-xs  tracking-wide text-slate-400">
                    {productsImportedLoading
                      ? "Carregando Items e Links..."
                      : "Concluído"}
                  </div>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={handlePreviewTableCancel}
            className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300 cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
export default PreviewImportTable;
