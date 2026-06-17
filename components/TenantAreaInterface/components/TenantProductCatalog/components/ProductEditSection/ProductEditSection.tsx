import { TenantSectionMarker } from "../../../TenantSectionMarker";

const ProductEditSection = () => {
  return (
    <>
      <TenantSectionMarker markerTitle="Configurações" />
      <div className="mt-1  flex flex-col border  border-slate-200 bg-slate-100 p-2 space-y-2 ">
        <div className="flex space-x-2">
          <div className="border border-slate-50 shadow bg-white  w-1/2 p-2"></div>
          <div className="flex-col space-y-2 w-1/2">
            <div className="flex space-x-2 border border-slate-50 shadow bg-white  p-2">
              <div className="cursor-pointer text-sm hover:text-[#84e9e4] transition">
                <span>Adicionar</span>
              </div>
              <div className="cursor-pointer text-sm hover:text-red-500 transition">
                <span>Deletar</span>
              </div>
              <div className="cursor-pointer text-sm hover:text-amber-500 transition">
                <span>Editar</span>
              </div>
              <div className="cursor-pointer text-sm hover:text-emerald-500 transition">
                <span>Salvar</span>
              </div>
            </div>
            <div className="border border-slate-50 shadow bg-white p-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductEditSection;
