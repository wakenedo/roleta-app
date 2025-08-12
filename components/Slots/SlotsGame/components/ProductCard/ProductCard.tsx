import { ProductCardProps } from "@/components/Slots/types";
import { motion } from "framer-motion";
import { TierBadge } from "./components/TierBadge";
import { formatPriceBRL } from "./utils";
import PlaceholderLogo from "@/public/logoparceiroplaceholder.png";
import Image from "next/image";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      key={product.id}
      className="flex flex-col min-h-[27rem]  items-center bg-slate-800 text-slate-50 rounded-xs shadow-md p-2"
    >
      <a href={product.url} target="_blank" rel="noopener noreferrer">
        <div className="min-h-60 mb-1 shadow-lg bg-slate-500">
          <img
            src={product.image}
            alt={product.name}
            className="min-h-60 object-contain"
          />
        </div>
        <TierBadge product={product} />
        <div className="w-full flex flex-col items-center justify-center text-center px-2 py-1">
          <span className="text-xs font-medium text-slate-100 truncate max-w-[80px] h-5">
            {product.name}
          </span>
          {product.discount != null ? (
            <>
              <span className="text-xs font-bold text-slate-400  line-through">
                {formatPriceBRL(product.price)}
              </span>
              <span className="text-sm font-bold text-green-400 ">
                {formatPriceBRL(product.discountedPrice)}
              </span>
              <span className="text-xs">{product.discount} OFF</span>
            </>
          ) : (
            <>
              <span className="text-sm font-bold text-green-400 ">
                {formatPriceBRL(product.price)}
              </span>
            </>
          )}

          <div className="">
            {product.store && <Image src={PlaceholderLogo} alt="store" />}
          </div>
        </div>
      </a>
    </motion.div>
  );
};
export default ProductCard;
