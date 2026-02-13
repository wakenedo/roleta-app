import { Product } from "@/components/Slots/types";
import { CiStar } from "react-icons/ci";
import { ImGift } from "react-icons/im";
import { TbConfetti } from "react-icons/tb";
import { tierStyle } from "../../../../utils";

const BadgeContent = ({ product }: { product: Product }) => {
  return (
    <div
      className={`relative z-10 text-md p-2 font-bold  ${tierStyle(product).name}`}
    >
      {product.tier === "jackpot" ? (
        <div className="flex justify-center space-x-1">
          <TbConfetti size={21} className="hidden md:block " />
          <span
            className={`${tierStyle(product).glow} text-shadow-2xs text-xs`}
          >
            Jackpot !
          </span>
        </div>
      ) : product.tier === "rare" ? (
        <div className="flex justify-center space-x-1">
          <CiStar size={21} className="hidden md:block " />
          <span
            className={`${tierStyle(product).glow} text-shadow-2xs text-xs`}
          >
            Raro
          </span>
        </div>
      ) : (
        <div className="flex justify-center space-x-1">
          <ImGift size={18} className="hidden md:block" />
          <span
            className={`${tierStyle(product).glow} text-shadow-2xs text-xs`}
          >
            Comun
          </span>
        </div>
      )}
    </div>
  );
};
export default BadgeContent;
