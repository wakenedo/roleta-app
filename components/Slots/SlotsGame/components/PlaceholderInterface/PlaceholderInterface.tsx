import { ImGift } from "react-icons/im";

interface PlaceholderInterfaceProps {
  loading?: boolean;
}

const PlaceholderInterface: React.FC<PlaceholderInterfaceProps> = ({
  loading = false,
}) => {
  if (loading) {
    return (
      <div className="col-span-3 justify-center text-gray-400 text-center h-[22rem]">
        <div className="grid grid-cols-3 gap-2 ">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-700 animate-pulse rounded-md h-[21rem] w-[8.25rem] flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 bg-gray-600 rounded-full mb-2" />
              <div className="w-20 h-3 bg-gray-600 rounded mb-1" />
              <div className="w-16 h-3 bg-gray-600 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

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
