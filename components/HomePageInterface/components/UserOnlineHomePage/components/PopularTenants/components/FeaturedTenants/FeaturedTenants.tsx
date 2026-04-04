import { Tenant } from "@/context/TenantContext/types";
import { FeaturedTenantCard } from "./components/FeaturedTenantCard";
import { getMedal } from "../../utils";

const FeaturedTenants = ({ featured }: { featured: Tenant[] }) => {
  if (!featured.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-15 px-10 py-10">
      {featured.map((tenant, index) => (
        <div key={tenant.id} className="relative">
          <span className="z-99 absolute top-2 left-2 text-2xl">
            {getMedal(index)}
          </span>

          <FeaturedTenantCard key={tenant.id} tenant={tenant} />
        </div>
      ))}
    </div>
  );
};
export default FeaturedTenants;
