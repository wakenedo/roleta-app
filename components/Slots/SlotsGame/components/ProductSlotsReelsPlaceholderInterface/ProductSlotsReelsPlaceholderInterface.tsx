import { motion } from "framer-motion";
import { ImGift } from "react-icons/im";

const ProductSlotsReelsPlaceholderInterface: React.FC = () => {
  // random delay per mount so columns don’t tilt in sync
  const randomDelay = Math.random() * 12;

  return (
    <div className="justify-center text-slate-700 text-center py-2 w-[6.5rem] md:w-[11rem]">
      <div className="my-1 flex flex-col items-center">
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [-6, 6, -6], // tilt left ↔ right
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            delay: randomDelay, // so each column feels more organic
          }}
        >
          <ImGift size={112} className="text-slate-700" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductSlotsReelsPlaceholderInterface;
