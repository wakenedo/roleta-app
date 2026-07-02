import { TenantPreviewMenuProps } from "@/Interfaces/TenantAreaInterface/types";
import { InfoRow } from "../../../TenantCard/components/TenantGeneralInterface/components/InfoRow";

const TenantPreviewMenu = ({
  primaryColor,
  logoUrl,
}: TenantPreviewMenuProps) => {
  return (
    <div className="absolute  bg-slate-50 rounded p-4 flex flex-col w-md">
      <div>
        <span className="text-sm font-bold tracking-widest text-slate-500">
          Configurações
        </span>
        <hr className="my-1 text-slate-300" />
      </div>
      <div className="flex flex-col my-1 ">
        <div className="my-1">
          <span className="text-sm font-semibold tracking-widest  line-clamp-1 text-slate-500">
            Marca
          </span>
        </div>
        <InfoRow
          label="Primary Color"
          value={
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{
                  background: primaryColor,
                }}
              />
              {primaryColor || "-"}
            </div>
          }
        />
        <InfoRow
          label="Logo URL"
          value={
            logoUrl ? (
              <a
                href={logoUrl}
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
      <div className="my-1">
        <span className="text-sm font-semibold tracking-widest  line-clamp-1 text-slate-500">
          Produtos
        </span>
      </div>
    </div>
  );
};
export default TenantPreviewMenu;
