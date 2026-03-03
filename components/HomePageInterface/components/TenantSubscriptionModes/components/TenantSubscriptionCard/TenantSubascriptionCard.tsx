import { TenantSubscriptionButton } from "../TenantSubscriptionButton";

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
      }
    | {
        tenantScopedQuota: number;
        productLimit: number;
      }
    | {
        tenantScopedQuota: number;
        productLimit: number;
      };
  tenantPlan: string | undefined;
}) => {
  const handleSubscribe = (planId: string) => {
    console.log("Upgrade tenant to:", planId);
  };
  const isTenantPlan = plan.id === tenantPlan;
  return (
    <div
      key={plan.id}
      className={`relative  p-8 transition-all duration-300
              ${
                plan.highlight
                  ? "border border-purple-400 shadow-[0_0_45px_rgba(168,85,247,0.4)] scale-105"
                  : "border border-white/10"
              }
              bg-gradient-to-br from-[#111827] to-[#1f2937]`}
    >
      {plan.highlight && (
        <div className="cursor-default absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">
          IDEAL PARA GRANDES MARCAS
        </div>
      )}

      <h3 className="text-2xl font-bold tracking-wide mb-4 text-amber-500 cursor-default">
        {plan.name}
      </h3>

      <div className="cursor-default text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#84e9e4] to-amber-500 hover:opacity-90 bg-clip-text text-transparent">
        {plan.price}
      </div>

      <ul className="space-y-3 text-gray-300 mb-8 cursor-default">
        <li>🎰 {config.tenantScopedQuota} Giros por Usuário</li>
        <li>📦 Até {config.productLimit} Produtos Ativos</li>
        <li>📊 Dashboard Analítico</li>
        <li>🎨 Personalização de Marca</li>
      </ul>

      <TenantSubscriptionButton
        handleSubscribe={handleSubscribe}
        isTenantPlan={isTenantPlan}
        plan={plan}
      />
    </div>
  );
};
export default TenantSubscriptionCard;
