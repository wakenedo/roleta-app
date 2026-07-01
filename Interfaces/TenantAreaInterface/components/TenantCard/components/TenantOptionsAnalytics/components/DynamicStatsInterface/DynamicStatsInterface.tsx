import { TenantSectionMarker } from "@/components/TenantSectionMarker";
import { DynamicStatsInterfaceProps } from "@/context/TenantContext/types";

const DynamicStatsInterface = ({
  engagementStats,
  mode = "global",
}: DynamicStatsInterfaceProps) => {
  return (
    <div className="border border-slate-200 bg-slate-200 p-1 mt-2 rounded drop-shadow">
      <div className="border border-slate-50 rounded p-2">
        <div className=" space-y-1 text-slate-600 cursor-default px-1 text-md">
          <div className=" flex justify-between font-semibold tracking-widest">
            <span>Cliques </span> {engagementStats?.clickEvents || "N/A"}
          </div>

          <div className=" flex justify-between font-semibold tracking-widest">
            <span>Produtos Clicados</span>{" "}
            {engagementStats?.clickedProducts || "N/A"}
          </div>

          <div className=" flex justify-between font-semibold tracking-widest">
            <span>Média de Cliques por Produto</span>{" "}
            <span className="text-base">
              {engagementStats?.averageClicksPerProduct || "N/A"}
            </span>
          </div>
        </div>

        {/* Top Categories */}
        <div className="mt-3 ">
          <TenantSectionMarker markerTitle="Top Categorias" />

          {engagementStats?.topCategories?.length ? (
            <ul className="text-sm mt-2 text-slate-600 cursor-default">
              {engagementStats?.topCategories.map((category) => (
                <li
                  key={category.name}
                  className="flex justify-between tracking-widest capitalize text-base items-center"
                >
                  <span>{category.name}</span>
                  <span className="font-semibold">
                    {category.clicks} cliques
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">
              Nenhuma categoria encontrada
            </p>
          )}
        </div>

        {/* Top Products */}
        <div className="mt-3 ">
          <TenantSectionMarker markerTitle="Top Produtos" />

          {engagementStats?.topProducts?.length ? (
            <ul className="text-sm mt-2 text-slate-600 cursor-default">
              {engagementStats?.topProducts
                .slice(0, 5)
                .map((product, index) => (
                  <li
                    key={`${product.url}-${index}`}
                    className="flex justify-between tracking items-center"
                  >
                    <span className="text-xs my-1">{product.name}</span>
                    <span className="tracking-widest text-base capitalize font-semibold">
                      {product.clicks} cliques
                    </span>
                  </li>
                ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">Nenhum produto encontrado</p>
          )}
        </div>

        {/* Affiliate Providers */}
        <div className="mt-3  ">
          <TenantSectionMarker markerTitle="Provedores Afiliados" />

          {engagementStats?.affiliateProviders?.length ? (
            <ul className="text-sm mt-2 text-slate-600 cursor-default">
              {engagementStats?.affiliateProviders.map((provider) => (
                <li
                  key={provider.name}
                  className="flex justify-between capitalize"
                >
                  <span className="tracking-widest text-base">
                    {provider.name}
                  </span>
                  <span className="tracking-widest  text-base font-semibold">
                    {provider.clicks} cliques
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">Nenhum provedor encontrado</p>
          )}
        </div>

        {/* Footer */}
        <div className="mt-3 border-t border-slate-50 pt-2 text-xs text-slate-500">
          Última atualização:{" "}
          {engagementStats?.lastUpdatedAt
            ? new Date(engagementStats.lastUpdatedAt).toLocaleString("pt-BR")
            : "N/A"}
        </div>
      </div>
    </div>
  );
};

export default DynamicStatsInterface;
