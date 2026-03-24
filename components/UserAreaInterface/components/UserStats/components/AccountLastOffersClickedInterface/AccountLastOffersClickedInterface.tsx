import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { BsCompass } from "react-icons/bs";

const AccountLastOffersClickedInterface = () => {
  return (
    <>
      <UserAreaSectionBackground>
        <span className="text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
          Descobertas
        </span>
        <hr className="border-t border-slate-300 mb-4" />
        <div className="flex items-center justify-center">
          <div className="flex  h-65 w-full flex-col items-center justify-center text-slate-500">
            <BsCompass size={45} className="mb-2" />
            <span className="tracking-widest">Ainda nenhuma descoberta !</span>
          </div>
        </div>
      </UserAreaSectionBackground>
    </>
  );
};
export default AccountLastOffersClickedInterface;
