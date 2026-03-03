"use client";

import { useState } from "react";
import { Tenant } from "@/context/TenantContext/types";
import { PopularTenantSearchInterface } from "./components/PopularTenantSearchInterface";
import { SelectedTenantCard } from "./components/SelectedTenantCard";
import { NotSelectedPlaceholder } from "./components/NotSelectedPlaceholder";

const SearchPopularTenants = ({
  search,
  setSearch,
  loading,
  error,
  tenants,
}: {
  search: string;
  setSearch: (value: string) => void;
  loading: boolean;
  error: string | null;
  tenants: Tenant[];
}) => {
  const [selected, setSelected] = useState<Tenant | null>(null);

  const filtered = tenants.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.id.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <h3 className="uppercase md:text-5xl font-extrabold tracking-widest p-4 text-amber-500">
        Os Mais Populares
      </h3>

      <div className="flex gap-6">
        {/* LEFT: Search + List */}
        <div className=" w-1/2 p-4">
          <PopularTenantSearchInterface
            error={error}
            filtered={filtered}
            loading={loading}
            search={search}
            setSearch={setSearch}
            setSelected={setSelected}
          />
        </div>

        {/* RIGHT: Display */}
        <div className=" w-1/2 p-4">
          {selected ? (
            <SelectedTenantCard tenant={selected} />
          ) : (
            <NotSelectedPlaceholder />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPopularTenants;
