import { Tenant } from "@/context/TenantContext/types";
import { InfoRow } from "../InfoRow";

const TenantPartnerSection = ({
  tenant,
  tenantEmail,
  createdAt,
}: {
  tenant: Tenant;
  tenantEmail: string | null | undefined;
  createdAt: string;
}) => {
  return (
    <>
      <div className="border border-slate-400 bg-slate-400  py-2">
        <span className="px-2 text-md tracking-widest font-bold line-clamp-1 text-slate-50">
          Parceiro
        </span>
      </div>
      <div className="px-1 py-3">
        <InfoRow label="Status" value={tenant.status} />
        <InfoRow label="Nome" value={tenant.name} />
        <InfoRow label="Identificador" value={tenant.id} />
        <InfoRow label="Email" value={tenantEmail} />
        <InfoRow label="Criado em" value={createdAt} />
      </div>
    </>
  );
};
export default TenantPartnerSection;
