import { Tenant } from "@/context/TenantContext/types";
import { useRouter } from "next/navigation";
import { SubscriptionBadge } from "../SubscriptionBadge";
import { TenantSubscription } from "../SubscriptionBadge/SubscriptionBadge";
import { GiBanana } from "react-icons/gi";

const FeaturedTenantCard = ({ tenant }: { tenant: Tenant }) => {
  const router = useRouter();

  const primaryColor = tenant.branding?.primaryColor || "#111";

  const handleClick = () => {
    router.push(`/${tenant.id}/slots`);
  };

  function resolveTenantQuota(subscription?: string): number {
    switch (subscription) {
      case "tenant":
        return 10;

      case "tenantPro":
        return 20;

      case "tenantPremium":
        return 40;

      default:
        return 10; // fallback safety
    }
  }
  const quota = resolveTenantQuota(tenant.subscriptionMode);

  return (
    <div
      className="border bg-gradient-to-br from-[#111827] to-[#1f2937]  p-8 flex flex-col gap-7  cursor-default drop-shadow-lg md:min-h-190"
      style={{ borderColor: primaryColor }}
      onClick={handleClick}
    >
      {tenant.branding?.logoUrl ? (
        <img
          src={tenant.branding.logoUrl}
          alt={tenant.name}
          className="h-80 object-contain border  rounded-full w-80 mx-auto shadow-2xl "
          style={{ borderColor: primaryColor, backgroundColor: primaryColor }}
        />
      ) : (
        <>
          <div
            className="h-80 object-contain border  rounded-full w-80 mx-auto shadow-2xl "
            style={{ borderColor: primaryColor, backgroundColor: primaryColor }}
          >
            <div className="flex  h-full  justify-center">
              <div className="flex flex-col relative justify-center my-auto text-center rotate-[-12deg]">
                <GiBanana className="h-24 w-24 mx-auto text-slate-100" />
                <span className="md:text-xl text-slate-100 font-bold">
                  Bananas !
                </span>
                <span className="md:text-4xl font-extrabold text-slate-100 drop-shadow-2xl ">
                  SEM LOGO
                </span>
              </div>
            </div>
          </div>
        </>
      )}
      <div>
        <h2 className="md:text-5xl font-bold" style={{ color: primaryColor }}>
          {tenant.name}
        </h2>

        <SubscriptionBadge
          subscription={tenant.subscriptionMode as TenantSubscription}
        />

        <div>
          <span className="text-gray-500">
            Cooldown: {tenant.settings?.cooldownMs ?? 3000}ms
          </span>
        </div>
        <div>
          {tenant.affiliate && (
            <span className="md:text-sm text-indigo-600">
              Affiliate enabled
            </span>
          )}
        </div>
      </div>

      <div className="md:text-base text-gray-500 flex flex-col gap-1">
        <div className="flex items-center ml-auto space-x-2 drop-shadow-2xl">
          <div className="mt-5">
            <span
              style={{ color: primaryColor }}
              className="md:text-4xl font-bold"
            >
              Giros
            </span>
          </div>
          <span
            style={{ color: primaryColor }}
            className="font-bold md:text-6xl"
          >
            x{quota}
          </span>
        </div>
      </div>
      <button className=" uppercase mt-auto bg-gradient-to-r from-[#84e9e4] to-amber-500 hover:from-[#44827e]  text-amber-700 px-4 py-3  cursor-pointer shadow-lg font-extrabold text-xl">
        Jogar
      </button>
    </div>
  );
};
export default FeaturedTenantCard;
