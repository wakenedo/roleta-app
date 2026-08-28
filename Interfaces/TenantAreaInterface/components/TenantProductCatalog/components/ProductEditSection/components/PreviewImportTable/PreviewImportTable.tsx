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
  pickProducts,
  previewProducts,
  handlePreviewTableCancel,
  catalogItems,
  catalogItemsCsvResponse,
  catalogItemsJsonResponse,
  catalogState,
  responsePanel,
}: PreviewImportTableProps) => {
  if (pickProducts.length < 0) return null;
  console.log("catalogItems", catalogItems);
  console.log("pickProducts", pickProducts);
  console.log("previewProducts", previewProducts);
  console.log("paginatedProducts", paginatedProducts);
  console.log("preview catalogState", catalogState);

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
          pickProducts={pickProducts}
          previewProducts={previewProducts}
          catalogItemsCsvResponse={catalogItemsCsvResponse}
          catalogItemsJsonResponse={catalogItemsJsonResponse}
          catalogItems={catalogItems}
          catalogState={catalogState}
          responsePanel={responsePanel}
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
