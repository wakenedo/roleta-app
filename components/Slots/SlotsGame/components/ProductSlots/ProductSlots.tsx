import { Product } from "@/components/Slots/types";
import { PlaceholderInterface } from "../PlaceholderInterface";
import { ProductCard } from "../ProductCard";
import { motion } from "framer-motion";

interface ProductSlotsProps {
  selectedProducts: Product[];
  spinning: boolean;
}

const ProductSlots: React.FC<ProductSlotsProps> = ({
  selectedProducts,
  spinning,
}) => {
  return (
    <motion.div
      className="grid grid-cols-3 gap-2 w-full mb-4"
      animate={{ opacity: spinning ? 0.5 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {selectedProducts.length > 0 ? (
        selectedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      ) : (
        <PlaceholderInterface />
      )}
    </motion.div>
  );
};
export default ProductSlots;
