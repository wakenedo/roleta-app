import { FeaturedTenants } from "./components/FeaturedTenants";
import { SearchPopularTenants } from "./components/SearchPopularTenants";
//import { mockTenants } from "@/___mocks___/tenantsMock/tenants.mock";
import { useSeasonLeaderboard } from "@/hooks/useSeasonLeaderboard";
import { PopularTenantsProps } from "@/components/HomePageInterface/types";
import { mergeTenantsWithLeaderboard } from "./utils";

const PopularTenants = ({
  featured,
  tenants,
  loading,
  error,
  search,
  setSearch,
}: PopularTenantsProps) => {
  const { data, leaderboardLoading } = useSeasonLeaderboard(50);

  const mergedTenants = mergeTenantsWithLeaderboard(tenants, data);

  const sorted = mergedTenants.sort(
    (a, b) => (b.ranking?.score ?? 0) - (a.ranking?.score ?? 0),
  );
  //const mockedTenants = mockTenants;
  const leaderboardTop3 = sorted.slice(0, 3);
  const leaderboardRest = sorted.slice(3);

  console.log("Leaderboard Data:", data);
  console.log("Top 3:", leaderboardTop3);
  console.log("Rest:", leaderboardRest);
  console.log("Loading:", leaderboardLoading);
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
          tenants={rest}
        />
      </div>
    </div>
  );
};
export default PopularTenants;
