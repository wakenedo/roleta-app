import { FeaturedTenants } from "./components/FeaturedTenants";
import { SearchPopularTenants } from "./components/SearchPopularTenants";
//import { mockTenants } from "@/___mocks___/tenantsMock/tenants.mock";
import { PopularTenantsProps } from "@/components/HomePageInterface/types";

const PopularTenants = ({
  featured,
  tenants,
  loading,
  error,
  search,
  setSearch,
  selectedPopularTenant,
  setSelectedPopularTenant,
  filtered,
  primaryColor,
  handleSelectedCardClick,
  resolveTenantQuota,
  sorted,
  leaderboardLoading,
}: PopularTenantsProps) => {
  //const mockedTenants = mockTenants;
  const leaderboardTop3 = sorted.slice(0, 3);
  const leaderboardRest = sorted.slice(3);

  console.log("Top 3:", leaderboardTop3);
  console.log("Rest:", leaderboardRest);

  const top3 = tenants.slice(0, 3);
  const rest = tenants.slice(3);

  return (
    <div id="popular-tenants" className="  flex flex-col  md:mx-1 h-fit">
      <div className="mt-4">
        <h2 className="md:text-5xl font-extrabold tracking-widest  text-center text-[#84e9e4] drop-shadow">
          DESTAQUES PROMOBET
        </h2>
      </div>
      <div className=" pt-2  space-y-2 relative md:mx-2   overflow-hidden   h-full">
        {/* Search */}
        {featured && <FeaturedTenants featured={leaderboardTop3} />}
        <SearchPopularTenants
          error={error}
          loading={loading}
          search={search}
          setSearch={setSearch}
          selectedPopularTenant={selectedPopularTenant}
          setSelectedPopularTenant={setSelectedPopularTenant}
          filtered={filtered}
          primaryColor={primaryColor}
          handleSelectedCardClick={handleSelectedCardClick}
          resolveTenantQuota={resolveTenantQuota}
        />
      </div>
    </div>
  );
};
export default PopularTenants;
