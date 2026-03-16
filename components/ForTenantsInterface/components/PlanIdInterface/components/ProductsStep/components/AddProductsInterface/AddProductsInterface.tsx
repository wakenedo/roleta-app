import { SaveProductsButton } from "./components/SaveProductsButton";
import { HandleFileUploadInput } from "./components/HandleFileUploadInput";
import { ProductImportPreviewTable } from "./components/ProductImportPreviewTable";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { AddProductsContentProps } from "../../../../types";

const AddProductsInterface: React.FC<AddProductsContentProps> = ({
  selectedPlan,
  productsImport,
  importProducts,
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
