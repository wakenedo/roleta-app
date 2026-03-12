import { TenantProduct } from "@/context/TenantContext/types";
import { AddProductsInterface } from "../AddProductsInterface";
import { Dispatch, SetStateAction } from "react";

const AddProductsContent = ({
  productsImport,
}: {
  productsImport: {
    fileName: string | null;
    rawProducts: TenantProduct[];
    products: TenantProduct[];
    errors: string[];
    isValidated: boolean;
    handleFileUpload: (file: File) => Promise<void>;
    validateProducts: () => boolean;
    updateProducts: Dispatch<SetStateAction<TenantProduct[]>>;
  };
}) => {
  return (
    <>
      <AddProductsInterface productsImport={productsImport} />
    </>
  );
};
export default AddProductsContent;
