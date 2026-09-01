import { CatalogRemoveModalProps } from "@/Interfaces/TenantAreaInterface/types";
import { useState } from "react";

const CatalogRemoveModal = ({
  closeRemoveProductsModal,
  removalLoading,
  removalResult,
  onConfirm,
}: CatalogRemoveModalProps) => {
  const [areYouSure, setAreYouSure] = useState(false);

  const handleClose = () => {
    setAreYouSure(false);
    closeRemoveProductsModal();
  };

  const handleAreYouSure = async () => {
    setAreYouSure(true);
    await onConfirm();
  };

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/5
      backdrop-blur-sm
      h-full
    "
    >
      <div
        className="
        relative
        w-[95vw]
        max-w-7xl
        max-h-[110vh]
        overflow-hidden
        rounded
        bg-white
        shadow-2xl
        p-6
      "
      >
        <div className="flex flex-col items-center justify-center gap-4 mx-auto">
          {areYouSure === false && (
            <div className="flex flex-col text-red-500 items-center justify-center gap-4 pt-8">
              <p className="tracking-widest text-md text-slate-500 cursor-default">
                Tem certeza que deseja remover todos os produtos do seu
                catálogo?
              </p>
              <div className="flex items-center justify-center pt-4 ">
                <button className="cursor-pointer" onClick={handleAreYouSure}>
                  Sim, tenho certeza
                </button>
              </div>
            </div>
          )}

          {removalLoading && areYouSure === true && (
            <div className="flex flex-col items-center justify-center gap-4 pt-8">
              <div>
                <div className="h-20 w-20 my-6 animate-spin rounded-full border-2 border-slate-200 border-t-cyan-500" />
              </div>
              <div>
                <p className="tracking-widest text-xs text-slate-500 cursor-default">
                  Aguarde um momento enquanto removemos os items do seu
                  catalogo...
                </p>
              </div>
            </div>
          )}
          {!removalLoading && areYouSure === true && (
            <div className="flex flex-col items-center justify-center gap-4 pt-8">
              <p className="tracking-widest text-xs text-slate-500 cursor-default">
                Todos os {removalResult?.removedCount} items do seu catalogo
                foram removidos, adicione novos produtos para manter sua
                experiência ativa.
              </p>
            </div>
          )}
          <div className="flex items-center justify-center pt-4 ">
            <button className="cursor-pointer" onClick={handleClose}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CatalogRemoveModal;
