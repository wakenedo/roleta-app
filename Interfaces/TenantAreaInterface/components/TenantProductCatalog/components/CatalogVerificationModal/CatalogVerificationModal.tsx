import { VerifyCatalogResponse } from "@/hooks/types";

const CatalogVerificationModal = ({
  closeCatalogVerificationModal,
  verificationLoading,
  verification,
}: {
  closeCatalogVerificationModal: () => void;
  verificationLoading: boolean;
  verification: VerifyCatalogResponse | null;
}) => {
  const handleClose = () => {
    closeCatalogVerificationModal();
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
          {verificationLoading ? (
            <>
              <div>
                <div className="h-20 w-20 my-6 animate-spin rounded-full border-2 border-slate-200 border-t-cyan-500" />
              </div>
              <div>
                <p className="tracking-widest text-xs text-slate-500 cursor-default">
                  Aguarde um momento enquanto verificamos os items do seu
                  catalogo...
                </p>
              </div>
            </>
          ) : (
            <div className="w-full  ">
              <div
                className={`cursor-default grid ${verification?.warnings.length != 0 || verification?.errors.length != 0 ? "grid-cols-3" : "grid-cols-4"} divide-x divide-slate-200 `}
              >
                <div className="py-4 text-center ">
                  <div className="text-xl font-semibold text-slate-700">
                    {verification?.total}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                    Lidos
                  </div>
                </div>

                <div className="py-4 text-center">
                  <div className="text-xl font-semibold text-emerald-500">
                    {verification?.validCount}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                    Disponíveis
                  </div>
                </div>
                {verification?.warnings.length != 0 ? (
                  <div className="py-4 text-center">
                    <div className="text-xl font-semibold text-amber-500">
                      {verification?.warnings.length}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                      Revisar
                    </div>
                  </div>
                ) : null}

                {verification?.errors.length != 0 ? (
                  <div className="py-4 text-center">
                    <div className="text-xl font-semibold text-red-500">
                      {verification?.errors.length}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                      Indisponíveis
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="cursor-default mt-4 overflow-hidden rounded-lg border border-slate-200">
                <div className="tracking-widest grid grid-cols-[1fr_auto_auto] gap-4 bg-slate-50 px-4 pr-8 py-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Produto
                  </div>

                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Validação
                  </div>
                </div>

                <div className="max-h-100 overflow-y-auto">
                  {verification?.results.map((r, i) => {
                    const hasErrors = r.errors?.length > 0;
                    const hasWarnings = r.warnings?.length > 0;

                    return (
                      <div
                        key={i}
                        className="border-b border-slate-100 px-4 py-3 last:border-b-0 tracking-wide"
                      >
                        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                          <div className="min-w-0 cursor-default">
                            <div className="flex flex-col truncate text-sm font-medium text-slate-500">
                              <div>{r.product.name}</div>
                              <div className="flex-col flex text-xs">
                                <div>{r.product.url}</div>
                                <div>{r.product.offerUrl}</div>
                              </div>
                            </div>
                          </div>

                          <div className="cursor-default">
                            {r.valid ? (
                              <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-600">
                                Válido
                              </span>
                            ) : (
                              <span className="rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-600">
                                Inválido
                              </span>
                            )}
                          </div>
                        </div>

                        {(hasErrors || hasWarnings) && (
                          <div className="mt-3 space-y-2">
                            {hasErrors && (
                              <div className="rounded-md bg-red-50 px-3 py-2">
                                <div className="text-xs font-semibold text-red-600">
                                  Não foi possível encontrar o produto
                                </div>

                                {r.errors.map((error, errorIndex) => (
                                  <div
                                    key={errorIndex}
                                    className="mt-1 text-xs text-red-600"
                                  >
                                    {error}
                                  </div>
                                ))}
                              </div>
                            )}

                            {hasWarnings && (
                              <div className="rounded-md bg-amber-50 px-3 py-2">
                                <div className="text-xs font-semibold text-amber-600">
                                  Este produto precisa da sua atenção
                                </div>

                                {r.warnings.map((warning, warningIndex) => (
                                  <div
                                    key={warningIndex}
                                    className="mt-1 text-xs text-amber-600"
                                  >
                                    {warning}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center justify-center pt-4 ">
                <button className="cursor-pointer" onClick={handleClose}>
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CatalogVerificationModal;
