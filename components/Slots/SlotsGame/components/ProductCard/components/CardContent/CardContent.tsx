import Image from "next/image";
import { formatPriceBRL, tierStyle } from "../../utils";
import { TierBadge } from "../TierBadge";
import PlaceholderLogo from "@/public/logoparceiroplaceholder.png";
import { ProductCardProps } from "@/components/Slots/types";
import { FC } from "react";

const CardContent: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative z-10 flex flex-col items-center h-full p-3">
      {/* IMAGE */}
      <div className="z-10 h-54 md:h-64 mb-2 w-full shadow-lg flex items-center justify-center bg-slate-700 backdrop-blur-sm">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="object-contain max-h-full"
          />
        ) : (
          <span className="text-slate-300">???</span>
        )}
      </div>

      <TierBadge product={product} />

      <div className="w-full flex flex-col items-center text-center px-2 py-1">
        <span
          className={`
            text-xs  font-semibold truncate w-full h-5
            text-shadow-2xs
            ${tierStyle(product).name} ${tierStyle(product).glow}
          `}
        >
          {product.name}
        </span>

        {product.discount ? (
          <>
            <span
              className={`text-xs ${tierStyle(product).fullPrice} line-through`}
            >
              {formatPriceBRL(product.price)}
            </span>
            <span
              className={`
                text-shadow-2xs  text-sm md:text-base font-bold
                ${tierStyle(product).glow}
                ${tierStyle(product).discountedPrice} 
              `}
            >
              {formatPriceBRL(product.discountedPrice)}
            </span>
            <span
              className={`text-xs md:text-sm font-semibold ${tierStyle(product).fullPrice}`}
            >
              {product.discount} OFF
            </span>
          </>
        ) : (
          <>
            <span className="text-xs text-slate-400">°</span>
            <span
              className={`
                text-shadow-2xs  text-sm md:text-base font-bold
                ${tierStyle(product).glow}
                ${tierStyle(product).discountedPrice} 
              `}
            >
              {formatPriceBRL(product.price)}
            </span>
            <span className="text-xs text-slate-400">°</span>
          </>
        )}

        {product.store && (
          <div className="mt-1">
            <Image src={PlaceholderLogo} alt="store" width={120} height={40} />
          </div>
        )}
      </div>
    </div>
  );
};
export default CardContent;
