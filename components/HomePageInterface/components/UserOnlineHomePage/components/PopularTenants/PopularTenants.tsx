import { Tenant } from "@/context/TenantContext/types";
import { FeaturedTenants } from "./components/FeaturedTenants";
import { SearchPopularTenants } from "./components/SearchPopularTenants";
import { mockTenants } from "@/___mocks___/tenantsMock/tenants.mock";

const PopularTenants = ({
  featured,
  tenants,
  loading,
  error,
  search,
  setSearch,
}: {
  featured: Tenant | null;
  tenants: Tenant[];
  loading: boolean;
  error: string | null;
  search: string;
  setSearch: (value: string) => void;
}) => {
  const mockedTenants = mockTenants;
  const mockedTop3 = mockedTenants.slice(0, 3);
  const mockedRest = mockedTenants.slice(3);
  const top3 = tenants.slice(0, 3);
  const rest = tenants.slice(3);

  return (
    <div id="popular-tenants" className="  flex flex-col  md:mx-1 h-fit">
      <div className="mt-6">
        <h2 className="md:text-5xl font-extrabold tracking-widest  text-center text-[#84e9e4] drop-shadow">
          DESTAQUES PROMOBET
        </h2>
      </div>
      <div className=" pt-2  space-y-4 relative md:mx-2   overflow-hidden   h-full">
        {/* Search */}
        {featured && <FeaturedTenants featured={top3} />}
        <SearchPopularTenants
          error={error}
          loading={loading}
          search={search}
          setSearch={setSearch}
          tenants={rest}
        />
      </div>
    </div>
  );
};
export default PopularTenants;
