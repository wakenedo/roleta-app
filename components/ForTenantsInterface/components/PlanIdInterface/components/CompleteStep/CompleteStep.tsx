import { StepHeaderProps } from "@/hooks/useTenantOnboarding";
import { Dispatch, SetStateAction, useEffect } from "react";

const CompleteStep = ({
  name,
  email,
  selectedPlan,
  logoUrl,
  primaryColor,
  setStepHeader,
}: {
  name: string;
  email: string;
  logoUrl: string;
  primaryColor: string;
  selectedPlan: {
    id: string;
    name: string;
    price: string;
  };
  setStepHeader: Dispatch<SetStateAction<StepHeaderProps>>;
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
  useEffect(() => {
    setStepHeader({
      stepNumber: 5,
      stepText:
        "Parabéns ! Agora você é oficialmente um parceiro promobet, começa a divulgar sua experiência!",
    });
  }, []);
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="mt-1">
        <div className="mt-0">
          Parceiro
          <div className="border py-4 px-2">
            <div className="flex space-x-2 items-center">
              <span>Nome:</span>
              <span className="text-lg">{name}</span>
            </div>
            <div className="flex space-x-2 items-center">
              <span>Email:</span>
              <span>{email}</span>
            </div>
          </div>
        </div>
      </div>
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
      <>
        <div>
          <span className="md:text-sm">Branding</span>
        </div>
        <div className="border w-full flex justify-items-start items-center mb-2">
          <div className="border flex p-2 mx-2 my-1">
            <span className="p-2 text-slate-50">
              {logoUrl === "" ? "No Logo" : logoUrl}
            </span>
          </div>

          <div className="flex flex-col items-center  my-2">
            <div className="w-full text-left ml-3 -mt-2">
              <span className="text-slate-100 text-xs text-left">
                Cor primária
              </span>
            </div>
            <div className="border p-2 mx-2 flex">
              <div className="flex space-x-2 items-center">
                <div
                  style={{ backgroundColor: primaryColor }}
                  className="w-6 h-6 border"
                />
                <div>
                  <span>{primaryColor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <div className="border w-full p-2 mb-3">Onboarding completo 🚀</div>
    </div>
  );
};
export default CompleteStep;
