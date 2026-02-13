import { formatPriceBRL } from "@/components/Slots/components/SlotsGame/components/ProductCard/utils";
import { Product } from "@/components/Slots/types";

export default function HistoryProductItem({ product }: { product: Product }) {
  const tierStyles: Record<string, string> = {
    common: "bg-slate-100 text-slate-700",
    rare: "bg-indigo-100 text-indigo-700",
    jackpot: "bg-amber-100 text-amber-700",
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-md bg-white px-3 py-2">
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

        <span className="text-xs text-slate-500">{product.store}</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 shrink-0">
        {product.discountedPrice ? (
          <div className="flex flex-col w-fit items-center ">
            <span className="md:text-xs text-[10px] line-through font-semibold text-slate-400">
              {formatPriceBRL(product.price)}
            </span>
            <span className="md:text-sm text-xs font-semibold  text-emerald-600">
              {formatPriceBRL(product.discountedPrice)}
            </span>
          </div>
        ) : (
          <div className="flex flex-col w-fit items-center ">
            <span className="text-xs text-emerald-600 font-semibold ">
              {formatPriceBRL(product.price)}
            </span>
          </div>
        )}
        <div className="text-center min-w-15">
          <span
            className={`text-[10px]  px-2 py-0.5 rounded-full font-semibold ${
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
