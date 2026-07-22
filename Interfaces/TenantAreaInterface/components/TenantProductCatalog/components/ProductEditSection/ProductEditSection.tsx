import { TenantSectionMarker } from "@/components/TenantSectionMarker";
import { MultipleProductsSelection } from "./components/MultipleProductsSelection";
import { ProductsObjectManager } from "./components/ProductsObjectManager";
import { SingleProductSelection } from "./components/SingleProductSelection";
import { NoProductSelected } from "./components/NoProductSelected";
import { ProductEditSectionProps } from "@/Interfaces/TenantAreaInterface/types";
import { getCatalogSelectionMode } from "@/Interfaces/TenantAreaInterface/catalog";

const ProductEditSection = ({
  tenantProductStats,
  catalogSelectionState,
  isMultipleProductsCheckoutVisible,
  isObjectCheckoutViewable,
  setIsMultipleProductsCheckoutVisible,
  setIsObjectCheckoutViewable,
  setCatalogSelectionState,
  verification,
  verificationLoading,
  verifyCatalog,
}: ProductEditSectionProps) => {
  console.log("ProductsEditSection", tenantProductStats);

  const selectionMode = getCatalogSelectionMode(catalogSelectionState);

  return (
    <>
      <TenantSectionMarker markerTitle="Configurações" />
      <div className="  flex flex-col  h-full py-2 px-1 space-y-2 ">
        {selectionMode === "multiple" && (
          <MultipleProductsSelection
            verificationLoading={verificationLoading}
            verification={verification}
            verifyCatalog={verifyCatalog}
            catalogSelectionState={catalogSelectionState}
            isMultipleProductsCheckoutVisible={
              isMultipleProductsCheckoutVisible
            }
            setIsMultipleProductsCheckoutVisible={
              setIsMultipleProductsCheckoutVisible
            }
          />
        )}
        {selectionMode === "single" && (
          <SingleProductSelection
            verifyCatalog={verifyCatalog}
            productSelected={catalogSelectionState.productSelected}
            verification={verification}
            verificationLoading={verificationLoading}
          />
        )}
        {selectionMode === "none" && (
          <NoProductSelected
            catalogSelectionState={catalogSelectionState}
            setCatalogSelectionState={setCatalogSelectionState}
          />
        )}

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
