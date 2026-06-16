import { TenantProductCatalogProductCard } from "@/components/TenantAreaInterface/types";

const ProductCard = ({ product }: TenantProductCatalogProductCard) => {
  return (
    <div className="bg-white  shadow hover:shadow-lg transition p-3 flex flex-col gap-1">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-h-30 object-cover rounded line-clamp-1"
      />

      <div className="flex flex-col gap-1 ">
        <span className="font-semibold text-sm line-clamp-1">
          {product.name}
        </span>

        {product.description && (
          <span className="text-xs text-gray-500 line-clamp-2">
            {product.description}
          </span>
        )}
        {product.metadata?.affiliateProvider && (
          <>
            <div className="flex items-center space-x-2 ">
              <span className="text-xs text-indigo-600 font-bold">
                {product.metadata?.affiliateProvider ||
                  product.affiliate ||
                  "N/A"}
              </span>
            </div>
            <div>
              <span className="text-xs text-indigo-600 font-bold line-clamp-1">
                {product.metadata?.store || product.store || "N/A"}
              </span>
            </div>
          </>
        )}

        <div className="flex items-center ">
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-indigo-600 font-bold">
              Valor: R$ {Number(product.price).toFixed(2)}
            </span>
            {product.commission && (
              <div className="flex flex-col justify-between ">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-indigo-600 font-bold">
                    Comissão: R$ {Number(product.commission).toFixed(2)}
                  </span>
                  <span className="text-[10px] bg-slate-200 px-2 py-1 rounded capitalize">
                    {product.commissionRate}
                  </span>
                </div>
              </div>
            )}
            <span className="text-[10px] bg-slate-200 px-2 py-1 rounded capitalize text-center">
              {product.tier}
            </span>
            {product.metadata && (
              <span className="text-[10px] bg-slate-200 px-2 py-1 rounded capitalize text-center">
                {product.metadata?.category || product.category || "N/A"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
