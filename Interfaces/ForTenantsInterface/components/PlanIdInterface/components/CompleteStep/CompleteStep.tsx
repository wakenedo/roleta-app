import { useEffect } from "react";
import { TenantRegisteredInterface } from "../TenantCheckoutInterface/TenantRegisteredInterface";
import { TenantPlanAssignedInterface } from "../TenantCheckoutInterface/TenantPlanAssignedInterface";
import { TenantBrandingAssignedInterface } from "../TenantCheckoutInterface/TenantBrandingAssignedInterface";
import { TenantProductsCatalogInterface } from "../TenantCheckoutInterface/TenantProductsCatalogInterface";
import { CompleteStepProps } from "../../types";

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
}: CompleteStepProps) => {
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
