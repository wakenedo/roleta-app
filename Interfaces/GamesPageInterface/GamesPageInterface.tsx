import { Slots } from "@/components/Slots";
import { GlobalGamePageProps } from "./types";

const GamesPageInterface = ({
  authorizedFetch,
  loading,
  optimisticSpin,
  refresh,
  quota,
  globalQuotaLoading,
}: GlobalGamePageProps) => {
  return (
    <main className="flex flex-col justify-between items-center  min-h-screen relative z-10 pt-4">
      <Slots
        authorizedFetch={authorizedFetch}
        globalQuotaLoading={globalQuotaLoading}
        loading={loading}
        sessionTenantId={null}
        optimisticSpin={optimisticSpin}
        quota={quota}
        refresh={refresh}
      />
    </main>
  );
};
export default GamesPageInterface;
