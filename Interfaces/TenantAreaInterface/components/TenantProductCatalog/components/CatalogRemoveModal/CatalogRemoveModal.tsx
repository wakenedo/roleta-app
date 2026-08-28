import { CatalogProductsRemovalResult } from "@/Interfaces/TenantAreaInterface/types";

const CatalogRemoveModal = ({
  closeRemoveProductsModal,

  removalLoading,
  removalResult,
}: {
  closeRemoveProductsModal: () => void;

  removalLoading: boolean;
  removalResult: CatalogProductsRemovalResult | null;
}) => {
  const handleClose = () => {
    closeRemoveProductsModal();
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
          {removalLoading && (
            <>
              <div>
                <div className="h-20 w-20 my-6 animate-spin rounded-full border-2 border-slate-200 border-t-cyan-500" />
              </div>
              <div>
                <p className="tracking-widest text-xs text-slate-500 cursor-default">
                  Aguarde um momento enquanto removemos os items do seu
                  catalogo...
                </p>
              </div>
            </>
          )}
          {!removalLoading && (
            <>
              <p className="tracking-widest text-xs text-slate-500 cursor-default">
                Todos os {removalResult?.removedCount} items do seu catalogo
                foram removidos, adicione novos produtos para manter sua
                experiência ativa.
              </p>
            </>
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
