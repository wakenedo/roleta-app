import { TenantProduct } from "@/context/TenantContext/types";

const URLRow = ({
  product,
  updateProductField,
  index,
  missing,
}: {
  product: TenantProduct;
  updateProductField: (
    index: number,
    field: keyof TenantProduct,
    value: TenantProduct[keyof TenantProduct],
  ) => void;
  index: number;
  missing: (
    value: TenantProduct[keyof TenantProduct],
  ) => "border-red-400" | "border-gray-300";
}) => {
  return (
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
  );
};
export default URLRow;
