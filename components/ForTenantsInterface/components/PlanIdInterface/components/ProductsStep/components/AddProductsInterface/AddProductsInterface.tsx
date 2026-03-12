import { TenantProduct } from "@/context/TenantContext/types";
import { SaveProductsButton } from "./components/SaveProductsButton";
import { Dispatch, SetStateAction } from "react";
import { HandleFileUploadInput } from "./components/HandleFileUploadInput";
import { ProductImportPreviewTable } from "./components/ProductImportPreviewTable";

const AddProductsInterface = ({
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
  const { fileName, errors, handleFileUpload, validateProducts } =
    productsImport;

  const handleSubmit = () => {
    const valid = validateProducts();

    if (!valid) return;

    console.log("Products validated ✔");
  };

  console.log("AddProductsInerface", productsImport.products);

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
        />
      </div>
      <SaveProductsButton onClick={handleSubmit} />
    </>
  );
};
export default AddProductsInterface;
