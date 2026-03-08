import { TenantLoginInterface } from "./components/TenantLoginInterface";
import { TenantRegisterInterface } from "./components/TenantRegisterInterface";

const TenantHeaderArea = () => {
  return (
    <div className="flex space-x-4">
      <TenantLoginInterface />
      <TenantRegisterInterface />
    </div>
  );
};
export default TenantHeaderArea;
