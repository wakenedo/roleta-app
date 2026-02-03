import Image from "next/image";
import { formatPriceBRL, tierStyle } from "../../utils";
import { TierBadge } from "../TierBadge";
import PlaceholderLogo from "@/public/logoparceiroplaceholder.png";
import { ProductCardProps } from "@/components/Slots/types";
import { FC } from "react";
import { CardImage } from "../CardImage";

const CardContent: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative z-10 flex flex-col items-center h-full p-3">
      {/* IMAGE */}
      <CardImage product={product} />
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
