import { TenantProduct } from "@/context/TenantContext/types";
import { CatalogSelectionState } from "../types";
import { toggleCatalogProductSelection } from "./selection";

const buildEmptySelection = (): CatalogSelectionState => ({
  selectionMode: "none",
  productSelected: undefined,
  multipleProductsSelected: [],
});

const buildSelectionMode = (
  selection: CatalogSelectionState,
  selectionMode: "single" | "multiple",
): CatalogSelectionState => ({
  ...selection,
  selectionMode,
  productSelected:
    selectionMode === "single" ? selection.productSelected : undefined,
  multipleProductsSelected:
    selectionMode === "multiple" ? selection.multipleProductsSelected : [],
});

const buildSingleSelection = (
  product: TenantProduct,
): CatalogSelectionState => ({
  selectionMode: "single",
  productSelected: product,
  multipleProductsSelected: [],
});

const buildMultipleSelectionMode = (
  selection: CatalogSelectionState,
): CatalogSelectionState => ({
  ...selection,
  selectionMode: "multiple",
  productSelected: undefined,
  multipleProductsSelected: [],
});

const buildToggleMultipleSelection = (
  product: TenantProduct,
  selection: CatalogSelectionState,
): CatalogSelectionState => {
  const products = toggleCatalogProductSelection(
    product,
    selection.multipleProductsSelected,
  );

  return {
    selectionMode: "multiple",
    productSelected: undefined,
    multipleProductsSelected: products,
  };
};

export {
  buildEmptySelection,
  buildSingleSelection,
  buildToggleMultipleSelection,
  buildMultipleSelectionMode,
  buildSelectionMode,
};
