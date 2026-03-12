import { TenantProduct } from "@/context/TenantContext/types";
import { AddProductsInterface } from "../AddProductsInterface";

const AddProductsContent = ({
  products,
  onSave,
}: {
  products: TenantProduct[];
  onSave: (products: TenantProduct[]) => void;
}) => {
  return (
    <>
      <AddProductsInterface products={products} onSave={onSave} />
    </>
  );
};
export default AddProductsContent;
