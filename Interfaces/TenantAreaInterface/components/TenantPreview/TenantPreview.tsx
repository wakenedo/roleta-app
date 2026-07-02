import { TenantError } from "../TenantError";
import { TenantPreviewProps } from "../../types";

import { TenantPreviewContent } from "./components/TenantPreviewContent";
import { TenantSectionMarker } from "@/components/TenantSectionMarker";

const TenantPreview = ({
  preview,
  loading,
  error,
  sessionTenantId,
  globalQuotaLoading,
  globalRefresh,
  authorizedFetch,
  tenantName,
  tenantBranding,
}: TenantPreviewProps) => {
  const primaryColor = tenantBranding?.primaryColor;
  return (
    <div className="bg-white/90 backdrop-blur shadow-md px-1 w-full h-fit  pb-1">
      <div className="bg-white/90 backdrop-blur shadow-md md:px-4 md:py-4 px-3    ">
        {error && <TenantError error={error} />}
        {loading && <span>Loading preview...</span>}
        {!loading && !error && (
          <div className="flex flex-col ">
            <TenantSectionMarker markerTitle="Sua Roleta" />
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
