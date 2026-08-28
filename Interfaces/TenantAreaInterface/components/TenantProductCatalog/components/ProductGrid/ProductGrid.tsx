import { TenantProductCatalogProductGridProps } from "@/Interfaces/TenantAreaInterface/types";
import { TenantSectionMarker } from "@/components/TenantSectionMarker";
import { ProductCard } from "../ProductCard";
import {
  handleCatalogSelection,
  isCatalogProductSelected,
} from "@/Interfaces/TenantAreaInterface/catalog";

const ProductGrid = ({
  products,
  catalogSelectionState,
  setCatalogSelectionState,
  verificationLoading,
  verificationByProductId,
}: TenantProductCatalogProductGridProps) => {
  if (products === null) return null;
  console.log("ProductGrid verificationByProductId", verificationByProductId);

  return (
    <div className="flex flex-col  ">
      <TenantSectionMarker markerTitle="Produtos Carregados" />

      <div className="border-b border-x border-slate-200 p-2 grid grid-cols-2 md:grid-cols-3  gap-4 lg:h-166 h-168 xl:h-167.75  overflow-scroll   [scrollbar-width:none] bg-slate-100">
        {products.map((product, index) => {
          const productVerification = verificationByProductId.get(product.id);

          return (
            <ProductCard
              key={product.id + index}
              product={product}
              verification={productVerification}
              verificationLoading={verificationLoading}
              selected={isCatalogProductSelected(
                product,
                catalogSelectionState,
              )}
              onProductClick={() =>
                handleCatalogSelection({
                  product,
                  catalogSelectionState,
                  setCatalogSelectionState,
                })
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
