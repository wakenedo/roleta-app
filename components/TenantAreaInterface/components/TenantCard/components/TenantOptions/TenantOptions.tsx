import { Tenant, TenantQuota } from "@/context/TenantContext/types";
import { TenantAreaSectionBackground } from "../../../TenantAreaSectionBackground";
import { SpinQuota } from "@/context/UserContext/types";

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex justify-between items-center text-sm">
    <span className="text-xs text-slate-400">{label}</span>
    <span className="font-medium text-slate-500 text-right">{value}</span>
  </div>
);

const TenantOptions = ({
  tenant,
  quota,
}: {
  tenant: Tenant;
  quota: SpinQuota | TenantQuota;
}) => {
  if (!tenant) return null;

  const createdAt = tenant.createdAt as string;

  const formattedQuotaResetsAt =
    quota && "resetsAt" in quota && quota.resetsAt
      ? new Date(quota.resetsAt).toLocaleString()
      : "N/A";

  const formattedDate = new Date(createdAt).toLocaleString();
  console.log("TenantOptions tenantQuota", quota);

  return (
    <TenantAreaSectionBackground>
      <div className="flex flex-col gap-2">
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
        <hr className="border-t border-slate-300 my-1" />

        <div className="space-y-1">
          <h3 className="text-sm font-regular tracking-wide text-slate-600">
            General
          </h3>
          <div className="border border-slate-400 rounded-lg p-2">
            <InfoRow label="Created At" value={formattedDate} />
            <InfoRow label="Affiliate" value={tenant.affiliate || "-"} />
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm tracking-wide text-slate-600">Branding</h3>
          <div className="border border-slate-400 rounded-lg p-2">
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
        </div>

        <div className="space-y-1">
          <h3 className="text-sm tracking-wide text-slate-600">Settings</h3>
          <div className="border border-slate-400 rounded-lg p-2">
            <InfoRow
              label="Cooldown (ms)"
              value={tenant.settings?.cooldownMs ?? "-"}
            />
            <InfoRow
              label="Rodadas por usuário"
              value={(quota && "limit" in quota && quota.limit) ?? "-"}
            />
            <InfoRow
              label="Disponível novamente em "
              value={formattedQuotaResetsAt ?? "-"}
            />
          </div>
        </div>
      </div>
    </TenantAreaSectionBackground>
  );
};

export default TenantOptions;
