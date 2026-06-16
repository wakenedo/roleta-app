import { InfoRow } from "../InfoRow";
import { formatDateTime } from "@/utils/formatter-utils";
import { StatusBadge } from "./components/StatusBadge";
import { TenantIdBadge } from "./components/TenantIdBadge";
import { TenantPartnerSectionProps } from "@/components/TenantAreaInterface/types";
import { TenantSectionMarker } from "@/components/TenantAreaInterface/components/TenantSectionMarker";

const TenantPartnerSection = ({
  tenant,
  tenantEmail,
  createdAt,
}: TenantPartnerSectionProps) => {
  const formattedCreatedAt = formatDateTime(createdAt);
  const tenantStatus = tenant.status;
  const tenantIdentifier = tenant.id;
  return (
    <>
      <TenantSectionMarker markerTitle="Parceiro" />
      <div className="px-1 py-2 flex flex-col space-y-2">
        <InfoRow label="Status" value={<StatusBadge status={tenantStatus} />} />
        <InfoRow
          label="Identificador"
          value={<TenantIdBadge id={tenantIdentifier} />}
        />
        <InfoRow
          label="Nome"
          value={<span className="font-semibold">{tenant.name}</span>}
        />
        <InfoRow
          label="Email"
          value={<span className="font-semibold">{tenantEmail}</span>}
        />
        <InfoRow
          label="Registrado em"
          value={<span className="font-semibold">{formattedCreatedAt}</span>}
        />
      </div>
    </>
  );
};
export default TenantPartnerSection;
