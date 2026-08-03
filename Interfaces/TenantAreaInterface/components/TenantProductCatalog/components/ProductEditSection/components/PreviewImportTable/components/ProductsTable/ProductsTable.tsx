import { TenantProduct } from "@/context/TenantContext/types";
import { CategoryRow } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/components/ProductsStep/components/AddProductsInterface/components/ProductImportPreviewTable/components/ImportedProduct/components/CategoryRow";
import { ImageRow } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/components/ProductsStep/components/AddProductsInterface/components/ProductImportPreviewTable/components/ImportedProduct/components/ImageRow";
import { MetadataProvider } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/components/ProductsStep/components/AddProductsInterface/components/ProductImportPreviewTable/components/ImportedProduct/components/MetadataProvider";
import { NameRow } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/components/ProductsStep/components/AddProductsInterface/components/ProductImportPreviewTable/components/ImportedProduct/components/NameRow";
import { PricingRow } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/components/ProductsStep/components/AddProductsInterface/components/ProductImportPreviewTable/components/ImportedProduct/components/PricingRow";
import { StoreRow } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/components/ProductsStep/components/AddProductsInterface/components/ProductImportPreviewTable/components/ImportedProduct/components/StoreRow";
import { TierRow } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/components/ProductsStep/components/AddProductsInterface/components/ProductImportPreviewTable/components/ImportedProduct/components/TierRow";
import { URLRow } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/components/ProductsStep/components/AddProductsInterface/components/ProductImportPreviewTable/components/ImportedProduct/components/URLRow";
import { selectedPlanMaxProducts } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/utils";
import { ProductTableProps } from "@/Interfaces/TenantAreaInterface/types";

const ProductsTable = ({
  products,
  updateProducts,
  selectedPlan,
  paginatedProducts,
  setPage,
  pagination,
  page,
  pickProducts,
  previewProducts, // This will be related to preview experience interface
  catalogItemsCsvResponse,
  catalogItemsJsonResponse,
}: ProductTableProps) => {
  const updateProductField = (
    index: number,
    field: keyof TenantProduct,
    value: TenantProduct[keyof TenantProduct],
  ) => {
    const updated = [...products];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    updateProducts(updated);
  };

  if (!pickProducts.length) return null;

  const lackingProducts =
    products.length <= selectedPlanMaxProducts(selectedPlan);

  const missing = (value: TenantProduct[keyof TenantProduct]) =>
    !value ? "border-red-400" : "border-gray-300";

  const csvOrJsonResponse =
    catalogItemsCsvResponse ?? catalogItemsJsonResponse ?? null;

  const responsePanel = {
    preview: csvOrJsonResponse?.preview,
    products: csvOrJsonResponse?.products,
    errors: csvOrJsonResponse?.errorCount,
    warnings: csvOrJsonResponse?.warningsCount,
    total: csvOrJsonResponse?.products.length,
    valid: csvOrJsonResponse?.validCount,
  };
  return (
    <>
      <div
        className={`flex flex-col text-xs mt-2 p-2 ${lackingProducts === true ? "text-amber-400  border border-amber-400" : " border border-slate-300"}`}
      >
        Catalogo Atual
        <div className="flex space-x-2 mt-1 text-base font-semibold mx-auto">
          <div>
            <span>{products.length} /</span>
          </div>
          <div>
            <span>{selectedPlanMaxProducts(selectedPlan)} </span>
          </div>
        </div>
        {lackingProducts === true && (
          <div>
            <span className="text-xs text-amber-400">
              Sua assinatura permite a inclusão de mais produtos, sugerimos a
              inclusão de um catalogo de produtos maior
            </span>
          </div>
        )}
      </div>

      <div className="border mt-4">
        {pickProducts.length > 0 && (
          <div>
            <div className="text-2xl">
              <span> Adicionando : {pickProducts.length} Produtos </span>
            </div>
          </div>
        )}
        {(catalogItemsJsonResponse != null ||
          catalogItemsCsvResponse != null) && (
          <div className="border border-slate-300 flex flex-col">
            <span>errors: {responsePanel.errors}</span>
            <span>warnings: {responsePanel.warnings}</span>
            <span>total:{responsePanel.total}</span>
            <span>valid: {responsePanel.valid}</span>
          </div>
        )}
        <div className="text-center"></div>
        <div className="flex gap-2 mt-4 justify-center">
          <button
            disabled={!pagination.hasPrev}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>

          <span>
            Page {pagination.currentPage} / {pagination.totalPages}
          </span>

          <button
            disabled={!pagination.hasNext}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>

        <div className="grid grid-cols-4 gap-1 p-2 border-b  max-h-100 overflow-y-scroll">
          {paginatedProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 p-2 border bg-slate-600"
            >
              <ImageRow
                index={index}
                missing={missing}
                product={product}
                updateProductField={updateProductField}
              />

              <NameRow
                index={index}
                missing={missing}
                product={product}
                updateProductField={updateProductField}
              />

              <PricingRow product={product} />

              {product.metadata?.affiliateProvider !== null && (
                <MetadataProvider product={product} />
              )}
              {product.metadata?.affiliateProvider === null && (
                <StoreRow
                  index={index}
                  missing={missing}
                  product={product}
                  updateProductField={updateProductField}
                />
              )}

              <URLRow
                index={index}
                missing={missing}
                product={product}
                updateProductField={updateProductField}
              />

              <CategoryRow
                index={index}
                product={product}
                updateProductField={updateProductField}
              />

              <TierRow
                index={index}
                product={product}
                updateProductField={updateProductField}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductsTable;
