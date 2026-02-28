import ArtTitle from "@/public/PROMOBETFULL.png";

const userAreaBackground = ({ children }: { children: React.ReactNode }) => {
  const patternStyle: React.CSSProperties = ArtTitle.src
    ? {
        backgroundImage: `url(${ArtTitle.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "300px",
      }
    : {};

  return (
    <div
      style={{ "--primary": "#84e9e4" } as React.CSSProperties}
      className="relative bg-[var(--primary)] w-full min-h-screen overflow-hidden"
    >
      <div
        style={patternStyle}
        className="absolute inset-0 mx-4 opacity-20 rotate-[-25deg] scale-200 pointer-events-none  mix-blend-soft-light w-full h-full"
      />

      {children}
    </div>
  );
};
export default userAreaBackground;
