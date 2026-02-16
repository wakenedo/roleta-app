import { Tenant } from "@/context/TenantContext/types";
import { TenantOptions } from "./components/TenantOptions";

const TenantCard = ({ tenant }: { tenant: Tenant }) => {
  return (
    <div className="w-full bg-white/90 backdrop-blur rounded-lg shadow-md md:p-4 p-2 ">
      {tenant && (
        <div className="flex flex-col gap-3 ">
          <div>
            <span className="text-sm font-semibold text-slate-800 line-clamp-2">
              Bem-vindo, {tenant.name ?? "Tenant"} !
            </span>
          </div>
          <hr className="border-t border-slate-300" />
          <TenantOptions tenant={tenant} />
        </div>
      )}
    </div>
  );
};
export default TenantCard;
