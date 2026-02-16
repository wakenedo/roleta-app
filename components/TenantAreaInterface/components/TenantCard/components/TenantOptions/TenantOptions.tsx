import { Tenant } from "@/context/TenantContext/types";
import { TenantAreaSectionBackground } from "../../../TenantAreaSectionBackground";

const TenantOptions = ({ tenant }: { tenant: Tenant }) => {
  return (
    <TenantAreaSectionBackground>
      <div className="flex justify-between gap-3">
        {tenant && tenant.status}
      </div>
    </TenantAreaSectionBackground>
  );
};
export default TenantOptions;
