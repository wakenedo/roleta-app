import { TenantProduct } from "@/context/TenantContext/types";
import { CatalogSelectionSettersProps } from "../types";
import { Dispatch, SetStateAction } from "react";

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

/**
 * Clears every catalog selection and resets the selection state.
 */
const clearCatalogSelection = ({
  setProductSelected,
  setMultipleProductsSelected,
  setIsMultipleProducts,
  setIsProductSelected,
}: CatalogSelectionSettersProps) => {
  setProductSelected(undefined);
  setMultipleProductsSelected([]);
  setIsMultipleProducts(false);
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

const handleProductCatalogClick = (
  product: TenantProduct,
  productSelected: TenantProduct | undefined,
  multipleProductsSelected: TenantProduct[],
  setMultipleProductsSelected: Dispatch<SetStateAction<TenantProduct[]>>,
  setProductSelected: Dispatch<SetStateAction<TenantProduct | undefined>>,
  setIsProductSelected: Dispatch<SetStateAction<boolean>>,
  setIsMultipleProducts: Dispatch<SetStateAction<boolean>>,
) => {
  // Clicking the already-selected product deselects it.
  if (productSelected?.id === product.id) {
    setProductSelected(undefined);
    setIsProductSelected(false);

    setMultipleProductsSelected([]);
    setIsMultipleProducts(false);

    return;
  }

  // Normal single selection.
  setProductSelected(product);
  setIsProductSelected(true);

  setMultipleProductsSelected([]);
  setIsMultipleProducts(false);
};

export {
  isCatalogProductSelected,
  clearCatalogSelection,
  toggleCatalogProductSelection,
  handleProductCatalogClick,
};
