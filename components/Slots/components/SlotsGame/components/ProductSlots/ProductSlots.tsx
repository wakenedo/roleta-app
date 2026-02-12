import { ProductSlotsProps } from "@/components/Slots/types";
import { PlaceholderInterface } from "../PlaceholderInterface";
import { ProductCard } from "../ProductCard";
import { motion } from "framer-motion";

const slotVariants = {
  spinning: (i: number) => ({
    rotate: 360,
    filter: "blur(4px)",
    opacity: 0.5,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
    },
  }),
  revealed: (i: number) => ({
    rotate: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.2,
    },
  }),
};

const ProductSlots: React.FC<ProductSlotsProps> = ({
  selectedProducts,
  spinning,
}) => {
  return selectedProducts.length > 0 ? (
    <div className="grid grid-cols-3 gap-1 w-full mb-4 ">
      {selectedProducts.map((product, i) => (
        <motion.div
          key={product.id}
          custom={i}
          variants={slotVariants}
          initial="spinning"
          animate={spinning ? "spinning" : "revealed"}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  ) : (
    <PlaceholderInterface loading={spinning} />
  );
};

export default ProductSlots;
