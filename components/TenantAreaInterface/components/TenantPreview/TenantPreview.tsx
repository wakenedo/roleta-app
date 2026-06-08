import { TenantError } from "../TenantError";
import TenantPreviewContent from "./components/TenantPreviewContent/TenantPreviewContent";
import { TenantPreviewProps } from "../../types";

const TenantPreview = ({
  tenant,
  preview,
  loading,
  error,
  sessionTenantId,
  globalQuotaLoading,
  globalRefresh,
  authorizedFetch,
}: TenantPreviewProps) => {
  if (!tenant) return;

  const tenantName = tenant.name;
  const tenantBranding = tenant.branding;
  const primaryColor = tenantBranding?.primaryColor;
  return (
    <div className="bg-white/90 backdrop-blur shadow-md px-1 w-full h-fit  pb-1 mb-4">
      <div className="bg-white/90 backdrop-blur shadow-md md:px-4 md:py-4 px-3    ">
        {error && <TenantError error={error} />}
        {loading && <span>Loading preview...</span>}
        {!loading && !error && (
          <div className="flex flex-col ">
            <div className="border border-slate-400 bg-slate-400  py-2">
              <span className="px-2 text-md tracking-widest font-bold line-clamp-1 text-slate-50">
                Sua Roleta
              </span>
            </div>
            <TenantPreviewContent
              tenantBranding={tenantBranding}
              tenantName={tenantName}
              primaryColor={primaryColor}
              loading={loading}
              sessionTenantId={sessionTenantId}
              globalQuotaLoading={globalQuotaLoading}
              authorizedFetch={authorizedFetch}
              refresh={globalRefresh}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default TenantPreview;
