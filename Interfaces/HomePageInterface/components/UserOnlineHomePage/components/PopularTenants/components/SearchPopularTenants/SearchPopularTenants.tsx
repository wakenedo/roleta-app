import { PopularTenantSearchInterface } from "./components/PopularTenantSearchInterface";
import { SelectedTenantCard } from "./components/SelectedTenantCard";
import { NotSelectedPlaceholder } from "./components/NotSelectedPlaceholder";
import { SearchPopularTenantsInterfaceProps } from "@/Interfaces/HomePageInterface/types";

const SearchPopularTenants = ({
  search,
  setSearch,
  loading,
  error,
  primaryColor,
  selectedPopularTenant,
  setSelectedPopularTenant,
  filtered,
  handleSelectedCardClick,
  resolveTenantQuota,
}: SearchPopularTenantsInterfaceProps) => {
  return (
    <>
      <h3 className="text-center uppercase md:text-5xl font-extrabold tracking-widest p-4 text-[#84e9e4] drop-shadow">
        Os Mais Populares
      </h3>

      <div className="flex gap-6 ">
        {/* LEFT: Search + List */}
        <div className=" w-1/2 p-4">
          <PopularTenantSearchInterface
            error={error}
            filtered={filtered}
            loading={loading}
            search={search}
            setSearch={setSearch}
            setSelected={setSelectedPopularTenant}
          />
        </div>

        {/* RIGHT: Display */}
        <div className=" w-1/2 p-4">
          {selectedPopularTenant ? (
            <SelectedTenantCard
              tenant={selectedPopularTenant}
              primaryColor={primaryColor}
              handleSelectedCardClick={handleSelectedCardClick}
              resolveTenantQuota={resolveTenantQuota}
            />
          ) : (
            <NotSelectedPlaceholder />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPopularTenants;
