import { TenantProduct } from "@/context/TenantContext/types";

const TierRow = ({
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
  );
};
export default TierRow;
