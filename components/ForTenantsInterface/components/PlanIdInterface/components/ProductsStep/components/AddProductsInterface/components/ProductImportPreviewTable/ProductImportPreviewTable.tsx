import { TenantProduct } from "@/context/TenantContext/types";
import { ProductImportRow } from "./components/ProductImportRow";
import { ProductImportPreviewTableProps } from "@/components/ForTenantsInterface/components/PlanIdInterface/types";
import { selectedPlanMaxProducts } from "@/components/ForTenantsInterface/components/PlanIdInterface/utils";

const ProductImportPreviewTable = ({
  products,
  updateProducts,
  selectedPlan,
  paginatedProducts,
  setPage,
  pagination,
  page,
}: ProductImportPreviewTableProps) => {
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

  if (!products.length) return null;

  const lackingProducts =
    products.length <= selectedPlanMaxProducts(selectedPlan);

  return (
    <div className="border mt-4">
      <div className="text-center">
        {products.length > 0 && (
          <div
            className={`flex flex-col text-xs mt-2 ${lackingProducts === true ? "text-amber-400" : ""}`}
          >
            Produtos Carregados
            <div className="flex space-x-2 mt-1 text-2xl font-semibold mx-auto">
              <div>
                <span>{products.length} /</span>
              </div>
              <div>
                <span>{selectedPlanMaxProducts(selectedPlan)} </span>
              </div>
            </div>
          </div>
        )}
        {lackingProducts === true && (
          <div>
            <span className="text-xs text-amber-400">
              Sua assinatura permite a inclusão de mais produtos, sugerimos a
              inclusão de um catalogo de produtos maior
            </span>
          </div>
        )}
      </div>
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
      <div className="grid grid-cols-5 text-xs font-semibold p-2 border-b">
        <span>Name</span>
        <span>Image</span>
        <span>URL</span>
        <span>Tier</span>
        <span>Price</span>
      </div>

      {paginatedProducts.map((product, index) => (
        <ProductImportRow
          key={index}
          product={product}
          index={index}
          updateProductField={updateProductField}
        />
      ))}
    </div>
  );
};

export default ProductImportPreviewTable;
