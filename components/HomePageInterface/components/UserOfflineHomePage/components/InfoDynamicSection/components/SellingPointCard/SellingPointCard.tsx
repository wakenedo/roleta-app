import { ReactNode } from "react";

interface SellingPointCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const SellingPointCard = ({
  icon,
  title,
  description,
}: SellingPointCardProps) => {
  return (
    <div
      className="group relative flex flex-col items-center  px-10 py-24 
      bg-gradient-to-br from-[#111827] to-[#1f2937]
      border border-white/10
      backdrop-blur-md
      shadow-[0_0_25px_rgba(132,233,228,0.1)]
      transition-all duration-300 
      hover:-translate-y-2 
      hover:shadow-[0_0_40px_rgba(132,233,228,0.35)]"
    >
      <div className="mb-4 text-4xl text-amber-500 drop-shadow-lg">{icon}</div>

      <h3 className="mb-2 text-2xl font-semibold text-slate-50 text-center">
        {title}
      </h3>

      <p className="text-base text-gray-400 text-center">{description}</p>

      {/* Neon Hover Overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 
        group-hover:opacity-100 
        bg-gradient-to-r from-[#84e9e4]/10 to-purple-500/10 
        pointer-events-none"
      />
    </div>
  );
};

export default SellingPointCard;
