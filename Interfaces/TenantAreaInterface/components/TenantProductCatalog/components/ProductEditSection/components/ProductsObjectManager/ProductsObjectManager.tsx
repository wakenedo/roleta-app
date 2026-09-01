import { ObjectManagerCheckout } from "../ObjectManagerCheckout";
import { BsExclamationTriangle } from "react-icons/bs";
import { ProductsObjectManagerProps } from "@/Interfaces/TenantAreaInterface/types";
import { useRef } from "react";

const ProductsObjectManager = ({
  tenantProductStats,
  isObjectCheckoutViewable,
  products,
  verificationLoading,
  verifyCatalog,
  handleFileUpload,
  setIsProductsPreviewTableOpen,
  pickProducts,
  previewProducts,
  productsImported,
  setIsCatalogVerificationModalOpen,
  setIsRemoveProductsModalOpen,
  handleRemoveAllCatalogProducts,
}: ProductsObjectManagerProps) => {
  const handleVerify = async () => {
    if (!products.length) return;
    setIsCatalogVerificationModalOpen(true);
    await verifyCatalog(products);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddClick = () => {
    setIsProductsPreviewTableOpen(true);
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;
    setIsProductsPreviewTableOpen(true);
    await handleFileUpload(file, "admin/catalog");
  };

  const handleRemoveClick = () => {
    setIsRemoveProductsModalOpen(true);
  };

  const totalUploadedProducts = products.length;
  const productsLimit = tenantProductStats?.limit;
  const isProductsOnLimit = totalUploadedProducts === productsLimit;

  return (
    <div className="drop-shadow  border-slate-200  bg-white  pt-2  flex flex-col">
      <div className="flex flex-col justify-between tracking-wider ">
        <div className="flex flex-col px-2 text-slate-500 ">
          <div className="flex ">
            <span className="text-lg tracking-widest  cursor-default">
              Produtos
            </span>
            {totalUploadedProducts != 0 && !isProductsOnLimit && (
              <div className="cursor-default px-2 flex space-x-2 items-center text-amber-500  ">
                <BsExclamationTriangle size={14} />
                <span className="text-xs pt-1">
                  Adicione mais produtos para proporcionar a experiência
                  completa para seus usuários
                </span>
              </div>
            )}
            {totalUploadedProducts === 0 && (
              <div className="cursor-default px-2 flex space-x-2 items-center text-red-500  ">
                <BsExclamationTriangle size={14} />
                <span className="text-xs pt-1">
                  Adicione produtos para habilitar sua experiência para seus
                  usuários
                </span>
              </div>
            )}
          </div>
          {isObjectCheckoutViewable && (
            <ObjectManagerCheckout
              pickProducts={pickProducts}
              previewProducts={previewProducts}
              productsImported={productsImported}
            />
          )}
          <span
            className={`${!isProductsOnLimit && "text-amber-500"} cursor-default text-2xl  text-right`}
          >
            {products.length}/{tenantProductStats?.limit}
          </span>
        </div>

        <div className="mx-2 px-2 text-slate-400 flex  space-x-2 border-t border-slate-200 py-1  tracking-wider  ">
          {isProductsOnLimit ? (
            <div className="flex  cursor-pointer text-xs hover:text-amber-500  transition">
              <span>
                {/*Aparece apenas quando os produtos estão no limite*/}
                Substituir
              </span>
            </div>
          ) : (
            <div className="flex  cursor-pointer text-xs  hover:text-[#84e9e4] transition">
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv,.json"
                hidden
                onChange={handleFileChange}
              />

              <span onClick={handleAddClick}>Adicionar</span>
            </div>
          )}

          {products && products.length != 0 ? (
            <>
              <button className="flex cursor-pointer text-xs hover:text-emerald-500 transition">
                <span onClick={handleVerify}>
                  {verificationLoading ? "Verificando..." : "Verificar"}
                </span>
              </button>

              <button
                className="cursor-pointer text-xs hover:text-red-500 transition"
                disabled={products && products.length === 0}
              >
                <span onClick={handleRemoveClick}>Remover</span>
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ProductsObjectManager;
