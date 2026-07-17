import { SingleProductSelectionProps } from "@/Interfaces/TenantAreaInterface/types";
import { formatPriceBRL } from "@/utils/formatter-utils";

const SingleProductSelection = ({
  productSelected,
}: SingleProductSelectionProps) => {
  return (
    // * are non editable fields
    <div className=" shadow-inner bg-slate-100 w-full h-full py-2 px-2">
      <div className="drop-shadow  flex flex-col  ">
        <div className="flex flex-col justify-between tracking-wider bg-white ">
          <div className="flex flex-col justify-between   p-2">
            <div className="flex flex-col justify-between ">
              <div className="mb-2 border rounded border-slate-200 px-2">
                <div className="flex space-x-1 items-center text-slate-400">
                  <span className="text-xs">Id:</span>
                  <span>{productSelected?.id}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="bg-slate-200 h-full">
                  <span>Image (if present JSON flow mostly)</span>
                </div>
                <div className="flex flex-col p-2 lg:space-y-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Name</span>
                    <span className="text-slate-600">
                      {productSelected?.name}*
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">
                      Provider (if available)
                    </span>
                    <span className="text-slate-600">
                      {productSelected?.affiliate ||
                        productSelected?.metadata?.affiliateProvider}
                      *
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Store</span>
                    <span className="text-slate-600">
                      {productSelected?.store ||
                        productSelected?.metadata?.store}
                      *
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Price</span>
                    <span className="text-slate-600">
                      {productSelected?.price != null
                        ? formatPriceBRL(productSelected.price)
                        : "-"}
                      *
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">
                      Commission and CommissionRate (when available)
                    </span>
                    <span className="text-slate-600">
                      {productSelected?.commission != null
                        ? formatPriceBRL(productSelected.commission)
                        : "-"}
                      *
                    </span>
                    <span className="text-slate-600">
                      {productSelected?.commissionRate ||
                        productSelected?.commissionRate}
                      *
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Tier</span>
                    <span className="text-slate-600">
                      {productSelected?.tier}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">
                      Categoria (will allow to change along our mapped
                      categories)
                    </span>
                    <span className="text-slate-600">
                      {productSelected?.category ||
                        productSelected?.metadata?.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-2 px-2 text-slate-400 flex  space-x-2 border-t border-slate-200 py-1  tracking-wider  ">
            <div className="flex  cursor-pointer text-xs hover:text-emerald-500  transition">
              <span>Verificar</span>
            </div>

            <div className="cursor-pointer text-xs hover:text-red-500 transition">
              <span>Remover</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProductSelection;
