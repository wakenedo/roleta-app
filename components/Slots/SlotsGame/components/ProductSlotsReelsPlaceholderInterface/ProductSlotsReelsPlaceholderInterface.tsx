import { ImGift } from "react-icons/im";

const ProductSlotsReelsPlaceholderInterface: React.FC = ({}) => {
  return (
    <div className="justify-center text-slate-700 text-center py-4 h-72">
      <div className="space-y-3 flex flex-col mt-10 items-center">
        <ImGift size={65} />
        <span className="md:text-xl  font-semibold">Surpresas te esperam!</span>
      </div>
    </div>
  );
};

export default ProductSlotsReelsPlaceholderInterface;
