import { SaveProductsButton } from "./components/SaveProductsButton";
import { HandleFileUploadInput } from "./components/HandleFileUploadInput";
import { ProductImportPreviewTable } from "./components/ProductImportPreviewTable";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { AddProductsContentProps } from "../../../../types";
import { normalizeProducts } from "@/hooks/utils/productImportsHelpers";
import { TenantProduct } from "@/context/TenantContext/types";

const AddProductsInterface: React.FC<AddProductsContentProps> = ({
  selectedPlan,
  productsImport,
  importProducts,
  importProductsCSV,
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
    file,
  } = productsImport;
  const { setProducts, products } = useTenant();
  const handleSubmit = async () => {
    if (!file) return;

    // 🧾 CSV FLOW
    if (file.name.endsWith(".csv")) {
      const result = (await importProductsCSV(file, false)) as {
        imported: number;
        products: TenantProduct[];
      };
      setProducts(result.products);
      console.log("Imported ✔", result);
      validateProducts();
      alert(`Imported ${result.imported} products`);
      return;
    }

    // 🧠 JSON FLOW
    const valid = validateProducts();
    if (!valid) return;

    await importProducts(productsImport.products);
    setProducts(productsImport.products);

    console.log("Products validated ✔");
  };

  const isCSV = productsImport.file?.name.endsWith(".csv");

  const previewProducts = isCSV ? products : productsImport.products;

  console.log("Preview products:", previewProducts);
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
        {productsImport.csvPreview?.errors &&
          productsImport.csvPreview.errors.length > 0 && (
            <div className="text-red-400 text-xs mt-2">
              <div>CSV Errors:</div>
              {productsImport.csvPreview.errors.slice(0, 10).map((err, i) => (
                <div key={i}>• {err}</div>
              ))}
            </div>
          )}
        <ProductImportPreviewTable
          products={previewProducts}
          updateProducts={productsImport.updateProducts}
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
        onClick={handleSubmit}
        label={
          productsImport.file?.name.endsWith(".csv")
            ? productsImport.csvPreview
              ? "Confirmar Importação"
              : "Validar CSV"
            : "Salvar Produtos"
        }
      />
    </>
  );
};
export default AddProductsInterface;
