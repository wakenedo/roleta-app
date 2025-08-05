import { Product } from "@/components/Slots/types";
import { ImGift } from "react-icons/im";
import { CiStar } from "react-icons/ci";
import { TbConfetti } from "react-icons/tb";

interface TierBadgeProps {
  product: Product;
}
const TierBadge: React.FC<TierBadgeProps> = ({ product }) => {
  return (
    <div
      className={`border rounded-full p-1 w-full text-center mt-2 ${
        product.tier === "jackpot"
          ? "border-yellow-500"
          : product.tier === "rare"
          ? "border-blue-500"
          : "border-gray-500"
      }`}
    >
      <span
        className={`text-xs font-bold ${
          product.tier === "jackpot"
            ? "text-yellow-500"
            : product.tier === "rare"
            ? "text-blue-500"
            : "text-gray-500"
        }`}
      >
        {product.tier === "jackpot" ? (
          <div className="flex items-center justify-center space-x-1">
            <TbConfetti size={18} />
            <span className="text-xs">Jackpot!</span>
          </div>
        ) : product.tier === "rare" ? (
          <div className="flex items-center justify-center space-x-1">
            <CiStar size={18} />
            <span className="text-xs">Raro</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-1">
            <ImGift size={18} />
            <span className="text-xs">Comun</span>
          </div>
        )}
      </span>
    </div>
  );
};
export default TierBadge;
