import { TenantProduct } from "@/context/TenantContext/types";

const StoreRow = ({
  updateProductField,
  missing,
  product,
  index,
}: {
  updateProductField: (
    index: number,
    field: keyof TenantProduct,
    value: TenantProduct[keyof TenantProduct],
  ) => void;
  missing: (
    value: TenantProduct[keyof TenantProduct],
  ) => "border-red-400" | "border-gray-300";
  product: TenantProduct;
  index: number;
}) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs font-semibold">Store :</span>

      <input
        className={`border p-1 text-xs ${missing(product.store)}`}
        value={product.store || undefined}
        onChange={(e) => updateProductField(index, "store", e.target.value)}
      />
    </div>
  );
};

export default StoreRow;
