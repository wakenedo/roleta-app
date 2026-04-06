import { SpinHistoryItem } from "@/context/UserContext/types";
import { HistoryProductItem } from "../HistoryProductItem";

const ProductHistoryCard = ({ spin }: { spin: SpinHistoryItem }) => {
  const date = new Date(spin.createdAt);

  if (!spin) return null;
  const before = spin.quotaBefore;

  const after = spin.quotaAfter;

  const borderTierStyles: Record<string, string> = {
    common: "border-slate-400 ",
    rare: "border-indigo-300 ",
    jackpot: "border-amber-300",
  };

  const tenantId = spin.tenantId;
  const isTenantPayer = tenantId != null;

  const formatTenantName = (tenantId: string) => {
    return tenantId.split("-")[0];
  };

  return (
    <div key={spin.id} className="  bg-slate-200 p-3  md:mx-2">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-2 items-center cursor-default">
          {isTenantPayer && (
            <div className="flex space-x-1 p-1 bg-slate-600 rounded">
              <span className="text-xs font-extrabold text-slate-300">
                {formatTenantName(tenantId)}
              </span>
            </div>
          )}
          <span className="text-xs font-semibold text-slate-700">
            {date.toLocaleString()}
          </span>
        </div>

        {before !== undefined && after !== undefined && (
          <span className="text-xs text-slate-500 cursor-default">
            <>
              {before} → {after}
            </>
          </span>
        )}
      </div>

      {/* Products */}
      <div className="space-y-1">
        {spin.products.map((product) => (
          <div
            key={product.name}
            className={`md:text-sm text-xs text-slate-800 ${borderTierStyles[product.tier]} border rounded-md `}
          >
            <HistoryProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHistoryCard;
