import ArtTitle from "@/public/PROMOBETFULL.png";
const AreaBackground = ({ children }: { children: React.ReactNode }) => {
  const patternStyle: React.CSSProperties = ArtTitle.src
    ? {
        backgroundImage: `url(${ArtTitle.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "280px",
      }
    : {};
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#0b0f1f] via-[#141b3a] to-[#1d1147] text-white  py-10">
      {/* Glow central */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-purple-600 opacity-20 blur-[180px] rounded-full" />
      </div>

      {/* Padrão Promobet */}
      <div
        style={patternStyle}
        className="absolute inset-0 opacity-2 rotate-[-25deg] scale-250 pointer-events-none mix-blend-lighten"
      />

      <div className="relative z-10 space-y-6  px-2">{children}</div>
    </div>
  );
};

export default AreaBackground;
