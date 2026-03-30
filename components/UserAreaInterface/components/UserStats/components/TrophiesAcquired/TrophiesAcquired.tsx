import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { BsFillTrophyFill } from "react-icons/bs";

const TrophiesAcquired = () => {
  return (
    <div className="cursor-default">
      <UserAreaSectionBackground>
        <span className="text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
          Troféus Conquistados
        </span>
        <hr className="border-t border-slate-300 mb-4" />
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center my-auto h-30 text-slate-500">
            <BsFillTrophyFill size={45} className="mb-2" />
            <span className="tracking-widest">Ainda nenhum troféu !</span>
          </div>
        </div>
      </UserAreaSectionBackground>
    </div>
  );
};
export default TrophiesAcquired;
