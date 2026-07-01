import { ProductImportRowProps } from "@/components/ForTenantsInterface/components/PlanIdInterface/types";
import { TenantProduct } from "@/context/TenantContext/types";

const ProductImportRow = ({
  product,
  index,
  updateProductField,
}: ProductImportRowProps) => {
  const missing = (value: TenantProduct[keyof TenantProduct]) =>
    !value ? "border-red-400" : "border-gray-300";

  // For now we're allowing the user to edit all fields during import,
  // but we might want to lock some of them in the future, if not all of them.
  // Ideally we develop a simple structure to verify the integrity of the imported data,
  // in the catalog management interface, to verify link integrity and data integrity.
  // To minimize the tenant user input errors and improper data formatting,
  // ensure a smooth import process and product management for the tenants.
  console.log("Rendering row for product:", product);
  return (
    <div className="flex flex-col gap-2 p-2 border bg-slate-600">
      <div className="flex flex-col">
        <span className="text-xs font-semibold">Image :</span>
        <input
          className={`border p-1 text-xs ${missing(product.image)}`}
          value={product.image ? product.image : "No Image"}
          onChange={(e) => updateProductField(index, "image", e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-semibold">Name :</span>
        <input
          className={`border p-1 text-xs ${missing(product.name)}`}
          value={product.name}
          onChange={(e) => updateProductField(index, "name", e.target.value)}
        />
      </div>

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
                      {product.metadata?.commissionRate ||
                        product.commissionRate}
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

      {product.metadata?.affiliateProvider !== null && (
        <div className="flex flex-col cursor-default">
          <span className="text-xs font-semibold">Affiliate :</span>
          <span className={` text-sm `}>
            {product.metadata?.affiliateProvider || product.affiliate}
          </span>

          <span className="text-xs font-semibold">Store :</span>

          <span className={` text-sm }`}>
            {product.metadata?.store || product.store}
          </span>
        </div>
      )}
      {product.metadata?.affiliateProvider === null && (
        <div className="flex flex-col">
          <span className="text-xs font-semibold">Store :</span>

          <input
            className={`border p-1 text-xs ${missing(product.store)}`}
            value={product.store || undefined}
            onChange={(e) => updateProductField(index, "store", e.target.value)}
          />
        </div>
      )}

      <div className="flex flex-col">
        <span className="text-xs font-semibold">URLs :</span>
        <input
          className={`border p-1 mb-1 text-xs ${missing(product.url)}`}
          value={product.url}
          onChange={(e) => updateProductField(index, "url", e.target.value)}
        />
        {product.offerUrl !== undefined && product.offerUrl != product.url && (
          <input
            className={`border p-1 text-xs ${missing(product.offerUrl)}`}
            value={product.offerUrl}
            onChange={(e) =>
              updateProductField(index, "offerUrl", e.target.value)
            }
          />
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-semibold">Category :</span>
        <select
          className="border text-xs"
          value={product.metadata?.category || product.category || "general"}
          onChange={(e) =>
            updateProductField(index, "category", e.target.value)
          }
        >
          <option value="general">general</option>
          <option value="beauty">beauty</option>
          <option value="home">home</option>
          <option value="electronics">electronics</option>
        </select>
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-semibold">Tier :</span>
        <select
          className="border text-xs"
          value={product.tier}
          onChange={(e) => updateProductField(index, "tier", e.target.value)}
        >
          <option value="normal">normal</option>
          <option value="rare">rare</option>
          <option value="jackpot">jackpot</option>
        </select>
      </div>
    </div>
  );
};

export default ProductImportRow;
