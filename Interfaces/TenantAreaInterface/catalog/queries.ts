import { TenantProduct } from "@/context/TenantContext/types";
import { CatalogSelectionMode, CatalogSelectionState } from "../types";

/**
 * Returns whether a product should be rendered as selected.
 */
const isCatalogProductSelected = (
  product: TenantProduct,
  selection: CatalogSelectionState,
) => {
  if (selection.productSelected?.id === product.id) {
    return true;
  }

  return selection.multipleProductsSelected.some(({ id }) => id === product.id);
};

/**
 * Returns the current catalog selection mode.
 */
const getCatalogSelectionMode = (
  selection: CatalogSelectionState,
): CatalogSelectionMode => {
  if (selection.multipleProductsSelected.length > 0) {
    return "multiple";
  }

  if (selection.productSelected) {
    return "single";
  }

  return "none";
};

export { getCatalogSelectionMode, isCatalogProductSelected };
