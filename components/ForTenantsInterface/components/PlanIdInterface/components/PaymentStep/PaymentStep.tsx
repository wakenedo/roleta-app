import { useEffect } from "react";
import { TenantRegisteredInterface } from "../TenantCheckoutInterface/TenantRegisteredInterface";
import { PaymentStepProps } from "../../types";

const PaymentStep: React.FC<PaymentStepProps> = ({
  planId,
  name,
  email,
  onPay,
  setStepHeader,
  setSelectedPlan,
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

  const plans = [
    {
      id: "tenant",
      name: "TENANT",
      price: "R$199/mês",
    },
    {
      id: "tenantPro",
      name: "TENANT PRO",
      price: "R$399/mês",
    },
    {
      id: "tenantPremium",
      name: "TENANT PREMIUM",
      price: "R$699/mês",
      highlight: true,
    },
  ];

  const selectedPlan = plans.find((plan) => plan.id === planId);
  const config = TENANT_PLANS[selectedPlan?.id as keyof typeof TENANT_PLANS];

  useEffect(() => {
    setStepHeader({
      stepNumber: 2,
      stepText: "Complete o pagamento para prosseguir",
    });
    if (selectedPlan) {
      setSelectedPlan(selectedPlan);
    }
  }, []);
  return (
    <div className="flex flex-col gap-3 w-full">
      <TenantRegisteredInterface name={name} email={email} />
      <div className="mt-0">
        <div className="mb-1">
          <span className="md:text-sm">Assinatura</span>
        </div>

        {planId && (
          <div className=" border flex justify-between   ">
            {plans.map((plan) => {
              const renderCorrectPlan = plan.id === planId;

              if (renderCorrectPlan) {
                return (
                  <div className="w-full p-2 items-center" key={plan.id}>
                    <div className="flex justify-between">
                      <div className="text-xl font-bold">{plan.name}</div>
                      <div className="text-2xl font-bold tracking-wide">
                        {plan.price}
                      </div>
                    </div>
                    <ul>
                      <li>Limite de produtos : {config.productLimit}</li>
                      <li>
                        Giros por usuário único : {config.tenantScopedQuota}
                      </li>
                      <li>Giros mensais globais: {config.monthlySpinsLimit}</li>
                    </ul>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
      <h3 className="text-xl">Finalize sua assinatura </h3>
      <button onClick={onPay} className="bg-green-500 py-3 rounded-lg">
        Pagar Plano
      </button>
    </div>
  );
};
export default PaymentStep;
