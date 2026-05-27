import { ProductImportRowProps } from "@/components/ForTenantsInterface/components/PlanIdInterface/types";
import { TenantProduct } from "@/context/TenantContext/types";

const ProductImportRow = ({
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

  return (
    <div className="grid grid-cols-7 gap-2 p-2 border-b">
      <input
        className={`border p-1 text-xs ${missing(product.name)}`}
        value={product.name}
        onChange={(e) => updateProductField(index, "name", e.target.value)}
      />

      <input
        className={`border p-1 text-xs ${missing(product.image)}`}
        value={product.image || undefined}
        onChange={(e) => updateProductField(index, "image", e.target.value)}
      />

      <input
        className={`border p-1 text-xs ${missing(product.url)}`}
        value={product.url}
        onChange={(e) => updateProductField(index, "url", e.target.value)}
      />
      {product.offerUrl !== undefined && product.offerUrl != product.url && (
        <input
          className={`border p-1 text-xs ${missing(product.offerUrl)}`}
          value={product.offerUrl}
          onChange={(e) =>
            updateProductField(index, "offerUrl", e.target.value)
          }
        />
      )}

      <select
        className="border text-xs"
        value={product.tier}
        onChange={(e) => updateProductField(index, "tier", e.target.value)}
      >
        <option value="normal">normal</option>
        <option value="rare">rare</option>
        <option value="jackpot">jackpot</option>
      </select>

      <input
        type="string"
        className="border text-xs"
        value={product.commissionRate ?? ""}
        onChange={(e) =>
          updateProductField(index, "commissionRate", e.target.value)
        }
      />

      <input
        type="number"
        className="border text-xs"
        value={product.price ?? ""}
        onChange={(e) =>
          updateProductField(index, "price", Number(e.target.value))
        }
      />
      <input
        type="number"
        className="border text-xs"
        value={product.commission ?? ""}
        onChange={(e) =>
          updateProductField(index, "commission", Number(e.target.value))
        }
      />
    </div>
  );
};

export default ProductImportRow;
