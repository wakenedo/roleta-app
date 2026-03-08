import { Tenant } from "@/context/TenantContext/types";
import { User } from "firebase/auth";
import { TenantRegisterInterface } from "../TenantHeaderArea/components/TenantRegisterInterface";
import { GoogleButton } from "@/components/GoogleButton";

const HeaderRegisterInterface = ({
  toggleRegisterOptionsMenu,
  registerOptionsMenuOpen,
  tenant,
  user,
}: {
  toggleRegisterOptionsMenu: () => void;
  registerOptionsMenuOpen: boolean;
  tenant: Tenant | null;
  user: User | null;
}) => {
  if (user != null) return null;
  if (tenant != null) return null;
  return (
    <>
      <div onClick={toggleRegisterOptionsMenu}>
        <span className="cursor-pointer hover:text-[#84e9e4] transition">
          Registrar
        </span>
      </div>
      {!registerOptionsMenuOpen && (
        <div className="md:w-sm flex flex-col pb-6 pt-4 px-8 bg-slate-950/80 backdrop-blur-md absolute mt-9 space-y-1">
          <span className="text-[#84e9e4] font-semibold tracking-wide">
            Usuários Promobet
          </span>
          <div className="flex flex-col space-y-2 pb-3 border p-4">
            {user === null && tenant === null && <GoogleButton />}
          </div>
          <span className="text-[#84e9e4] font-semibold tracking-wide">
            Parceiros Promobet
          </span>
          <div className="flex flex-col space-y-2 pb-1 p-4 border">
            {tenant === null && user === null && <TenantRegisterInterface />}
          </div>
        </div>
      )}
    </>
  );
};
export default HeaderRegisterInterface;
