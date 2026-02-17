import { TenantProduct } from "@/context/TenantContext/types";

const ProductCard = ({ product }: { product: TenantProduct }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col gap-1">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-30 object-cover rounded"
      />

      <div className="flex flex-col gap-1">
        <span className="font-semibold text-sm">{product.name}</span>

        {product.description && (
          <span className="text-xs text-gray-500 line-clamp-2">
            {product.description}
          </span>
        )}

        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-indigo-600 font-bold">
            R$ {Number(product.price).toFixed(2)}
          </span>

          <span className="text-[10px] bg-slate-200 px-2 py-1 rounded capitalize">
            {product.tier}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
