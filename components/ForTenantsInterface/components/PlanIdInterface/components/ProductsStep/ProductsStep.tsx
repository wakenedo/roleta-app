import { TenantProduct } from "@/context/TenantContext/types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { TenantRegisteredInterface } from "../TenantCheckoutInterface/TenantRegisteredInterface";
import { TenantPlanAssignedInterface } from "../TenantCheckoutInterface/TenantPlanAssignedInterface";
import { TenantBrandingAssignedInterface } from "../TenantCheckoutInterface/TenantBrandingAssignedInterface";
import { StepHeaderProps } from "@/hooks/useTenantOnboarding";
import { AddProductsContent } from "./components/AddProductsContent";

const ProductsStep = ({
  name,
  email,
  selectedPlan,
  logoUrl,
  primaryColor,

  onSave,
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
  onSave: (products: TenantProduct[]) => void;
  setStepHeader: Dispatch<SetStateAction<StepHeaderProps>>;
}) => {
  const [products, setProducts] = useState<TenantProduct[]>([]);

  useEffect(() => {
    setStepHeader({
      stepNumber: 4,
      stepText:
        "Adicione seus produtos ou gere a partir dos programas de afiliados",
    });
  }, []);
  return (
    <div className="flex flex-col gap-1 w-full">
      <TenantRegisteredInterface name={name} email={email} />
      <TenantPlanAssignedInterface selectedPlan={selectedPlan} />
      <TenantBrandingAssignedInterface
        logoUrl={logoUrl}
        primaryColor={primaryColor}
      />
      <AddProductsContent onSave={onSave} products={products} />
    </div>
  );
};
export default ProductsStep;
