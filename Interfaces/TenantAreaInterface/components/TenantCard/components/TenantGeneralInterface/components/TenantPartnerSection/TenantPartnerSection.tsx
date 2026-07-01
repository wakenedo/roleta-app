import { TenantPartnerSectionProps } from "@/Interfaces/TenantAreaInterface/types";
import { InfoRow } from "../InfoRow";
import { StatusBadge } from "./components/StatusBadge";
import { TenantIdBadge } from "./components/TenantIdBadge";
import { TenantSectionMarker } from "@/components/TenantSectionMarker";

const TenantPartnerSection = ({
  tenantEmail,
  formattedCreatedAt,
  tenantIdentifier,
  tenantStatus,
  tenantName,
}: TenantPartnerSectionProps) => {
  return (
    <>
      <TenantSectionMarker markerTitle="Parceiro" />
      <div className="px-1 py-2 flex flex-col space-y-2">
        <InfoRow label="Status" value={<StatusBadge status={tenantStatus} />} />
        <InfoRow
          label="Identificador"
          value={<TenantIdBadge id={tenantIdentifier as string} />}
        />
        <InfoRow
          label="Nome"
          value={<span className="font-semibold">{tenantName}</span>}
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
