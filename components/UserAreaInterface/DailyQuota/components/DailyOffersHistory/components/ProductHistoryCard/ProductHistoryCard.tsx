import {
  SpinHistoryItem,
  SpinQuota,
  UserState,
} from "@/context/UserContext/types";
import { HistoryProductItem } from "../HistoryProductItem";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useTenant } from "@/context/TenantContext/TenantContext";

const ProductHistoryCard = ({ spin }: { spin: SpinHistoryItem }) => {
  const date = new Date(spin.createdAt);
  const { quota } = useGlobalQuota();
  const { tenantQuota } = useTenant();

  if (!quota) return null;
  const before = (quota as SpinQuota) ?? (quota ? quota.used - 1 : quota);

  const after = (quota as SpinQuota) ?? quota?.used;

  const borderTierStyles: Record<string, string> = {
    common: "border-slate-400 ",
    rare: "border-indigo-300 ",
    jackpot: "border-amber-300",
  };

  return (
    <div className="rounded-md  bg-slate-200 p-3  md:mx-2">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-slate-700">
          {date.toLocaleString()}
        </span>

        {before !== undefined && after !== undefined && (
          <span className="text-xs text-slate-500">
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
            key={product.id}
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
