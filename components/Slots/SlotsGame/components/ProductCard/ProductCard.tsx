import { ProductCardProps } from "@/components/Slots/types";
import { motion } from "framer-motion";
import { TierBadge } from "./components/TierBadge";
import { formatPriceBRL } from "./utils";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      key={product.id}
      className="flex flex-col min-h-[23rem]  items-center bg-slate-50 text-slate-900 rounded-xs shadow-md p-2"
      whileHover={{ scale: 1.05 }}
    >
      <a href={product.url} target="_blank" rel="noopener noreferrer">
        <img
          src={product.image}
          alt={product.name}
          className="h-60 object-contain mb-1 shadow-lg"
        />
        <TierBadge product={product} />
        <div className="w-full flex flex-col items-center justify-center text-center px-2 py-1">
          <span className="text-xs font-medium text-slate-900 truncate max-w-[80px]">
            {product.name}
          </span>
          {product.discount != null ? (
            <>
              <span className="text-xs font-bold text-slate-400 mt-2 line-through">
                {formatPriceBRL(product.price)}
              </span>
              <span className="text-sm font-bold text-green-500 ">
                {formatPriceBRL(product.discountedPrice)}
              </span>
            </>
          ) : (
            <>
              <span className="text-sm font-bold text-green-500 ">
                {formatPriceBRL(product.price)}
              </span>
            </>
          )}

          <span className="text-xs font-medium text-slate-900">
            {product.store}
          </span>
        </div>
      </a>
    </motion.div>
  );
};
export default ProductCard;
