import UserSubscriptionButton from "../UserSubscriptionButton/UserSubscriptionButton";
import { useRouter } from "next/navigation";

const UserSubscriptionCard = ({
  plan,
  config,
  userPlan,
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
  config: {
    global: number;
    tenantMultiplier: number;
    monthlyGlobalTenantsQuota: number;
    weeklyGlobalTenantsQuota: number;
  };
  userPlan: string | undefined;
}) => {
  const router = useRouter();
  const handleSubscribe = (planId: string) => {
    console.log("Subscribe to:", planId);
    router.push(`/UserSubscriptions?plan=${encodeURIComponent(planId)}`);
  };

  const isUserPlan = plan.id === userPlan;
  if (isUserPlan) return null;
  return (
    <div
      key={plan.id}
      className={`relative  p-8 transition-all duration-300
              ${
                plan.highlight
                  ? "border border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.3)] scale-105"
                  : "border border-white/10"
              }
              bg-gradient-to-br from-[#111827] to-[#1f2937]`}
    >
      {plan.highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full cursor-default">
          MAIS POPULAR
        </div>
      )}

      <h3 className="text-2xl font-bold tracking-wide mb-4 text-amber-500 cursor-default">
        {plan.name}
      </h3>

      <div className="flex space-x-1 items-center cursor-default  mb-6 bg-gradient-to-r from-[#84e9e4] to-amber-500 hover:opacity-90 bg-clip-text text-transparent">
        <div className="text-4xl font-extrabold">{plan.price}</div>
        <div className="text-xl font-bold mt-4">99</div>
      </div>

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
      <UserSubscriptionButton
        handleSubscribe={handleSubscribe}
        isUserPlan={isUserPlan}
        plan={plan}
      />
      <div className="italic pt-4 text-center text-xs text-gray-500 max-w-3xl mx-auto cursor-default">
        Os limites podem ser extendidos através de pacotes vendidos
        separadamente.
      </div>
    </div>
  );
};
export default UserSubscriptionCard;
