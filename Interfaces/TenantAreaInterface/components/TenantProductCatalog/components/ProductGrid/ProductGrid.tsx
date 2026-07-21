import { TenantProductCatalogProductGridProps } from "@/Interfaces/TenantAreaInterface/types";
import { TenantSectionMarker } from "@/components/TenantSectionMarker";
import { ProductCard } from "../ProductCard";
import {
  handleCatalogSelection,
  isCatalogProductSelected,
} from "@/Interfaces/TenantAreaInterface/catalog";

const ProductGrid = ({
  products,
  multipleProductsSelected,
  productSelected,
  setMultipleProductsSelected,
  setProductSelected,
  setIsMultipleSelectionMode,
  setIsProductSelected,
}: TenantProductCatalogProductGridProps) => {
  if (products === null) return null;
  return (
    <div className="flex flex-col  ">
      <TenantSectionMarker markerTitle="Produtos Carregados" />

      <div className="border-b border-x border-slate-200 p-2 grid grid-cols-2 md:grid-cols-3  gap-4 lg:h-[695px]  overflow-scroll   [scrollbar-width:none] bg-slate-100">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              selected={isCatalogProductSelected(
                product,
                productSelected,
                multipleProductsSelected,
              )}
              onProductClick={() =>
                handleCatalogSelection({
                  product,
                  productSelected,
                  multipleProductsSelected,
                  setMultipleProductsSelected,
                  setProductSelected,
                  setIsMultipleSelectionMode,
                  setIsProductSelected,
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
