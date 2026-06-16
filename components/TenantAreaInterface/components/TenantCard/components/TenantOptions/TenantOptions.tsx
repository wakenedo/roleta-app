import { TenantAreaSectionBackground } from "../../../TenantAreaSectionBackground";
import { TenantOptionsAnalytics } from "../TenantOptionsAnalytics";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { TenantGeneralInterface } from "../TenantGeneralInterface";
import { TenantOptionsProps } from "@/components/TenantAreaInterface/types";

const TenantOptions = ({
  tenant,
  registeredProductsAmount,
}: TenantOptionsProps) => {
  const { user } = useAuth();
  const tenantEmail = user?.email;
  console.log("TenantOptions user", tenant);
  if (!tenant) return null;

  return (
    <TenantAreaSectionBackground>
      <div className=" flex flex-col ">
        <div className="flex space-x-2 justify-between">
          <TenantGeneralInterface
            tenant={tenant}
            tenantEmail={tenantEmail}
            registeredProductsAmount={registeredProductsAmount}
          />
          <TenantOptionsAnalytics tenant={tenant} />
        </div>
      </div>
    </TenantAreaSectionBackground>
  );
};

export default TenantOptions;
