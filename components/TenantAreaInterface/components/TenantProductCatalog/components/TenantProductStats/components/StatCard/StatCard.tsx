import { StatCardProps } from "@/components/TenantAreaInterface/types";

const StatCard = ({ title, value }: StatCardProps) => (
  <div className="cursor-default drop-shadow flex items-center justify-between text-slate-700  px-3 py-1 bg-white">
    <span className="text-xs text-slate-500 tracking-widest font-bold">
      {title}
    </span>
    <div className="text-center">
      <span className="text-md font-bold">{value}</span>
    </div>
  </div>
);
export default StatCard;
