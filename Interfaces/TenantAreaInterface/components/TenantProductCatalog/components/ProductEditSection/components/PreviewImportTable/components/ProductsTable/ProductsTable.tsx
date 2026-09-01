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
import { BsExclamationTriangle } from "react-icons/bs";

const ProductsTable = ({
  products,
  updateProducts,
  selectedPlan,
  paginatedProducts,
  setPage,
  pagination,
  page,
  previewProducts,
  catalogItems,
  catalogState,
  responsePanel,
  productsImportedLoading,
  productsToRender,
  hasCatalogResponse,
  isCatalogStateLoading,
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

  if (!productsToRender.length) return null;

  const lackingProducts =
    products.length <= selectedPlanMaxProducts(selectedPlan);

  const missing = (value: TenantProduct[keyof TenantProduct]) =>
    !value ? "border-red-400" : "border-gray-300";

  return (
    <>
      {catalogItems.length > 0 && (
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-700">
                Importação de Catálogo
              </h3>

              <p className="text-sm text-slate-500">
                {catalogItems.length} produtos identificados
              </p>
            </div>
            <div
              className={`text-3xl font-bold 
                ${catalogState === "success" || "submitting" ? "text-emerald-500" : "text-slate-700"} 
                 flex flex-col items-center`}
            >
              {responsePanel.valid}
              <div
                className={`${catalogState === "success" || "submitting" ? "text-emerald-400" : "text-slate-400"} 
                text-xs uppercase tracking-wide`}
              >
                {"disponíveis"}
              </div>
            </div>
          </div>

          {/* Success */}
          {catalogState === "success" && (
            <div className="border-b border-emerald-200 bg-emerald-50 px-5 py-4">
              <div className="font-medium text-emerald-700">
                Catálogo verificado com sucesso
              </div>

              <div className="mt-1 text-sm text-emerald-600">
                Todos os produtos estão acessíveis e podem ser adicionados ao
                catálogo.
              </div>
            </div>
          )}

          {/* Warning */}
          {catalogState === "warning" && (
            <div className="border-b border-amber-200 bg-amber-50 px-5 py-4">
              <div className="font-medium text-amber-700">
                Alguns produtos merecem revisão
              </div>

              <div className="mt-1 text-sm text-amber-600">
                Encontramos alguns avisos durante a verificação. Os produtos
                continuam disponíveis para importação.
              </div>
            </div>
          )}

          {/* Partial */}
          {catalogState === "partial" && (
            <div className="border-b border-red-200 bg-red-50 px-5 py-4">
              <div className="flex gap-3">
                <BsExclamationTriangle
                  className="mt-1 text-red-500"
                  size={18}
                />

                <div>
                  <div className="font-medium text-red-700">
                    Alguns produtos não poderão ser adicionados
                  </div>

                  <div className="mt-1 text-sm leading-relaxed text-red-600">
                    Não foi possível acessar o destino informado para um ou mais
                    produtos. Atualize o link ou substitua esses itens antes de
                    prosseguir.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Metrics */}
          {hasCatalogResponse && (
            <div className="grid grid-cols-3 divide-x divide-slate-200">
              <div className="py-4 text-center">
                <div className="text-xl font-semibold text-slate-700">
                  {responsePanel.total}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                  Lidos
                </div>
              </div>

              <div className="py-4 text-center">
                <div className="text-xl font-semibold text-amber-500">
                  {responsePanel.warnings}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                  Revisar
                </div>
              </div>

              <div className="py-4 text-center">
                <div className="text-xl font-semibold text-red-500">
                  {responsePanel.errors}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                  Indisponíveis
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {catalogState === "submitting" && (
        <div className="flex flex-col rounded-lg border-slate-200 bg-white border shadow-sm mb-4">
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
                  : "Carregados"}
              </div>
            </div>
          </div>
        </div>
      )}
      {isCatalogStateLoading && (
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
              {isCatalogStateLoading ? (
                <div className="h-12 w-12 my-2 animate-spin rounded-full border-2 border-slate-200 border-t-cyan-500" />
              ) : (
                <div className="h-12 w-12 my-2 animate-spin rounded-full border-2 border-slate-200 border-t-cyan-500" />
              )}
              <div className="text-xs  tracking-wide text-slate-400">
                {isCatalogStateLoading
                  ? "Verificando Items e Links..."
                  : "disponíveis"}
              </div>
            </div>
          </div>
          <div className="my-2 flex flex-col items-center ">
            <div className="text-sm text-slate-500">
              Aguarde um momento enquanto verificamos se os links estão ou
              continuam acessíveis.
            </div>
          </div>
        </div>
      )}

      {!isCatalogStateLoading &&
        productsToRender &&
        catalogState != "submitting" && (
          <>
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
              {productsToRender?.map((product, index) => (
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
          </>
        )}
    </>
  );
};
export default ProductsTable;
