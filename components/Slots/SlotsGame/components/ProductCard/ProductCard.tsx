import { ProductCardProps } from "@/components/Slots/types";
import { motion } from "framer-motion";
import { TierBadge } from "./components/TierBadge";
import { formatPriceBRL } from "./utils";
import PlaceholderLogo from "@/public/logoparceiroplaceholder.png";
import Image from "next/image";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isFiller = product.id === "placeholder";

  const cardContent = (
    <motion.div
      key={product.id}
      className="flex flex-col min-h-[33rem] min-w-[11rem] mb-2 items-center bg-slate-800 text-slate-50  
                 rounded-md shadow-md p-3 mx-2" // ⬅ added mx-2 for spacing between cards
    >
      {/* product image */}
      <div className="min-h-64 mb-2 shadow-lg bg-slate-500 w-full flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="object-contain"
          />
        ) : (
          <span className="text-slate-300">???</span>
        )}
      </div>

      {/* tier badge */}
      <TierBadge product={product} />

      {/* text + pricing */}
      <div className="w-full flex flex-col items-center justify-center text-center px-2 py-1">
        <span className="text-xs font-medium text-slate-100 truncate max-w-[135px] h-5">
          {product.name}
        </span>

        {product.discount ? (
          <>
            <span className="text-xs font-bold text-slate-400 line-through">
              {formatPriceBRL(product.price)}
            </span>
            <span className="text-md font-bold text-green-400">
              {formatPriceBRL(product.discountedPrice)}
            </span>
            <span className="text-xs">{product.discount} OFF</span>
          </>
        ) : (
          <>
            <span className="text-xs font-bold text-slate-400 uppercase">
              °
            </span>
            <span className="text-md font-bold text-green-400">
              {formatPriceBRL(product.price)}
            </span>
            <span className="text-xs uppercase text-slate-400">°</span>
          </>
        )}

        {product.store && (
          <div className="mt-1">
            <Image src={PlaceholderLogo} alt="store" width={120} height={40} />
          </div>
        )}
      </div>
    </motion.div>
  );

  // only wrap with <a> if product is real (not filler)
  return isFiller ? (
    cardContent
  ) : (
    <a href={product.url} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  );
};

export default ProductCard;
