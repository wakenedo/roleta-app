import { TenantOptions } from "./components/TenantOptions";
import { TenantError } from "../TenantError";
import { TenantOptionsAnalytics } from "./components/TenantOptionsAnalytics";
import { FC } from "react";
import { TenantCardProps } from "../../types";

const TenantCard: FC<TenantCardProps> = ({
  tenant,
  loading,
  error,
  tenantQuota,
}) => {
  const quota = tenantQuota?.quota;
  if (quota === undefined || quota === null) return null;
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
          <TenantOptions tenant={tenant} quota={quota} />
        </div>
      )}
      <TenantOptionsAnalytics />
    </div>
  );
};
export default TenantCard;
