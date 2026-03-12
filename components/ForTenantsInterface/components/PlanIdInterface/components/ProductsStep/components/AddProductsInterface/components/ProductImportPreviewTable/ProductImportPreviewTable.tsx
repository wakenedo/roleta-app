import { TenantProduct } from "@/context/TenantContext/types";
import { ProductImportRow } from "./components/ProductImportRow";

type Props = {
  products: TenantProduct[];
  updateProducts: (products: TenantProduct[]) => void;
};

const ProductImportPreviewTable = ({ products, updateProducts }: Props) => {
  const updateProductField = (
    index: number,
    field: keyof TenantProduct,
    value: TenantProduct[keyof TenantProduct],
  ) => {
    const updated = [...products];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    updateProducts(updated);
  };

  if (!products.length) return null;

  return (
    <div className="border mt-4">
      {products.length > 0 && (
        <div className="text-xs mt-2">{products.length} products loaded</div>
      )}
      <div className="grid grid-cols-5 text-xs font-semibold p-2 border-b">
        <span>Name</span>
        <span>Image</span>
        <span>URL</span>
        <span>Tier</span>
        <span>Price</span>
      </div>

      {products.map((product, index) => (
        <ProductImportRow
          key={index}
          product={product}
          index={index}
          updateProductField={updateProductField}
        />
      ))}
    </div>
  );
};

export default ProductImportPreviewTable;
