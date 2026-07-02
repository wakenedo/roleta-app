import { TenantProduct } from "@/context/TenantContext/types";
import { ProductImportRowProps } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/types";
import { TierRow } from "./components/TierRow";
import { CategoryRow } from "./components/CategoryRow";
import { URLRow } from "./components/URLRow";
import { MetadataProvider } from "./components/MetadataProvider";
import { StoreRow } from "./components/StoreRow";
import { NameRow } from "./components/NameRow";
import { ImageRow } from "./components/ImageRow";
import { PricingRow } from "./components/PricingRow";

const ImportedProduct = ({
  product,
  index,
  updateProductField,
}: ProductImportRowProps) => {
  const missing = (value: TenantProduct[keyof TenantProduct]) =>
    !value ? "border-red-400" : "border-gray-300";

  // For now we're allowing the user to edit all fields during import,
  // but we might want to lock some of them in the future, if not all of them.
  // Ideally we develop a simple structure to verify the integrity of the imported data,
  // in the catalog management interface, to verify link integrity and data integrity.
  // To minimize the tenant user input errors and improper data formatting,
  // ensure a smooth import process and product management for the tenants.
  console.log("Rendering row for product:", product);
  return (
    <div className="flex flex-col gap-2 p-2 border bg-slate-600">
      <ImageRow
        index={index}
        missing={missing}
        product={product}
        updateProductField={updateProductField}
      />

      <NameRow
        index={index}
        missing={missing}
        product={product}
        updateProductField={updateProductField}
      />

      <PricingRow product={product} />

      {product.metadata?.affiliateProvider !== null && (
        <MetadataProvider product={product} />
      )}
      {product.metadata?.affiliateProvider === null && (
        <StoreRow
          index={index}
          missing={missing}
          product={product}
          updateProductField={updateProductField}
        />
      )}

      <URLRow
        index={index}
        missing={missing}
        product={product}
        updateProductField={updateProductField}
      />

      <CategoryRow
        index={index}
        product={product}
        updateProductField={updateProductField}
      />

      <TierRow
        index={index}
        product={product}
        updateProductField={updateProductField}
      />
    </div>
  );
};

export default ImportedProduct;
