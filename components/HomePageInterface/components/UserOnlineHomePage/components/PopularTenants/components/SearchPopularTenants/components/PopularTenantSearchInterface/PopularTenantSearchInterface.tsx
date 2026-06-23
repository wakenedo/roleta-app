import { SearchbarPopularTenants } from "./components/SearchbarPopularTenants";
import { PopularTenantList } from "./components/PopularTenantsList";
import { LoadingTenantList } from "./components/LoadingTenantsList";
import { ErrorTenantList } from "./components/ErrorTenantList";
import { NoTenantList } from "./components/NoTenantsList";
import { PopularTenantSearchInterfaceProps } from "@/components/HomePageInterface/types";

const PopularTenantSearchInterface = ({
  search,
  setSearch,
  filtered,
  setSelected,
  error,
  loading,
}: PopularTenantSearchInterfaceProps) => {
  return (
    <div className="bg-gradient-to-br from-amber-300 to-[#84e9e4] p-2 shadow-inner drop-shadow-xl md:min-h-200">
      <SearchbarPopularTenants search={search} setSearch={setSearch} />
      {loading && <LoadingTenantList />}
      {error && <ErrorTenantList error={error} />}
      {!loading && filtered.length === 0 && <NoTenantList />}
      <PopularTenantList filtered={filtered} setSelected={setSelected} />
    </div>
  );
};
export default PopularTenantSearchInterface;
