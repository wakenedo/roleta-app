import { TenantProductCatalogProductGridProps } from "@/Interfaces/TenantAreaInterface/types";
import { TenantSectionMarker } from "@/components/TenantSectionMarker";
import { ProductCard } from "../ProductCard";

const ProductGrid = ({ products }: TenantProductCatalogProductGridProps) => {
  if (products === null) return null;
  return (
    <div className="flex flex-col  ">
      <TenantSectionMarker markerTitle="Produtos Carregados" />

      <div className="border-b border-x border-slate-200 p-2 grid grid-cols-2 md:grid-cols-3  gap-4 lg:h-[695px]  overflow-scroll   [scrollbar-width:none] bg-slate-100">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
