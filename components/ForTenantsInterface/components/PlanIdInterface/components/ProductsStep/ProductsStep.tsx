import { useEffect } from "react";
import { TenantRegisteredInterface } from "../TenantCheckoutInterface/TenantRegisteredInterface";
import { TenantPlanAssignedInterface } from "../TenantCheckoutInterface/TenantPlanAssignedInterface";
import { TenantBrandingAssignedInterface } from "../TenantCheckoutInterface/TenantBrandingAssignedInterface";
import { AddProductsContent } from "./components/AddProductsContent";
import { CompleteProductsStepButton } from "./components/AddProductsInterface/components/CompleteProductsStepButton";
import { useProductsImport } from "@/hooks/useProductsImport";
import { ProductsStepProps } from "../../types";
import { useTenant } from "@/context/TenantContext/TenantContext";

const ProductsStep: React.FC<ProductsStepProps> = ({
  name,
  email,
  selectedPlan,
  logoUrl,
  primaryColor,
  importProducts,
  importProductsCSV,
  onSave,
  setStepHeader,
}) => {
  const { products } = useTenant();
  const productsImport = useProductsImport({ selectedPlan, importProductsCSV });

  const pickProducts =
    productsImport.products.length > 0 ? productsImport.products : products;
  console.log("ProductsStep rendered with productsImport:", pickProducts);

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
        importProductsCSV={importProductsCSV}
      />
      <CompleteProductsStepButton
        onSave={onSave}
        products={pickProducts}
        areProductsValidated={productsImport.isValidated}
      />
    </div>
  );
};
export default ProductsStep;
