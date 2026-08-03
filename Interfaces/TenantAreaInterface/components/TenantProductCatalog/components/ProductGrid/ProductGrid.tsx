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
}: TenantProductCatalogProductGridProps) => {
  if (products === null) return null;
  return (
    <div className="flex flex-col  ">
      <TenantSectionMarker markerTitle="Produtos Carregados" />

      <div className="border-b border-x border-slate-200 p-2 grid grid-cols-2 md:grid-cols-3  gap-4 lg:h-166 h-168  overflow-scroll   [scrollbar-width:none] bg-slate-100">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={product.id + index}
              product={product}
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
