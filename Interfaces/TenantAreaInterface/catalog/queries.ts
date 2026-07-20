import { TenantProduct } from "@/context/TenantContext/types";
import { CatalogSelectionMode } from "../types";

/**
 * Returns whether a product should be rendered as selected,
 * supporting both single and multiple selection modes.
 */
const isCatalogProductSelected = (
  product: TenantProduct,
  productSelected?: TenantProduct,
  multipleProductsSelected: TenantProduct[] = [],
) => {
  if (productSelected?.id === product.id) return true;
  return multipleProductsSelected.some(
    (selectedProduct) => selectedProduct.id === product.id,
  );
};

const getCatalogSelectionMode = (
  productSelected?: TenantProduct,
  multipleProductsSelected: TenantProduct[] = [],
): CatalogSelectionMode => {
  if (multipleProductsSelected.length > 0) {
    return "multiple";
  }

  if (productSelected) {
    return "single";
  }

  return "none";
};

export { getCatalogSelectionMode, isCatalogProductSelected };
