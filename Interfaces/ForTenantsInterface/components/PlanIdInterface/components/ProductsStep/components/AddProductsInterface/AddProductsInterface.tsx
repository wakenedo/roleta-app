import { SaveProductsButton } from "./components/SaveProductsButton";
import { HandleFileUploadInput } from "./components/HandleFileUploadInput";
import { ProductImportPreviewTable } from "./components/ProductImportPreviewTable";
import { AddProductsContentProps } from "../../../../types";

const AddProductsInterface = ({
  selectedPlan,
  productsImported,
  handleSubmitProducts,
  previewProducts,
}: AddProductsContentProps) => {
  const {
    fileName,
    errors,
    handleFileUpload,
    pagination,
    setPage,
    paginatedProducts,
    page,
  } = productsImported;

  const isCSV = productsImported.file?.name.endsWith(".csv");
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
        {productsImported.csvPreview?.errors &&
          productsImported.csvPreview.errors.length > 0 && (
            <div className="text-red-400 text-xs mt-2">
              <div>CSV Errors:</div>
              {productsImported.csvPreview.errors.slice(0, 10).map((err, i) => (
                <div key={i}>• {err}</div>
              ))}
            </div>
          )}
        <ProductImportPreviewTable
          products={previewProducts}
          updateProducts={productsImported.updateProducts}
          selectedPlan={selectedPlan}
          page={page}
          paginatedProducts={
            isCSV
              ? previewProducts.slice((page - 1) * 25, page * 25)
              : paginatedProducts
          }
          pagination={
            isCSV
              ? {
                  currentPage: page,
                  totalPages: Math.ceil(previewProducts.length / 25),
                  hasNext: page * 25 < previewProducts.length,
                  hasPrev: page > 1,
                  totalItems: previewProducts.length,
                  perPage: 25,
                }
              : pagination
          }
          setPage={setPage}
        />
      </div>
      <SaveProductsButton
        onClick={handleSubmitProducts}
        label={
          productsImported.file
            ? productsImported
              ? "Confirmar Importação"
              : "Validar Arquivo"
            : "Salvar Produtos"
        }
      />
    </>
  );
};
export default AddProductsInterface;
