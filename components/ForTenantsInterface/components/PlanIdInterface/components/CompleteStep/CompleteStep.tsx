import { StepHeaderProps } from "@/hooks/useTenantOnboarding";
import { Dispatch, SetStateAction, useEffect } from "react";
import { TenantRegisteredInterface } from "../TenantCheckoutInterface/TenantRegisteredInterface";
import { TenantPlanAssignedInterface } from "../TenantCheckoutInterface/TenantPlanAssignedInterface";
import { TenantBrandingAssignedInterface } from "../TenantCheckoutInterface/TenantBrandingAssignedInterface";
import { TenantProduct } from "@/context/TenantContext/types";
import { TenantProductsCatalogInterface } from "../TenantCheckoutInterface/TenantProductsCatalogInterface";

const CompleteStep = ({
  name,
  email,
  logoUrl,
  primaryColor,
  selectedPlan,
  products,
  loading,
  error,
  setStepHeader,
  resolveComplete,
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
  products: TenantProduct[];
  loading: boolean;
  error: string | null;
  setStepHeader: Dispatch<SetStateAction<StepHeaderProps>>;
  resolveComplete: () => Promise<void>;
}) => {
  useEffect(() => {
    setStepHeader({
      stepNumber: 5,
      stepText:
        "Parabéns ! Agora você é oficialmente um parceiro promobet, começa a divulgar sua experiência!",
    });
    resolveComplete();
  }, []);
  return (
    <div className="flex flex-col gap-1 w-full">
      <TenantRegisteredInterface name={name} email={email} />
      <TenantPlanAssignedInterface selectedPlan={selectedPlan} />
      <TenantBrandingAssignedInterface
        logoUrl={logoUrl}
        primaryColor={primaryColor}
      />
      <TenantProductsCatalogInterface
        products={products}
        loading={loading}
        error={error}
      />
      <div className="border w-full p-2 mb-3 text-center">
        Onboarding completo 🚀
      </div>
    </div>
  );
};
export default CompleteStep;
