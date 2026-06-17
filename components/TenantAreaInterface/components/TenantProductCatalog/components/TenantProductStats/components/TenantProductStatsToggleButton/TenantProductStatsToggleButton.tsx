import { Dispatch, SetStateAction } from "react";
import { CgClose } from "react-icons/cg";
import { GrStatusInfo } from "react-icons/gr";

const TenantProductStatsToggleButton = ({
  setShowStats,
  showStats,
}: {
  showStats: boolean;
  setShowStats: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setShowStats((prev) => !prev)}
      className={`
              absolute
              bottom-0
              right-0
              z-20
              flex items-center 
              rounded-md
             
              cursor-pointer
              ${showStats ? "bg-red-400 hover:bg-red-600" : "bg-[#00EEFF] hover:bg-amber-500"}
              ease-in-out
              transition-discrete
              drop-shadow
              px-3
              py-2
              shadow-md
            `}
    >
      <div className="flex space-x-2 items-center justify-center cursor-pointer">
        <div className=" text-white item-center text-shadow-2xs">
          {showStats ? (
            <CgClose size={18} className="text-shadow-2xs" />
          ) : (
            <GrStatusInfo size={18} className="text-shadow-2xs" />
          )}
        </div>
      </div>
    </button>
  );
};
export default TenantProductStatsToggleButton;
