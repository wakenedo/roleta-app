import { TenantPlansConfigProps } from "@/components/HomePageInterface/types";

const TenantSubscriptionCardPerks = ({ config }: TenantPlansConfigProps) => {
  return (
    <ul className=" text-gray-300 mb-8 cursor-default">
      <li>
        <div className="flex space-x-1 items-center justify-between border-b align-text-top">
          <div className="pt-2">
            <span className="font-semibold tracking-widest text-slate-300 text-md drop-shadow-2xl">
              Produtos
            </span>
          </div>
          <div className="flex space-x-2">
            <div className="pt-2 tracking-widest font-semibold text-[#84e9e4]">
              <span>Max</span>
            </div>
            <span className="text-2xl font-bold tracking-widest text-[#84e9e4]">
              {config.productLimit}
            </span>
          </div>
        </div>
      </li>
      <div className="pt-2">
        <span className="text-xs font-semibold tracking-widest text-slate-500">
          Limites
        </span>
        <div className="bg-slate-50/2 px-2 pb-1">
          <li>
            <div className="flex space-x-1 items-center justify-between">
              <div className="pt-2">
                <span className="font-semibold tracking-widest text-slate-300 text-md drop-shadow-2xl">
                  Giros Totais
                </span>
              </div>
              <div className="flex space-x-1 items-center">
                <div className="flex space-x-1 items-center ">
                  <span className="text-2xl font-bold tracking-widest text-[#84e9e4] drop-shadow-2xl">
                    {config.monthlySpinsLimit}
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-xs font-semibold tracking-widest text-[#84e9e4]">
                    x
                  </span>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="flex space-x-1 items-center justify-between">
              <div className="pt-2">
                <span className="font-semibold text-md tracking-widest text-slate-300 drop-shadow-2xl">
                  Giros por Usuário
                </span>
              </div>
              <div className="flex space-x-1 items-center ">
                <div className="flex space-x-1 items-center ">
                  <span className="text-2xl font-bold tracking-widest text-[#84e9e4] drop-shadow-2xl">
                    {config.tenantScopedQuota}
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-xs font-semibold tracking-widest text-[#84e9e4]">
                    x
                  </span>
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>

      <div className="mt-4">
        <li>
          <span className="text-sm tracking-widest text-[#84e9e4]">
            Dashboard Analítico
          </span>
        </li>
        <li>
          <span className="text-sm tracking-widest text-[#84e9e4]">
            Personalização de Marca
          </span>
        </li>
      </div>
    </ul>
  );
};
export default TenantSubscriptionCardPerks;
