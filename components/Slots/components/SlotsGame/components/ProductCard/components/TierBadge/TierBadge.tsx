import { TierBadgeProps } from "@/components/Slots/types";
import { BadgeDynamicGradient } from "./components/BadgeDynamicGradiet";
import { BadgeContent } from "./components/BadgeContent";
import { tierStyle } from "../../utils";

const TierBadge: React.FC<TierBadgeProps> = ({ product }) => {
  return (
    <div
      className={`
        border-2 overflow-hidden mb-2 rounded-full  w-full text-center mt-2 
        ${tierStyle(product).border}`}
    >
      <BadgeDynamicGradient product={product}>
        <BadgeContent product={product} />
      </BadgeDynamicGradient>
    </div>
  );
};
export default TierBadge;
