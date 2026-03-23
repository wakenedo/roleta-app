import { UserPlansConfigProps } from "@/components/HomePageInterface/types";

const UserSubscriptionCardPerks = ({ config }: UserPlansConfigProps) => {
  return (
    <ul className="space-y-2 text-gray-300 mb-8 cursor-default">
      <li>
        <div className="flex space-x-1 items-center justify-between border-b align-text-top">
          <div className="pt-2">
            <span className="font-semibold tracking-widest text-slate-300 text-md drop-shadow-2xl">
              Giros por Dia
            </span>
          </div>
          <div className="flex space-x-1 items-center">
            <div className="flex space-x-1 items-center ">
              <span className="text-3xl font-bold tracking-widest text-[#84e9e4]">
                {config.global}
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
      <div>
        <span className="text-xs font-semibold tracking-widest text-slate-500">
          Parceiros
        </span>
        <div className="bg-slate-50/2 px-2 pb-1">
          <li>
            <div className="flex space-x-1 items-center justify-between">
              <div className="pt-2">
                <span className="font-semibold tracking-widest text-slate-300 text-md drop-shadow-2xl">
                  Giros Extras
                </span>
              </div>
              <div className="flex space-x-1 items-center">
                <div className="flex space-x-1 items-center ">
                  <span className="text-2xl font-bold tracking-widest text-[#84e9e4] drop-shadow-2xl">
                    {config.tenantMultiplier > 0
                      ? `${config.tenantMultiplier === 0.5 ? " 10 " : " 30 "}`
                      : "Não incluso"}
                    {""}
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
                <span className="font-semibold tracking-widest text-slate-300 text-md drop-shadow-2xl">
                  Limite de Giros
                </span>
              </div>
              <div className="flex space-x-1 items-center">
                <div className="flex space-x-1 items-center ">
                  <span className="text-2xl font-bold tracking-widest text-[#84e9e4] drop-shadow-2xl">
                    {config.monthlyGlobalTenantsQuota}
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
                <span className="font-semibold tracking-widest text-slate-300 text-xs drop-shadow-2xl">
                  Limite por semana
                </span>
              </div>
              <div className="flex space-x-1 items-center">
                <div className="flex space-x-1 items-center pt-2">
                  <span className="text-sm font-bold tracking-widest text-[#84e9e4] drop-shadow-2xl">
                    {config.weeklyGlobalTenantsQuota}
                  </span>
                </div>
                <div className="pt-1">
                  <span className="text-xs font-semibold tracking-widest text-[#84e9e4]">
                    x
                  </span>
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
    </ul>
  );
};
export default UserSubscriptionCardPerks;
