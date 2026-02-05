import { BiTrophy } from "react-icons/bi";

const TrophiesAcquired = () => {
  return (
    <>
      <div className="bg-white/90 backdrop-blur rounded-lg shadow-md p-4 w-full">
        <span className="text-sm font-semibold text-slate-800 mb-2 line-clamp-2">
          Troféus Conquistados
        </span>
        <hr className="border-t border-slate-300 mb-4" />
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <BiTrophy size={34} />
            <span>Ainda nenhum troféu !</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default TrophiesAcquired;
