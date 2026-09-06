import { UserAreaSectionBackground } from "@/backgrounds/UserAreaSectionBackground";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const UserDynamicSection = ({
  router,
  isQuotaEmpty,
  accountSubscriptionStatus,
}: {
  router: AppRouterInstance;
  isQuotaEmpty: boolean;
  accountSubscriptionStatus: string | undefined;
}) => {
  const handleUpdateSubscriptionClick = () => {
    router.push(`/UserSubscriptions`);
  };

  return (
    <>
      {isQuotaEmpty ? (
        <>
          <div className="bg-slate-700 bg-linear-to-r from-[#84e9e4]/1 to-purple-500/15  shadow-md md:px-4 md:py-4 px-3 py-3">
            <h3 className="cursor-default text-lg font-semibold tracking-widest text-[#84e9e4] mb-2 line-clamp-2">
              Acabaram os Giros ?
            </h3>
            <hr className="border-t border-slate-300 mb-4" />
            <div className="w-full flex space-x-2 justify-center items-center">
              {accountSubscriptionStatus != "tenantPremium" && (
                <div
                  onClick={handleUpdateSubscriptionClick}
                  className="py-2 pl-4  rounded flex flex-col w-full cursor-pointer
               bg-slate-800 hover:bg-linear-to-r 
               hover:from-[#84e9e4]/1 hover:to-purple-500/15 hover:shadow-md 
               transition-all opacity-50 hover:opacity-100 border-l-2 border-amber-500"
                >
                  <div>
                    <span className="font-bold tracking-widest text-amber-500">
                      Melhore sua Assinatura
                    </span>
                  </div>
                  <div>
                    <span className="text-xs tracking-wider text-slate-300">
                      Ao melhorar a sua assinatura, os seus Giros são
                      restaurados e as quotas expandidas.
                    </span>
                  </div>
                </div>
              )}
              <div
                className="py-2 pl-4  rounded flex flex-col w-full cursor-pointer 
                bg-slate-800 hover:bg-linear-to-r
                hover:from-[#84e9e4]/1 hover:to-purple-500/15 hover:shadow-md
               transition-all opacity-50 hover:opacity-100 border-l-2 border-[#84e9e4]"
              >
                <div>
                  <span className="font-bold tracking-widest text-[#84e9e4]">
                    Adquira PromoGiros
                  </span>
                </div>
                <div>
                  <span className="text-xs tracking-wider text-slate-300">
                    Os PromosGiros não expiram com o tempo, apenas são
                    consumidos com Giros efetivos.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <UserAreaSectionBackground>
            <h3 className="cursor-default text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
              Volta ao Jogo
            </h3>
            <hr className="border-t border-slate-300 mb-4" />
            <div className="mb-4 tracking-widest">
              <span className="text-slate-400 text-xs">
                Quota disponível, pronto para girar ?
              </span>
            </div>

            <div className="w-full">
              <button
                className="cursor-pointer text-lg  py-3 px-4 w-full drop-shadow-xl text-shadow-2xs tracking-widest
              bg-amber-500 hover:bg-yellow-200 transition
              text-[#84e9e4] rounded-xs disabled:bg-slate-400 pb-2 font-bold "
                onClick={() => router.push("/Games")}
              >
                Jogar
              </button>
            </div>
          </UserAreaSectionBackground>
        </>
      )}
    </>
  );
};
export default UserDynamicSection;
