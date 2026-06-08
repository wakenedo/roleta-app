import { Slots } from "@/components/Slots";
import { TenantSlotsDedicatedRouteBackground } from "@/components/TenantSlotsDedicatedRouteBackground";
import { TenantPreviewMenu } from "../TenantPreviewMenu";
import { TenantPreviewContentProps } from "@/components/TenantAreaInterface/types";

const TenantPreviewContent = ({
  tenantBranding,
  tenantName,
  primaryColor,
  loading,
  sessionTenantId,
  globalQuotaLoading,
  authorizedFetch,
  refresh,
  logoUrl,
}: TenantPreviewContentProps) => {
  return (
    <div className="  flex space-x-2 bg-slate-200 text-sm text-slate-600">
      <TenantSlotsDedicatedRouteBackground
        tenantBranding={tenantBranding}
        tenantName={tenantName}
      >
        <TenantPreviewMenu primaryColor={primaryColor} logoUrl={logoUrl} />
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
  );
};
export default TenantPreviewContent;
