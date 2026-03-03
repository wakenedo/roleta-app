import { Tenant } from "@/context/TenantContext/types";
import { FeaturedTenantCard } from "./components/FeaturedTenantCard";

const FeaturedTenants = ({ featured }: { featured: Tenant[] }) => {
  if (!featured.length) return null;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 px-10 py-7">
        {featured.map((tenant) => (
          <FeaturedTenantCard key={tenant.id} tenant={tenant} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedTenants;
