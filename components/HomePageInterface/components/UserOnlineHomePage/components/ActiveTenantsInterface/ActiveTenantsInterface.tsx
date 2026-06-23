import { ActiveTenantsProps } from "@/components/HomePageInterface/types";
import { PopularTenants } from "../PopularTenants";

const ActiveTenantsInterface = ({
  tenantsLoading,
  popularTenants,
  tenantsError,
  featuredTenant,
  search,
  setSearch,
  selectedPopularTenant,
  setSelectedPopularTenant,
  filtered,
  primaryColor,
  handleSelectedCardClick,
  sorted,
  resolveTenantQuota,
  leaderboardLoading,
}: ActiveTenantsProps) => {
  return (
    <div className="pt-2 space-y-10 pb-10">
      <PopularTenants
        featured={featuredTenant}
        tenants={popularTenants}
        loading={tenantsLoading}
        error={tenantsError}
        search={search}
        setSearch={setSearch}
        selectedPopularTenant={selectedPopularTenant}
        setSelectedPopularTenant={setSelectedPopularTenant}
        filtered={filtered}
        primaryColor={primaryColor}
        handleSelectedCardClick={handleSelectedCardClick}
        sorted={sorted}
        resolveTenantQuota={resolveTenantQuota}
        leaderboardLoading={leaderboardLoading}
      />
    </div>
  );
};

export default ActiveTenantsInterface;
