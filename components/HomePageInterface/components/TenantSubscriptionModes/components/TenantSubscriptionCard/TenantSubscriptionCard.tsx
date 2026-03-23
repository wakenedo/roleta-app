import { TenantSubscriptionButton } from "../TenantSubscriptionButton";
import { useRouter } from "next/navigation";

const TenantSubscriptionCard = ({
  plan,
  config,
  tenantPlan,
}: {
  plan:
    | {
        id: string;
        name: string;
        price: string;
        highlight?: undefined;
      }
    | {
        id: string;
        name: string;
        price: string;
        highlight: boolean;
      };
  config:
    | {
        tenantScopedQuota: number;
        productLimit: number;
        monthlySpinsLimit: number;
      }
    | {
        tenantScopedQuota: number;
        productLimit: number;
        monthlySpinsLimit: number;
      }
    | {
        tenantScopedQuota: number;
        productLimit: number;
        monthlySpinsLimit: number;
      };
  tenantPlan: string | undefined;
}) => {
  const router = useRouter();
  const handleSubscribe = (planId: string) => {
    router.push(`/ForTenants?plan=${planId}`);
    console.log("Upgrade tenant to:", planId);
  };
  const isTenantPlan = plan.id === tenantPlan;

  if (isTenantPlan) return null;

  return (
    <div
      key={plan.id}
      className={`relative  py-8 px-6 transition-all duration-300
              ${
                plan.highlight
                  ? "border border-yellow-400 shadow-[0_0_45px_rgba(168,85,247,0.4)] scale-105"
                  : "border border-white/10"
              }
              bg-gradient-to-br from-[#111827] to-[#1f2937]`}
    >
      {plan.highlight && (
        <div className="cursor-default absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-800 text-xs font-bold tracking-widest px-6 text-center py-1 line-clamp-2 rounded-full">
          IDEAL PARA GRANDES MARCAS
        </div>
      )}

      <h3 className="text-2xl font-bold tracking-wide mb-4 text-amber-500 cursor-default">
        {plan.name}
      </h3>

      <div className="flex space-x-1 items-center cursor-default  mb-6 bg-gradient-to-r from-[#84e9e4] to-amber-500 hover:opacity-90 bg-clip-text text-transparent">
        <div className="text-4xl font-extrabold">{plan.price}</div>
        <div className="text-xl font-bold mt-4">99</div>
      </div>

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

      <TenantSubscriptionButton
        handleSubscribe={handleSubscribe}
        isTenantPlan={isTenantPlan}
        plan={plan}
      />
      <div className="italic pt-4 text-center text-xs text-gray-500 max-w-3xl mx-auto cursor-default">
        Os limites podem ser extendidos através de pacotes vendidos
        separadamente.
      </div>
    </div>
  );
};
export default TenantSubscriptionCard;
