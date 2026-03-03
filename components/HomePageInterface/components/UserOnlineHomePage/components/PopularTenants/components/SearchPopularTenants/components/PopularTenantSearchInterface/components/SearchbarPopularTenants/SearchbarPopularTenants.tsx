const SearchbarPopularTenants = ({
  search,
  setSearch,
}: {
  setSearch: (value: string) => void;
  search: string;
}) => {
  return (
    <div className="mb-2">
      <input
        type="text"
        placeholder="Buscar por nome ou ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" bg-slate-200  px-4 py-4  w-full shadow-lg "
      />
    </div>
  );
};
export default SearchbarPopularTenants;
