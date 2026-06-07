import { TenantProduct } from "@/context/TenantContext/types";
import { TenantError } from "../TenantError";
import { Slots } from "@/components/Slots";
import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import TenantSlotsDedicatedRouteBackground from "@/components/TenantSlotsDedicatedRouteBackground/TenantSlotsDedicatedRouteBackground";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useGlobalQuota } from "@/context/GlobalQuotaContext/GlobalQuotaContext";
import { useAuth } from "@/context/AuthContext/AuthContext";

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
  const tenantBranding = tenant.branding;
  const primaryColor = tenantBranding?.primaryColor;
  return (
    <div className="bg-white/90 backdrop-blur shadow-md px-2 w-full h-fit ">
      <div className="bg-white/90 backdrop-blur shadow-md md:px-3 md:py-4 px-3 mb-4 ">
        {error && <TenantError error={error} />}
        {loading && <span>Loading preview...</span>}
        {!loading && !error && (
          <div className="flex flex-col ">
            <div className="border border-slate-400 bg-slate-400  py-2">
              <span className="px-2 text-md tracking-widest font-bold line-clamp-1 text-slate-50">
                Sua Experiência de Roleta
              </span>
            </div>
            <div className="  flex space-x-2   border-b   bg-slate-200 text-sm text-slate-600">
              <TenantSlotsDedicatedRouteBackground
                tenantBranding={tenantBranding}
                tenantName={tenantName}
              >
                <div className="absolute bg-slate-50 rounded p-4 flex flex-col">
                  <div>
                    <span className="text-sm">Modo Prévia</span>
                    <hr className="my-1 text-slate-400" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold">Cor Primária:</span>
                    <span
                      className="text-lg font-bold"
                      style={{ color: primaryColor }}
                    >
                      {primaryColor
                        ? ` ${primaryColor}`
                        : "Preview sem cor primária definida"}
                    </span>
                  </div>
                </div>
                <div className="-mt-10 pb-4 flex justify-center ">
                  <Slots
                    quota={null}
                    loading={loading}
                    tenantName={tenantName}
                    tenantId={undefined} // No tenantId in preview mode
                    tenantBranding={tenantBranding}
                    tenantSettings={undefined} // No tenantSettings in preview mode
                    sessionTenantId={sessionTenantId}
                    globalQuotaLoading={globalQuotaLoading}
                    authorizedFetch={authorizedFetch}
                    optimisticSpin={() => {}}
                    refresh={refresh}
                    previewMode={true} // Indicate that it's in preview mode
                  />
                </div>
              </TenantSlotsDedicatedRouteBackground>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TenantPreview;
