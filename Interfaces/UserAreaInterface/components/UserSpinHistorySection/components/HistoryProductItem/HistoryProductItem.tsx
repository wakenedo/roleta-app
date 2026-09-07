import { Product } from "@/components/Slots/types";
import { formatPriceBRL } from "@/utils/formatter-utils";

function HistoryProductItem({ product }: { product: Product }) {
  const tierStyles: Record<string, string> = {
    common: "bg-slate-100 text-slate-700",
    rare: "bg-linear-to-r from-indigo-400/1 to-indigo-300/15 bg-indigo-50 text-indigo-700",
    jackpot:
      "bg-linear-to-r from-amber-200/1 to-amber-500/15 bg-amber-100 text-amber-700",
  };
  const tierBgStyles: Record<string, string> = {
    common:
      "bg-linear-to-r from-slate-700/1 to-slate-500/15  bg-slate-700 text-slate-100",
    rare: "bg-linear-to-r from-indigo-500/1 to-indigo-300/15  bg-indigo-200 text-indigo-700",
    jackpot:
      "bg-linear-to-r from-amber-500/1 to-amber-300/15 bg-amber-200 text-amber-700",
  };

  return (
    <div
      key={product.id}
      className={`flex items-center justify-between gap-3 rounded-md 
        ${tierBgStyles[product.tier] ?? "bg-slate-100 text-slate-700"} px-3 py-2`}
    >
      {/* Left */}
      <div className="flex flex-col min-w-0">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-slate-600 hover:underline truncate"
        >
          {product.name}
        </a>

        <span className="text-xs text-slate-500 cursor-default">
          {product.store}
        </span>
        {product.metadata && (
          <span className="text-xs text-slate-500 cursor-default capitalize">
            {product.metadata.affiliateProvider} - {product.metadata.store}
          </span>
        )}
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 shrink-0 cursor-default">
        {product.discountedPrice ? (
          <div className="flex flex-col w-fit items-center  ">
            <span className="md:text-sm text-xs font-semibold  text-emerald-600">
              {formatPriceBRL(product.discountedPrice)}
            </span>
            <span className="md:text-xs text-[10px] line-through font-semibold text-slate-400">
              {formatPriceBRL(product.price)}
            </span>
          </div>
        ) : (
          <div className="flex flex-col w-fit items-center ">
            <span className="md:text-sm text-xs text-emerald-600 font-semibold ">
              {formatPriceBRL(product.price)}
            </span>
          </div>
        )}
        <div className="text-center min-w-15">
          <span
            className={`text-[10px] shadow-md  px-2 py-1 capitalize rounded-full font-semibold ${
              tierStyles[product.tier] ?? "bg-slate-100 text-slate-700 "
            }`}
          >
            {product.tier}
          </span>
        </div>
      </div>
    </div>
  );
}
export default HistoryProductItem;
