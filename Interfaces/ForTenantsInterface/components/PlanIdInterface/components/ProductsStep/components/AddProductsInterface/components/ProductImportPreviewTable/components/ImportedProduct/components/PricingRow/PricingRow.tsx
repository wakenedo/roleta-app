import { TenantProduct } from "@/context/TenantContext/types";

const PricingRow = ({ product }: { product: TenantProduct }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className=" flex flex-col">
          <span className="text-xs font-semibold">Price:</span>
          <span className="text-sm">R$ {product.price}</span>
        </div>
        {product.metadata?.commission !== null && (
          <div className="flex flex-col border px-1 pb-1">
            <div className="flex-col">
              <span className="text-xs font-semibold">Commission</span>
              <div className="flex  space-x-4 ">
                <div className="flex flex-col">
                  <span className=" text-xs">
                    {product.metadata?.commissionRate || product.commissionRate}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className=" text-xs">
                    R$ {product.metadata?.commission || product.commission}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default PricingRow;
