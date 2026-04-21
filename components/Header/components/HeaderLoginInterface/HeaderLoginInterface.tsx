import { GoogleButton } from "@/components/GoogleButton";
import { Tenant } from "@/context/TenantContext/types";
import { User } from "firebase/auth";
import { TenantLoginInterface } from "../TenantHeaderArea/components/TenantLoginInterface";

const HeaderLoginInterface = ({
  toggleLoginOptionsMenu,
  loginOptionsMenuOpen,
  tenant,
  user,
}: {
  toggleLoginOptionsMenu: () => void;
  loginOptionsMenuOpen: boolean;
  tenant: Tenant | null;
  user: User | null;
}) => {
  if (user != null) return null;
  console.log("Header Login Interface", user);
  return (
    <>
      <div onClick={toggleLoginOptionsMenu}>
        <span className="cursor-pointer hover:text-[#84e9e4] transition">
          Entrar
        </span>
      </div>
      {loginOptionsMenuOpen && (
        <div className="md:w-sm flex flex-col pb-3 pt-3 px-4 bg-slate-950/80 backdrop-blur-md absolute md:mt-10 space-y-1">
          <div className="flex flex-col space-y-2 pb-3 border-l border-[#84e9e4] bg-gradient-to-br from-[#111827] to-[#1f2937] p-4">
            {user === null && tenant === null && <GoogleButton />}
          </div>
          <div className="flex flex-col space-y-2 pb-1 p-4 border-l border-[#84e9e4] bg-gradient-to-br from-[#111827] to-[#1f2937]">
            {tenant === null && user === null && <TenantLoginInterface />}
          </div>
        </div>
      )}
    </>
  );
};
export default HeaderLoginInterface;
