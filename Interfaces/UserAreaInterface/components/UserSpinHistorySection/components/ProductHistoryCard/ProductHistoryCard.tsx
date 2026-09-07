import { SpinHistoryItem } from "@/context/UserContext/types";

import { formatDateTime, formatTenantName } from "@/utils/formatter-utils";
import { HistoryProductItem } from "../HistoryProductItem";

const ProductHistoryCard = ({ spin }: { spin: SpinHistoryItem }) => {
  const date = formatDateTime(spin.createdAt);

  if (!spin) return null;
  const before = spin.quotaBefore;

  const after = spin.quotaAfter;

  const tenantId = spin.tenantId;
  const isTenantPayer = tenantId != null;

  return (
    <div
      key={spin.id}
      className={`flex flex-col ${isTenantPayer ? " border-amber-500" : "border-[#84e9e4]"} border-l-2 bg-slate-600 bg-linear-to-r from-[#84e9e4]/1
       to-purple-500/15 p-3 rounded shadow-md `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-2 items-center cursor-default">
          {isTenantPayer ? (
            <div className="flex space-x-1 p-1 px-2 bg-amber-500 rounded">
              <span className="text-xs font-extrabold text-slate-50 text-shadow-2xs capitalize">
                {formatTenantName(tenantId)}
              </span>
            </div>
          ) : (
            <div className="flex space-x-1 p-1 px-2 bg-[#84e9e4] rounded">
              <span className="text-xs tracking-wider font-extrabold text-slate-50 text-shadow-2xs">
                Catalogo Global
              </span>
            </div>
          )}
          <span className="text-xs font-semibold text-slate-50">{date}</span>
        </div>

        {before !== undefined && after !== undefined && (
          <span className="text-xs text-slate-50 italic cursor-default">
            <>
              {before} → {after}
            </>
          </span>
        )}
      </div>

      {/* Products */}
      <div className="space-y-1 line-clamp-1">
        {spin.products.map((product) => (
          <div
            key={product.name}
            className={`md:text-sm text-xs text-slate-800   rounded-md `}
          >
            <HistoryProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHistoryCard;
