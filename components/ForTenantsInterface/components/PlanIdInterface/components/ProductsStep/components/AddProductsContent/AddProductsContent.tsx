import { TenantProduct } from "@/context/TenantContext/types";
import { AddProductsInterface } from "../AddProductsInterface";
import { Dispatch, SetStateAction } from "react";

const AddProductsContent = ({
  selectedPlan,
  productsImport,
  importProducts,
}: {
  selectedPlan: {
    id: string;
    name: string;
    price: string;
  };
  productsImport: {
    fileName: string | null;
    rawProducts: [][];
    products: TenantProduct[];
    errors: string[];
    isValidated: boolean;
    handleFileUpload: (file: File) => Promise<void>;
    validateProducts: () => boolean;
    updateProducts: Dispatch<SetStateAction<TenantProduct[]>>;
    setPage: Dispatch<SetStateAction<number>>;
    paginatedProducts: TenantProduct[];
    page: number;
    pagination: {
      totalItems: number;
      perPage: number;
      currentPage: number;
      totalPages: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
  importProducts: (products: TenantProduct[]) => Promise<void>;
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
