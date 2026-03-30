import { motion } from "framer-motion";
import { ProductCardProps } from "@/components/Slots/types";
import { CardContent } from "./components/CardContent";
import { CardDynamicGradient } from "./components/CardDynamicGradient";
import { useUser } from "@/context/UserContext/UserContext";

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currentSpinId,
  selectedProducts,
}) => {
  const { clickedProduct } = useUser();
  const isFiller = product.id === "placeholder";
  const cardContent = (
    <motion.div
      className="
         overflow-hidden
        w-full md:w-[192px]
        md:h-[33rem]
        h-[30rem]
        rounded-md
        shadow-md
        transform-gpu
        md:mx-2
      "
    >
      {/* 🔵 GRADIENT LAYER */}
      <CardDynamicGradient product={product}>
        {/* 🧠 CONTENT LAYER */}
        <CardContent
          product={product}
          currentSpinId={null}
          selectedProducts={selectedProducts}
        />
      </CardDynamicGradient>
    </motion.div>
  );

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!currentSpinId) {
      console.warn("Missing spinId");
      window.open(product.url, "_blank");
      return;
    }

    const position = selectedProducts.findIndex((p) => p.url === product.url);

    try {
      await clickedProduct({
        spinId: currentSpinId,
        productUrl: product.url,
        position: position !== -1 ? position : undefined, // safe fallback
      });
    } catch (err) {
      console.error(err);
    }

    window.open(product.url, "_blank", "noopener,noreferrer");
  };

  return isFiller ? (
    cardContent
  ) : (
    <a
      href={product.url}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {cardContent}
    </a>
  );
};

export default ProductCard;
