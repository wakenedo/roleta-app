import { TenantBranding } from "@/context/TenantContext/types";
import { SlotsTitleGradient } from "./components/SlotsTitleGradient";

const SlotsTitle = ({
  tenantName,
  tenantBranding,
}: {
  tenantName?: string;
  tenantBranding?: TenantBranding;
}) => {
  const primaryColor =
    tenantBranding && (tenantBranding.primaryColor as string);
  return (
    <>
      {tenantName && (
        <div
          style={{ "--primary": primaryColor } as React.CSSProperties}
          className={`ml-5 md:text-4xl font-extrabold text-[var(--primary)] [-webkit-text-stroke:1px_#fdfd] drop-shadow-[1px_2px_5px_rgba(255,215,0,0.8)]`}
        >
          {tenantName}
        </div>
      )}
      <SlotsTitleGradient />
    </>
  );
};
export default SlotsTitle;
