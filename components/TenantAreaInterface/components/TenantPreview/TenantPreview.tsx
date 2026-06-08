import { TenantProduct } from "@/context/TenantContext/types";
import { TenantError } from "../TenantError";
import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useAuth } from "@/context/AuthContext/AuthContext";
import TenantPreviewContent from "./components/TenantPreviewContent/TenantPreviewContent";

const TenantPreview = ({
  preview,
  loading,
  error,
}: {
  preview: TenantProduct[];
  loading: boolean;
  error: string | null;
}) => {
  const { tenant } = useTenant();
  const { sessionTenantId } = useTenantAuth();
  const { refresh, quota, globalQuotaLoading } = useGlobalQuota();
  const { authorizedFetch } = useAuth();

  if (!tenant) return;

  const tenantName = tenant.name;
  const tenantIdentifier = tenant.id;
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
              refresh={refresh}
              tenantIdentifier={tenantIdentifier}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default TenantPreview;
