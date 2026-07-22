import { ObjectManagerCheckout } from "../ObjectManagerCheckout";
import { BsExclamationTriangle } from "react-icons/bs";
import { ProductsObjectManagerProps } from "@/Interfaces/TenantAreaInterface/types";

const ProductsObjectManager = ({
  tenantProductStats,
  isObjectCheckoutViewable,
  products,
  verificationLoading,
  verifyCatalog,
  setIsObjectCheckoutViewable,
}: ProductsObjectManagerProps) => {
  const handleVerify = async () => {
    if (!products.length) return;

    await verifyCatalog(products);
  };

  const totalUploadedProducts = tenantProductStats?.total;
  const productsLimit = tenantProductStats?.limit;
  const isProductsOnLimit = totalUploadedProducts === productsLimit;

  return (
    <div className="drop-shadow  border-slate-200  bg-white  pt-2  flex flex-col">
      <div className="flex flex-col justify-between tracking-wider ">
        <div className="flex flex-col px-2 text-slate-500 ">
          <div className="flex ">
            <span className="text-lg tracking-widest  ">Produtos</span>
            {!isProductsOnLimit && (
              <div className="px-2 flex space-x-2 items-center text-amber-500  ">
                <BsExclamationTriangle size={14} />
                <span className="text-xs pt-1">
                  Adicione mais produtos para proporcionar a experiência
                  completa para seus usuários
                </span>
              </div>
            )}
          </div>
          {isObjectCheckoutViewable && <ObjectManagerCheckout />}
          <span
            className={`${!isProductsOnLimit && "text-amber-500"} text-2xl  text-right`}
          >
            {tenantProductStats?.active}/{tenantProductStats?.limit}
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
              <span>
                {/*Aparece apenas quando falta produtos*/}
                Adicionar
              </span>
            </div>
          )}

          <div
            className="flex cursor-pointer text-xs hover:text-emerald-500 transition"
            onClick={handleVerify}
          >
            <span>{verificationLoading ? "Verificando..." : "Verificar"}</span>
          </div>

          <div className="cursor-pointer text-xs hover:text-red-500 transition">
            <span>Remover</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsObjectManager;
