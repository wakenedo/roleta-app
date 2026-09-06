import { USER_SPIN_PLANS } from "@/Interfaces/HomePageInterface/utils/userHelpers";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const UserPromoGiroSection = ({
  router,
  isQuotaEmpty,
  accountSubscriptionStatus,
}: {
  accountSubscriptionStatus: string | undefined;
  router: AppRouterInstance;
  isQuotaEmpty: boolean;
}) => {
  const config =
    USER_SPIN_PLANS[accountSubscriptionStatus as keyof typeof USER_SPIN_PLANS];
  const handleAcquirePromoSpinClick = () => {
    console.log("Next Implementation");
  };
  const getTenantMultiplierLabel = (multiplier?: number) => {
    switch (multiplier) {
      case 0.5:
        return 10;
      case 1:
        return 30;
      default:
        return 0; // fallback (or null if you prefer)
    }
  };
  const handleUpdateSubscriptionClick = () => {
    router.push(`/UserSubscriptions`);
  };
  return (
    <div className="bg-slate-700 bg-linear-to-r from-[#84e9e4]/1 to-purple-500/15  shadow-md md:px-4 md:py-4 px-3 py-3">
      <div className="tracking-widest text-xs text-slate-600 ">
        <div className="pb-1">
          <div className="flex justify-between cursor-default">
            <div className="flex flex-col">
              <div>
                <span className="text-[#84e9e4] text-lg  mt-3">PromoGiros</span>
              </div>
            </div>
            <div>
              <span className="text-[#84e9e4] text-2xl font-bold">0</span>
            </div>
          </div>
          {!isQuotaEmpty && (
            <div>
              <div
                onClick={handleAcquirePromoSpinClick}
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
          )}
        </div>
        <hr className="text-slate-100 w-full px-2 my-1  " />
        <div className="py-1">
          <div className="flex justify-between cursor-default">
            <div className="flex flex-col">
              <div>
                <span className="text-amber-500 text-lg  mt-3 ">Extras</span>
              </div>
            </div>
            <div>
              <span className="text-amber-500 text-2xl font-bold">
                {getTenantMultiplierLabel(config?.tenantMultiplier)}
              </span>
            </div>
          </div>
          {!isQuotaEmpty && accountSubscriptionStatus != "tenantPremium" && (
            <div>
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
                    Ao melhorar a sua assinatura, os seus Giros são restaurados
                    e as quotas expandidas.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default UserPromoGiroSection;
