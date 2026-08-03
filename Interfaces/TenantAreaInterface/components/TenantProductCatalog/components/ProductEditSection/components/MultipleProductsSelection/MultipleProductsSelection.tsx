import { MultipleProductsCheckout } from "../MultipleProductsCheckout";
import { MultipleProductsSelectionProps } from "@/Interfaces/TenantAreaInterface/types";

const MultipleProductsSelection = ({
  setIsMultipleProductsCheckoutVisible,
  isMultipleProductsCheckoutVisible,
  catalogSelectionState,
  verificationLoading,
  verifyCatalog,
}: MultipleProductsSelectionProps) => {
  const selectedProducts = catalogSelectionState.multipleProductsSelected;
  const handleVerify = async () => {
    if (!selectedProducts.length) return;

    await verifyCatalog(selectedProducts);
  };

  return (
    <div className=" shadow-inner bg-slate-100 h-full w-full py-2 px-2">
      <div className="drop-shadow  flex flex-col justify-between space-y-2  h-full">
        <div className="flex flex-col justify-between bg-white">
          <div className="flex justify-between p-2  border-slate-200 space-x-2">
            <div className="flex flex-col   w-full">
              <div className="line-clamp-1">
                <div className="flex items-center justify-between">
                  <span>Produtos Selecionados</span>

                  <span className="text-xs text-slate-500">
                    {selectedProducts.length} selecionado(s)
                  </span>
                </div>

                {/*- Produtos selecionados da interface `Produtos Carregados`
                      devem aparecer aqui podendo ser verificado - editado -
                      removido - Produtos `Adicionados` a partir do Adicionar
                      devem aparecer aqui podendo ser verificado - editado -
                      removido - Produtos `verificados` a partir do Adicionar
                      devem aparecer aqui podendo ser editado - removido -
                      Produtos `Removidos` devem aparecer aqui*/}
              </div>
              <div className="flex text-xs flex-col border px-1 space-y-2 py-1 w-full max-h-96 overflow-y-auto">
                {selectedProducts.length === 0 ? (
                  <span className="text-slate-400">
                    Nenhum produto selecionado.
                  </span>
                ) : (
                  selectedProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between border-b last:border-b-0 pb-1"
                    >
                      <div className="flex flex-col line-clamp-1">
                        <span className="font-medium">
                          {index + 1}. {product.name}
                        </span>

                        <span className="text-[10px] text-slate-500">
                          {product.metadata?.store ??
                            product.store ??
                            "Sem loja"}
                        </span>
                      </div>

                      <span className="text-[10px] text-slate-400">
                        {product.tier}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          {isMultipleProductsCheckoutVisible && <MultipleProductsCheckout />}
          <div className="text-slate-400 flex space-x-2 border-t border-slate-200 py-1 px-2 tracking-wider  ">
            <div
              className="flex cursor-pointer text-xs hover:text-emerald-500 transition"
              onClick={handleVerify}
            >
              <span>
                {verificationLoading ? "Verificando..." : "Verificar"}
              </span>
            </div>
            <div className="cursor-pointer text-xs hover:text-amber-500 transition">
              <span>Editar</span>
            </div>

            <div className="cursor-pointer text-xs hover:text-red-500 transition">
              <span>Remover</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MultipleProductsSelection;
