import { AddProductsInterface } from "../AddProductsInterface";
import { AddProductsContentProps } from "../../../../types";

const AddProductsContent: React.FC<AddProductsContentProps> = ({
  selectedPlan,
  productsImport,
  importProducts,
}) => {
  return (
    <>
      <AddProductsInterface
        selectedPlan={selectedPlan}
        productsImport={productsImport}
        importProducts={importProducts}
      />
    </>
  );
};
export default AddProductsContent;
