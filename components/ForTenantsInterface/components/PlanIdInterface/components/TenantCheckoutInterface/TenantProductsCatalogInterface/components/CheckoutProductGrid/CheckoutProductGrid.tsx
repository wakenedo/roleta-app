import { TenantProduct } from "@/context/TenantContext/types";
import { CheckoutProductCard } from "./components/CheckoutProductCard";

const CheckoutProductGrid = ({ products }: { products: TenantProduct[] }) => {
  if (products === null) return null;
  return (
    <div className="flex flex-col gap-3">
      <div className=" p-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-75 mb-2 overflow-scroll   [scrollbar-width:none] bg-slate-300">
        {products.map((product) => (
          <CheckoutProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default CheckoutProductGrid;
