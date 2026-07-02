import { Tenant } from "@/context/TenantContext/types";
import { InfoRow } from "../InfoRow";

// Remove this component: Branding is being dealt on preview level
const TenantBrandingSection = ({ tenant }: { tenant: Tenant }) => {
  return (
    <>
      <div className="border border-slate-400  bg-slate-400 py-2">
        <span className="px-2 text-md tracking-widest font-bold line-clamp-1 text-slate-50">
          Configurações de Marca
        </span>
      </div>
      <div className="px-1 py-3">
        <InfoRow
          label="Primary Color"
          value={
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{
                  background: tenant.branding?.primaryColor,
                }}
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
    </>
  );
};
export default TenantBrandingSection;
