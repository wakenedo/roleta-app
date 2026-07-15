import { TenantSectionMarker } from "@/components/TenantSectionMarker";
import { MultipleProductsSelection } from "./components/MultipleProductsSelection";
import { ProductsObjectManager } from "./components/ProductsObjectManager";
import { SingleProductSelection } from "./components/SingleProductSelection";
import { NoProductSelected } from "./components/NoProductSelected";
import { ProductEditSectionProps } from "@/Interfaces/TenantAreaInterface/types";

const ProductEditSection = ({
  tenantProductStats,
  isMultipleProducts,
  isMultipleProductsCheckoutVisible,
  isObjectCheckoutViewable,
  isProductSelected,
  noProductSelected,
  setIsMultipleProducts,
  setIsMultipleProductsCheckoutVisible,
  setIsObjectCheckoutViewable,
  setIsProductSelected,
}: ProductEditSectionProps) => {
  console.log("ProductsEditSection", tenantProductStats);

  return (
    <>
      <TenantSectionMarker markerTitle="Configurações" />
      <div className="  flex flex-col  h-full py-2 px-1 space-y-2 ">
        {isMultipleProducts === true && (
          <MultipleProductsSelection
            isMultipleProductsCheckoutVisible={
              isMultipleProductsCheckoutVisible
            }
            setIsMultipleProductsCheckoutVisible={
              setIsMultipleProductsCheckoutVisible
            }
          />
        )}
        {isProductSelected === true && <SingleProductSelection />}
        {noProductSelected && <NoProductSelected />}

        <ProductsObjectManager
          tenantProductStats={tenantProductStats}
          setIsObjectCheckoutViewable={setIsObjectCheckoutViewable}
          isObjectCheckoutViewable={isObjectCheckoutViewable}
        />
      </div>
    </>
  );
};
export default ProductEditSection;
