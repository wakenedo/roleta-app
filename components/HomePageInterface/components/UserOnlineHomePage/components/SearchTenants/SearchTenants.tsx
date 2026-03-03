import { Tenant } from "@/context/TenantContext/types";
import { TenantCard } from "../TenantCard";

const SearchTenants = ({
  filtered,
  loading,
  error,
  search,
  setSearch,
}: {
  filtered: Tenant[];
  loading: boolean;
  error: string | null;
  search: string;
  setSearch: (value: string) => void;
}) => {
  return (
    <div
      id="search-tenants"
      className="   flex flex-col border-black md:mx-6   h-220"
    >
      <div className="mb-4">
        <h2 className="text-5xl font-extrabold tracking-widest text-[#84e9e4] drop-shadow">
          PROCURE POR PARCEIROS
        </h2>
      </div>
      <div className="  border p-2 bg-white  h-full">
        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search tenants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded w-full md:w-96"
          />
        </div>

        {loading && <div>Loading tenants...</div>}
        {error && <div className="text-red-500">{error}</div>}

        {!loading && filtered.length === 0 && (
          <div className="text-gray-500">No tenants found.</div>
        )}

        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((tenant) => (
            <TenantCard key={tenant.id} tenant={tenant} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchTenants;
