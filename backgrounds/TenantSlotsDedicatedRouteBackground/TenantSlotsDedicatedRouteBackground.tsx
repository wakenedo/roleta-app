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

  const createTextPattern = (text: string) => {
    const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='1010' height='90'>
  <style>
    text {
      font-family: Roboto, Arial, sans-serif;
      font-weight: 800;
      text-transform: uppercase;
    }
  </style>
    <text
      x='50%'
      y='100%'
      text-anchor='middle'
      font-size='110'
      fill='white'
      opacity='0.2'
      text-transform='uppercase'
    >
      ${text}
    </text>
  </svg>
  `;

    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  };

  const patternStyle: React.CSSProperties =
    tenantLogo || tenantName
      ? {
          backgroundImage: tenantLogo
            ? `url(${tenantLogo})`
            : createTextPattern(tenantName as string),
          backgroundRepeat: "repeat",
          backgroundSize: tenantLogo ? "280px" : "470px",
          fontFamily: "",
        }
      : {};

  console.log("TenantSlotsDedicatedRouteBackground", patternStyle);
  return (
    <div
      style={{ "--primary": primaryColor } as React.CSSProperties}
      className="relative w-full overflow-hidden bg-[var(--primary)] pt-14 scroll-smooth"
    >
      {/* Pattern Layer */}
      <div
        style={patternStyle}
        className="absolute inset-0 text-white rotate-[-20deg]  scale-410 pointer-events-none w-full h-full "
      />

      {/* Foreground */}

      <div className="relative z-10 space-y-6 items-center px-2">
        {children}
      </div>
    </div>
  );
};

export default TenantSlotsDedicatedRouteBackground;
