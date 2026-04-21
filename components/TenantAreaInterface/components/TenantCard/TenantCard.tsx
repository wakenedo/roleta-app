import { TenantOptions } from "./components/TenantOptions";
import { TenantError } from "../TenantError";
import { FC } from "react";
import { TenantCardProps } from "../../types";

const TenantCard: FC<TenantCardProps> = ({
  tenant,
  loading,
  error,
  registeredProductsAmount,
}) => {
  return (
    <div className="w-full bg-white/90 backdrop-blur  shadow-md ">
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
        <div className=" flex flex-col mx-1">
          <TenantOptions
            registeredProductsAmount={registeredProductsAmount}
            tenant={tenant}
          />
        </div>
      )}
    </div>
  );
};
export default TenantCard;
