const TenantPlanAssignedInterface = ({
  selectedPlan,
}: {
  selectedPlan: {
    id: string;
    name: string;
    price: string;
  };
}) => {
  const TENANT_PLANS = {
    tenant: {
      tenantScopedQuota: 10,
      productLimit: 100,
      monthlySpinsLimit: 200000,
    },
    tenantPro: {
      tenantScopedQuota: 20,
      productLimit: 250,
      monthlySpinsLimit: 500000,
    },
    tenantPremium: {
      tenantScopedQuota: 40,
      productLimit: 500,
      monthlySpinsLimit: 1000000,
    },
  };
  const config = TENANT_PLANS[selectedPlan?.id as keyof typeof TENANT_PLANS];
  return (
    <div className="mt-0">
      <div className="mb-1">
        <span className="md:text-sm">Assinatura</span>
      </div>
      <div className="border flex justify-between ">
        <div className="w-full p-2 items-center" key={selectedPlan.id}>
          <div className="flex justify-between">
            <div className="text-xl font-bold">{selectedPlan.name}</div>
            <div className="text-2xl font-bold tracking-wide">
              {selectedPlan.price}
            </div>
          </div>
          <ul>
            <li>Limite de produtos : {config.productLimit}</li>
            <li>Giros por usuário único : {config.tenantScopedQuota}</li>
            <li>Giros globais: {config.monthlySpinsLimit}/mês</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TenantPlanAssignedInterface;
