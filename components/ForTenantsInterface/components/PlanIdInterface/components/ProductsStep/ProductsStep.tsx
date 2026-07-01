import { useEffect } from "react";
import { TenantRegisteredInterface } from "../TenantCheckoutInterface/TenantRegisteredInterface";
import { TenantPlanAssignedInterface } from "../TenantCheckoutInterface/TenantPlanAssignedInterface";
import { TenantBrandingAssignedInterface } from "../TenantCheckoutInterface/TenantBrandingAssignedInterface";
import { CompleteProductsStepButton } from "./components/AddProductsInterface/components/CompleteProductsStepButton";
import { ProductsStepProps } from "../../types";
import { AddProductsInterface } from "./components/AddProductsInterface";

const ProductsStep: React.FC<ProductsStepProps> = ({
  name,
  email,
  selectedPlan,
  logoUrl,
  primaryColor,
  importProducts,
  importProductsCSV,
  importProductsJSON,
  onSave,
  setStepHeader,
  productsImported,
  pickProducts,
  handleSubmitProducts,
  previewProducts,
  products,
  setProducts,
}) => {
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
      <AddProductsInterface
        productsImported={productsImported}
        selectedPlan={selectedPlan}
        importProducts={importProducts}
        importProductsCSV={importProductsCSV}
        importProductsJSON={importProductsJSON}
        handleSubmitProducts={handleSubmitProducts}
        previewProducts={previewProducts}
        products={products}
        setProducts={setProducts}
      />
      <CompleteProductsStepButton
        onSave={onSave}
        products={pickProducts}
        areProductsValidated={productsImported.isValidated}
      />
    </div>
  );
};
export default ProductsStep;
