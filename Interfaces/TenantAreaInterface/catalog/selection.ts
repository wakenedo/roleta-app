import { TenantProduct } from "@/context/TenantContext/types";
import {
  CatalogSelectionSettersProps,
  HandleCatalogSelectionProps,
} from "../types";
import { Dispatch, SetStateAction } from "react";

/**
 * Clears every catalog selection and resets the selection state.
 */
const clearCatalogSelection = ({
  setProductSelected,
  setMultipleProductsSelected,
  setIsMultipleSelectionMode,
  setIsProductSelected,
}: CatalogSelectionSettersProps) => {
  setProductSelected(undefined);
  setMultipleProductsSelected([]);
  setIsMultipleSelectionMode(false);
  setIsProductSelected(false);
};

/**
 * Adds or removes a product from the current multiple selection.
 */
const toggleCatalogProductSelection = (
  product: TenantProduct,
  multipleProductsSelected: TenantProduct[],
): TenantProduct[] => {
  const alreadySelected = multipleProductsSelected.some(
    ({ id }) => id === product.id,
  );

  if (alreadySelected) {
    return multipleProductsSelected.filter(({ id }) => id !== product.id);
  }

  return [...multipleProductsSelected, product];
};

const handleCatalogSelection = ({
  product,
  productSelected,
  multipleProductsSelected,
  setProductSelected,
  setMultipleProductsSelected,
  setIsProductSelected,
  setIsMultipleSelectionMode,
}: HandleCatalogSelectionProps) => {
  // Clicking the already-selected product deselects it.
  if (productSelected?.id === product.id) {
    setProductSelected(undefined);
    setIsProductSelected(false);

    setMultipleProductsSelected([]);
    setIsMultipleSelectionMode(false);

    return;
  }

  // Normal single selection.
  setProductSelected(product);
  setIsProductSelected(true);

  setMultipleProductsSelected([]);
  setIsMultipleSelectionMode(false);
};

export {
  handleCatalogSelection,
  toggleCatalogProductSelection,
  clearCatalogSelection,
};
