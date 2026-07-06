import { TenantSectionMarker } from "@/components/TenantSectionMarker";
import { ProductsStatsProps } from "@/context/TenantContext/types";

const ProductEditSection = ({
  tenantProductStats,
}: {
  tenantProductStats: ProductsStatsProps | undefined;
}) => {
  console.log("ProductsEditSection", tenantProductStats);
  return (
    <>
      <TenantSectionMarker markerTitle="Configurações" />

      <div className="  flex flex-col justify-between h-full py-2 px-1 space-y-2 ">
        <div className="flex space-x-2">
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
                <div className=" shadow-inner bg-slate-100 h-full  py-2 px-2 mb-2 mx-2">
                  <div className="flex flex-col justify-between">
                    <div className="flex justify-between p-2  border-slate-200 space-x-2 bg-white">
                      <div className="flex flex-col   w-full">
                        <div className="line-clamp-1">
                          <span>
                            Checkout (Interface Selecionados): (Editados /
                            Removidos / Verificados )
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
        </div>

        <div className="drop-shadow  border-slate-200  bg-white  pt-2  flex flex-col">
          <div className="flex flex-col justify-between tracking-wider ">
            <div className="flex flex-col px-2 text-slate-500 ">
              <span className="text-lg tracking-widest  ">Produtos</span>
              <div className="">
                <div className=" shadow-inner bg-slate-100 h-full w-full py-2 px-2">
                  <div className="drop-shadow bg-white flex flex-col justify-between  h-full">
                    <div className="flex flex-col justify-between">
                      <div className="flex justify-between p-2  border-slate-200 space-x-2">
                        <div className="flex flex-col  px-1 w-full">
                          <div className="line-clamp-1">
                            <span>
                              Checkout (Produtos): (Adicionados) `Remover |
                              Verificar: Remove | Verifica todos carregados`
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
              </div>
              <span className="text-2xl  text-right">
                {tenantProductStats?.active}/{tenantProductStats?.limit}
              </span>
            </div>

            <div className=" px-2 text-slate-400 flex  space-x-2 border-t border-slate-200 py-1  tracking-wider  ">
              <div className="flex  cursor-pointer text-xs  hover:text-[#84e9e4] transition">
                <span>Adicionar (Aparece apenas quando falta produtos)</span>
              </div>
              <div className="flex  cursor-pointer text-xs hover:text-emerald-500  transition">
                <span>Verificar</span>
              </div>

              <div className="cursor-pointer text-xs hover:text-red-500 transition">
                <span>Remover</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductEditSection;
