import { InfoRow } from "../InfoRow";
import { formatDateTime } from "@/utils/formatter-utils";
import { StatusBadge } from "./components/StatusBadge";
import { TenantIdBadge } from "./components/TenantIdBadge";
import { TenantPartnerSectionProps } from "@/components/TenantAreaInterface/types";

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
      <div className="border border-slate-400 bg-slate-400  py-2">
        <span className="px-2 text-md tracking-widest font-bold line-clamp-1 text-slate-50">
          Parceiro
        </span>
      </div>
      <div className="px-1 py-3">
        <InfoRow label="Status" value={<StatusBadge status={tenantStatus} />} />
        <InfoRow
          label="Identificador"
          value={<TenantIdBadge id={tenantIdentifier} />}
        />
        <InfoRow label="Nome" value={tenant.name} />
        <InfoRow label="Email" value={tenantEmail} />
        <InfoRow label="Registrado em" value={formattedCreatedAt} />
      </div>
    </>
  );
};
export default TenantPartnerSection;
