import { Tenant } from "@/context/TenantContext/types";
import { useRouter } from "next/navigation";
import { SubscriptionBadge } from "../../../FeaturedTenants/components/SubscriptionBadge";
import { TenantSubscription } from "../../../FeaturedTenants/components/SubscriptionBadge/SubscriptionBadge";

const SelectedTenantCard = ({ tenant }: { tenant: Tenant }) => {
  const router = useRouter();

  const primaryColor = tenant.branding?.primaryColor || "#111";

  const handleClick = () => {
    router.push(`/tenant/${tenant.id}`);
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
  const quota = resolveTenantQuota(tenant.subscription);

  return (
    <div
      className="h-full  border bg-gradient-to-br from-[#111827] to-[#1f2937] shadow-sm  hover:shadow-md transition cursor-default"
      style={{ borderColor: primaryColor }}
      onClick={handleClick}
    >
      <div className="px-4 h-fit flex flex-col md:gap-20 mt-5 mx-auto">
        <div>
          {tenant.branding?.logoUrl && (
            <img
              src={tenant.branding.logoUrl}
              alt={tenant.name}
              className="h-60 object-contain border rounded-full w-60 mx-auto shadow-2xl"
              style={{
                borderColor: primaryColor,
                backgroundColor: primaryColor,
              }}
            />
          )}
        </div>

        <div>
          <h2 className="text-5xl font-bold" style={{ color: primaryColor }}>
            {tenant.name}
          </h2>
          <SubscriptionBadge
            subscription={tenant.subscription as TenantSubscription}
          />
          <div>
            <span className="text-gray-500">
              Cooldown: {tenant.settings?.cooldownMs ?? 3000}ms
            </span>
          </div>
          <div>
            {tenant.affiliate && (
              <span className="text-xs text-indigo-600">Affiliate enabled</span>
            )}
          </div>
        </div>

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
        <button className=" bg-gradient-to-r from-[#84e9e4] to-amber-500 hover:from-[#44827e]  uppercase mt-auto text-amber-700 px-4 py-2  cursor-pointer shadow-lg font-extrabold text-2xl">
          Jogar
        </button>
      </div>
    </div>
  );
};
export default SelectedTenantCard;
