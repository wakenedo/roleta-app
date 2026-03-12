import { TenantProduct } from "@/context/TenantContext/types";

type Props = {
  product: TenantProduct;
  index: number;
  updateProductField: (
    index: number,
    field: keyof TenantProduct,
    value: TenantProduct[keyof TenantProduct],
  ) => void;
};

const ProductImportRow = ({ product, index, updateProductField }: Props) => {
  const missing = (value: TenantProduct[keyof TenantProduct]) =>
    !value ? "border-red-400" : "border-gray-300";

  return (
    <div className="grid grid-cols-5 gap-2 p-2 border-b">
      <input
        className={`border p-1 text-xs ${missing(product.name)}`}
        value={product.name}
        onChange={(e) => updateProductField(index, "name", e.target.value)}
      />

      <input
        className={`border p-1 text-xs ${missing(product.image)}`}
        value={product.image}
        onChange={(e) => updateProductField(index, "image", e.target.value)}
      />

      <input
        className={`border p-1 text-xs ${missing(product.url)}`}
        value={product.url}
        onChange={(e) => updateProductField(index, "url", e.target.value)}
      />

      <select
        className="border text-xs"
        value={product.tier}
        onChange={(e) => updateProductField(index, "tier", e.target.value)}
      >
        <option value="normal">normal</option>
        <option value="rare">rare</option>
        <option value="jackpot">jackpot</option>
      </select>

      <input
        type="number"
        className="border text-xs"
        value={product.price ?? ""}
        onChange={(e) =>
          updateProductField(index, "price", Number(e.target.value))
        }
      />
    </div>
  );
};

export default ProductImportRow;
