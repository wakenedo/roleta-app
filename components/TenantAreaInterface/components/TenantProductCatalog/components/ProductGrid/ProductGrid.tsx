import { TenantProduct } from "@/context/TenantContext/types";
import { ProductCard } from "../ProductCard";

const ProductGrid = ({ products }: { products: TenantProduct[] }) => {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-semibold text-slate-600">
        Produtos Carregados :
      </span>
      <div className=" p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-75 mb-2 overflow-scroll   [scrollbar-width:none] bg-slate-300">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
