import { Tenant } from "@/context/TenantContext/types";

import { SetStateAction } from "react";
import { SearchbarPopularTenants } from "./components/SearchbarPopularTenants";
import { PopularTenantList } from "./components/PopularTenantsList";

const PopularTenantSearchInterface = ({
  search,
  setSearch,
  filtered,
  setSelected,
  error,
  loading,
}: {
  search: string;
  setSearch: (value: string) => void;
  filtered: Tenant[];
  setSelected: (value: SetStateAction<Tenant | null>) => void;
  error: string | null;
  loading: boolean;
}) => {
  return (
    <div className="bg-gradient-to-br from-amber-500 to-[#84e9e4] p-2 rounded-sm shadow-inner">
      <SearchbarPopularTenants search={search} setSearch={setSearch} />

      {loading && <div>Loading tenants...</div>}
      {error && <div className="text-red-500">{error}</div>}

      {!loading && filtered.length === 0 && (
        <div className="text-gray-500">Nenhum encontrado.</div>
      )}

      <PopularTenantList filtered={filtered} setSelected={setSelected} />
    </div>
  );
};
export default PopularTenantSearchInterface;
