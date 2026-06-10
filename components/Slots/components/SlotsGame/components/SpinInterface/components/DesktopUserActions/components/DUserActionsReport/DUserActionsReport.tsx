import { BsExclamationCircle } from "react-icons/bs";

const DUserActionsReport = () => {
  return (
    <div className="cursor-pointer flex flex-col   border border-red-400  space-x-4 bg-white/50 backdrop-blur shadow-md">
      <div className="flex flex-col">
        <div className="cursor-pointer flex flex-col items-center justify-center bg-white/50 backdrop-blur ">
          <div className="flex text-xs tracking-widest items-center ">
            <div className="border-red-400 border-r-2 p-[18px] flex items-center">
              <BsExclamationCircle size={30} className="text-red-400" />
            </div>

            <div className="pl-1 flex items-center">
              <span className="line-clamp-1 text-red-400">
                Algo ofensivo, errado ou quebrado ?
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DUserActionsReport;
