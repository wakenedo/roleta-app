import { Dispatch, SetStateAction } from "react";
import { MultipleProductsCheckout } from "../MultipleProductsCheckout";

const MultipleProductsSelection = ({
  setIsMultipleProductsCheckoutVisible,
  isMultipleProductsCheckoutVisible,
}: {
  setIsMultipleProductsCheckoutVisible: Dispatch<SetStateAction<boolean>>;
  isMultipleProductsCheckoutVisible: boolean;
}) => {
  return (
    <div className=" shadow-inner bg-slate-100 h-full w-full py-2 px-2">
      <div className="drop-shadow  flex flex-col justify-between space-y-2  h-full">
        <div className="flex flex-col justify-between bg-white">
          <div className="flex justify-between p-2  border-slate-200 space-x-2">
            <div className="flex flex-col   w-full">
              <div className="line-clamp-1">
                <span>Interface Selecionados </span>

                {/*- Produtos selecionados da interface `Produtos Carregados`
                      devem aparecer aqui podendo ser verificado - editado -
                      removido - Produtos `Adicionados` a partir do Adicionar
                      devem aparecer aqui podendo ser verificado - editado -
                      removido - Produtos `verificados` a partir do Adicionar
                      devem aparecer aqui podendo ser editado - removido -
                      Produtos `Removidos` devem aparecer aqui*/}
              </div>
              <div className="flex text-xs line-clamp-1 flex-col border px-1 space-y-2 py-1 w-full">
                <div>
                  <span>Produto 0</span>
                </div>
                <div>
                  <span>Produto 1</span>
                </div>
                <div>
                  <span>Produto 2</span>
                </div>
                <div>
                  <span>Produto 3</span>
                </div>
                <div>
                  <span>Produto 4</span>
                </div>
              </div>
            </div>
          </div>
          {isMultipleProductsCheckoutVisible && <MultipleProductsCheckout />}
          <div className="text-slate-400 flex space-x-2 border-t border-slate-200 py-1 px-2 tracking-wider  ">
            <div className="flex  cursor-pointer text-xs hover:text-emerald-500 transition">
              <span>Verificar</span>
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
