import { ImGift } from "react-icons/im";

const PlaceholderInterface = () => {
  return (
    <div className="col-span-3 justify-center text-gray-400 text-center py-4 h-72">
      <div className="space-y-3 flex flex-col mt-10 items-center">
        <ImGift size={130} />
        <span className="text-xl">Surpresas te esperam!</span>
      </div>
    </div>
  );
};
export default PlaceholderInterface;
