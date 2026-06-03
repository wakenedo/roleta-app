import Image from "next/image";
import { affiliateLogoPicker, formatPriceBRL, tierStyle } from "../../utils";
import { TierBadge } from "../TierBadge";
import { ProductCardProps } from "@/components/Slots/types";
import { FC } from "react";
import { CardImage } from "../CardImage";

const CardContent: FC<ProductCardProps> = ({ product }) => {
  const affiliateLogo = affiliateLogoPicker({ product });
  return (
    <>
      <div className=" p-2">
        <div className="w-full relative z-10 flex flex-col justify-between items-center h-full ">
          {/* IMAGE */}
          <CardImage product={product} />
          <TierBadge product={product} />

          <div className=" flex flex-col items-center  text-center md:px-1 md:pb-1">
            <span
              className={`
            text-sm tracking-wide  font-semibold  w-25 md:w-full h-fit
            text-shadow-2xs line-clamp-2
            ${tierStyle(product).name} ${tierStyle(product).glow}
          `}
            >
              {product.name}
            </span>
            {product.metadata?.store && (
              <>
                <div className="mt-1 md:block hidden md:pb-1 md:px-1">
                  <span className="text-xs text-slate-700 font-semibold tracking-wide line-clamp-1">
                    {product.metadata?.store}
                  </span>
                </div>
              </>
            )}

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
                <span
                  className={`
                text-shadow-2xs  text-sm md:text-base font-bold py-4
                ${tierStyle(product).glow}
                ${tierStyle(product).discountedPrice} 
              `}
                >
                  {formatPriceBRL(product.price)}
                </span>
              </>
            )}

            {product.metadata?.affiliateProvider && (
              <>
                <div className="mt-1 md:block hidden">
                  <Image
                    src={affiliateLogo}
                    alt="store"
                    width={100}
                    height={20}
                  />
                </div>
                <div className="mt-1 md:hidden block">
                  <Image
                    src={affiliateLogo}
                    alt="store"
                    width={80}
                    height={30}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CardContent;
