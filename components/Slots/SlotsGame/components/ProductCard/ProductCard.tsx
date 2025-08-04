import { Product } from "@/components/Slots/types";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      key={product.id}
      className="flex flex-col items-center bg-white text-black rounded-xs shadow-md p-2"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-60 object-contain mb-1 shadow-lg"
      />
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-center"
      >
        <span className="text-xs">{product.name}</span>
      </a>
    </motion.div>
  );
};
export default ProductCard;
