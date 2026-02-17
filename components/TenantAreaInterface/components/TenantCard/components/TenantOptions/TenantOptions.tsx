import { Tenant } from "@/context/TenantContext/types";
import { TenantAreaSectionBackground } from "../../../TenantAreaSectionBackground";

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex justify-between items-center text-sm">
    <span className="text-slate-500">{label}</span>
    <span className="font-medium text-slate-800 text-right">{value}</span>
  </div>
);

const TenantOptions = ({ tenant }: { tenant: Tenant }) => {
  if (!tenant) return null;

  const createdAt = tenant.createdAt as string;

  const formattedDate = new Date(createdAt).toLocaleString();

  return (
    <TenantAreaSectionBackground>
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              {tenant.name}
            </h2>
            <span className="text-xs text-slate-500">ID: {tenant.id}</span>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
              tenant.status === "active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {tenant.status}
          </span>
        </div>

        {/* General Info */}
        <div className="space-y-2">
          <h3 className="text-xs tracking-wide text-slate-400">General</h3>
          <InfoRow label="Created At" value={formattedDate} />
          <InfoRow label="Affiliate" value={tenant.affiliate || "-"} />
        </div>

        {/* Branding */}
        <div className="space-y-2">
          <h3 className="text-xs tracking-wide text-slate-400">Branding</h3>

          <InfoRow
            label="Primary Color"
            value={
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded"
                  style={{ background: tenant.branding?.primaryColor }}
                />
                {tenant.branding?.primaryColor || "-"}
              </div>
            }
          />

          <InfoRow
            label="Logo URL"
            value={
              tenant.branding?.logoUrl ? (
                <a
                  href={tenant.branding.logoUrl}
                  target="_blank"
                  className="text-indigo-600 underline text-xs"
                >
                  View Logo
                </a>
              ) : (
                "No URL provided"
              )
            }
          />
        </div>

        {/* Settings */}
        <div className="space-y-2">
          <h3 className="text-xs tracking-wide text-slate-400">Settings</h3>

          <InfoRow
            label="Cooldown (ms)"
            value={tenant.settings?.cooldownMs ?? "-"}
          />
          <InfoRow
            label="Free Spins"
            value={tenant.settings?.spinLimits?.free ?? "-"}
          />
          <InfoRow
            label="Pro Spins"
            value={tenant.settings?.spinLimits?.pro ?? "-"}
          />
        </div>
      </div>
    </TenantAreaSectionBackground>
  );
};

export default TenantOptions;
