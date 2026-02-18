import { Tenant } from "@/context/TenantContext/types";
import { TenantOptions } from "./components/TenantOptions";
import { TenantError } from "../TenantError";
import { TenantOptionsAnalytics } from "./components/TenantOptionsAnalytics";

const TenantCard = ({
  tenant,
  loading,
  error,
}: {
  tenant: Tenant;
  loading: boolean;
  error: string | null;
}) => {
  return (
    <div className="w-full bg-white/90 backdrop-blur rounded-lg shadow-md md:p-4 p-2 space-y-2">
      {error && <TenantError error={error} />}
      {loading && (
        <div className="flex flex-col gap-3 ">
          <hr className="border-t border-slate-300" />
          <div>
            <p>Loading tenant...</p>
          </div>
        </div>
      )}
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
      <TenantOptionsAnalytics />
    </div>
  );
};
export default TenantCard;
