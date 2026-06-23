import { Tenant } from "@/context/TenantContext/types";

const TenantCard = ({
  tenant,
  primaryColor,
  handleTenantCardClick,
}: {
  tenant: Tenant;
  primaryColor: string;
  handleTenantCardClick: () => void;
}) => {
  return (
    <div
      className="border  rounded-xl shadow-sm p-4 flex flex-col gap-3 hover:shadow-md transition cursor-default"
      style={{ borderColor: primaryColor }}
      onClick={handleTenantCardClick}
    >
      {tenant.branding?.logoUrl && (
        <img
          src={tenant.branding.logoUrl}
          alt={tenant.name}
          className="h-16 object-contain"
        />
      )}

      <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
        {tenant.name}
      </h2>
      <span className="text-base font-bold" style={{ color: primaryColor }}>
        {tenant.subscriptionMode}
      </span>

      <div className="text-sm text-gray-500 flex flex-col gap-1">
        <span>Cooldown: {tenant.settings?.cooldownMs ?? 3000}ms</span>

        {tenant.affiliate && (
          <span className="text-xs text-indigo-600">Affiliate enabled</span>
        )}
      </div>

      <button
        className="mt-auto text-white px-4 py-2 rounded-md cursor-pointer"
        style={{ backgroundColor: primaryColor }}
      >
        Ir Agora
      </button>
    </div>
  );
};

export default TenantCard;
