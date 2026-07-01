import { FaPowerOff } from "react-icons/fa";
import { HeaderAdvancedSettings } from "../HeaderAdvancedSettings";
import { HeaderSectionGreetingsProps } from "@/Interfaces/TenantAreaInterface/types";

const HeaderGreetingSection = ({
  tenantName,
  handleLogout,
  setActiveModal,
}: HeaderSectionGreetingsProps) => {
  return (
    <div className="flex justify-between items-center px-1 mx-1 py-1 ">
      <div className="flex flex-col ">
        <div>
          <span className="pl-1 text-2xl font-bold tracking-wide text-amber-500">
            {tenantName}
          </span>
        </div>
        <div className="absolute mt-7 pl-2  py-2 text-xs text-slate-600 w-fit ">
          Bem vindo ao painel de controle da sua experiência de parceiro
          Promobet !
        </div>
        <HeaderAdvancedSettings setActiveModal={setActiveModal} />
      </div>
      <div className="mt-2 mr-1 flex flex-col items-center text-red-400 hover:text-red-600 transition cursor-pointer ">
        <FaPowerOff size={18} className="mr-1 w-fit  " onClick={handleLogout} />
        <div>
          <span className="tracking-widest text-center text-xs font-semibold ">
            Sair
          </span>
        </div>
      </div>
    </div>
  );
};
export default HeaderGreetingSection;
