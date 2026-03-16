import { TenantProduct } from "@/context/TenantContext/types";
import { SaveProductsButton } from "./components/SaveProductsButton";
import { Dispatch, SetStateAction } from "react";
import { HandleFileUploadInput } from "./components/HandleFileUploadInput";
import { ProductImportPreviewTable } from "./components/ProductImportPreviewTable";
import { useTenant } from "@/context/TenantContext/TenantContext";

const AddProductsInterface = ({
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
  const {
    fileName,
    errors,
    handleFileUpload,
    validateProducts,
    pagination,
    setPage,
    paginatedProducts,
    page,
  } = productsImport;
  const { setProducts } = useTenant();
  const handleSubmit = () => {
    const valid = validateProducts();
    if (!valid) return;
    importProducts(productsImport.products);
    setProducts(productsImport.products);

    console.log("Products validated ✔");
  };

  console.log("AddProductsInerface", productsImport.paginatedProducts);
  console.log("AddProductsInerface Pagination", pagination);
  console.log("AddProductsInerface Page", page);
  console.log("AddProductsInerface PaginatedProducts", paginatedProducts);

  return (
    <>
      <span className="text-sm">Produtos</span>
      <div className="border w-full p-2 mb-3">
        <div className="md:text-lg font-semibold">
          <span>Produtos Próprios </span>
        </div>
        <div className="md:text-xs">
          Use seus produtos ou pool de ofertas para gerar a experiência. Assim
          que seus produtos carregarem escolha as configurações dos Tiers e
          alavanque o engajamento de seus usuários !
        </div>
        <HandleFileUploadInput
          errors={errors}
          fileName={fileName}
          handleFileUpload={handleFileUpload}
        />
        <ProductImportPreviewTable
          products={productsImport.products}
          updateProducts={productsImport.updateProducts}
          selectedPlan={selectedPlan}
          page={page}
          paginatedProducts={paginatedProducts}
          pagination={pagination}
          setPage={setPage}
        />
      </div>
      <SaveProductsButton onClick={handleSubmit} />
    </>
  );
};
export default AddProductsInterface;
