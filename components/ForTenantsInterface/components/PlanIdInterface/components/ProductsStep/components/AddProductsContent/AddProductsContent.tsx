import { AddProductsInterface } from "../AddProductsInterface";
import { AddProductsContentProps } from "../../../../types";

const AddProductsContent: React.FC<AddProductsContentProps> = ({
  selectedPlan,
  productsImport,
  importProducts,
  importProductsCSV,
}) => {
  return (
    <>
      <AddProductsInterface
        selectedPlan={selectedPlan}
        productsImport={productsImport}
        importProducts={importProducts}
        importProductsCSV={importProductsCSV}
      />
    </>
  );
};
export default AddProductsContent;
