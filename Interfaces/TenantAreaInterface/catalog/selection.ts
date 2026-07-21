import { TenantProduct } from "@/context/TenantContext/types";
import { CatalogSelectionState, HandleCatalogSelectionProps } from "../types";
import {
  buildEmptySelection,
  buildSingleSelection,
  buildToggleMultipleSelection,
} from "./builders";

const initialCatalogSelectionState: CatalogSelectionState = {
  selectionMode: "none",
  productSelected: undefined,
  multipleProductsSelected: [],
};

/**
 * Clears every catalog selection.
 */
const clearCatalogSelection = (): CatalogSelectionState => ({
  selectionMode: "none",
  productSelected: undefined,
  multipleProductsSelected: [],
});

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
  catalogSelectionState,
  setCatalogSelectionState,
}: HandleCatalogSelectionProps) => {
  const current = catalogSelectionState.productSelected;

  // Clicking the selected product deselects it.
  if (current?.id === product.id) {
    setCatalogSelectionState(buildEmptySelection());
    return;
  }

  // User previously enabled multiple-selection mode.
  if (catalogSelectionState.selectionMode === "multiple") {
    setCatalogSelectionState(
      buildToggleMultipleSelection(product, catalogSelectionState),
    );
    return;
  }

  // Default behaviour.
  setCatalogSelectionState(buildSingleSelection(product));
};

const enableMultipleSelectionMode = (
  selection: CatalogSelectionState,
): CatalogSelectionState => ({
  ...selection,
  selectionMode: "multiple",
  productSelected: undefined,
  multipleProductsSelected: [],
});

export {
  initialCatalogSelectionState,
  clearCatalogSelection,
  handleCatalogSelection,
  toggleCatalogProductSelection,
  enableMultipleSelectionMode,
};
