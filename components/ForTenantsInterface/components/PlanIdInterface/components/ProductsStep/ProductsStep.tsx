import { useEffect } from "react";
import { TenantRegisteredInterface } from "../TenantCheckoutInterface/TenantRegisteredInterface";
import { TenantPlanAssignedInterface } from "../TenantCheckoutInterface/TenantPlanAssignedInterface";
import { TenantBrandingAssignedInterface } from "../TenantCheckoutInterface/TenantBrandingAssignedInterface";
import { AddProductsContent } from "./components/AddProductsContent";
import { CompleteProductsStepButton } from "./components/AddProductsInterface/components/CompleteProductsStepButton";
import { useProductsImport } from "@/hooks/useProductsImport";

import { ProductsStepProps } from "../../types";

const ProductsStep: React.FC<ProductsStepProps> = ({
  name,
  email,
  selectedPlan,
  logoUrl,
  primaryColor,
  importProducts,
  onSave,
  setStepHeader,
}) => {
  const productsImport = useProductsImport();
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
      <AddProductsContent
        productsImport={productsImport}
        selectedPlan={selectedPlan}
        importProducts={importProducts}
      />
      <CompleteProductsStepButton
        onSave={onSave}
        products={productsImport.products}
        areProductsValidated={productsImport.isValidated}
      />
    </div>
  );
};
export default ProductsStep;
