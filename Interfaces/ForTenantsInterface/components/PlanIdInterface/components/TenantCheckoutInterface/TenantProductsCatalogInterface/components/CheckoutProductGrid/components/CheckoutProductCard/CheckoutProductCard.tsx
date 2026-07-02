import { TenantProduct } from "@/context/TenantContext/types";

const CheckoutProductCard = ({ product }: { product: TenantProduct }) => {
  return (
    <div
      key={product.id}
      className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col gap-1"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-30 object-cover rounded"
      />

      <div className="flex flex-col gap-1">
        <span className="font-semibold text-xs text-slate-500 line-clamp-1">
          {product.name}
        </span>

        {product.description && (
          <span className="text-xs text-gray-500 line-clamp-2">
            {product.description}
          </span>
        )}

        <div className="flex items-center space-x-2 w-full">
          <span className="text-xs bg-slate-500 px-2 py-1 rounded capitalize">
            {product.affiliate || "N/A"}
          </span>
          <span className="text-xs bg-slate-500 px-2 py-1 rounded capitalize line-clamp-1">
            {product.store || "N/A"}
          </span>
          <span className="text-xs bg-slate-500 px-2 py-1 rounded capitalize">
            {product.category || "N/A"}
          </span>
          <span className="text-xs bg-slate-500 px-2 py-1 rounded capitalize">
            {product.tier}
          </span>
          <span className="text-[10px] bg-slate-500 px-2 py-1 rounded capitalize">
            {product.commissionRate}
          </span>
        </div>
        <div className="flex items-center justify-around mt-2">
          <span className="text-xs text-indigo-600 font-bold">
            Valor: R$ {Number(product.price).toFixed(2)}
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-indigo-600 font-bold">
              Comissão: R$ {Number(product.commission).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutProductCard;
