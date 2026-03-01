import { TenantBranding } from "@/context/TenantContext/types";

const TenantSlotsDedicatedRouteBackground = ({
  children,
  tenantName,
  tenantBranding,
}: {
  children: React.ReactNode;
  tenantName?: string;
  tenantBranding?: TenantBranding;
}) => {
  const primaryColor = tenantBranding?.primaryColor;
  const tenantLogo = tenantBranding?.logoUrl;

  const patternStyle: React.CSSProperties = tenantLogo
    ? {
        backgroundImage: `url(${tenantLogo})`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px",
      }
    : {};

  return (
    <div
      style={{ "--primary": primaryColor } as React.CSSProperties}
      className="relative bg-[var(--primary)] w-full min-h-screen overflow-hidden"
    >
      {/* Pattern Layer */}
      <div
        style={patternStyle}
        className="absolute inset-0  opacity-10 rotate-[-25deg] scale-250 pointer-events-none  mix-blend-soft-lighten w-full h-full"
      >
        {!tenantLogo && tenantName && (
          <div className="w-full h-full flex flex-wrap content-center text-6xl font-extrabold text-white opacity-50">
            {Array(300).fill(tenantName)}
          </div>
        )}
      </div>

      {/* Foreground */}
      <div className="relative z-10 flex flex-col items-center p-4">
        {children}
      </div>
    </div>
  );
};

export default TenantSlotsDedicatedRouteBackground;
