import { Tenant } from "@/context/TenantContext/types";
import { User } from "firebase/auth";
import { TenantRegisterInterface } from "../TenantHeaderArea/components/TenantRegisterInterface";
import { GoogleRegisterButton } from "@/components/GoogleRegisterButton";

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
  return (
    <>
      <div onClick={toggleRegisterOptionsMenu}>
        <span className="cursor-pointer hover:text-[#84e9e4] transition">
          Registrar
        </span>
      </div>
      {!registerOptionsMenuOpen && (
        <div className="md:w-sm flex flex-col pb-3 pt-3 px-4 bg-slate-950/80 backdrop-blur-md absolute md:mt-10 space-y-1">
          <div className="flex flex-col space-y-2 pb-3 border-l border-[#84e9e4]  bg-gradient-to-br from-[#111827] to-[#1f2937] p-4">
            {user === null && tenant === null && <GoogleRegisterButton />}
          </div>

          <div className="flex flex-col space-y-2 pb-1 border-l border-[#84e9e4] bg-gradient-to-br from-[#111827] to-[#1f2937] p-4">
            {tenant === null && user === null && <TenantRegisterInterface />}
          </div>
        </div>
      )}
    </>
  );
};
export default HeaderRegisterInterface;
