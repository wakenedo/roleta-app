import { TenantProduct } from "@/context/TenantContext/types";

const CategoryRow = ({
  product,
  updateProductField,
  index,
}: {
  product: TenantProduct;
  updateProductField: (
    index: number,
    field: keyof TenantProduct,
    value: TenantProduct[keyof TenantProduct],
  ) => void;
  index: number;
}) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs font-semibold">Category :</span>
      <select
        className="border text-xs"
        value={product.metadata?.category || product.category || "general"}
        onChange={(e) => updateProductField(index, "category", e.target.value)}
      >
        <option value="general">general</option>
        <option value="beauty">beauty</option>
        <option value="home">home</option>
        <option value="electronics">electronics</option>
      </select>
    </div>
  );
};
export default CategoryRow;
