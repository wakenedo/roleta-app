import { motion } from "framer-motion";
import { ImGift } from "react-icons/im";

const ProductSlotsReelsPlaceholderInterface: React.FC = () => {
  // random delay per mount so columns don’t tilt in sync
  const delay = 2;

  return (
    <div className="justify-center text-slate-700 text-center py-2 w-26 md:w-44 mx-2">
      <div className="my-1 flex flex-col items-center">
        <motion.div
          animate={{
            y: [2, -2, 2],
            rotate: [-4, 4, -4], // tilt left ↔ right
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
            delay: delay, // so each column feels more organic
          }}
        >
          <ImGift size={112} className="text-slate-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductSlotsReelsPlaceholderInterface;
