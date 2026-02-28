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
    <div className="flex flex-col items-center group relative rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-4 text-4xl">{icon}</div>

      <h3 className="mb-2 text-lg font-semibold">{title}</h3>

      <p className="text-sm text-gray-600">{description}</p>

      {/* subtle glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 pointer-events-none" />
    </div>
  );
};

export default SellingPointCard;
