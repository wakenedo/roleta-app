import { ObjectManagerCheckoutProps } from "@/Interfaces/TenantAreaInterface/types";

const ObjectManagerCheckout = ({
  pickProducts,
  previewProducts,
  productsImported,
}: ObjectManagerCheckoutProps) => {
  return (
    <div className=" shadow-inner bg-slate-100 h-full w-full py-2 px-2">
      <div className="drop-shadow bg-white flex flex-col justify-between  h-full">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between p-2  border-slate-200 space-x-2">
            <div className="flex flex-col  px-1 w-full">
              <div className="line-clamp-1">
                <span>
                  Checkout (Produtos): (Adicionados) `Remover | Verificar:
                  Remove | Verifica todos carregados`
                </span>

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
        </div>
      </div>
    </div>
  );
};
export default ObjectManagerCheckout;
