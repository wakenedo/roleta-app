import { TenantProduct } from "@/context/TenantContext/types";
import { ProductCard } from "../ProductCard";

const ProductGrid = ({ products }: { products: TenantProduct[] }) => {
  if (products === null) return null;
  return (
    <div className="flex flex-col  ">
      <div className="border border-slate-400  py-2">
        <span className="px-2 text-md tracking-widest font-bold line-clamp-1">
          Produtos Carregados
        </span>
      </div>

      <div className="border-b border-x border-slate-400 p-2 grid grid-cols-2 md:grid-cols-3  gap-4 h-100 mb-2 overflow-scroll   [scrollbar-width:none] bg-slate-300">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
