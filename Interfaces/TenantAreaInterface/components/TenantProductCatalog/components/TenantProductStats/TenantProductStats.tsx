import { ProductsStatsProps } from "@/context/TenantContext/types";
import { StatCard } from "./components/StatCard";
import { DistributionCard } from "./components/DistributionCard";

const TenantProductStats = ({
  stats,
}: {
  stats: ProductsStatsProps | undefined;
}) => {
  if (stats === undefined) return;
  return (
    <div className="flex flex-col -mt-2">
      <div className="grid grid-cols-4 gap-4 pt-1">
        <StatCard title="Carregados" value={stats.total} />
        <StatCard title="Ativos" value={stats.active} />
        <StatCard
          title="Preço Médio"
          value={`R$ ${stats.averagePrice.toFixed(2)}`}
        />
        <StatCard title="Categorias" value={stats.categories.length} />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-3">
        <DistributionCard title="Categorias" data={stats.categories} />

        <DistributionCard title="Tiers" data={stats.tiers} />
      </div>
    </div>
  );
};
export default TenantProductStats;
