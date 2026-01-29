import { motion } from "framer-motion";
import { ProductCardProps } from "@/components/Slots/types";
import { CardContent } from "./components/CardContent";
import { CardDynamicGradient } from "./components/CardDynamicGradient";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isFiller = product.id === "placeholder";
  const cardContent = (
    <motion.div
      className="
         overflow-hidden
        w-fit md:w-[192px]
        h-[33rem]
        rounded-md
        shadow-md
        transform-gpu
      "
    >
      {/* 🔵 GRADIENT LAYER */}
      <CardDynamicGradient product={product}>
        {/* 🧠 CONTENT LAYER */}
        <CardContent product={product} />
      </CardDynamicGradient>
    </motion.div>
  );

  return isFiller ? (
    cardContent
  ) : (
    <a href={product.url} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  );
};

export default ProductCard;
