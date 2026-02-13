import { Product } from "@/components/Slots/types";
import { BiCrown } from "react-icons/bi";

const CardImage = ({ product }: { product: Product }) => {
  return (
    <div className="z-10 h-54 md:h-64 mb-2 md:w-full w-23 shadow-lg flex items-center justify-center bg-slate-700 backdrop-blur-sm">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="object-contain max-h-full "
        />
      ) : (
        <BiCrown size={64} className="text-yellow-400" />
      )}
    </div>
  );
};
export default CardImage;
