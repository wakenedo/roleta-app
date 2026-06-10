import { BsExclamationCircle } from "react-icons/bs";

const UserActionsReport = () => {
  return (
    <div className="cursor-pointer flex flex-col   border border-red-400  space-x-4 bg-white/50 backdrop-blur shadow-md">
      <div>
        <div className="bg-red-400  text-center  flex items-center justify-center">
          <span className="text-slate-50 px-2 py-1  text-xs tracking-widest">
            Algo ofensivo, errado ou quebrado ?
          </span>
        </div>
        <div className="flex flex-col text-xs tracking-widest items-center ">
          <div className="pb-1 px-4 flex flex-col mt-1  items-center ">
            <BsExclamationCircle size={18} className="text-red-400" />
            <div>
              <span className="line-clamp-1 text-red-400">Clique Aqui</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserActionsReport;
